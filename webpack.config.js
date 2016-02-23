const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './src/assets/styles/app.scss',
    './src/app',
    'bootstrap-loader'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.ProvidePlugin({ $: "jquery", jquery: "jquery" }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({ minify: false, compress: { warnings: false } })
  ],
  module: {
    loaders: [
      { test: /\.js?/, loaders: ['babel'], include: path.join(__dirname, 'src')},
      { test: /\.scss$/, loaders: ['style', 'css', 'sass']},
      
      // Bootstrap 3 - stuff to help load fonts & jquery dependency
      { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000' },
      { test: /bootstrap-sass\\assets\\javascripts\\/, loader: 'imports?jQuery=jquery' }
    ]
  }
};