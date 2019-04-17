import React from 'react';
import {useQuery} from 'graphql-hooks';

const query = `
query {
  helloWorld
}
`;

const FetchHelloWorld = () => {
  const results = useQuery(query);
  if (results.loading) {
    return 'Loading';
  }

  if (results.error) {
    return 'Uh oh';
  }

  return (
    <React.Fragment>
      {results.data.helloWorld}
    </React.Fragment>
  );
};
export default FetchHelloWorld;
