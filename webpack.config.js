const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = env => {
  console.log("===========env=========", env);

  return {
    entry: {
      index: "./src/index.js"
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[contenthash].bundle.js"
    },
    optimization: {
      splitChunks: {
        chunks: "all"
      }
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
            //当配置多个loader时，loader的执行顺序时从右往左，右边的执行结果作为参数传到左边
            {
              loader: "style-loader" // creates style nodes from JS strings
            },
            {
              loader: "css-loader", // translates CSS into CommonJS
              options: {
                sourceMap: true,
                modules: "local" // css module
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
        template: "./src/index.html"
      })
    ],
    mode: env.mode
  };
};
