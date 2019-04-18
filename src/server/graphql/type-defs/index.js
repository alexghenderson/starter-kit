import {mergeTypes} from 'merge-graphql-schemas';

export default modules => {
  const typeDefs = modules.map(module => module.typedefs);

  return mergeTypes(typeDefs, {all: true});
};
