const nodeExternals = require('webpack-node-externals')
const config = require('./webpack.common')

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: './server/index.js',
  output: {
    filename: 'bundle.server.js',
  },
  optimization: {
    minimize: false,
  },
  ...config,
}
