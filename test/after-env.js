import '@babel/polyfill';
import emotionSerializer from 'jest-emotion';
import {createSerializer as enzymeSerializer} from 'enzyme-to-json';

expect.addSnapshotSerializer(emotionSerializer);
expect.addSnapshotSerializer(enzymeSerializer({mode: 'deep'}));

const env = process.env;

beforeEach(() => {
  process.env = {
    ...env,
  };
});
