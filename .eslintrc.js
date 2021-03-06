module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['google'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'space-before-function-paren': 'off',
    'require-jsdoc': 'off',
    'quote-props': 'off',
  },
};
