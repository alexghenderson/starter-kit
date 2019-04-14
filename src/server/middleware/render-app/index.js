import fs from 'fs';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Helmet from 'react-helmet';
import {getInitialState} from 'graphql-hooks-ssr';

import Html from '~/components/html';
import Root from '~/components/root/server';

const renderApp = indexPath => {
  return async (req, res) => {
    const scriptTags = fs.readFileSync(indexPath, 'utf-8');
    const context = {
      status: status => {
        res.status(status);
      },
    };
    const App = <Root client={req.gqlClient} url={req.url} context={context} />;
    const initialState = await getInitialState({App, client: req.gqlClient});
    const helmet = Helmet.renderStatic();
    const rendered = ReactDOM.renderToString(
      <Html
        helmet={helmet}
        scriptTags={scriptTags}
        scriptContent={`window.__INITIAL_STATE__=${JSON.stringify(
          initialState
        ).replace(/</g, '\\u003c')}`}
      >
        {App}
      </Html>
    );
    res.send(`<!DOCTYPE html>${rendered}`);
  };
};

export default renderApp;
