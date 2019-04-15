import {graphql} from 'graphql';
import gqlFetch from '../gql-fetch';

jest.mock('graphql', () => {
  return {
    graphql: jest.fn(),
  };
});
jest.mock('~/server/graphql/schema', () => ({}));

describe('GQL Fetch', () => {
  it('should pass query, variables, and operationName to graphql', async () => {
    const query = 'query { test }';
    const variables = {test: 'test'};
    const operationName = 'test';
    const response = await gqlFetch('', {
      body: JSON.stringify({
        query,
        variables,
        operationName,
      }),
    });
    await response.json();
    expect(graphql).toBeCalledWith(
      {},
      query,
      undefined,
      undefined,
      variables,
      operationName
    );
  });
});
