const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  devServer: {
    contentBase: "./dist"
  },
  entry: {
    index: "./src/index.js",
    foo: "./src/entry-foo.js",
    foo2015: "./src/entry-foo-es2015-module.js",
    "loader-demo": "./src/entry.loader.demo.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].bundle.js"
  },
  module: {
    rules: [
      { test: /\.txt$/, use: "raw-loader" },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body",
      chunks: ["index"]
    })
  ],
  mode: "development"
};
