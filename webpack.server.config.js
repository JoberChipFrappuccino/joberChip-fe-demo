const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
          test: /\.s?css$/i,
          exclude: [],
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.jsx?$|\.tsx?$/,
          use: 'babel-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.jsx'],
    },
    plugins: [new MiniCssExtractPlugin()],
    externals: [webpackNodeExternals()],
  }
}
