const config = {
  useTabs: false,
  singleQuote: true,
  trailingComma: 'none',
  printWidth: 120,
  plugins: [require('prettier-plugin-svelte')],
  overrides: [
    {
      files: '*.svelte',
      options: { parser: 'svelte' }
    }
  ]
};

module.exports = config;
