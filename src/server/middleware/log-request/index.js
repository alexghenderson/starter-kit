/* eslint-disable no-console */

const logRequest = (fn) => {
  return (req, res, next) => {
    let deferred = [];
    const actualLog = console.log;
    const actualError = console.error;
    const defer = (fn) => {
      deferred.push(fn);
    };
    console.log = (...args) => defer(actualLog.bind(undefined, ...args));
    console.error = (...args) => defer(actualLog.bind(undefined, ...args));

    next();
    console.log = actualLog;
    console.error = actualError;
    console.log(`${req.method} ${req.url} -> ${res.statusCode}`);
    deferred.forEach((fn) => fn());
  };
};

export default logRequest;
