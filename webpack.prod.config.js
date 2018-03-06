const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: [
    __dirname + '/app/module.js'
  ],

  output: {
    path: __dirname + '/build',
    filename: 'app.[hash].js'
  },

  resolve: {
    extensions: ['.js'],
    modules: ['./app', './node_modules']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      // Image assets are hashed to allow cache-busting on deploy.
      {
        test: /\.(jpg|png|svg|gif)$/,
        loaders: ['file-loader?name=img/[name]-[hash:6].[ext]']
        //loaders: ['file-loader?name=img/[name].[ext]']
      },
      // Font assets
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        loaders: ['file-loader']
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },

  plugins: [
    // This takes the index.html file and injects our scripts.
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.html',
      inject: 'head'
    })
  ]
};
