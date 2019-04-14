import React from 'react';
import {StaticRouter} from 'react-router-dom';

import App from '~/components/app';

const Root = ({url, context, client}) => {
  return (
    <StaticRouter location={url} context={context}>
      <App graphqlClient={client} />
    </StaticRouter>
  );
};

export default Root;
