import js from "@eslint/js";
import gitignore from "eslint-config-flat-gitignore";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
import tsEslint from "typescript-eslint";

export default [
  gitignore(),
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  js.configs.recommended,
  ...tsEslint.configs.recommended,
  eslintConfigPrettier,
];
