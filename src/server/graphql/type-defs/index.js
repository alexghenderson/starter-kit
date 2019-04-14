import {mergeTypes} from 'merge-graphql-schemas';

import helloWorld from './hello-world';

const typeDefs = [helloWorld];

export default mergeTypes(typeDefs, {all: true});
