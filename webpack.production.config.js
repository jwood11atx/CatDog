var path = require('path');
var config = {
  entry: path.resolve(__dirname, '../CatDog/lib/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,

      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: "style!css"
    }, {
      test: /\.scss$/,
      loader: "style!css!sass"
    }]
  },
  resolve: {
    alias: {
      sinon: 'sinon/pkg/sinon.js',
    },
    extensions: ['', '.js', '.json', '.scss', '.css']
  }
};

module.exports = config;
