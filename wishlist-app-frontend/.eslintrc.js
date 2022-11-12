module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "only-warn"],
  rules: {
    "arrow-parens": 0,
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/prop-types": 0,
    quotes: [0, "double", { avoidEscape: true }],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        semi: false,
        // avoidEscape: true,
        // singleQuote: true,
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
      },
    ],
  },
}
