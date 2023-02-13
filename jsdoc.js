'use strict'

module.exports = {
  plugins: [
    'jsdoc'
  ],
  extends: [
    './',
    'plugin:jsdoc/recommended'
  ],
  root: true,
  settings: {
    jsdoc: {
      mode: 'typescript'
    }
  },
  rules: {
    'jsdoc/check-types': 'off',
    'jsdoc/no-undefined-types': 'off',
    'jsdoc/require-jsdoc': 'warn',
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-property-description': 'off',
    'jsdoc/require-returns-description': 'off',
    'jsdoc/require-yields': 'off',
    'jsdoc/valid-types': 'off'
  }
}
