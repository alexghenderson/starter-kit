import graphqlHTTP from 'express-graphql';

import schema from '~/server/graphql/schema';

const createGraphqlEndpoint = opts => {
  return graphqlHTTP({
    schema,
    graphiql: opts.graphiql,
  });
};

export default createGraphqlEndpoint;
