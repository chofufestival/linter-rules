/* eslint @stylistic/migrate/migrate-js: "error" */
/* eslint @stylistic/migrate/migrate-ts: "error" */

import tseslint from "typescript-eslint";

/*
...compat.extends("plugin:@typescript-eslint/recommended"),
  ...compat.extends("plugin:@typescript-eslint/stylistic"),
  */
export default tseslint.config({
  extends: [...tseslint.configs.recommended, ...tseslint.configs.stylistic],
  languageOptions: {
    parserOptions: {
      project: true
    }
  },
  rules: {
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/no-duplicate-enum-values": "off",
    "@typescript-eslint/no-unsafe-declaration-merging": "off",
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/ban-tslint-comment": "off",
    "@typescript-eslint/class-literal-property-style": "off",
    "@typescript-eslint/consistent-generic-constructors": "off",
    "@typescript-eslint/consistent-indexed-object-style": "off",
    "@typescript-eslint/consistent-type-assertions": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/no-confusing-non-null-assertion": "off",
    "@typescript-eslint/prefer-for-of": "off",
    "@typescript-eslint/prefer-function-type": "off",
    "@typescript-eslint/require-await": "error"
  }
});
