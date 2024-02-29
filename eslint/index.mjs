import js from "@eslint/js";
import stylisticMigrate from "@stylistic/eslint-plugin-migrate";
import gitignore from "eslint-config-flat-gitignore";
import prettierConfig from "eslint-config-prettier";

import baseConfig from "./base.mjs";
import importConfigs from "./imports.mjs";
import tsConfigs from "./ts.mjs";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  gitignore(),
  js.configs.recommended,
  baseConfig,
  importConfigs,
  ...tsConfigs,
  prettierConfig,
  {
    plugins: { "@stylistic/migrate": stylisticMigrate }
  }
];
