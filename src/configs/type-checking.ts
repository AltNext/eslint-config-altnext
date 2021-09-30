import type { Linter } from 'eslint';

import { ERROR, OFF, WARN } from './consts';

const typeChecking: Linter.Config = {
  extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking', './src/configs/base'],
  rules: {
    '@typescript-eslint/dot-notation': ERROR,
    '@typescript-eslint/naming-convention': [
      ERROR,
      {
        selector: 'property',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
        filter: { regex: '^process\\.env\\.[A-Z][A-Z_]*$', match: false },
      },
      { selector: 'variable', format: ['camelCase', 'UPPER_CASE', 'PascalCase'], leadingUnderscore: 'allow' },
      { selector: 'typeLike', format: ['PascalCase'] },
      { selector: 'typeAlias', format: ['PascalCase'], custom: { regex: '^I[A-Z]', match: false } },
      { selector: 'interface', format: ['PascalCase'], prefix: ['I'] },
    ],
    '@typescript-eslint/no-base-to-string': ERROR,
    '@typescript-eslint/no-confusing-void-expression': ERROR,
    '@typescript-eslint/no-floating-promises': WARN,
    '@typescript-eslint/no-implied-eval': ERROR,
    '@typescript-eslint/no-meaningless-void-operator': [ERROR, { checkNever: false }],
    '@typescript-eslint/no-throw-literal': ERROR,
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': ERROR,
    '@typescript-eslint/no-unnecessary-type-arguments': ERROR,
    '@typescript-eslint/no-unsafe-assignment': WARN,
    '@typescript-eslint/no-unsafe-call': WARN,
    '@typescript-eslint/no-unsafe-member-access': WARN,
    '@typescript-eslint/no-unsafe-return': WARN,
    '@typescript-eslint/prefer-nullish-coalescing': WARN,
    '@typescript-eslint/prefer-readonly': ERROR,
    '@typescript-eslint/prefer-reduce-type-parameter': ERROR,
    '@typescript-eslint/prefer-return-this-type': ERROR,
    '@typescript-eslint/require-array-sort-compare': ERROR,
    '@typescript-eslint/require-await': ERROR,
    '@typescript-eslint/restrict-template-expressions': WARN,
    '@typescript-eslint/return-await': [ERROR, 'in-try-catch'],
    '@typescript-eslint/switch-exhaustiveness-check': ERROR,
    '@typescript-eslint/unbound-method': WARN,
  },
  overrides: [
    { files: ['./**/{__mocks__,__tests__}/*.ts{x,}'], rules: { '@typescript-eslint/require-await': WARN } },
    {
      files: ['./**/*.spec.ts'],
      rules: {
        '@typescript-eslint/no-unsafe-assignment': OFF,
        '@typescript-eslint/no-unsafe-return': OFF,
        '@typescript-eslint/unbound-method': OFF,
      },
    },
  ],
};

export = typeChecking;
