module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
  },
  extends: "airbnb-base",
  plugins: [
    "html",
  ],
  "rules": {

    "no-unused-vars": 0,
    "prefer-const": 0,
    "no-console": 0,
    "no-confusing-arrow": 0,
    "quotes": ["error", "double"],
    "import/extensions": 0,
    "import/first": 0,
    "indent": [2, 4],

    "global-require": 0,
    "import/no-unresolved": 0,
    "no-param-reassign": 0,
    "no-shadow": 0,
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
  },
};
