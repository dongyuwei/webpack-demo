const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = env => {
  return {
    entry: {
      index: "./src/index.js"
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[contenthash].bundle.js"
    },
    mode: env.mode,
    optimization: {
      splitChunks: {
        chunks: "all"
      },
      usedExports: true
    },
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ["file-loader"]
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                modules: "local" // css module
              }
            },
            {
              loader: "less-loader",
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
        template: "./src/index.html"
      })
    ]
  };
};
