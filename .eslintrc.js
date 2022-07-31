// .eslintrc.js
module.exports = {
  root: true,
  globals: {
    JSX: true,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  // parser: 'babel-eslint',
  parser: '@typescript-eslint/parser',
  parserOptions: {
    es6: true,
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
      modules: true,
    },
  },
  // to enable features such as async/await
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '/public/*'],
  // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'no-unreachable': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.js', '***/*.jsx'],
      // parser: 'babel-eslint',
      parser: '@typescript-eslint/parser',
      settings: {
        react: {
          version: 'detect',
        },
      },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      plugins: ['@typescript-eslint', 'prettier', 'simple-import-sort'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // TypeScript rules
        'plugin:react/recommended',
        'plugin:react-hooks/recommended', // React hooks rules
        'plugin:jsx-a11y/recommended', // Accessibility rules
        'prettier',
        'plugin:prettier/recommended',
      ],
      rules: {
        'no-unused-vars': 0,
        // 'jsx-a11y/anchor-is-valid': [0],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        // We will use TypeScript's types for component props instead
        'react/prop-types': 'off',
        // No need to import React when using Ne xt.js
        'react/react-in-jsx-scope': 'off',
        // This rule is not compatible with Next.js's <Link /> components
        'jsx-a11y/anchor-is-valid': 'off',
        // Why would you want unused vars?
        '@typescript-eslint/no-unused-vars': 'off',
        'no-template-curly-in-string': 'error',
        'object-curly-newline': 0,
        // "import/named": ["error"],
        'import/prefer-default-export': 'off',
        'react/jsx-fragments': 'off',
        'arrow-body-style': 'off',
        // "@typescript-eslint/indent": ["error", 2, {"SwitchCase": 1}],
        'no-undef': 'error',
        '@typescript-eslint/ban-ts-comment': 'off',
        'jsx-a11y/alt-text': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react-hooks/rules-of-hooks': 'off',
        'react/jsx-key': 'off',
      },
    },
  ],
};
