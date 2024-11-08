import globals from "globals";
import pluginJs from "@eslint/js";
import tailwind from "eslint-plugin-tailwindcss";

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...tailwind.configs["flat/recommended"],
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];