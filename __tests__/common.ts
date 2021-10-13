const PREFIX = '@typescript-eslint/';

export const getTsEslintRules = ({ rules }: { rules?: Record<string, unknown> }): Set<string> =>
  new Set(
    Object.keys(rules ?? {})
      .filter((name) => name.startsWith(PREFIX))
      .map((name) => name.slice(PREFIX.length)),
  );

export const reduceBooleanArray = (arr: boolean[], defaultValue = false): boolean =>
  arr.reduce((acc, value) => (defaultValue ? acc && value : acc || value), defaultValue);
