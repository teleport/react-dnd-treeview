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
    'classnames': 'classnames',
    'immutable': {
      root: 'Immutable',
      commonjs2: 'immutable',
      commonjs: 'immutable',
      amd: 'immutable'
    },
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dnd': 'react-dnd',
  }],
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.d.ts', '.tsx'],
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['babel', 'ts'],
        include: path.join(__dirname, 'src'),
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
