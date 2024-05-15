/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended-vue",
    "stylelint-config-recess-order",
    "@stylistic/stylelint-config",
    "stylelint-config-html/vue"
  ],
  plugins: [
    "@double-great/stylelint-a11y",
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-value-no-unknown-custom-properties"
  ],
  rules: {
    "a11y/font-size-is-readable": true,
    "a11y/no-obsolete-attribute": true,
    "a11y/no-obsolete-element": true,
    "a11y/no-outline-none": true,
    "a11y/selector-pseudo-class-focus": true,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "layer", "apply"]
      }
    ],
    "color-named": "never",
    "csstools/value-no-unknown-custom-properties": true,
    "declaration-property-value-no-unknown": true,
    "function-no-unknown": [
      true,
      {
        ignoreFunctions: ["theme", "screen"]
      }
    ],
    "plugin/declaration-block-no-ignored-properties": true
  },
  ignoreFiles: ["**/node_modules/**"]
};
