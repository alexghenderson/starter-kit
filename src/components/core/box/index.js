import {jsx} from '@emotion/core';
import PropTypes from 'prop-types';

import {getUnitPixels} from '~/components/core/common/lib';

const Box = ({
  horizontal,
  vertical,
  inline,
  inset,
  tag,
  align,
  children,
  type,
  ...rest
}) => {
  return jsx(
    tag,
    {
      css: {
        marginLeft: getUnitPixels(horizontal),
        marginRight: getUnitPixels(horizontal),
        marginTop: getUnitPixels(vertical),
        marginBottom: getUnitPixels(vertical),
        padding: getUnitPixels(inset),
        textAlign: align,
        display: `${inline ? 'inline-' : ''}${type}`,
      },
      ...rest,
    },
    children
  );
};

Box.propTypes = {
  horizontal: PropTypes.number,
  vertical: PropTypes.number,
  inline: PropTypes.bool,
  inset: PropTypes.number,
  children: PropTypes.node,
  type: PropTypes.oneOf(['flex', 'block', 'grid']),
  tag: PropTypes.string,
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right'])
};

Box.defaultProps = {
  horizontal: 0,
  vertical: 0,
  inline: false,
  inset: 0,
  type: 'block',
  children: null,
  align: 'inherit',
  tag: 'div',
};

export default Box;
