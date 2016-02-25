const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: "source-map",
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
    // Make jQuery available globally
    new webpack.ProvidePlugin({ $: "jquery", jquery: "jquery" }),
    
    // Enable hot module replacements
    new webpack.HotModuleReplacementPlugin(),
    
    // Not sure
    new webpack.NoErrorsPlugin()
    
    // Minify JS
    //,new webpack.optimize.UglifyJsPlugin({ minify: false, compress: { warnings: false } })
  ],
  module: {
    loaders: [
      { test: /\.js?/, loaders: ['babel'], include: path.join(__dirname, 'src')},
      { test: /\.(scss|sass)$/, loaders:  ['style?sourceMap', 'css?sourceMap', 'sass?sourceMap'] },
      
      // Bootstrap 3 - stuff to help load fonts & jquery dependency
      { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000' },
      { test: /bootstrap-sass\\assets\\javascripts\\/, loader: 'imports?jQuery=jquery' }
    ]
  }
};