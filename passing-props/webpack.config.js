var HTMLWebpackPlugin = require("html-webpack-plugin");
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + "/app/index.html",
  filename: "index.html",
  inject: "body",
});

module.exports = {
  entry: __dirname + "/app/components/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["", ".js", ".jsx", ".css"],
  },
  output: {
    filename: "transformed.js",
    path: __dirname + "/build",
  },
  plugins: [HTMLWebpackPluginConfig],
};
