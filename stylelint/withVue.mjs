/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-sass-guidelines",
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
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": null,
    "color-named": "never",
    "csstools/value-no-unknown-custom-properties": true,
    "declaration-property-value-no-unknown": true,
    "function-no-unknown": null,
    "media-query-no-invalid": null,
    "plugin/declaration-block-no-ignored-properties": true,
    "max-nesting-depth": 3,
    "selector-max-compound-selectors": null
  },
  ignoreFiles: ["**/node_modules/**"]
};
