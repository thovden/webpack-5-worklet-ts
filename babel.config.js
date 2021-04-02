const isDevelopment =
  process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test";

module.exports = {
  presets: [["@babel/preset-env"]],
  plugins: [
    "@babel/plugin-proposal-optional-chaining",
    isDevelopment ? "react-refresh/babel" : null,
  ].filter(Boolean),
};
