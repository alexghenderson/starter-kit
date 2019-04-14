import fs from 'fs';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Helmet from 'react-helmet';

import HTML from '~/components/html';
import Root from '~/components/root/server';

const renderApp = indexPath => {
  return async (req, res) => {
    const scriptTags = fs.readFileSync(indexPath, 'utf-8');
    const context = {};
    const app = ReactDOM.renderToString(
      <Root url={req.url} context={context} />
    );
    const helmet = Helmet.renderStatic();
    const rendered = ReactDOM.renderToStaticMarkup(
      <HTML helmet={helmet} scriptTags={scriptTags}>
        {app}
      </HTML>
    );
    res.send(`<!DOCTYPE html>${rendered}`);
  };
};

export default renderApp;
