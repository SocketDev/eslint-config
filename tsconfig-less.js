'use strict'

module.exports = {
  'extends': [
    './'
  ],
  root: true,
  parserOptions: {
    project: [],
  },
  rules: {
    // Skip rules that require a "tsconfig"
    '@typescript-eslint/no-implied-eval': 0,
    '@typescript-eslint/no-throw-literal': 0,
  }
}
