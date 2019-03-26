let actions = require('../../actions-soap')
let pick = require('ramda/src/pick')
let circularJson = require('circular-json')
let merge = require('ramda/src/merge')

module.exports = function (context, callback) {
  let config = merge(pick(
    ['key'],
    context.request.body || {}
  ), {
    external: true,
    keyRequired: true
  })

  actions
    .saveContact(context, config)
    .then((res = {
      message: 'success'
    }) => {
      if (res && res.isError) return Promise.reject(res)
      console.log('res', res)
      context.response.status = 200
      context.response.body = circularJson.stringify(res)
      context.response.end()
      callback()
    })
    .catch((err = {
      message: 'unexpected error'
    }) => {
      console.log('err', err)
      context.response.status = 500
      context.response.body = circularJson.stringify(err)
      context.response.end()
      callback()
    })
}
