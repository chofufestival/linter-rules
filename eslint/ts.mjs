/* eslint @stylistic/migrate/migrate-js: "error" */
/* eslint @stylistic/migrate/migrate-ts: "error" */

import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    extends: [...tseslint.configs.recommended, ...tseslint.configs.stylistic],
    languageOptions: {
      parserOptions: {
        project: true
      }
    },
    rules: {
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/no-duplicate-enum-values": "error",
      "@typescript-eslint/no-unsafe-declaration-merging": "error",
      "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
      "@typescript-eslint/class-literal-property-style": "error",
      "@typescript-eslint/consistent-generic-constructors": "error",
      "@typescript-eslint/consistent-indexed-object-style": "error",
      "@typescript-eslint/consistent-type-assertions": "off", // Disabled due to bug of typescript-eslint. 2024.03.08
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/no-confusing-non-null-assertion": "error",
      "@typescript-eslint/prefer-for-of": "error",
      "@typescript-eslint/prefer-function-type": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/require-await": "error"
    }
  },
  {
    files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
    extends: [tseslint.configs.disableTypeChecked]
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.d.cts", "**/*.mts"],
    rules: { "no-undef": "off" }
  }
);
