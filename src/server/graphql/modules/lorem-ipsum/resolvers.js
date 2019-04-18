import {loremIpsum} from 'lorem-ipsum';

export default {
  query: {
    loremIpsum(root, args, context, info) {
      const result = loremIpsum({...args});
      return result;
    },
  },
};
