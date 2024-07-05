import type { Linter } from "eslint";

declare module "@chofufestival/linter-rules/eslint" {
  const config: Linter.FlatConfig[];
  export default config;
}
