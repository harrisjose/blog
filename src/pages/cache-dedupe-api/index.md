---
title: A request cache for client side apps in under 40LOC
date: 2020-05-24T22:14:31.000+00:00
tags:
- axois
- cache
- query
- swr
- request-cache
- api
- front-end
- frameworks

---
Caching and de-duping HTTP requests helps [facilitate local reasoning](https://sophiebits.com/2020/01/01/fast-maintainable-db-patterns.html "Fast and maintainable patterns for fetching from a database - Sophie Alpert"). This means that you think about a part of your code in isolation, without holding the entire system in your head. I'll get into more of why this has a huge impact on the way you code at the end of this post.

## Caching responses

First, we need a way to insert requests into the cache.

```javascript
class Cache {
  queries = {} // Object to store queries in

  createRequest(queryFn, url, params) {
    // Get a unique hash for this query
    let hash = getQueryHash(url, params)
    // Call the query fn with params
    let promise = queryFn(url, params)

    promise
      .then(response => {
        // Once the promise resolves store the response into the cache
        this.queries[hash] = {
          ...this.queries[hash],
          response,
        }
      })
      .cache(_ => {
        // If the request fails, you probably want to remove it from the cache
        delete this.queries[hash]
      })

    // Return the promise so user can get the response once it resolves
    return promise
  }
}
```

**_getQueryHash_** is a function that returns a deterministic hash based on the URL and params. We sort the params, stringify them and then append that to the URL and now we've got a unique key for a URL.

```javascript
getQueryHash(url, params) {
  let paramString = Object.keys(value)
    .sort()
    .map(key => ({ [key]: value[key] }))
  return `${url}:${JSON.stringify(params)}`
}
```

## De-duplicating requests

A simple optimization we can add is de-duplicating requests by storing the promise from our queryFn. Now, when the same request is made again, we can just return the existing promise. This promise is removed once it resolves.

```javascript
class Cache {
  queries = {}

  createRequest(queryFn, url, params) {
    let hash = getQueryHash(url, params)

    if (this.queries[hash]) {
      // If there is an ongoing request for the same
      // hash, then return it's promise instead of creating
      // a new request
      let { promise } = this.queries[hash]
      if (promise) return promise
    }

    let promise = queryFn(url, params)

    // If the same query is called again, we can re-use the
    // same promise if this request has not yet completed
    this.queries[hash] = {
      response: null,
      promise,
    }

    promise
      .then(response => {
        // Once the promise resolves, remove it and
        // store the response
        this.queries[hash] = {
          ...this.queries[hash],
          response,
          promise: null,
        }
      })
      .cache(_ => {
        delete this.queries[hash]
      })

    return promise
  }
}
```

## Cache Invalidation

Checking if a request exists in cache or removing one from the cache is pretty straightforward. But in most cases, you'd usually want the cache to expire based on a timeout. Let's introduce a config object to our **_createRequest_** function that lets us specify how long a request should be persisted in the cache via a **cacheTimeout** prop. We'll also add a way to force cache invalidation with the **force** prop.

```javascript
class Cache {
  queries = {}

  createRequest(queryFn, url, params, config}) {
    let hash = getQueryHash(url, params)
    let promise = queryFn(url, params)
    let timeoutFn

    if (config.force) {
      // clear the timeout and remove the request from the cache
      // so that a new request is started
      clearTimeout(this.queries[hash].timeoutFn)
      delete this.queries[hash]
    }

    // When the specified time interval is over, the query is
    // removed from cache. We store the timeoutID from the
    // timeout fn so that we can clear it if required (defaults to 5s)
    let skipCache = [0, null].includes(config.cacheTimeout)
    if(!skipCache) {
      timeoutFn = setTimeout(() => {
        delete this.queries[hash]
      }, config.cacheTimeout || 5 * 1000)
    }

    this.queries[hash] = {
      response: null,
      promise,
      timeoutFn,
    }.

    promise.then((response) => {
      this.queries[hash] = {
        ...this.queries[hash],
        response,
        promise: null,
      }
    })

    return promise
  }
}
```

## Using the cache

We'll be using axios for making the requests but this should work with fetch or anything else you want to use. Since we don't really do anything with the response, it'll be the same as what you'd have if you'd used axios directly. Essentially **_createRequest_** is just a higher-order function that manages the cache while you get to make requests like you usually do.

```javascript
cache
  .createRequest(axios.get, 'someurl/api/movies', {
    params: { ID: 123 },
  })
  .then(response => {
    // do something with resonse
  })
  .catch(() => {
    // handle error
  })
```

This becomes more powerful when you combine it with the [bridge](https://en.wikipedia.org/wiki/Bridge_pattern) or adapter patterns where all the magic would be wrapped up inside a data-layer. This decouples the cache implementation (and axios) from your application code.

```javascript
// API.js
import axios from 'axios'

export const API = {
  get(url, params) {
    return createRequest(axios.get, url, { params })
  },
  post(url, payload) {
	return axios.post(url, payload)
  }
}

// SomeComponent.js
import API from './api'
...
loadData() {
  API.get(url, params).then((response) => {...})
}
```

## What does this solve?

Most of modern front end development is centered around writing components. This pattern lets us make components responsible for fetching the data it needs, without worrying about whether the same data is being fetched by another part of your app.  
  
So if a page has two components that display user details - like a summary card and then an address card - we can fetch the user details inside both components independently. The cache takes care of the rest.