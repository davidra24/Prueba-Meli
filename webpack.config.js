const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: [path.join(__dirname, 'src', 'frontend', 'index.js'), 
     // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true'
    ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: 'development',
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
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
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
        test: /\.(jpg|jpeg|png|gif|ico)$/,
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
    new webpack.HotModuleReplacementPlugin (),
    new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
        filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/app.css'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  }
};
