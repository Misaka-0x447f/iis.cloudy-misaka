module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'standard',
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'vue/comma-dangle': ['error', 'only-multiline'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '_+', argsIgnorePattern: '_+' },
    ],
  },
}
