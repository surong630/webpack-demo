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
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', {
          loader: 'sass-loader',
          options: {
            implementation: require('dart-sass')
          }
        }]
      },
      {
        test: /\.less$/,
        loader: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.styl$/,
        loader: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  }
}