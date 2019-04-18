import React from 'react';
import PropTypes from 'prop-types';
import {useQuery} from 'graphql-hooks';

import Box from '~/components/core/box';
import Paragraph from '~/components/core/paragraph';

const query = `
query($count: Int, $units: String) {
  loremIpsum(count: $count, units: $units)
}
`;

const LoremIpsum = ({count, units}) => {
  const results = useQuery(query, {variables: {count, units}});
  if (results.loading) {
    return 'Loading';
  }

  if (results.error) {
    return 'Uh oh';
  }

  const paragraphs = results.data.loremIpsum
    .split('\n')
    .map((p, i) => <Paragraph key={i}>{p}</Paragraph>);

  return (
    <React.Fragment>
      <Box between={2}>{paragraphs}</Box>
    </React.Fragment>
  );
};

LoremIpsum.propTypes = {
  count: PropTypes.number,
  unit: PropTypes.oneOf(['sentences', 'paragraphs', 'words']),
};

export default LoremIpsum;
