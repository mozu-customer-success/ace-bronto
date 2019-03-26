let tap = require('ramda/src/tap')
let circularJson = require('circular-json')
let curry = require('lodash/curry')

let print = function (...args) {
  args.forEach(function (arg) {
    console.log(typeof arg === 'object' ? circularJson.stringify(arg, null, 2) : arg);
  });
  return args[0]
}

function promiseConfig(config = {}) {
  return curry((key, value) => {
    if (key && value) config[key] = value;
    return config;
  })
}

function nodeBackToPromise(fn) {
  return (...args) => {
    return new Promise((res, rej) => {
      fn.apply(this, [...args, function (err, response, body) {
        if (err) return rej(err)
        return res(body || response)
      }])
    })
  }
}

module.exports = {
  print,
  promiseConfig,
  nodeBackToPromise
}
