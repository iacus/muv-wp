const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const settings = {
	// The BrowserSync hostname
	host: 'muv.local',
	// The port to run BrowserSync's server on
	port: 8888,

	// A target to proxy all BrowserSync requests to.
	// This can be a local web server, Vagrant or a docker container.
	// This is your local/VM WordPress development site.
	proxy: 'muv.local',

	// If you have your Site URL for WordPress set to anything else other than the proxy address,
	// we need to override all URL. In this example I am overriding my site at http://training-ground.local
	urlOverride: /muv.local\.8888/g
};

module.exports = {
  entry: [
    './src/js/main.js',
    './src/scss/styles.scss'
 ],
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, 'assets'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './src/fonts', to: '../assets/fonts' }
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "css/style.css"
    }),
    new BrowserSyncPlugin({
      host: settings.host,
      port: settings.port,
      proxy: settings.proxy,

      // rewriteRules: [
      //   {
      //     match: settings.urlOverride,
      //     fn: function (req, res, match) {
      //       return settings.host + ':' + settings.port;
      //     }
      //   }
      // ]
    })
  ],
  module: {
    rules: [
       {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
             loader: 'babel-loader'
          }
       },
       {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../'
              }
            },
            {
              loader: "css-loader",
            },
            {
              loader: "sass-loader"
            }
          ]
       },
       {
          test: /\.(woff|woff2|ttf|otf|eot)$/,
          use: [
             {
                loader: 'file-loader',
                options: {
                   context: path.resolve(__dirname, 'src'),
                   outputPath: 'fonts'
                }
             }
          ]
       }
    ]
  }
};
