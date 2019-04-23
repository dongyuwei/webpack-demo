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
        use: [ "style-loader", "css-loader?sourceMap"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.less$/,
        use: [
          //当配置多个loader时，loader的执行顺序时从右往左，右边的执行结果作为参数传到左边
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              sourceMap: true
            }
          },
          {
            loader: "less-loader", // compiles Less to CSS
            options: {
              sourceMap: true
            }
          }
        ]
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
