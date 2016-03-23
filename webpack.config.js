var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.scss$/,
      include: /src/,
      loaders: ['style', 'css', 'resolve-url', 'sass?sourceMap']
    }, {
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
      include: /src/,
      loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
    }]
  }
};
