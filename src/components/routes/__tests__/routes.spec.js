import React from 'react';
import {StaticRouter} from 'react-router-dom';
import enzyme from 'enzyme';

import Routes from '../';
import IndexPage from '~/pages/index-page';
import NotFoundPage from '~/pages/not-found-page';

jest.mock('~/pages/index-page', () => () => null);
jest.mock('~/pages/not-found-page', () => () => null);

describe('Routes componenet', () => {
  it('should render index', () => {
    const wrapper = enzyme.mount(
      <StaticRouter location="/">
        <Routes />
      </StaticRouter>
    );
    expect(wrapper.find(IndexPage)).toHaveLength(1);
  });
  it('should render 404/not found', () => {
    const wrapper = enzyme.mount(
      <StaticRouter location="/not-real-url">
        <Routes />
      </StaticRouter>
    );
    expect(wrapper.find(NotFoundPage)).toHaveLength(1);
  });
});
