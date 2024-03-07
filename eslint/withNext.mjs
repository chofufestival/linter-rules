import js from "@eslint/js";
import gitignore from "eslint-config-flat-gitignore";
import prettierConfig from "eslint-config-prettier";

import baseConfig from "./base.mjs";
import importConfig from "./imports.mjs";
import nextConfig from "./next.mjs";
import tsConfig from "./ts.mjs";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  gitignore(),
  js.configs.recommended,
  baseConfig,
  importConfig,
  ...tsConfig,
  ...nextConfig,
  prettierConfig
];
