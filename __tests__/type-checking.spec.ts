import { rules } from '@typescript-eslint/eslint-plugin';
import execa from 'execa';

import { typeChecking } from '../src';
import { anonymizeSnapshot, getTsEslintRules, reduceBooleanArray } from './common';

describe('type-checking', () => {
  it('should match snapshot', () => {
    expect(typeChecking).toMatchSnapshot();
  });

  it("should only include rules from '@typescript-eslint/eslint-plugin'", () => {
    const tsEslintRules = getTsEslintRules(typeChecking);

    expect(Array.from(tsEslintRules)).toHaveLength(Object.keys(typeChecking.rules ?? {}).length);
  });

  it("should only include rules from '@typescript-eslint/eslint-plugin' that require type information", () => {
    const tsEslintRules = getTsEslintRules(typeChecking);
    const hasTypeInformationRules = reduceBooleanArray(
      Object.entries(rules).map(([name, rule]) => {
        if (!tsEslintRules.has(name)) {
          return true;
        }

        return rule.meta.docs?.requiresTypeChecking ?? false;
      }),
      true,
    );

    expect(hasTypeInformationRules).toBe(true);
  });

  it('should match config when running', async () => {
    const { stdout } = await execa('yarn', ['eslint', '--print-config', './test.ts']);

    expect(anonymizeSnapshot(stdout)).toMatchSnapshot();
  }, 10_000);
});
