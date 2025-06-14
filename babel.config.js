module.exports = function(api) {
    api.cache(true);

    //implementamos o mapeamento de telas
    
    return {
      presets: ['babel-preset-expo'],
      plugins: [
        [
          'module-resolver',
          {
            root: ['./src'],
            alias: {
              '@assets': './src/assets',
              '@components': './src/components',
              '@screens': './src/screens',
              '@storage': './src/storage',
              '@theme': './src/theme',
              '@utils': './src/utils',
            }
          }
        ]
      ]
    };
  };