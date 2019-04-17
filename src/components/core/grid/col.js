import React from 'react';
import {jsx} from '@emotion/core';
import PropTypes from 'prop-types';

import * as bp from '~/components/core/common/breakpoints.js';

import GridContext from './grid-context';

const Col = ({tag, children, xs, sm, md, lg, ...rest}) => {
  const gridContext = React.useContext(GridContext);
  const _xs = xs;
  const _sm = sm !== undefined ? sm : _xs;
  const _md = md !== undefined ? md : _sm;
  const _lg = lg !== undefined ? lg : _md;
  return jsx(
    tag,
    {
      css: {
        display: 'block',
        flex: '1 0 auto',
        paddingLeft: gridContext.gutter,
        paddingRight: gridContext.gutter,
        width: `${(xs * 100) / 12}%`,
        [bp.sm]:
          _sm > 0
            ? {
              width: `${(_sm * 100) / 12}%`,
            }
            : {display: 'none'},
        [bp.md]:
          _md > 0
            ? {
              width: `${(_md * 100) / 12}%`,
            }
            : {display: 'none'},
        [bp.lg]:
          _lg > 0
            ? {
              width: `${(_lg * 100) / 12}%`,
            }
            : {display: 'none'},
      },
      ...rest,
    },
    children
  );
};

Col.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
};

Col.defaultProps = {
  children: null,
  tag: 'div',
  xs: 12,
  sm: undefined,
  md: undefined,
  lg: undefined,
};

export default Col;
