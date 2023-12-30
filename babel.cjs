module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          modules: false,
          targets: {
            node: 20,
          },
        },
      ],
    ],
    plugins: [["@babel/plugin-proposal-decorators", { version: "2023-05" }]],
  };
};
