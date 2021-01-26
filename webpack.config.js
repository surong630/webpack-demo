const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const arg = require('./webpack.config.base.js')
module.exports = {
  ...arg,
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
    title: '苏',
    template: 'src/assets/index.html'
  })
],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}