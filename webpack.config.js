const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  name: "wordrelay-setting",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: { // 입력
    index: "./build/hello.tsx",
  },
  output: { // 출력
    path: path.join(__dirname, "dist"),
    //출력할 파일 이름
    filename: "app.js",
  },

  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },


};