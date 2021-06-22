/* eslint-disable max-lines */
import type { Linter } from 'eslint';

import { ERROR, WARN } from './consts';

const typeChecking: Linter.Config = {
  parserOptions: { ecmaFeatures: { impliedStrict: true, globalReturn: true }, ecmaVersion: 6 },
  env: { browser: true, node: true },
  globals: { console: true },
  reportUnusedDisableDirectives: true,
  plugins: ['import'],
  settings: {
    react: { version: '17.0.2' },
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
    'import/resolver': { node: { extensions: ['.ts', '.jsx', '.js', '.tsx', '.json'] }, typescript: {} },
    jest: { version: 27 },
  },
  extends: ['./configs/base', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],
  rules: {
    '@typescript-eslint/no-base-to-string': ERROR,
    '@typescript-eslint/no-confusing-void-expression': ERROR,
    '@typescript-eslint/no-floating-promises': 1,
    '@typescript-eslint/no-implied-eval': ERROR,
    '@typescript-eslint/no-throw-literal': ERROR,
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': ERROR,
    '@typescript-eslint/no-unnecessary-type-arguments': ERROR,
    '@typescript-eslint/prefer-nullish-coalescing': WARN,
    '@typescript-eslint/prefer-readonly': ERROR,
    '@typescript-eslint/prefer-reduce-type-parameter': ERROR,
    '@typescript-eslint/require-array-sort-compare': ERROR,
    '@typescript-eslint/restrict-template-expressions': WARN,
    '@typescript-eslint/return-await': [ERROR, 'in-try-catch'],
    '@typescript-eslint/switch-exhaustiveness-check': ERROR,
    // TODO - fix
    '@typescript-eslint/unbound-method': WARN,
    '@typescript-eslint/require-await': ERROR,
  },
  overrides: [{ files: ['./**/{__mocks__,__tests__}/*.ts{x,}'], rules: { '@typescript-eslint/require-await': 1 } }],
};

export = typeChecking;
