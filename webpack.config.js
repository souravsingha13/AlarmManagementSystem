const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // relative pat
   devtool: 'cheap-module-source-map',
  watch:true,
 output: {
    path: path.join(__dirname, 'dist'), // absolute path
    filename: 'bundle.js' // file name
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
  
};

