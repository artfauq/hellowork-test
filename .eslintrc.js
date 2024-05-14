/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: {
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    project: './tsconfig.eslint.json',
    sourceType: 'module',
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.mjs', '.ts', '.tsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.eslint.json',
      },
    },
  },
  plugins: ['@typescript-eslint', 'import', 'prettier', 'promise', 'unused-imports'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:promise/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'class-methods-use-this': 'off',
    'consistent-return': 'error',
    'default-case': 'error',
    'global-require': 'warn',
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'max-classes-per-file': 'off',
    'no-console': 'off',
    'no-extra-semi': 'off',
    'no-param-reassign': 'off',
    'no-promise-executor-return': 'off',
    'no-underscore-dangle': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'any', prev: '*', next: 'import' },
      { blankLine: 'any', prev: 'case', next: ['case', 'default'] },
      { blankLine: 'any', prev: 'if', next: 'if' },
      { blankLine: 'any', prev: 'export', next: 'export' },
      { blankLine: 'any', prev: 'expression', next: 'expression' },
      { blankLine: 'always', prev: ['const', 'let'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
    ],
    'prefer-regex-literals': 'off',

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        mjs: 'never',
      },
    ],
    'import/no-cycle': 'warn',
    'import/order': [
      'error',
      {
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        'pathGroups': [
          {
            pattern: '{next,next/*,react,react/*}',
            group: 'builtin',
            position: 'after',
          },
        ],
        'warnOnUnassignedImports': false,
        'pathGroupsExcludedImportTypes': ['builtin'],
      },
    ],
    'import/prefer-default-export': 'off',

    'unused-imports/no-unused-imports': 'error',

    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',

    '@typescript-eslint/no-unused-vars': 'warn',
  },
}
