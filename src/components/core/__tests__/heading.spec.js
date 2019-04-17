import React from 'react';
import enzyme from 'enzyme';
import Heading from '../heading';

describe('Heading core component', () => {
  it('should render with default props', () => {
    const wrapper = enzyme.mount(<Heading>test-content</Heading>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render alternate tags', () => {
    const wrapper = enzyme.mount(<Heading tag="p">test-p</Heading>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should adapt tag to heading level', () => {
    const wrapper = enzyme.mount(<Heading level={2}>test-level-2</Heading>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render different levels', () => {
    const wrapper = enzyme.mount(
      <React.Fragment>
        {[1, 2, 3, 4].map(level => (
          <Heading level={level} key={level}>
            text-{level}
          </Heading>
        ))}
      </React.Fragment>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
