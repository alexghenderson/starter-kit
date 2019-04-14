import memCache from 'graphql-hooks-memcache';
import {GraphQLClient} from 'graphql-hooks';

import gqlFetch from './gql-fetch';

const createGraphqlClient = () => (req, _, next) => {
  const client = new GraphQLClient({
    url: '/graphql',
    cache: memCache(),
    ssr: true,
    fetch: gqlFetch,
  });

  req.gqlClient = client;
  next();
};

export default createGraphqlClient;
