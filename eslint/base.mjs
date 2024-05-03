import stylistic from "@stylistic/eslint-plugin";
import globals from "globals";

export default {
  plugins: {
    "@stylistic": stylistic
  },
  languageOptions: {
    globals: {
      ...globals.es2021,
      ...globals.node
    }
  },
  rules: {
    "@stylistic/no-extra-semi": "error",
    "@stylistic/indent": ["error", 2],
    "@stylistic/quotes": ["error", "double"],
    "@stylistic/semi": ["error", "always"],
    "@stylistic/quote-props": ["error", "consistent-as-needed"],
    "@stylistic/jsx-indent": ["error", 2],
    "eqeqeq": ["error", "always"],
    "no-console": "warn",
    "no-undefined": "error",
    "no-var": "error"
  }
};
