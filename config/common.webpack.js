const path = require('path');

const root = path.resolve(__dirname, '..')

module.exports = {
  mode: 'development',
  output: {
    publicPath: '/static/',
    filename: '[name].bundle.js',
  },
  devServer: {
    contentBase: path.resolve(root, 'src'),
    publicPath: '/static/',
  },
  resolve: {
    alias: {
      '~': path.resolve(root, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          babelrc: true,
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(ttf|eof|otf|svg|png|jpg|jpeg)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader',
      },
    ],
  },
};
