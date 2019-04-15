import createGraphqlEndpoint from '../';

describe('Create Graphql Endpoint Middleware', () => {
  it('should return graphql endpoint', () => {
    const endpoint = createGraphqlEndpoint();
    expect(endpoint.name).toBe('graphqlMiddleware');
  });
});