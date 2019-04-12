let tap = require('ramda/src/tap')

let print = function(...args) {
  args.forEach(function(arg) {
    console.log(typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg)
  })
  return args[0]
}

const _curryN = (len, fn) => (...args) => {
  if (args.length >= len) return fn(...args)
  if (!args.length) return fn
  return _curryN(len, fn).bind(null, ...args)
}

const curry = fn => (...args) => {
  return args.length === fn.length
    ? fn(...args)
    : _curryN(fn.length, fn)(...args)
}

const curryN = curry(_curryN)

const noop = () => {}

function promiseConfig(config = {}) {
  let configurable = curry((key, value) => {
    if (key && value) config[key] = value
    return config
  })
  configurable.value = config
  return configurable
}

function nodeBackToPromise(fn) {
  return (...args) => {
    return new Promise((res, rej) => {
      fn.apply(this, [
        ...args,
        function(err, response, body) {
          if (err) return rej(err)
          return res(body || response)
        }
      ])
    })
  }
}

const type = [
  'Object',
  'Null',
  'Undefined',
  'Array',
  'Number',
  'String',
  'Function',
  'Boolean'
].reduce(
  (a, t) => {
    a[`is${t}`] = v => a(v) === t
    return a
  },
  val => {
    return val === null
      ? 'Null'
      : val === undefined
      ? 'Undefined'
      : Object.prototype.toString.call(val).slice(8, -1)
  }
)

const mixin = curryN(2, (proto, ...sources) => {
  return Object.assign(Object.create(proto), ...sources)
})

const testContext = mixin({
  response: {
    status: 200,
    body: '',
    end: noop
  },
  cache: {
    getOrCreate: (() => {
      let cache
      return () => {
        cache =
          cache ||
          mixin(
            {
              get: function(key, cb) {
                try {
                  let value = this[key] || null
                  cb(null, value)
                } catch (e) {
                  cb(e, null)
                }
              },
              set: function(key, value, ttl = 5, cb = noop) {
                this[key] = value
                setTimeout(() => {
                  if (key in this) delete this[key]
                }, ttl * 60 * 1000)
                cb(null, 'i put it in the thing')
              }
            },
            {}
          )
        return cache
      }
    })()
  }
})

function getFromCache(
  context,
  key,
  cacheOpts,
  ttl,
  isValuePrimitive,
  onNullAddToCacheDelegate
) {
  let cachedTTL = ttl || 10

  let cacheDefaults = {
    type: 'distributed',
    scope: 'tenant',
    level: 'shared'
  }
  cacheOpts = Object.assign(cacheDefaults, cacheOpts ? cacheOpts : {})

  return new Promise(function(resolve, reject) {
    try {
      cache = context.cache.getOrCreate(cacheOpts)
      console.error(key)
      cache.get(key, (err2, cachedValue) => {
        console.log(cachedValue)
        if (cachedValue != null) {
          if (Buffer.isBuffer(cachedValue))
            cachedValue = JSON.parse(cachedValue)

          return resolve(
            isValuePrimitive ? cachedValue : JSON.parse(cachedValue)
          )
        }
        if (err2 || (cachedValue == null && !onNullAddToCacheDelegate))
          return reject(
            err2 ? err2 : 'not found in cache / no delegate provided'
          )
        if (onNullAddToCacheDelegate)
          onNullAddToCacheDelegate()
            .then(result => {
              console.log('result', result)
              cache.set(
                key,
                typeof result === 'object' ? JSON.stringify(result) : result,
                cachedTTL,
                (err, result) => {
                  console.log('set cache key callback', err)
                }
              )
              return resolve(result)
            })
            .catch(reject)
      })
    } catch (error) {
      return reject(error)
    }
  })
}

module.exports = {
  log: (...a) => {
    console.log(a)
    return a[0]
  },
  testContext,
  print,
  promiseConfig,
  nodeBackToPromise,
  type,
  getFromCache
}
