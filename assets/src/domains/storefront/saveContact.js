let actions = require('../../actions-soap')
let pick = require('ramda/src/pick')
let merge = require('ramda/src/merge')

module.exports = function(context, callback) {
  let config = merge(
    pick(['email', 'g-recaptcha-response'], context.request.body || {}),
    {
      external: true,
      captchaRequired: true
    }
  )

  actions
    .saveContact(context, config)
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
