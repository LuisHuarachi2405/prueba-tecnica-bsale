const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/scripts/theme.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),

    new MiniCssExtractPlugin ()
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /.(css|sass|scss)$/,
        use: [{loader: MiniCssExtractPlugin.loader, options: {publicPath: "./src/styles/theme.scss"}}, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
};