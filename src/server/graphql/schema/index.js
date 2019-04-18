import {makeExecutableSchema} from 'graphql-tools';

import typeDefs from '~/server/graphql/type-defs';
import resolvers from '~/server/graphql/resolvers';

const modules = ['hello-world', 'lorem-ipsum'].map(slug =>
  require(`~/server/graphql/modules/${slug}`)
);

const schema = makeExecutableSchema({
  typeDefs: typeDefs(modules),
  resolvers: resolvers(modules),
});

export default schema;
