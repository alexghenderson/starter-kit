import React from 'react';
import {jsx} from '@emotion/core';
import PropTypes from 'prop-types';

import GridContext from './grid-context';

const Row = ({tag, children, align, ...rest}) => {
  const gridContext = React.useContext(GridContext);
  return jsx(
    tag,
    {
      css: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: align === 'center' ? 'center' : `flex-${align}`,
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
  align: PropTypes.oneOf(['start', 'center', 'end']),
};

Row.defaultProps = {
  children: null,
  tag: 'div',
  align: 'start',
};

export default Row;
