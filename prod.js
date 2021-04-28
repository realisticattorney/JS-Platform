const merge = require('webpack-merge');
require('path');
const TerserPlugin = require('terser-webpack-plugin');
const base = require('./base');

module.exports = merge(base, {
  mode: 'production',
  output: {
    filename: 'bundle.min.js',
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
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './src/assets', to: 'src/assets' }, // Configure // the path from where webpack will copy your assets from and the  // path where it will put it when the build is done, change it     // according to your app organization
      ],
    }),
  ],
});