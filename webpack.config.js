const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    filename: '[name].[contenthash].js'
  },
  plugins: [new HtmlWebpackPlugin({
    title: '苏',
    template: 'src/assets/index.html'
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}