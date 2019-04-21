const path = require("path");

module.exports = {
  entry: {
    foo: "./src/entry-foo.js",
    foo2015: "./src/entry-foo-es2015-module.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].bundle.js"
  },
  optimization: {
    minimize: false
  }
};
