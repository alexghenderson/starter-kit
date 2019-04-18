import React from 'react';
import enzyme from 'enzyme';

import {useQuery} from 'graphql-hooks';

import Paragraph from '~/components/core/paragraph';

import LoremIpsum from '../';

jest.mock('graphql-hooks', () => {
  return {
    useQuery: jest.fn(),
  };
});

describe('FetchHelloWorld component', () => {
  it('should render with data', () => {
    useQuery.mockImplementation(() => ({data: {loremIpsum: 'hello\nhello\nhello'}}));
    const wrapper = enzyme.shallow(<LoremIpsum />);
    expect(wrapper.find(Paragraph)).toHaveLength(3);
  });
  it('should render with error', () => {
    useQuery.mockImplementation(() => ({error: []}));
    const wrapper = enzyme.shallow(<LoremIpsum />);
    expect(wrapper.text()).toBe('Uh oh');
  });
  it('should render while loading', () => {
    useQuery.mockImplementation(() => ({loading: true}));
    const wrapper = enzyme.shallow(<LoremIpsum />);
    expect(wrapper.text()).toBe('Loading');
  });
});
