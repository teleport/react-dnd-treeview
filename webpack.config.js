var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var publicPath = '/static/';

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/TreeView.tsx',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'react-dnd-treeview.js',
    libraryTarget: 'umd',
    library: 'react-dnd-treeview',
  },
  externals: [{
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
  }],
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.d.ts', '.tsx'],
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['react-hot', 'babel', 'ts'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.css?$/,
        loaders: ['style', 'css?modules&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]'],
        include: path.join(__dirname, 'src')
      },
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/react-dnd-treeview.d.ts' }
    ]),
  ],
  stats: {
    chunkModules: false,
  },
};
