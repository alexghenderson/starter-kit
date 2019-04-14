const path = require('path');
const assign = require('assign-deep');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./common.webpack.js');

const root = path.resolve(__dirname, '..');

module.exports = assign({}, common, {
  entry: path.resolve(root, 'src/entry/client.js'),
  output: {
    path: path.resolve(root, 'dist/static'),
    filename: 'client.[hash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(root, 'public/index.html'),
      filename: path.resolve(root, 'dist/index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: 'true',
      },
    }),
  ],
});
