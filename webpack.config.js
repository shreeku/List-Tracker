const path = require('path');
const webpack = require('webpack');
require('custom-env').env()

module.exports = {
  entry: ['react-hot-loader', './src'],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: { presets: ["@babel/env"]}
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx']},
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: process.env.DEV_PORT,
    publicPath: process.env.DEV_URL
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}
