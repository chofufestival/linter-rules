/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order",
    "@stylistic/stylelint-config"
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
        "ignoreAtRules": ["tailwind", "layer", "apply"]
      }
    ],
    "color-named": "never",
    "declaration-property-value-no-unknown": true,
    "plugin/declaration-block-no-ignored-properties": true,
    "csstools/value-no-unknown-custom-properties": true,
    "function-no-unknown": [
      true,
      {
        "ignoreFunctions": ["theme", "screen"]
      }
    ]
  },
  ignoreFiles: ["**/node_modules/**"]
};
