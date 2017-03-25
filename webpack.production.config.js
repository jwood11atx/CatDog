var path = require('path');
var config = {
  entry: {
    main: "./lib/index.js"
  },
  output: {
    path: __dirname,
    filename: '[name].bundle.js'
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
