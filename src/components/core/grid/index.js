import {jsx} from '@emotion/core';
import PropTypes from 'prop-types';

import {getUnitPixels} from '~/components/core/common/lib';

import GridContext from './grid-context';

import Row from './row';
import Col from './col';

const Grid = ({tag, children, gutter, ...rest}) => {
  return (
    <GridContext.Provider
      value={{
        gutter: getUnitPixels(gutter),
      }}
    >
      {jsx(
        tag,
        {
          css: {
            display: 'flex',
            flexDirection: 'column',
          },
          ...rest,
        },
        children
      )}
    </GridContext.Provider>
  );
};

Grid.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  gutter: PropTypes.number,
};

Grid.defaultProps = {
  children: null,
  tag: 'div',
  gutter: 2,
};

Grid.Row = Row;
Grid.Col = Col;

export default Grid;
