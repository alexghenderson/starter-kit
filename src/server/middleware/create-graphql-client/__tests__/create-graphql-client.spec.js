import createGraphqlClient from '../';

jest.mock('graphql-hooks', () => {
  return {
    GraphQLClient: jest.fn(),
  };
});

describe('Create Graphql Client middleware', () => {
  it('should attach client to request', () => {
    const middleware = createGraphqlClient();
    const req = {};
    middleware(req, {}, jest.fn());
    expect(req.gqlClient).toBeDefined();
  });

  it('should call next after attaching', () => {
    const middleware = createGraphqlClient();
    const next = jest.fn();
    middleware({}, {}, next);
    expect(next).toHaveBeenCalled();
  });
});
