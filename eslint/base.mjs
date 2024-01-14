import globals from "globals";

/** @type {import("eslint").Linter.FlatConfig} */
export default {
  languageOptions: {
    globals: {
      ...globals.es2021,
      ...globals.node
    }
  },
  rules: {
    "no-extra-semi": "error",
    "require-await": "off"
  }
};
