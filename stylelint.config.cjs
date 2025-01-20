module.exports = {
  extends: ["stylelint-config-standard", "stylelint-prettier/recommended"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
    "no-descending-specificity": null,
  },
  ignoreFiles: ["src/styles/tailwind.base.css"],
};
