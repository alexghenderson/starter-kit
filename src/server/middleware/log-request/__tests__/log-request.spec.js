/* eslint-disable no-console */
import logRequest from '../';

describe('Log Request middleware', () => {
  it('should call log request', () => {
    console.log = jest.fn();
    const middleware = logRequest();
    middleware({method: 'GET', url: '/test'}, {statusCode: 200}, jest.fn());
    expect(console.log).toHaveBeenCalledWith('GET /test -> 200');
    console.log.mockRestore();
  });

  it('should defer logs during request', () => {
    const mockLog = jest.fn();
    console.log = jest.fn(mockLog);
    console.error = jest.fn(mockLog);
    const middleware = logRequest();
    middleware({method: 'GET', url: '/test'}, {statusCode: 200}, () => {
      console.log('deferred');
      console.error('deferred 2');
    });
    expect(mockLog.mock.calls[0][0]).toEqual('GET /test -> 200');
    expect(mockLog.mock.calls[1][0]).toEqual('deferred');
    expect(mockLog.mock.calls[2][0]).toEqual('deferred 2');
    console.log.mockRestore();
    console.error.mockRestore();
  });

  it('should call next', () => {
    const middleware = logRequest();
    const next = jest.fn();
    middleware({}, {}, next);
    expect(next).toHaveBeenCalled();
  });
});
