const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'cheap-module-source-map',
  entry: './src/client/index.js',
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: ['babel-loader'], exclude: /node_modules/ },
      {
        test: /(\.css)$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname + 'build'),
  },

  devServer: {
    stats: 'minimal',
    overlay: true,
    historyApiFallback: true,
    disableHostCheck: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    https: false,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.REACT_APP_API_URL': JSON.stringify('http://localhost:3002'),
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
    }),
  ],
};
