import {jsx} from '@emotion/core';
import PropTypes from 'prop-types';

import * as typography from '~/components/core/common/typography';

const Paragraph = ({tag, size, children, ...rest}) => {
  return jsx(
    tag,
    {
      css: {
        display: 'block',
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

Paragraph.defaultProps = {
  size: 'medium',
  tag: 'p',
};

export default Paragraph;
