const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const arg = require('./webpack.config.base')
module.exports = {
  ...arg,
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
    title: '苏',
    template: 'src/assets/index.html'
  }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
      ignoreOrder: false
    })
],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
        ]
      }
    ]
  }
}