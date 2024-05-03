import type { Linter } from "eslint";

type FlatConfig = Linter.FlatConfig;

declare module "@chofufestival/linter-rules/eslint/withNext" {
  export = FlatConfig;
}
