import {useQuery} from 'graphql-hooks';

const query = `
query {
  helloWorld
}
`;

const FetchHelloWorld = () => {
  const results = useQuery(query, {variables: {hello: 'hello'}, ssr: false});
  if (results.loading) {
    return 'Loading';
  }

  if (results.error) {
    return 'Uh oh';
  }

  return results.data.helloWorld;
};

export default FetchHelloWorld;
