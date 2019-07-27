const path = require('path')
const config = require('./webpack.common')

module.exports = {
  devtool: 'inline-source-map',
  entry: './client/index.js',
  output: {
    filename: 'bundle.client.js',
    path: path.resolve(__dirname, 'build'),
  },
  ...config,
}
