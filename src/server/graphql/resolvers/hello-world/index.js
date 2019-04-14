export default {
  query: {
    helloWorld(root, args, context, info) {
      console.log(root, args, context, info);
      return 'hello world!';
    }
  },
  mutation: {
    helloWorld(root, args, context, info) {
      console.log(root, args, context, info);
      return 'hello mutation!';
    }
  }
};
