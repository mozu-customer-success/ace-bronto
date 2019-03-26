// let mapObjIndexed = require('ramda/src/mapObjIndexed')
// let pipe = require('ramda/src/pipe')
// let merge = require('ramda/src/merge')
// let pathOr = require('ramda/src/pathOr')
// let path = require('ramda/src/path')
// let values = require('ramda/src/values')
// let head = require('ramda/src/head')
// let evolve = require('ramda/src/evolve')
// let prop = require('ramda/src/prop')
// let empty = require('ramda/src/empty')
// let identity = require('ramda/src/identity')
// let request = require('request')
// let parseXml = require('xml2js').parseString
// let util = require('./util')
// let soap = require('soap')

// let parseXmlPromise = xml =>
//   new Promise((res, rej) => {
//     parseXml(xml, (err, result) => {
//       if (err) return rej(err)
//       res(result)
//     })
//   })

// let listIdMap = {
//   test: '0bc503ec00000000000000000000001ef8f4'
// }

// let defaultHeaders = xmlLength => ({
//   Connection: 'Keep-Alive',
//   'User-Agent': 'PHP-SOAP/7.2.8',
//   'Content-Type': 'text/xml; charset=utf-8',
//   SoapAction: '""',
//   'Content-Length': xmlLength
// })

// let xmlTemplates = {
//   saveContact: args => `<?xml version="1.0" encoding="UTF-8"?>
//     <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://api.bronto.com/v4">
//       <SOAP-ENV:Header>
//           <ns1:sessionHeader>
//             <sessionId>${args.sessionId}</sessionId>
//           </ns1:sessionHeader>
//       </SOAP-ENV:Header>
//       <SOAP-ENV:Body>
//           <ns1:addContacts>
//             <contacts>
//                 <email>${args.email}</email>
//                 <listIds>${listIdMap.test}</listIds>
//             </contacts>
//           </ns1:addContacts>
//       </SOAP-ENV:Body>
//     </SOAP-ENV:Envelope>`,
//   login: ({
//       token
//     }) =>
//     `<?xml version="1.0" encoding="UTF-8"?>
//     <SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://api.bronto.com/v4">
//       <SOAP-ENV:Body>
//           <ns1:login>
//             <apiToken>${token}</apiToken>
//           </ns1:login>
//       </SOAP-ENV:Body>
//     </SOAP-ENV:Envelope>`
// }
// /**
//  *{
//    results: [{
//      id: ['093ff30b-2a6f-4495-b724-5a3da0c4a9f7'],
//      isNew: ['true'],
//      isError: ['false'],
//      errorCode: ['0']
//    }]
//  }
//  */
// let parseXmlResponse = {
//   saveContact: pipe(
//     prop('results'),
//     head,
//     evolve({
//       isNew: pipe(
//         head,
//         x => x === 'true'
//       ),
//       isError: pipe(
//         head,
//         x => x === 'true'
//       ),
//       errorString: head,
//       id: empty
//     })
//   )
// }

// let promiseRequest = options => {
//   console.log('request options', options)
//   return new Promise((res, rej) => {
//     request(options, (err, response, body) => {
//       if (err) return rej(err)
//       res(body)
//     })
//   })
// }

// let standardRequest = ({
//     url,
//     headers,
//     method = 'post',
//     xml,
//     ...config
//   }) =>
//   promiseRequest({
//     method,
//     url,
//     headers,
//     body: xml
//   })
//   .then(util.print)
//   .then(parseXmlPromise)
//   .then(
//     pipe(
//       util.print,
//       pathOr({}, 'soap:Envelope.soap:Body.0'.split('.')),
//       values,
//       head,
//       pathOr({}, '0.return.0'.split('.')),
//       config.actionName in parseXmlResponse ?
//       value => parseXmlResponse[config.actionName](value) :
//       identity
//     )
//   )

// let verifyRecaptcha = config => {
//   let response = config['g-recaptcha-response']
//   let secret = config.recaptchaSecret
//   console.log('config', config)
//   if (!response)
//     return Promise.reject({
//       message: 'No captcha response'
//     })
//   if (!secret)
//     return Promise.reject({
//       message: 'No recaptcha secret'
//     })
//   return promiseRequest({
//     method: 'post',
//     url: `https://www.google.com/recaptcha/api/siteverify?response=${response}&secret=${secret}`,
//     json: true
//   }).then(verifyResponse => {
//     if (!verifyResponse.success) return Promise.reject(verifyResponse)
//     return config
//   })
// }

// let actions = {
//   saveContact: config => verifyRecaptcha(config).then(standardRequest)
// }

// module.exports = mapObjIndexed(
//   (action, actionName) => (context, config = {}) => {
//     let url = path('configuration.url'.split('.'), context)
//     let token = path('configuration.token'.split('.'), context)
//     let listId = path('configuration.listId'.split('.'), context)
//     let recaptchaSecret = path(
//       'configuration.recaptchaSecret'.split('.'),
//       context
//     )
//     let xmlTemplate = config.xmlTemplate || xmlTemplates[actionName]

//     if (!url)
//       return Promise.reject({
//         message: 'url missing in config'
//       })
//     if (!token)
//       return Promise.reject({
//         message: 'token missing in config'
//       })
//     if (!xmlTemplate)
//       return Promise.reject({
//         message: 'no xml template found for given action'
//       })

//     let loginXml = xmlTemplates.login({
//       token
//     })

//     return standardRequest({
//       url,
//       method: 'post',
//       xml: loginXml,
//       actionName: 'login',
//       headers: defaultHeaders(loginXml.length)
//     }).then(sessionId => {
//       config = merge({
//           sessionId,
//           url,
//           token,
//           xmlTemplate,
//           actionName,
//           recaptchaSecret,
//           listId
//         },
//         config
//       )

//       if (!config.xml) config.xml = xmlTemplate(config)

//       console.log('xml', config.xml)

//       config.headers = merge(
//         defaultHeaders(config.xml.length),
//         config.headers || {}
//       )

//       return action(config)
//     })
//   },
//   actions
// )
