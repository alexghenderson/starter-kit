/**
 * @jest-environment node
 */
import fs from 'fs';
import renderApp from '../render-app';

jest.mock('fs', () => {
  return {
    readFileSync: jest.fn(() => '<script src="test.js"></script>'),
  };
});
jest.mock('~/components/root/server', () => () => 'test-markup');

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
});
