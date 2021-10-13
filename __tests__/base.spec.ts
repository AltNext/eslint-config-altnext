import { rules } from '@typescript-eslint/eslint-plugin';
import execa from 'execa';

import { base } from '../src';
import { anonymizeSnapshot, getTsEslintRules, reduceBooleanArray } from './common';

describe('base', () => {
  it('should match snapshot', () => {
    expect(base).toMatchSnapshot();
  });

  it("should not include rules from '@typescript-eslint/eslint-plugin' that require type information", () => {
    const tsEslintRules = getTsEslintRules(base);
    const hasTypeInformationRules = reduceBooleanArray(
      Object.entries(rules).map(([name, rule]) => {
        if (!tsEslintRules.has(name)) {
          return false;
        }

        return rule.meta.docs?.requiresTypeChecking ?? false;
      }),
    );

    expect(hasTypeInformationRules).toBe(false);
  });

  it('should match config when running', async () => {
    const { stdout } = await execa('yarn', ['eslint', '-c', 'base.js', '--print-config', './test.ts']);

    console.log(process.env);

    expect(anonymizeSnapshot(stdout)).toMatchSnapshot();
  }, 10_000);
});
