module.exports = {
  extends: ["./node_modules/@balena/lint/config/.eslintrc.js"],
  root: true,
  ignorePatterns: ["node_modules/", "dist/", "tests/", "examples"],
  rules: {
    "@typescript-eslint/no-floating-promises": "off",
    "no-bitwise": "off",
  },
};
