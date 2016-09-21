var path = require('path');

module.exports = {
  entry: './src/renderer/jsx/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist/renderer/js')
  },
  module: {
    loaders: [{
  		test: /\.jsx?$/,
  		exclude: /(node_modules|bower_components|public)/,
  		loader: 'babel',
  		query: {
  		  presets: ['es2015', 'react']
  		}
	 }]
  }
};
