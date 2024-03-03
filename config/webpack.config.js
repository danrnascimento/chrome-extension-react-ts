"use strict";

import { merge } from "webpack-merge";
import CopyWebpackPlugin from "copy-webpack-plugin";
import common from "./webpack.common.js";
import Paths from "./paths.js";

// Merge webpack configuration files
const config = merge(common, {
  output: {
    path: Paths.build,
    filename: "[name].js",
  },
  entry: {
    popup: `${Paths.app}/popup.tsx`,
    contentScript: `${Paths.app}/contentScript.ts`,
    background: `${Paths.app}/background.ts`,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "**/*",
          context: "public",
        },
      ],
    }),
  ],
});

export default config;
