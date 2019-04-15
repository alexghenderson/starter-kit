import React from 'react';
import enzyme from 'enzyme';
import IndexPage from '../';

describe('IndexPage', () => {
  it('should render without error', () => {
    enzyme.shallow(<IndexPage />);
  });
});