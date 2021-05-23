module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          ".es",
          ".es6",
          ".mjs",
          ".json",
        ],
      },
    ],
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true,
      },
    ],
  ],
};
