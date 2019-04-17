import React from 'react';
import {jsx} from '@emotion/core';
import PropTypes from 'prop-types';

import GridContext from './grid-context';

const Row = ({
  tag,
  children,
  ...rest
}) => {
  const gridContext = React.useContext(GridContext);
  return jsx(
    tag,
    {
      css: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: `-${gridContext.gutter}`,
        marginRight: `-${gridContext.gutter}`,
      },
      ...rest,
    },
    children
  );
};

Row.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
};

Row.defaultProps = {
  children: null,
  tag: 'div',
};

export default Row;
