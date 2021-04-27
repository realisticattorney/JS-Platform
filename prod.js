const merge = require('webpack-merge');
require('path');
const TerserPlugin = require('terser-webpack-plugin');
const base = require('./base');

module.exports = merge(base, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'project.bundle.js',
  },
  devtool: false,
  performance: {
    maxEntrypointSize: 9000000000,
    maxAssetSize: 90000000000,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
});
