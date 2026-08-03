import js from "@eslint/js";
import globals from "globals";
import jest from "eslint-plugin-jest";

export default [
    js.configs.recommended,

    {
        files: ["**/*.test.js"],
        plugins: {
            jest,
        },
        languageOptions: {
            globals: {
                ...globals.jest,
            },
        },
        rules: {
            ...jest.configs["flat/recommended"].rules,
        },
    },
];
