const config = {
  entry: {
    root: __dirname + "/src/index",
  },
  mode: "development",
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },

  module: {
    rules: [
      {
        test: /\.[jt]s$/,
        parser: {
          worker: ["magicContextName.addModule()", "..."],
        },
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
};

module.exports = config;
