import type { Linter } from "eslint";

declare module "@chofufestival/linter-rules/eslint/withNext" {
  const config: Linter.FlatConfig[];
  export default config;
}
