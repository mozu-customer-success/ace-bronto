let mapObjIndexed = require('ramda/src/mapObjIndexed')
let pipe = require('ramda/src/pipe')
let compose = require('ramda/src/compose')
let merge = require('ramda/src/merge')
let mergeRight = require('ramda/src/mergeRight')
let mergeAll = require('ramda/src/mergeAll')
let pathOr = require('ramda/src/pathOr')
let lensPath = require('ramda/src/lensPath')
let pick = require('ramda/src/pick')
let curry = require('ramda/src/curry')
let head = require('ramda/src/head')
let evolve = require('ramda/src/evolve')
let identity = require('ramda/src/identity')
let view = require('ramda/src/view')
let empty = require('ramda/src/empty')
let assoc = require('ramda/src/assoc')
let parseXml = require('xml2js').parseString
let util = require('./util')
let needle = require('needle')
require('./patchFs')
let soap = require('soap')
let cacheManger = require('./cacheManager')

let { type, nodeBackToPromise, log } = util

let regex = {
  result: /<return>.*<\/return>/
}

let listIdMap = {
  test: '0bc503ec00000000000000000000001ef8f4'
}

let parseXmlAsync = util.nodeBackToPromise(parseXml)

let parseXmlResponse = xmlResponse => {
  return parseXmlAsync(head(xmlResponse.match(regex.result) || []) || '').then(
    parsed => {
      return lens(null, 'return', parsed) || Promise.reject('invalid xml')
    }
  )
}

let lens = curry((def, properties, obj) => {
  return util.log(
    view(
      lensPath(
        'string' === typeof properties ? properties.split('.') : properties
      ),
      obj
    ) || def
  )
})

let defaultLens = lens({ isError: true })
let lenses = {
  defaultReturn: defaultLens('0.return.results.0')
}

const defaults = {
  messageName: 'example',
  messageSubject: 'greetings',
  messageContent: 'hi mom',
  messageType: 'transactional',
  messageFromEmail: 'kevin.brown@kibocommerce.com',
  messageFromName: 'Kevin Brown'
}

let limitExposure = curry((config, response) => {
  if (!config.external) return response
  return evolve(
    {
      id: empty
    },
    response
  )
})

let verifyRecaptcha = config => {
  let response = config['g-recaptcha-response']
  let secret = config.recaptchaSecret
  if (!response)
    return Promise.reject({
      message: 'No captcha response'
    })
  if (!secret)
    return Promise.reject({
      message: 'No recaptcha secret'
    })
  return needle(
    'post',
    `https://www.google.com/recaptcha/api/siteverify?response=${response}&secret=${secret}`,
    {},
    { json: true }
  ).then(verifyResponse => {
    console.log('recaptcha response', verifyResponse)
    if (!verifyResponse.success) return Promise.reject(verifyResponse)
    return config
  })
}

/**
 * these actions are run after the work to set up the soap client and authenticate
 * and verify the recaptcha are successful. you can indicate whether to test for recaptcha
 * by passing captchaRequired (can be seen in src/domains/storefront/saveContact) external
 * should also be true for any request that is coming from an external source.
 * the response to calling an action should be converted to an object that represents
 * the xml that is why below you will see 0.return.results etc because that is the xml structure.
 * All that should be needed to use the bronto client is to add an action that calls
 * the appropriate bronto soap method and grab the result from the response.
 */

