import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier/flat";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  // Build output and vendor code are never linted.
  globalIgnores(["dist/", "coverage/"]),

  // Baseline for every JS file in the project.
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
    rules: {
      // Modern syntax
      "no-var": "error",
      "prefer-const": "error",
      "prefer-template": "error",
      "prefer-arrow-callback": "error",
      "object-shorthand": "error",
      "prefer-destructuring": ["error", { object: true, array: false }],

      // Correctness
      eqeqeq: ["error", "always", { null: "ignore" }],
      "no-implicit-coercion": "error",
      "no-return-await": "error",
      "require-atomic-updates": "error",
      "array-callback-return": "error",
      "consistent-return": "error",
      "no-unreachable-loop": "error",
      "no-promise-executor-return": "error",
      "no-constant-binary-expression": "error",

      // Hygiene
      curly: ["error", "all"],
      "no-else-return": ["error", { allowElseIf: false }],
      "no-lonely-if": "error",
      "no-nested-ternary": "error",
      "no-param-reassign": ["error", { props: false }],
      "no-shadow": "error",
      "no-throw-literal": "error",
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },

  // Application source runs in the browser.
  {
    files: ["src/**/*.js"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-alert": "error",
    },
  },

  // Build tooling and config files run in Node.
  {
    files: ["webpack.*.js", "eslint.config.js", "*.config.js"],
    languageOptions: {
      globals: globals.nodeBuiltin,
    },
    rules: {
      "no-console": "off",
    },
  },

  // Must stay last: disables any rule that conflicts with Prettier.
  prettier,
]);
