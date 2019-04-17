import React from 'react';
import enzyme from 'enzyme';
import MainLayout from '../';

describe('Main Layout component', () => {
  it('should render without error', () => {
    const wrapper = enzyme.mount(<MainLayout>test-content</MainLayout>);
    expect(wrapper).toMatchSnapshot();
  });
});
