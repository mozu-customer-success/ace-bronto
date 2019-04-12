let actions = require('../../actions-soap')
let mergeRight = require('ramda/src/mergeRight')

module.exports = function(context, callback) {
  let body = context.request.body
  body.listId = '0bc503ec00000000000000000000001ef8f4'
  body.name = 'wishlistEmail'
  body.subject = 'Check out these great products!'
  body.email = body.recipient
  let config = mergeRight(
    { body },
    {
      external: true
    }
  )

  actions
    .sendMessage(context, config)
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
}
