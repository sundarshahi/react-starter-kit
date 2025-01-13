// import js from "@eslint/js";
// import globals from "globals";
// import reactHooks from "eslint-plugin-react-hooks";
// import reactRefresh from "eslint-plugin-react-refresh";
// import tseslint from "typescript-eslint";
// import react from "eslint-plugin-react";
// import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

// export default tseslint.config(
//   { ignores: ["dist", "*.css"] },
//   {
//     extends: [
//       js.configs.recommended,
//       ...tseslint.configs.recommendedTypeChecked,
//       ...tseslint.configs.stylisticTypeChecked,
//     ],
//     files: ["**/*.{ts,tsx}"],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//       parserOptions: {
//         project: ["./tsconfig.node.json", "./tsconfig.app.json"],
//         tsconfigRootDir: import.meta.dirname,
//       },
//     },
//     settings: { react: { version: "18.3" } },
//     plugins: {
//       "react-hooks": reactHooks,
//       "react-refresh": reactRefresh,
//       react,
//       eslintPluginPrettier
//     },
//     rules: {
//       ...reactHooks.configs.recommended.rules,
//       "react-refresh/only-export-components": [
//         "warn",
//         { allowConstantExport: true },
//       ],
//       ...react.configs.recommended.rules,
//       ...react.configs["jsx-runtime"].rules,
//     },
//   }
// );


import js from '@eslint/js'
import pluginQuery from '@tanstack/eslint-plugin-query'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-plugin-prettier/recommended'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
       ...pluginQuery.configs['flat/recommended'],
       ...tseslint.configs.recommendedTypeChecked,
      react.configs.flat.recommended,
      importPlugin.flatConfigs.recommended,
      jsxA11y.flatConfigs.recommended,
      prettier
    ],
     languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      react
    },
    settings: {
      react: {
        version: 'detect'
      },
      'import/resolver': {
        typescript: {
          project: './tsconfig.json'
        }
      }
    },
    rules: {
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
    ...reactHooks.configs.recommended.rules,
      'no-console': 'warn',
      'react/button-has-type': 'error',
      'react/react-in-jsx-scope': ['off'],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
    }
  }
)