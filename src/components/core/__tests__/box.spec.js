import React from 'react';
import enzyme from 'enzyme';
import Box from '../box';

describe('Box core component', () => {
  it('should render with default props', () => {
    const wrapper = enzyme.mount(<Box>test-content</Box>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render inline box', () => {
    const wrapper = enzyme.mount(<Box inline>test-content</Box>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render different margins and insets', () => {
    const wrapper = enzyme.mount(
      <Box vertical={-1} horizontal={2} inset={3}>
        test-content
      </Box>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render different text-aligns', () => {
    const wrapper = enzyme.mount(
      <React.Fragment>
        {['inherit', 'left', 'center', 'right'].map(align => (
          <Box align={align} key={align}>
            text-{align}
          </Box>
        ))}
      </React.Fragment>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render alternate tags', () => {
    const wrapper = enzyme.mount(<Box tag="main">text-main</Box>);
    expect(wrapper).toMatchSnapshot();
  });
});
