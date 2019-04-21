const path = require("path");

module.exports = {
  entry: {
    foo: "./src/entry-foo.js",
    foo2015: "./src/entry-foo-es2015-module.js",
    "loader-demo": "./src/entry.loader.demo.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].bundle.js"
  },
  module: {
    rules: [{ test: /\.txt$/, use: "raw-loader" }]
  },
  optimization: {
    minimize: false
  }
};
