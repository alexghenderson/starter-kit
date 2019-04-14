import React from 'react';
import PropTypes from 'prop-types';

const NotFoundPage = ({staticContext}) => {
  staticContext.status(404);
  return (
    <div>
      <h1>404</h1>Not Found
    </div>
  );
};

NotFoundPage.propTypes = {
  staticContext: PropTypes.object,
};

NotFoundPage.defaultProps = {
  staticContext: {
    status: () => {}
  },
};

export default NotFoundPage;
