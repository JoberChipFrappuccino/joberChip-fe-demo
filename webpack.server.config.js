const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')

module.exports = (e, r) => {
  return {
    target: 'node',
    node: false, // it enables '__dirname' in files. If is not, '__dirname' always return '/'.
    mode: r.mode,
    devtool: r.mode === 'production' ? false : 'inline-source-map',
    entry: {
      index: path.resolve(__dirname, 'server', 'index.ts'),
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].js',
      chunkFilename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$|\.tsx?$/,
          use: 'babel-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.jsx'],
    },
    externals: [webpackNodeExternals()],
  }
}
