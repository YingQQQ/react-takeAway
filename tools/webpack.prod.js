const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {
  build,
  app
} = require('./path');

const vendor = ['react', 'react-dom'];

const prod = {
  entry: {
    app: app
  },
  module: {
    rules: [{
      test: /\.s?css$/,
      use: ExtractTextPlugin.extract({
        fallback:'style-loader',
        use: [
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({
                  browsers: ['last 5 versions'],
                })
              ]
            }
          },
          'sass-loader'
        ]
      })
    }]
  },
  plugins: [
    new CleanWebpackPlugin([build], {
      root: process.cwd()
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: [vendor, 'manifest'],
      minChunks: Infinity
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
      },
    }),
    new ExtractTextPlugin('[name].[chunkhash].css')
  ]
}


module.exports = prod;
