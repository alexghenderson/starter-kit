import React from 'react';

import reset from './reset';

const MainLayout = ({children}) => {
  return (
    <React.Fragment>
      {reset}
      {children}
    </React.Fragment>
  );
};

export default MainLayout;
