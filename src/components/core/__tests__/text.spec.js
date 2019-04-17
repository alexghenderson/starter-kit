import React from 'react';
import enzyme from 'enzyme';
import Text from '../text';

describe('Text core component', () => {
  it('should render with default props', () => {
    const wrapper = enzyme.mount(<Text>test-content</Text>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with alternate tags', () => {
    const wrapper = enzyme.mount(<Text tag="p">test-content</Text>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render different sizes', () => {
    const wrapper = enzyme.mount(
      <React.Fragment>
        {['small', 'medium', 'large'].map(size => (
          <Text size={size} key={size}>
            test-{size}
          </Text>
        ))}
      </React.Fragment>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
