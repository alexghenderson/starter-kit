/* istanbul ignore file */
// TODO: Set up tests for the client
import '@babel/polyfill';
import ReactDOM from 'react-dom';
import {GraphQLClient} from 'graphql-hooks';
import memcache from 'graphql-hooks-memcache';

import Root from '~/components/root/client';

const initialState = window.__INITIAL_STATE__;
delete window.__INITIAL_STATE__;

const graphqlClient = new GraphQLClient({
  url: '/graphql',
  cache: memcache({
    initialState,
  }),
});

ReactDOM.hydrate(
  <Root client={graphqlClient} />,
  document.getElementById('app')
);
