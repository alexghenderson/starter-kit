const path = require('path');
const assign = require('assign-deep')

const common = require('./common.webpack.js');

const root = path.resolve(__dirname, '..');

module.exports = assign({}, common, {
  entry: path.resolve(root, 'src/entry/server.js'),
  output: {
    path: path.resolve(root, 'dist'),
    filename: 'server.bundle.js',
  },
  target: 'node',
  node: {
    __dirname: false,
  },
});
