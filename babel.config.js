module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            assets: './assets',
            src: './src',
            types: './src/types',
            components: './src/components',
            screens: './src/screens',
            contexts: './src/contexts',
            navigation: './src/navigation',
          },
        },
      ],
    ],
  };
};