let actions = {
  saveContact: config => {
    return config.client
      .addOrUpdateContactsAsync({
        contacts: [
          {
            email: config.body.email,
            listIds: [config.body.listId],
            type: 'transactional'
          }
        ]
      })
      .then(
        pipe(
          lenses.defaultReturn,
          limitExposure(config)
        )
      )
  },
  readLists: config => {
    config.client
      .readListsAsync({
        pageNumber: 1,
        filter: ''
      })
      .then(lenses.defaultReturn)
  },
  updateMessages: config => {
    let id = config.brontoMessage && config.brontoMessage.id
    return config.client
      .updateMessagesAsync({
        messages: [
          {
            id,
            name: config.body.name || defaults.messageName,
            content: {
              type: 'html',
              subject: config.body.subject || defaults.messageSubject,
              content: config.body.message || defaults.messageContent
            }
          }
        ]
      })
      .then(lenses.defaultReturn)
      .then(limitExposure(config))
  },
  addOrUpdateMessages: config => {
    let putItHere = util.promiseConfig(config)
    return config.client
      .addMessagesAsync({
        messages: config.body.messages || [
          {
            name: config.body.name || defaults.messageName,
            content: {
              type: 'html',
              subject: config.body.subject || defaults.messageSubject,
              content: config.body.message || defaults.messageContent
            }
          }
        ]
      })
      .then(lenses.defaultReturn)
      .then(response => {
        if (response.isError && response.errorCode === 615) {
          return actions
            .readMessages(assoc('external', false, config))
            .then(putItHere('brontoMessage'))
            .then(actions.updateMessages.bind(actions, config))
        }
        return putItHere('brontoMessage', response)
      })
      .then(limitExposure(config))
  },
  readMessages: config => {
    if (config.brontoMessage) return config.brontoMessage
    return config.client
      .readMessagesAsync(
        log({
          pageNumber: config.body.pageNumber || 1,
          pageSize: config.body.pageSize || 10,
          includeContent: config.body.includeContent || false,
          filter: type.isObject(config.body.filter)
            ? config.body.filter
            : {
                name: {
                  operator: 'EqualTo',
                  value: config.body.name || defaults.messageName
                }
              }
        })
      )
      .then(defaultLens('0.return.0'))
      .then(limitExposure(config))
  },
  sendMessage: config => {
    let putItHere = util.promiseConfig(config)
    return actions
      .saveContact(config)
      .then(putItHere('brontoContact'))
      .then(actions.addOrUpdateMessages.bind(actions, config))
      .then(actions.readMessages.bind(actions, config))
      .then(putItHere('brontoMessage'))
      .then(config => {
        return config.client.addDeliveriesAsync({
          deliveries: [
            mergeAll([
              pick(['fromEmail', 'fromName', 'replyEmail'], config),
              {
                messageId: config.brontoMessage.id,
                type: defaults.messageType,
                fromEmail: defaults.messageFromEmail,
                replyEmail: defaults.messageFromEmail,
                fromName: defaults.messageFromName,
                recipients: [
                  {
                    id: config.brontoContact.id,
                    type: 'contact'
                  }
                ]
              }
            ])
          ]
        })
      })
      .then(lenses.defaultReturn)
      .then(limitExposure(config))
  }
}

module.exports = mapObjIndexed(
  (action, actionName) => (context, config = {}) => {
    // let url = path('configuration.url'.split('.'), context)
    // let token = path('configuration.token'.split('.'), context)
    // let listId = path('configuration.listId'.split('.'), context)
    // let key = path('configuration.key'.split('.'), context)
    // let recaptchaSecret = path(
    //   'configuration.recaptchaSecret'.split('.'),
    //   context
    // )
    util.log(actionName)
    let putItHere = util.promiseConfig(
      mergeAll([context.configuration, config, { actionName }])
    )
    config = putItHere.value

    if (!config.url)
      return Promise.reject({
        message: 'url missing in config'
      })
    if (!config.token)
      return Promise.reject({
        message: 'token missing in config'
      })

    if (config.external && config.keyRequired && (!key || key !== config.key))
      return Promise.reject({
        message: 'key missing in body'
      })

    return (
      (config.captchaRequired && config.external
        ? config['g-recaptcha-response']
          ? verifyRecaptcha(
              merge(config, {
                recaptchaSecret
              })
            )
          : Promise.reject({
              message: 'captcha response missing'
            })
        : Promise.resolve()
      )
        .then(() => {
          // return soap.createClientAsync(url + '?wsdl', {
          return soap.createClientAsync('./bronto-soap-definition', {
            envelopeKey: 'SOAP_ENV'
          })
        })
        .then(putItHere('client'))
        .then(reference => {
          // for (let key in reference.client) {
          //   if (type.isFunction(reference.client[key])) {
          //     let method = reference.client[key]
          //     reference.client[key] = (...args) => {
          //       console.log(args)
          //       return method.apply(reference.client, args)
          //     }
          //   }
          // }
          // client = reference.client
          if (reference.sessionId) return reference
          // The session will end if there is no transaction for 20 minutes.
          return util
            .getFromCache(
              context,
              'brontoSessionId4',
              {},
              20,
              true,
              function() {
                log('refreshing session')
                return util
                  .nodeBackToPromise(reference.client.login)
                  .call(reference.client, {
                    apiToken: reference.token
                  })
                  .then(parseXmlResponse)
              }
            )
            .then(putItHere('sessionId'))
            .then(reference => {
              console.log('sessionId', reference.sessionId)

              reference.client.addSoapHeader({
                'tns:sessionHeader': {
                  sessionId: reference.sessionId
                }
              })
              return reference
            })
        })
        // .then(putItHere(null))
        // .then(reference => {
        //   return actions.readLists(merge(config, reference))
        // })
        .then(action.bind(actions, config))
        .then(reference => {
          if (reference.client) {
            util.print(reference.client.lastRequest)
            util.print(reference.client.lastRequestHeaders)
          }
          return reference.result
        })
        .catch(err => {
          util.print('err', err)
          if (config.client) {
            util.print(config.client.lastRequest)
            util.print(config.client.lastRequestHeaders)
          }
          return Promise.reject(err)
        })
    )
  },
  actions
)
