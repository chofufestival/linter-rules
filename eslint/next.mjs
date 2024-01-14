import { compat } from "./lib/compat.mjs";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      "react/jsx-boolean-value": "warn",
      "react/jsx-curly-brace-presence": "error"
    }
  }
];
