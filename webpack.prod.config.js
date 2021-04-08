const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const dotenv = require('dotenv')
const TerserPlugin = require("terser-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const RobotstxtPlugin = require("robotstxt-webpack-plugin");
const WebpackPwaManifest = require('webpack-pwa-manifest')

dotenv.config();
module.exports = {
  entry: [path.join(__dirname, 'src', 'frontend', 'index.js')],
  output: {
    path: path.resolve(__dirname, 'src', 'server', 'public'),
    filename: 'assets/app.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: process.env.ENV,
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|ico|svg)$/,
        use: [
          {
            'loader': 'file-loader',
            options: {
              name: 'assets/img/[name].[ext]'
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/app.css'
    }),
    new FaviconsWebpackPlugin({
      logo: path.join(__dirname, 'public', 'favicon.png'),
      prefix: 'assets/icons/'
    }),
    new RobotstxtPlugin({
      policy: [
        {
          userAgent: "*",
          disallow: "/",
        }
      ],
      host: "https://mercado-libre-challenge.herokuapp.com/",
    }),
    new WebpackPwaManifest({
      "name": "Mercado Libre",
      "short_name": "MeLi",
      "description": "La comunidad de compra y venta online más grande de América Latina.",
      "dir": "auto",
      "lang": "es-CO",
      "display": "standalone",
      "orientation": "any",
      "start_url": "https://mercado-libre-challenge.herokuapp.com/",
      "filename": "manifest.json",
      "icons": [
        {
          "src": "public/android-chrome-36x36.png",
          "sizes": "36x36",
          "type": "image/png",
          "destination": "assets/icons"
        },
        {
          "src": "public/android-chrome-48x48.png",
          "sizes": "48x48",
          "type": "image/png",
          "destination": "assets/icons"
        },
        {
          "src": "public/android-chrome-72x72.png",
          "sizes": "72x72",
          "type": "image/png",
          "destination": "assets/icons"
        },
        {
          "src": "public/android-chrome-96x96.png",
          "sizes": "96x96",
          "type": "image/png",
          "destination": "assets/icons"
        },
        {
          "src": "public/android-chrome-144x144.png",
          "sizes": "144x144",
          "type": "image/png",
          "destination": "assets/icons"
        },
        {
          "src": "public/android-chrome-192x192.png",
          "sizes": "192x192",
          "type": "image/png",
          "destination": "assets/icons",
        },
        {
          "src": "public/android-chrome-256x256.png",
          "sizes": "256x256",
          "type": "image/png",
          "destination": "assets/icons"
        },
        {
          "src": "public/android-chrome-384x384.png",
          "sizes": "384x384",
          "type": "image/png",
          "destination": "assets/icons"
        },
        {
          "src": "public/android-chrome-512x512.png",
          "sizes": "512x512",
          "type": "image/png",
          "destination": "assets/icons"
        }
      ],
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  }
};
