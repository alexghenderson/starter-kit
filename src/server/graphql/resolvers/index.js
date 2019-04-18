export default modules => {
  let resolvers = {
    Query: {},
    Mutation: {},
  };

  modules.forEach(module => {
    const {query = {}, mutation = {}} = module.resolvers;
    resolvers.Query = {
      ...resolvers.Query,
      ...query,
    };
    resolvers.Mutation = {
      ...resolvers.Mutation,
      ...mutation,
    };
  });

  if (Object.keys(resolvers.Mutation).length <= 0) {
    delete resolvers.Mutation;
  }

  if (Object.keys(resolvers.Query).length <= 0) {
    delete resolvers.Query;
  }

  return resolvers;
};
