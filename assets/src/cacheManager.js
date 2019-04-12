// key:string
// value:object
// ttl: integer in minutes (defaults to 5 )
// setCallback : function(error, success)
// getCallback : function(error, cacheResult)

function getCacheOptions(context, cacheOptions) {
  // type: inMemory | distributed
  // scope: tenant | masterCatalog | catalog | site
  // level: shared | app | function

  let cacheDefaults = {
    type: 'distributed',
    scope: 'tenant',
    level: 'shared'
  }
  return Object.assign(
    cacheDefaults,
    context.configuration.cacheSettings || {},
    cacheOptions || {}
  )
}

module.exports = {
  getValue: (context, key, cacheOptions, cacheCallback) => {
    let cache = context.cache.getOrCreate(
      getCacheOptions(context, cacheOptions)
    )
    cache.get(key, cacheCallback)
  },
  setValue: (
    context,
    key,
    value,
    cacheOptions,
    ttl,
    cacheCallback = (error, success) => (error ? error : success)
  ) => {
    let cache = context.cache.getOrCreate(
      getCacheOptions(context, cacheOptions)
    )
    let cacheTTL = ttl || context.configuration.cacheTTL || 5
    //pass a callback to keep async
    console.log(key, value, cacheTTL, cacheCallback)
    cache.set(key, value, cacheTTL, cacheCallback)
  },
  deleteValue: (
    context,
    key,
    cacheOptions,
    cacheCallback = (error, success) => (error ? error : success)
  ) => {
    let cache = context.cache.getOrCreate(
      getCacheOptions(context, cacheOptions)
    )
    //pass a callback to keep async
    cache.set(key, value, cacheTTL, cacheCallback)
  },
  getValueAndCache: (
    context,
    key,
    cacheOptions,
    ttl,
    onNullPromiseForValue
  ) => {
    let cache = context.cache.getOrCreate(
      getCacheOptions(context, cacheOptions)
    )
    let cacheTTL = ttl || context.configuration.cacheTTL || 5

    return new Promise((resolve, reject) => {
      try {
        cache.get(key, (err, cachedValue) => {
          if (err || (!cachedValue && !onNullPromiseForValue))
            return reject(
              err
                ? err
                : `Missing item with key ${key} in cache, no delegate to fetch provided`
            )
          if (cachedValue) return resolve(cachedValue)

          onNullPromiseForValue()
            .then(result => {
              cache.set(key, result, cacheTTL, (setErr, setSuccess) => {
                console.log(
                  `cache value set with key ${key}`,
                  setErr,
                  setSuccess
                )
              })
              return resolve(result)
            })
            .catch(reject)
        })
      } catch (error) {
        reject(error)
      }
    })
  }
}
