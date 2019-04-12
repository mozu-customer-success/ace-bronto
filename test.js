let actions = require('./assets/src/actions-soap')
let mergeRight = require('ramda/src/mergeRight')
let util = require('./assets/src/util')
let context = util.testContext({
  applicationKey: 'AceH.bronto_mailer.1.0.0.Release',
  functionId: 'sendMessage',
  enabled: true,
  configuration: {},
  timeoutMilliseconds: 10000,
  request: {
    body: {
      name: 'wishlistEmail',
      email: 'kevinbrown5124@gmail.com',
      listId: '0bc503ec00000000000000000000001ef8f4',
      subject: 'test',
      message: 'hello'
    }
  }
})
let body = context.request.body
let config = mergeRight(
  { body },
  {
    external: true
  }
)
let callback = console.log

actions
  .sendMessage(context, config)
  .then(actions.sendMessage.bind(actions, context, config))
  .then((res = { message: 'success' }) => {
    if (res && res.isError) return Promise.reject(res)
    console.log('res', res)
    context.response.status = 200
    context.response.body = res
    context.response.end()
    callback()
  })
  .catch((err = { message: 'unexpected error' }) => {
    console.log('err', err)
    context.response.status = 500
    context.response.body = err
    context.response.end()
    callback()
  })
