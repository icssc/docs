// @ts-check

/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    sourceType: "module",
  },
  plugins: ["import", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "prettier",
    "next/core-web-vitals",
  ],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc" },
        "newlines-between": "always",
      },
    ],
  },
  ignorePatterns: ["*.cjs", "next.config.mjs"],
  env: {
    es2022: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

module.exports = config;
