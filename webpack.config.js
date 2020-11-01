const path = require('path');

module.exports = {
  entry: './src/index.js', // relative pat
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

