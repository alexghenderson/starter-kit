// This fetch polyfill doesn't actually fetch
// it simply redirects takes care of manually executing queries

const gqlFetch = (url, opts) => {
  return new Promise((resolve, reject) => {
    resolve({
      ok: true,
      json: async () => {
        return {data: {helloWorld: 'hello world!'}}
      }
    });
  })
}

export default gqlFetch;