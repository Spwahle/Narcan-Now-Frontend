'use strict';

require('dotenv').config();

const production = process.env.NODE_ENV === 'production';

const { DefinePlugin, EnvironmentPlugin } = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

let plugins = [
  new EnvironmentPlugin(['NODE_ENV']),
  new ExtractPlugin('bundle-[hash].css'),
  new HtmlPlugin({ template: `${__dirname}/src/index.html` }),
  new DefinePlugin({
    '__DEBUG__': JSON.stringify('development'),
    '__API_URL__': JSON.stringify(process.env.API_URL),
    '__GOOGLE_CLIENT_ID__': JSON.stringify(process.env.GOOGLE_CLIENT_ID),
    '__GOOGLE_REDIRECT_URI__': JSON.stringify(process.env.GOOGLE_REDIRECT_URI)
  })
];

if (production) {
  plugins = plugins.concat([new CleanPlugin(), new UglifyPlugin()]);
}

module.exports = {
  plugins,
  entry: `${__dirname}/src/main.js`,
  devServer: {
    historyApiFallback: true
  },
  devtool: production ? undefined : 'eval',
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle-[hash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.svg$/,
        loaders: ['babel-loader',
          {
            loader: 'react-svg-loader',
            query: {
              svgo: {
                plugins: [{ removeTitle: false }],
                floatPrecision: 2
              }
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|eot|glyph)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'font/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|gif|png|tiff)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 6000,
              name: 'image/[name].[ext]'
            },
          }
        ]
      },
      {
        test: /\.(mp3|aac|aiff|wav|flac|m4a|mp4|ogg|ape)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'audio/[name].[ext]'
            }
          }
        ]
      }
    ]
  }
};
