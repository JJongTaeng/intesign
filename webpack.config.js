const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './website/app.ts',
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, './build'),
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        // exclude: [path.resolve(__dirname, './src')]
      },
      {
        test: /\.css$/, // .css 파일인 경우
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ]
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './website/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
  ],
};
