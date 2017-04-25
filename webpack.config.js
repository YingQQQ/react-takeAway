const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  build,
  app,
  style,
  src
} = require('./tools/path');
const dev = require('./tools/webpack.dev');
const prod = require('./tools/webpack.prod');
const template = require('./tools/template.config');

const TARGE = process.env.npm_lifecycle_event;
const IS_DEV = TARGE === 'start';
const useHMR = !!global.HMR

const pkg = require('./package.json');
const babelConfig = Object.assign({}, pkg.babel, {
  babelrc: false,
  cacheDirectory: useHMR,
  presets: pkg.babel.presets.map(x => x === 'latest' ? ['latest', {
    es2015: {
      modules: false
    }
  }] : x)
});


const common = {
  devtool: IS_DEV ? 'eval-source-map' : 'source-map',
  entry: {
    style: style
  },
  output: {
    path: build,
    filename: '[name].[hash].js',
    publicPath: '/',
    chunkFilename: '[chunkhash].[hash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: src,
      loader: 'babel-loader',
      options: babelConfig
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
      loader: 'url-loader',
      options: {
        limit: 10000
      }
    }, {
      test: /\.(eot|ttf|wav|mp3)$/,
      loader: 'file-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin(template)
  ]
}

if (IS_DEV) {
  console.info('==> webpack with development');
  babelConfig.plugins.unshift('react-hot-loader/babel');
  module.exports = merge(common, dev);
}

if (TARGE && TARGE === 'build') {
  console.info('==> webpack with production');
  module.exports = merge(common, prod);
}
