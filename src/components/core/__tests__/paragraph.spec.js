import React from 'react';
import enzyme from 'enzyme';
import Paragraph from '../paragraph';

describe('Paragraph core component', () => {
  it('should render with default props', () => {
    const wrapper = enzyme.mount(<Paragraph>test-content</Paragraph>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with alternate tags', () => {
    const wrapper = enzyme.mount(<Paragraph tag="div">test-content</Paragraph>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render different sizes', () => {
    const wrapper = enzyme.mount(
      <React.Fragment>
        {['small', 'medium', 'large'].map(size => (
          <Paragraph size={size} key={size}>
            test-{size}
          </Paragraph>
        ))}
      </React.Fragment>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
