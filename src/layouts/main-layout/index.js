import React from 'react';

import Heading from '~/components/core/heading';
import Box from '~/components/core/box';
import Text from '~/components/core/text';

import reset from './reset';

const MainLayout = ({children}) => {
  return (
    <React.Fragment>
      {reset}
      <Box type="flex" css={{flexDirection: 'column', height: '100%'}}>
        <Box inset={2} css={{background: 'mediumseagreen'}}>
          <Heading level={1}>Header</Heading>
        </Box>
        <Box inset={2} css={{flex: '1 0 auto', background: 'salmon'}}>{children}</Box>
        <Box inset={2} css={{background: 'mediumseagreen'}}>
          <Text>Footer</Text>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default MainLayout;
