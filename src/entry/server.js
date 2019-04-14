/* istanbul ignore file */
// TODO: Set up tests for the server
import '@babel/polyfill';
import path from 'path';
import express from 'express';

import createGraphqlEndpoint from '~/server/middleware/create-graphql-endpoint';
import createGraphqlClient from '~/server/middleware/create-graphql-client';
import renderApp from '~/server/middleware/render-app';

const port = process.env.PORT || 3000;

const app = express();

app.use('/static', express.static(path.join(__dirname, '/static')));

app.use('/graphql', createGraphqlEndpoint({graphiql: true}));

app.use(
  createGraphqlClient(),
  renderApp(path.resolve(__dirname, 'index.html'))
);

app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Listening on port ${port}`);
});
