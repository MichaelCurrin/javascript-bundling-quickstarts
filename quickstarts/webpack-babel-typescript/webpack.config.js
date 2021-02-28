module.exports = {
  mode: "production",

  context: __dirname + "/src",
  entry: "./index",
  output: {
    path: __dirname,
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env"],
        },
      },
    ],
  },
};
