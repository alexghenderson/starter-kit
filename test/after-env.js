import '@babel/polyfill';

const env = process.env;

beforeEach(() => {
  process.env = {
    ...env,
  };
});
