const path = require("path"); 

module.exports = {
  name: "wordrelay-setting",
  mode: "development", 
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: { // 입력
    app: "./hello.tsx",
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },

  output: { // 출력
    path: path.join(__dirname, "dist"), 
    //출력할 파일 이름
    filename: "app.js",
  },
};