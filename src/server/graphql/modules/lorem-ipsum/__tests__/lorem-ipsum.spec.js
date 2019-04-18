import resolver from '../resolvers';

const mockText = 'mocked test text';

jest.mock('lorem-ipsum', () => {
  return {
    loremIpsum: () => {
      return mockText;
    },
  };
});
describe('Lorem Ipsum Resolver', () => {
  it('should resolve helloWorld query', () => {
    const value = resolver.query.loremIpsum();
    expect(value).toBe(mockText);
  });
});
