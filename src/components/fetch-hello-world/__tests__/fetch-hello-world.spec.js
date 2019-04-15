import React from 'react';
import enzyme from 'enzyme';

import {useQuery} from 'graphql-hooks';

import FetchHelloWorld from '../';

jest.mock('graphql-hooks', () => {
  return {
    useQuery: jest.fn(),
  };
});

describe('FetchHelloWorld component', () => {
  it('should render with data', () => {
    useQuery.mockImplementation(() => ({data: {helloWorld: 'hello'}}));
    const wrapper = enzyme.shallow(<FetchHelloWorld />);
    expect(wrapper.text()).toBe('hello');
  });
  it('should render with error', () => {
    useQuery.mockImplementation(() => ({error: []}));
    const wrapper = enzyme.shallow(<FetchHelloWorld />);
    expect(wrapper.text()).toBe('Uh oh');
  });
  it('should render while loading', () => {
    useQuery.mockImplementation(() => ({loading: true}));
    const wrapper = enzyme.shallow(<FetchHelloWorld />);
    expect(wrapper.text()).toBe('Loading');
  });
});
