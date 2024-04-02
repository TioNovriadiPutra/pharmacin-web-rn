module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@containers": "./src/containers",
            "@controllers": "./src/controllers",
            "@hooks": "./src/hooks",
            "@models": "./src/models",
            "@navigation": "./src/navigation",
            "@routes": "./src/routes",
            "@services": "./src/services",
            "@store": "./src/store",
            "@theme": "./src/theme",
            "@utils": "./src/utils",
            "@views": "./src/views",
          },
        },
      ],
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
    ],
  };
};
