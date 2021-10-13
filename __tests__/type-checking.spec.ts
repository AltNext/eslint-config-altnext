import { rules } from '@typescript-eslint/eslint-plugin';

import { typeChecking } from '../src';
import { getSnapshot, getTsEslintRules, reduceBooleanArray } from './common';

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
    await expect(getSnapshot()).resolves.toMatchSnapshot();
  }, 10_000);
});
