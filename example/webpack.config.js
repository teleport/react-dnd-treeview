var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var publicPath = '';
var outputPath = path.join(__dirname, 'dist');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index',
  ],
  output: {
    path: outputPath,
    filename: 'bundle.js',
    publicPath,
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
    modulesDirectories: ['node_modules'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['react-hot', 'babel', 'ts'],
        include: __dirname,
      },
      {
        test: /\.css?$/,
        loaders: ['style', 'css?modules&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]'],
        include: __dirname,
      },
    ]
  },
  stats: {
    chunkModules: false,
  },
  devServer: {
    contentBase: outputPath,
    publicPath,
    hot: true,
    historyApiFallback: true
  },
};
