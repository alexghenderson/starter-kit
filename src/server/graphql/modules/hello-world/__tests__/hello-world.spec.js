import resolver from '../resolvers';

describe('Hello World Resolver', () => {
  it('should resolve helloWorld query', () => {
    const value = resolver.query.helloWorld();
    expect(value).toBe('hello world!');
  });

  it('should resolve helloWorld mutation', () => {
    const value = resolver.mutation.helloWorld();
    expect(value).toBe('hello mutation!');
  });
});
