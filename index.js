'use strict'

module.exports = {
  'root': true,
  'env': {
    'es2021': true,
    'node': true
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'jsx': true,
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint',
    'react-hooks'
  ],
  'extends': ['./lib/standard-eslint-ts'],
  'settings': {
    'import/resolver': {
      'typescript': true,
      'node': true
    }
  },
  'overrides': [
    {
      'files': ['*.ts', '*.tsx'],
      'rules': {
        'no-undef': 'off'
      }
    },
    {
      'files': ['*.jsx', '*.tsx'],
      'rules': {
        '@typescript-eslint/consistent-type-imports': 'off'
      }
    }
  ],
  'rules': {
    'camelcase': 'off',
    'multiline-ternary': 'off',
    'no-labels': 'off',
    'no-useless-return': 'off',
    'no-void': 'off',
    'quote-props': 'off',
    'react/jsx-indent': 'warn',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-extra-parens': 'off',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/comma-dangle': ['warn', {
      'arrays': 'ignore',
      'enums': 'ignore',
      'exports': 'ignore',
      'functions': 'never',
      'generics': 'ignore',
      'imports': 'ignore',
      'objects': 'ignore',
      'tuples': 'ignore'
    }],

    'spaced-comment': 'off',

    'react-hooks/rules-of-hooks': 'off',
    'react-hooks/exhaustive-deps': 'off',

    '@typescript-eslint/consistent-type-imports': [
      'error',
      { 'prefer': 'type-imports', 'disallowTypeAnnotations': true }
    ],
    'import/order': [
      'warn',
      {
        'groups': ['builtin', 'external', ['internal', 'parent', 'sibling', 'index'], 'type'],
        'pathGroups': [
          {
            'pattern': 'react',
            'group': 'builtin',
            'position': 'before'
          }
        ],
        'pathGroupsExcludedImportTypes': ['react'],
        'newlines-between': 'always',
        'alphabetize': {
          'order': 'asc'
        }
      }
    ]
  }
}
