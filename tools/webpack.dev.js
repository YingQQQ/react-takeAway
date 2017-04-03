const webpack = require('webpack');
const {
  app
} = require('./path');

let stylesLoader = ;

const dev = {
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      app
    ]
  },
  devServer = {
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only',
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: './postcss.config.js'
            }
          },
          'sass-loader',
        ]
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}


module.exports = dev;
