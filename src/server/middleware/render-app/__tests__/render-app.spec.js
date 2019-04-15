/**
 * @jest-environment node
 */
import fs from 'fs';
import renderApp from '../';
import Root from '~/components/root/server';

jest.mock('fs', () => {
  return {
    readFileSync: jest.fn(() => '<script src="test.js"></script>'),
  };
});
jest.mock('graphql-hooks-ssr', () => {
  return {
    getInitialState: () => Promise.resolve({}),
  };
});
jest.mock('~/components/root/server', () => jest.fn(() => 'test-markup'));

describe('Render App Middleware', () => {
  it('should attempt to load index file by path', () => {
    renderApp('test-path')();
    expect(fs.readFileSync).toHaveBeenCalledWith('test-path', 'utf-8');
  });
  it('should replace index file html placeholder with rendered content', async () => {
    const handler = renderApp('test-path');
    const mockedSend = jest.fn();
    await handler({url: '/'}, {send: mockedSend});
    expect(mockedSend.mock.calls[0]).toMatchSnapshot();
  });
  it('should reflect updated status codes', async () => {
    Root.mockImplementation(({context}) => {
      context.status(400);
      return null;
    });
    const handler = renderApp('test-path');
    const mockedStatus = jest.fn();
    await handler({url: '/'}, {send: jest.fn(), status: mockedStatus});
    expect(mockedStatus).toHaveBeenCalledWith(400);
  });
});
