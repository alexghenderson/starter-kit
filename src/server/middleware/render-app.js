import fs from 'fs';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Helmet from 'react-helmet';

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
    const app = ReactDOM.renderToString(
      <Root url={req.url} context={context} />
    );
    const helmet = Helmet.renderStatic();
    const rendered = ReactDOM.renderToStaticMarkup(
      <Html helmet={helmet} scriptTags={scriptTags}>
        {app}
      </Html>
    );
    res.send(`<!DOCTYPE html>${rendered}`);
  };
};

export default renderApp;
