import {jsx} from '@emotion/core';
import PropTypes from 'prop-types';

import * as heading from '~/components/core/common/heading';

const Heading = ({tag, level, children, ...rest}) => {
  const h = `h${level}`;
  return jsx(
    tag || h,
    {
      css: {
        ...heading[h],
      },
      ...rest,
    },
    children
  );
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, '1', '2', '3', '4']),
  tag: PropTypes.string,
};

Heading.defaultProps = {
  level: 1,
  tag: undefined,
};

export default Heading;
