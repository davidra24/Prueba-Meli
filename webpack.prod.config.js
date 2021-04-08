const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const dotenv = require('dotenv')
const TerserPlugin = require("terser-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

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
    new FaviconsWebpackPlugin(path.join(__dirname, 'public', 'favicon.png'))
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  }
};
