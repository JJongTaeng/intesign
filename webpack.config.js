const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  devServer: {
    port: 3000,
    open : true,
    hot: true,
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
  })],
};
