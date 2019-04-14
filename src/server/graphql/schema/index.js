import {makeExecutableSchema} from 'graphql-tools';

import typeDefs from '~/server/graphql/type-defs';
import resolvers from '~/server/graphql/resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;
