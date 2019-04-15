import {graphql} from 'graphql';

import schema from '~/server/graphql/schema';

// This fetch polyfill doesn't actually fetch
// it simply redirects takes care of manually executing queries

const gqlFetch = (url, opts) => {
  // GraphQLClient uses body to deliver query/variables
  const {query, variables, operationName} = JSON.parse(opts.body);
  return new Promise((resolve, reject) => {
    resolve({
      ok: true,
      json: async () => {
        const result = await graphql(
          schema,
          query,
          undefined, // rootValue
          undefined, // contextValue
          variables,
          operationName
        );
        
        return result;
      },
    });
  });
};

export default gqlFetch;
