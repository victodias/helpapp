
export default function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // below, configure 'module-resolver' plugin and path mappings
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.json'
          ],
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@assets': './src/assets'
          }
        }
      ]
    ]
  };
}
