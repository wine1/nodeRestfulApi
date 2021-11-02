// 参考 https://eslint.org/docs/user-guide/configuring
module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ["plugin:vue/essential", "eslint:recommended"],
    rules: {
        "no-unused-vars": "warn",
        "no-useless-escape": "warn",
        "no-extra-semi": "warn",
        "no-console": "off",
        "no-debugger": "off",
    },
    parserOptions: {
        parser: "babel-eslint",
    },
};
