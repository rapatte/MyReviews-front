module.exports = {
  env: {
    browser: true,
    node: true,
  },

  extends: ["plugin:react/recommended", "airbnb", "airbnb/hooks", "prettier"],
  globals: {
    __PATH_PREFIX__: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  // parser: 'babel-eslint',
  plugins: ["prettier", "sort-keys-fix", "sort-destructure-keys"],
  root: true,
  rules: {
    "implicit-arrow-linebreak": 0,
    "import/prefer-default-export": 0,
    indent: [0, 4],
    "no-console": 0,
    "object-curly-newline": 0,
    "operator-linebreak": 0,
    "prettier/prettier": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react/forbid-prop-types": 0,
    "react/jsx-indent": 0,
    "react/jsx-indent-props": 0,
    "react/jsx-props-no-spreading": 0,
    "react/no-unused-prop-types": 1,
    "react/prop-types": 1,
    "react/sort-prop-types": 1,
    "sort-destructure-keys/sort-destructure-keys": 1,
    "sort-keys-fix/sort-keys-fix": "warn",
  },
};
