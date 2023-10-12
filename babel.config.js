module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      require.resolve("expo-router/babel"),
      [
        "module-resolver",
        {
          alias: {
            "@": ".",
          },
        },
      ],
      "@babel/plugin-transform-export-namespace-from",
      "react-native-reanimated/plugin",
      "module:react-native-dotenv",
    ],
  };
};
