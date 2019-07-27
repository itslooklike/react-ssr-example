module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:security/recommended',
    'plugin:promise/recommended',
    'plugin:react/recommended',
    'plugin:ramda/recommended',
    'plugin:jest/recommended',
    'plugin:unicorn/recommended',
    'prettier',
    'prettier/react',
  ],
  plugins: ['ramda', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 0,
    'unicorn/prevent-abbreviations': 0,
    'no-console': 1,
  },
}
