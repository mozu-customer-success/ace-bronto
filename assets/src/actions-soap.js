let mapObjIndexed = require('ramda/src/mapObjIndexed')
let pipe = require('ramda/src/pipe')
let merge = require('ramda/src/merge')
let pathOr = require('ramda/src/pathOr')
let path = require('ramda/src/path')
let values = require('ramda/src/values')
let head = require('ramda/src/head')
let evolve = require('ramda/src/evolve')
let prop = require('ramda/src/prop')
let empty = require('ramda/src/empty')
let identity = require('ramda/src/identity')
let omit = require('ramda/src/omit')
let request = require('request')
let parseXml = require('xml2js').parseString
let util = require('./util')
require('./patchFs')
let soap = require('soap')


/**
 *{
   results: [{
     id: ['093ff30b-2a6f-4495-b724-5a3da0c4a9f7'],
     isNew: ['true'],
     isError: ['false'],
     errorCode: ['0']
   }]
 }
 */

let parseXmlResponse = {
  saveContact: pipe(
    prop('results'),
    head,
    evolve({
      isNew: pipe(
        head,
        x => x === 'true'
      ),
      isError: pipe(
        head,
        x => x === 'true'
      ),
      errorString: head,
      id: empty
    })
  )
}


let getResponseFromParsedXml = actionName => pipe(
  pathOr({}, 'soap:Envelope.soap:Body.0'.split('.')),
  values,
  head,
  pathOr({}, '0.return.0'.split('.')),
  actionName in parseXmlResponse ?
  value => parseXmlResponse[actionName](value) :
  identity
)

parseXmlAsync = actionName => xml => util.nodeBackToPromise(parseXml)(xml).then(getResponseFromParsedXml(actionName))

let listIdMap = {
  test: '0bc503ec00000000000000000000001ef8f4'
}


let promiseRequest = util.nodeBackToPromise(request)


let standardRequest = ({
    url,
    headers,
    method = 'post',
    xml,
    ...config
  }) =>
  promiseRequest({
    method,
    url,
    headers,
    body: xml
  })
  .then(parseXmlAsync)
  .then(getResponseFromParsedXml(config.actionName))

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
  return promiseRequest({
    method: 'post',
    url: `https://www.google.com/recaptcha/api/siteverify?response=${response}&secret=${secret}`,
    json: true
  }).then(verifyResponse => {
    console.log('recaptcha response', verifyResponse)
    if (!verifyResponse.success) return Promise.reject(verifyResponse)
    return config
  })
}

let actions = {
  saveContact: config => (
    config.client.addOrUpdateContactsAsync({
      contacts: [{
        email: config.email,
        listIds: [config.listId]
      }]
    }).then(pipe(
      pathOr({
        isError: false,
        isNew: true
      }, '0.return.results.0'.split('.')),
      evolve({
        id: empty
      })
    ))
  ),
  readLists: config => (
    config.client.readListsAsync({
      pageNumber: 1,
      filter: ''
    }).then(util.print)
  )
}

module.exports = mapObjIndexed(
  (action, actionName) => (context, config = {}) => {
    let url = path('configuration.url'.split('.'), context)
    let token = path('configuration.token'.split('.'), context)
    let listId = path('configuration.listId'.split('.'), context)
    let key = path('configuration.key'.split('.'), context)
    let recaptchaSecret = path(
      'configuration.recaptchaSecret'.split('.'),
      context
    )
    let putItHere = util.promiseConfig({
      url,
      token,
      listId,
      recaptchaSecret,
      actionName
    })

    if (!url)
      return Promise.reject({
        message: 'url missing in config'
      })
    if (!token)
      return Promise.reject({
        message: 'token missing in config'
      })

    if (config.external && config.keyRequired && (!key || key !== config.key))
      return Promise.reject({
        message: 'key missing in body'
      })


    let client

    return (
        config.captchaRequired && config.external ?
        (
          config['g-recaptcha-response'] ?
          verifyRecaptcha(merge(config, {
            recaptchaSecret
          })) :
          Promise.reject({
            message: 'captcha response missing'
          })
        ) :
        Promise.resolve()
      )
      .then(() => {
        return soap.createClientAsync(url + '?wsdl', {
          envelopeKey: 'SOAP_ENV'
        })
      })
      .then(putItHere('client'))
      .then(reference => {
        client = reference.client
        util.print(Object.keys(client))
        return util.nodeBackToPromise(reference.client.login).call(reference.client, {
          apiToken: token
        })
      })
      .then(parseXmlAsync())
      .then(putItHere('sessionId'))
      .then(reference => {
        reference.client.addSoapHeader({
          'tns:sessionHeader': {
            sessionId: reference.sessionId
          }
        })
      })
      .then(putItHere(null))
      .then(reference => {
        return actions.readLists(merge(config, reference))
      })
      .then(putItHere(null))
      .then(reference => action(merge(config, reference)))
      .then(putItHere('result'))
      .then(reference => {
        util.print(reference.client.lastRequest)
        util.print(reference.client.lastRequestHeaders)
        return reference.result
      })
      .catch(err => {
        util.print(client.lastRequest)
        util.print(client.lastRequestHeaders)
        return Promise.reject(err)
      })
  },
  actions
)
