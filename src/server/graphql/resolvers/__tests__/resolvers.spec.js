import createResolvers from '../';

describe('Resolver combiner', () => {
  it('should delete empty query and mutation resolvers', () => {
    const resolvers = createResolvers([{resolvers: {}}]);
    expect(resolvers.Query).not.toBeDefined();
    expect(resolvers.Mutation).not.toBeDefined();
  });
});
