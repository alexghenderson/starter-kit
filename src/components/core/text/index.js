import {jsx} from '@emotion/core';
import PropTypes from 'prop-types';

import * as typography from '~/components/core/common/typography';

const Text = ({tag, size, children, ...rest}) => {
  return jsx(
    tag,
    {
      css: {
        display: 'inline',
        ...typography[size],
      },
      ...rest,
    },
    children
  );
};

Text.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  tag: PropTypes.string,
};

Text.defaultProps = {
  size: 'medium',
  tag: 'span',
};

export default Text;
