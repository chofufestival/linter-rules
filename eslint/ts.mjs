import typescriptEslint from "@typescript-eslint/eslint-plugin";

import { compat } from "./lib/compat.mjs";
import { __dirname } from "./lib/dir.mjs";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  ...compat.extends("plugin:@typescript-eslint/recommended"),
  ...compat.extends("plugin:@typescript-eslint/stylistic"),
  {
    plugins: {
      "@typescript-eslint": typescriptEslint
    },
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname
      }
    },
    rules: {
      "@typescript-eslint/no-extra-semi": "error",
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
  }
];
