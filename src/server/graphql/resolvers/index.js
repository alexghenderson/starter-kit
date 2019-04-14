import helloWorld from './hello-world';

const resolvers = {
  Query: {
    // spread any existing query resolvers here
    ...helloWorld.query,
  },
  Mutation: {
    // spread any existing mutation resolvers here
    ...helloWorld.mutation,
  }
}

export default resolvers;