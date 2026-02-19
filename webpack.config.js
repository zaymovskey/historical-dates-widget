const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "main.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
    publicPath: "/"
  },
  devtool: "eval-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.module\.s[ac]ss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              esModule: true,
              modules: {
                namedExport: false,
                localIdentName: "[name]__[local]__[hash:base64:5]"
              }
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /\.module\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html")
    })
  ],
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
    open: true
  }
};
