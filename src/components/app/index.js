import React from 'react';
import Helmet from 'react-helmet';
import {ClientContext} from 'graphql-hooks';

import Routes from '~/components/routes';

const App = ({graphqlClient}) => {
  return (
    <ClientContext.Provider value={graphqlClient}>
      <React.Fragment>
        <Helmet titleTemplate="%s | Hello World!" defaultTitle="Hello World!" />
        <Routes />
      </React.Fragment>
    </ClientContext.Provider>
  );
};

export default App;
