/* eslint-disable max-lines */
import type { Linter } from 'eslint';

import { ERROR, OFF, WARN } from './consts';

const base: Linter.Config = {
  parserOptions: { ecmaFeatures: { impliedStrict: true, globalReturn: true }, ecmaVersion: 6 },
  env: { browser: true, node: true },
  globals: { console: true },
  plugins: ['import'],
  settings: {
    react: { version: '17.0.2' },
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
    'import/resolver': { node: { extensions: ['.ts', '.jsx', '.js', '.tsx', '.json'] }, typescript: {} },
    jest: { version: 27 },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:node/recommended',
    'plugin:node/recommended-module',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jest-formatting/strict',
    'plugin:playwright/jest-playwright',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'array-callback-return': ERROR,
    'arrow-body-style': ERROR,
    'consistent-return': [WARN, { treatUndefinedAsUnspecified: true }],
    curly: ERROR,
    'default-case': ERROR,
    eqeqeq: ERROR,
    'guard-for-in': WARN,
    'lines-between-class-members': ERROR,
    'max-lines': ERROR,
    'no-bitwise': ERROR,
    'no-caller': ERROR,
    'no-case-declarations': OFF,
    'no-console': WARN,
    'no-constructor-return': ERROR,
    'no-continue': WARN,
    'no-else-return': ERROR,
    'no-eval': ERROR,
    'no-extend-native': ERROR,
    'no-extra-bind': ERROR,
    'no-floating-decimal': ERROR,
    'no-implicit-coercion': [ERROR, { allow: ['!!'] }],
    'no-invalid-this': WARN,
    'no-iterator': ERROR,
    'no-lone-blocks': ERROR,
    'no-lonely-if': ERROR,
    'no-loop-func': ERROR,
    'no-multi-assign': ERROR,
    'no-nested-ternary': ERROR,
    'no-new': ERROR,
    'no-new-func': ERROR,
    'no-new-wrappers': ERROR,
    'no-param-reassign': ERROR,
    'no-path-concat': ERROR,
    'no-plusplus': [ERROR, { allowForLoopAfterthoughts: true }],
    'no-process-exit': OFF,
    'no-proto': ERROR,
    'no-return-assign': ERROR,
    'no-script-url': ERROR,
    'no-self-compare': ERROR,
    'no-shadow': ERROR,
    'no-template-curly-in-string': ERROR,
    'no-undef-init': ERROR,
    'no-underscore-dangle': [WARN, { allowAfterThis: true, allowAfterSuper: true }],
    'no-unmodified-loop-condition': ERROR,
    'no-unneeded-ternary': [ERROR, { defaultAssignment: false }],
    'no-useless-call': ERROR,
    'no-useless-computed-key': ERROR,
    'no-useless-concat': ERROR,
    'no-useless-return': ERROR,
    'no-void': ERROR,
    'object-shorthand': ERROR,
    'one-var': [ERROR, 'never'],
    'operator-assignment': ERROR,
    'padding-line-between-statements': [
      ERROR,
      // Always require blank lines after directive (like 'use-strict'), except between directives
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
      // Always require blank lines after import, except between imports
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'any', prev: 'import', next: 'import' },
      // Always require blank lines before and after every sequence of variable declarations and export
      { blankLine: 'always', prev: '*', next: ['const', 'let', 'var', 'export'] },
      { blankLine: 'always', prev: ['const', 'let', 'var', 'export'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var', 'export'], next: ['const', 'let', 'var', 'export'] },
      // Always require blank lines before and after class declaration, if, do/while, switch, try
      { blankLine: 'always', prev: '*', next: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'] },
      { blankLine: 'always', prev: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'], next: '*' },
      // Always require blank lines before return statements
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'prefer-destructuring': ERROR,
    'prefer-exponentiation-operator': ERROR,
    'prefer-numeric-literals': ERROR,
    'prefer-promise-reject-errors': ERROR,
    'prefer-regex-literals': ERROR,
    'prefer-template': ERROR,
    'quote-props': [ERROR, 'as-needed'],
    radix: ERROR,
    'spaced-comment': ERROR,
    'sort-imports': [ERROR, { ignoreDeclarationSort: true }],
    strict: ERROR,
    yoda: ERROR,

    '@typescript-eslint/array-type': ERROR,
    '@typescript-eslint/ban-ts-comment': [ERROR, { 'ts-expect-error': false }],
    '@typescript-eslint/ban-ts-ignore': OFF,
    '@typescript-eslint/ban-types': WARN,
    '@typescript-eslint/camelcase': OFF,
    '@typescript-eslint/consistent-indexed-object-style': ERROR,
    '@typescript-eslint/consistent-type-definitions': ERROR,
    '@typescript-eslint/consistent-type-imports': ERROR,
    '@typescript-eslint/class-literal-property-style': ERROR,
    '@typescript-eslint/default-param-last': ERROR,
    '@typescript-eslint/explicit-function-return-type': [ERROR, { allowExpressions: true }],
    '@typescript-eslint/explicit-member-accessibility': [ERROR, { accessibility: 'no-public' }],
    '@typescript-eslint/interface-name-prefix': OFF,
    '@typescript-eslint/method-signature-style': [ERROR, 'method'],
    '@typescript-eslint/no-empty-function': WARN,
    '@typescript-eslint/no-empty-interface': [WARN, { allowSingleExtends: true }],
    '@typescript-eslint/no-extra-non-null-assertion': ERROR,
    '@typescript-eslint/no-extraneous-class': ERROR,
    '@typescript-eslint/no-invalid-void-type': ERROR,
    '@typescript-eslint/no-non-null-asserted-optional-chain': ERROR,
    '@typescript-eslint/no-parameter-properties': ERROR,
    '@typescript-eslint/no-unused-expressions': [ERROR, { allowTernary: true }],
    '@typescript-eslint/no-unused-vars': [ERROR, { ignoreRestSiblings: true }],
    '@typescript-eslint/no-use-before-define': WARN,
    '@typescript-eslint/no-useless-constructor': ERROR,
    '@typescript-eslint/no-var-requires': WARN,
    '@typescript-eslint/prefer-as-const': ERROR,
    '@typescript-eslint/prefer-for-of': ERROR,
    '@typescript-eslint/prefer-function-type': ERROR,
    '@typescript-eslint/prefer-optional-chain': WARN,
    '@typescript-eslint/prefer-ts-expect-error': ERROR,
    '@typescript-eslint/sort-type-union-intersection-members': ERROR,
    '@typescript-eslint/unified-signatures': ERROR,

    'node/handle-callback-err': ERROR,
    'node/no-deprecated-api': WARN,
    'node/no-new-require': ERROR,
    'node/no-path-concat': ERROR,
    'node/no-process-exit': ERROR,
    'node/no-missing-import': OFF,
    'node/no-unpublished-import': OFF,
    'node/no-unsupported-features/es-syntax': OFF,
    'node/no-unsupported-features/node-builtins': OFF,

    'jest/consistent-test-it': WARN,
    'jest/expect-expect': [
      WARN,
      {
        assertFunctionNames: [
          'expect',
          'assertErrorsUniqueAndStartsWith',
          'assertApiError',
          'assertError',
          'preTestAssertions',
          'assertAuthCalledWith',
          'assertResponse',
          'assertResponseAndNotCalled',
        ],
      },
    ],
    'jest/lowercase-name': [WARN, { allowedPrefixes: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'] }],
    'jest/max-nested-describe': WARN,
    'jest/no-deprecated-functions': WARN,
    'jest/no-duplicate-hooks': WARN,
    'jest/no-expect-resolves': WARN,
    'jest/no-identical-title': WARN,
    'jest/no-if': WARN,
    'jest/no-mocks-import': OFF,
    'jest/no-test-return-statement': WARN,
    'jest/no-truthy-falsy': WARN,
    'jest/prefer-called-with': WARN,
    'jest/prefer-hooks-on-top': WARN,
    'jest/prefer-spy-on': OFF,
    'jest/prefer-strict-equal': WARN,
    'jest/prefer-todo': WARN,
    'jest/prefer-to-be-null': WARN,
    'jest/prefer-to-be-undefined': WARN,
    'jest/prefer-to-have-length': WARN,
    'jest/require-top-level-describe': WARN,
    'jest/require-to-throw-message': WARN,

    'jest-formatting/padding-around-all': WARN,

    'jsx-a11y/no-autofocus': OFF,

    'react/display-name': WARN,
    'react/jsx-boolean-value': ERROR,
    'react/jsx-curly-brace-presence': [ERROR, { props: 'always' }],
    'react/jsx-fragments': ERROR,
    'react/jsx-no-bind': ERROR,
    'react/jsx-no-script-url': ERROR,
    'react/jsx-no-target-blank': ERROR,
    'react/jsx-no-useless-fragment': ERROR,
    'react/jsx-pascal-case': [ERROR, { ignore: ['DAB'] }],
    'react/jsx-sort-props': [ERROR, { shorthandLast: true, reservedFirst: true }],
    'react/jsx-uses-react': OFF,
    'react/no-array-index-key': ERROR,
    'react/no-children-prop': ERROR,
    'react/no-danger': ERROR,
    'react/no-string-refs': [ERROR, { noTemplateLiterals: true }],
    'react/no-unescaped-entities': ERROR,
    'react/prefer-stateless-function': ERROR,
    'react/prop-types': OFF,
    'react/react-in-jsx-scope': OFF,

    'import/extensions': [
      ERROR,
      // hoc hack because WebStorm
      { js: 'never', jsx: 'never', json: 'always', ts: 'never', tsx: 'never', hoc: 'always', service: 'always' },
    ],
    'import/first': ERROR,
    'import/named': OFF,
    'import/namespace': OFF,
    'import/newline-after-import': ERROR,
    'import/no-cycle': WARN,
    'import/no-default-export': ERROR,
    'import/no-extraneous-dependencies': ERROR,
    'import/no-unresolved': WARN,
    'import/no-useless-path-segments': ERROR,
    'import/order': [
      OFF,
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: '@(?:components|pages|hooks|store|services)/**',
            group: 'internal',
            position: 'after',
          },
          { pattern: '@altnext/**', group: 'external', position: 'after' },
        ],
      },
    ],

    'unicorn/better-regex': WARN,
    'unicorn/catch-error-name': OFF,
    'unicorn/consistent-function-scoping': OFF,
    'unicorn/explicit-length-check': WARN,
    'unicorn/filename-case': WARN,
    'unicorn/import-index': WARN,
    'unicorn/import-style': WARN,
    'unicorn/no-array-for-each': OFF,
    'unicorn/no-array-reduce': OFF,
    'unicorn/no-array-callback-reference': WARN,
    'unicorn/no-null': OFF,
    'unicorn/no-object-as-default-parameter': WARN,
    'unicorn/no-process-exit': OFF,
    'unicorn/no-unreadable-array-destructuring': OFF,
    'unicorn/no-useless-undefined': OFF,
    'unicorn/prefer-add-event-listener': WARN,
    'unicorn/prefer-array-flat': OFF,
    'unicorn/prefer-module': OFF,
    'unicorn/prefer-negative-index': WARN,
    'unicorn/prefer-node-protocol': OFF,
    'unicorn/prefer-number-properties': OFF,
    'unicorn/prefer-object-from-entries': OFF,
    'unicorn/prefer-optional-catch-binding': WARN,
    'unicorn/prefer-query-selector': WARN,
    'unicorn/prefer-set-has': WARN,
    'unicorn/prefer-spread': OFF,
    'unicorn/prefer-string-slice': WARN,
    'unicorn/prefer-ternary': WARN,
    'unicorn/prevent-abbreviations': OFF,
  },
  overrides: [
    {
      files: [
        './**/.eslintrc.js',
        './**/.prettierrc.js',
        './**/babel.config.js',
        './**/commitlint.config.js',
        './**/svgo.config.js',
      ],
      rules: { 'no-undef': OFF },
    },
    {
      files: ['./**/*.js'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': OFF,
        '@typescript-eslint/explicit-member-accessibility': OFF,
      },
    },
    { files: ['./**/{__mocks__,__tests__}/*.ts{x,}'], rules: { '@typescript-eslint/no-empty-function': OFF } },
    {
      files: ['./**/*.story.tsx', './**/webpack.{dev,prod,config}.ts', './**/jest.config.ts'],
      rules: { 'import/no-default-export': OFF },
    },
    { files: ['./**/*.story.tsx'], rules: { 'no-console': OFF } },
    {
      files: ['./**/*.spec.ts'],
      rules: { '@typescript-eslint/no-var-requires': OFF, 'unicorn/no-useless-undefined': OFF },
    },
  ],
};

export = base;
