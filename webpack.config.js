const HtmlWebPackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');
const path = require('path');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(scss)$/,
          use: [{
            loader: 'style-loader', // inject CSS to page
          }, {
            loader: 'css-loader', // translates CSS into CommonJS modules
          }, {
            loader: 'postcss-loader', // Run post css actions
            options: {
              plugins: function () { // post css plugins, can be exported to postcss.config.js
                return [
                  require('precss'),
                  require('autoprefixer')
                ];
              }
            }
          }, {
            loader: 'sass-loader' // compiles Sass to CSS
          }]
        },
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, 'dist'),
      publicPath: '/dist/',
      headers: {
        'Service-Worker-Allowed': '/'
      }
    },
    output: {
      filename: "main.js",
      path: path.join(__dirname, 'dist'),
      publicPath: '/dist/'
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "index.html"
      }),
      new ServiceWorkerWebpackPlugin({
        entry: path.join(__dirname, '/src/worker_cache.js'),
        //publicPath: "/"
      })
      // new WorkboxPlugin.GenerateSW({
      //   swDest: "sw.js",
      //   clientsClaim: true,
      //   skipWaiting: true
      // })
      // new InjectManifest({
      //   swSrc: './src/worker_cache.js',
      //   swDest: 'sw.js',
      //   globPatterns: ['dist/*.{js, html}'],
      //   modifyUrlPrefix: {
      //     '/dist': '/'
      //   }
      // })
    ],
  };