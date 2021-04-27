const webpack = require('webpack');
const path = require('path');

module.exports = {

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    filename: 'project.bundle.js',
  },
  module: {
    rules: [{
      test: /\.(png|jpg|gif)$/,
      use: {
        loader: 'file-loader',
        options: {
          outputPath: 'assets'
        }
      }
    },
    {
      test: /\.(mp3|wav|wma|ogg|aif)$/,
      loader: 'file-loader',
    },
    {
      test: /\.html$/i,
      loader: 'html-loader',
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    }, { test: /\.jsx?$/, exclude: /'node_modules'/, loader: 'babel-loader' },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },

  plugins: [
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true),
    }),
  ],

};
