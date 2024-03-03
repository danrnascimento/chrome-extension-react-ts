import SizePlugin from "size-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import DotEnvPlugin from "dotenv-webpack";
import webpack from "webpack";

export default {
  devtool: "source-map",
  stats: {
    all: false,
    errors: true,
    builtAt: true,
  },
  resolve: {
    alias: {
      src: "/src",
    },
    extensions: [".js", ".jsx", ".mjs", ".cjs", ".ts", ".tsx"],
  },
  module: {
    rules: [
      // Help webpack in understanding CSS files imported in .js files
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

      // Check for images imported in .js files and
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
              name: "[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
      },
      {
        test: /\.m?js/,
        type: "javascript/auto",
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(ts|tsx)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    // Setup .env file
    new DotEnvPlugin({ systemvars: true }),

    // Print file sizes
    new SizePlugin({}),

    // Extract CSS into separate files
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),

    // Use react globally
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
};
