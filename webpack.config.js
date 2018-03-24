const webpack = require('webpack');

module.exports = {
  entry: [
    './app.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
           },
          {
            loader: "css-loader"
           }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  }
};
