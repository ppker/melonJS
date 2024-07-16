import jsdoc from "eslint-plugin-jsdoc";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslint from "@eslint/js";

const jsDocConfig = jsdoc.configs["flat/recommended-typescript-error"];

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.strictTypeChecked,
	{
		name: "eslint/global-ignores",
		// globally ignore below directories and files
		ignores: [
			"**/build",
			"**/docs/**/*",
			"**/node_modules",
			"**/examples",
			"**/debug-plugin",
		],
	},
	{
		name: "eslint/global-rules",
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: "module",
			globals: {
				...globals.browser,
			},
		},
		files: ["**/src/**/*.js", "**/tests/**/*.js"],
		plugins: {
			jsdoc,
		},
		rules: {
			// http://eslint.org/docs/rules/
			"accessor-pairs": "error",
			"array-callback-return": "error",
			"arrow-body-style": ["error", "always"],
			"block-scoped-var": "error",
			camelcase: ["off", { properties: "never" }],
			"constructor-super": "error",
			curly: ["error", "all"],
			eqeqeq: ["error", "allow-null"],
			"func-call-spacing": ["error", "never"],
			"for-direction": "error",
			"handle-callback-err": ["error", "^(err|error)$"],
			"key-spacing": ["off", { beforeColon: false, afterColon: true }],
			"keyword-spacing": ["error", { before: true, after: true }],
			"new-cap": ["error", { newIsCap: true, capIsNew: false }],
			"new-parens": "error",
			"no-array-constructor": "error",
			"no-caller": "error",
			"no-class-assign": "error",
			"no-case-declarations": "error",
			"no-constructor-return": "error",
			"no-duplicate-imports": "error",
			"no-dupe-class-members": "error",
			"no-eval": "error",
			"no-extend-native": "error",
			"no-extra-bind": "error",
			"no-extra-parens": ["error", "functions"],
			"no-floating-decimal": "error",
			"no-implied-eval": "error",
			"no-implicit-coercion": "off",
			"no-implicit-globals": "error",
			"no-import-assign": "error",
			"no-iterator": "error",
			"no-label-var": "error",
			"no-labels": ["error", { allowLoop: false, allowSwitch: false }],
			"no-lone-blocks": "error",
			"no-loss-of-precision": "error",
			"no-multi-str": "error",
			"no-native-reassign": "error",
			"no-negated-in-lhs": "error",
			"no-new": "error",
			"no-new-func": "error",
			"no-object-constructor": "error",
			"no-new-native-nonconstructor": "error",
			"no-new-require": "error",
			"no-new-wrappers": "error",
			"no-octal-escape": "error",
			"no-path-concat": "error",
			"no-proto": "error",
			"no-prototype-builtins": "off",
			"no-promise-executor-return": "error",
			"no-return-assign": ["error", "except-parens"],
			"no-self-compare": "error",
			"no-sequences": "off",
			"no-template-curly-in-string": "off",
			"no-this-before-super": "error",
			"no-throw-literal": "off",
			"no-trailing-spaces": "error",
			"no-undef": "error",
			"no-undef-init": "error",
			"no-unmodified-loop-condition": "error",
			"no-unneeded-ternary": ["off", { defaultAssignment: false }],
			"no-unreachable": "error",
			"no-unused-vars": ["error", { args: "after-used" }],
			"no-unused-private-class-members": "error",
			"no-useless-call": "off",
			"no-useless-computed-key": "error",
			"no-useless-constructor": "error",
			// used in RegExp
			"no-useless-escape": "off",
			"no-useless-rename": "error",
			"no-whitespace-before-property": "error",
			"object-property-newline": [
				"error",
				{ allowMultiplePropertiesPerLine: true },
			],
			"one-var": ["off", { initialized: "never" }],
			"operator-linebreak": [
				"off",
				"after",
				{ overrides: { "?": "before", ":": "before" } },
			],
			"padded-blocks": ["off", "never"],
			"prefer-arrow-callback": "error",
			quotes: [
				"error",
				"double",
				{ avoidEscape: true, allowTemplateLiterals: true },
			],
			"rest-spread-spacing": ["error", "never"],
			"semi-spacing": ["error", { before: false, after: true }],
			"space-before-blocks": ["error", "always"],
			"space-before-function-paren": ["off", "always"],
			"space-infix-ops": "error",
			"space-unary-ops": ["off", { words: true, nonwords: false }],
			"spaced-comment": [
				"off",
				"always",
				{
					line: { markers: ["*package", "!", ","] },
					block: {
						balanced: true,
						markers: ["*package", "!", ","],
						exceptions: ["*"],
					},
				},
			],
			"template-curly-spacing": ["error", "never"],
			"unicode-bom": ["error", "never"],
			"valid-typeof": ["error", { requireStringLiterals: true }],
			"yield-star-spacing": ["error", "both"],
			yoda: ["error", "never"],
			"jsdoc/require-hyphen-before-param-description": "error",
			"jsdoc/no-undefined-types": "off",
			"@typescript-eslint/no-dynamic-delete": "off",
			"@typescript-eslint/no-extraneous-class": "off",
		},
	},
	{
		files: ["**/*.js", "**/*.mjs"],
		...tseslint.configs.disableTypeChecked,
	},
	{
		...jsDocConfig,
		files: ["**/*.{ts,tsx,mts,cts}"],
		rules: {
			"no-undef": "off",
			"no-unused-vars": "off",
			"prefer-template": "error",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/ban-ts-comment": "off",
			"@typescript-eslint/no-dynamic-delete": "off",
			"@typescript-eslint/no-unsafe-argument": "off",
			"@typescript-eslint/no-unsafe-assignment": "off",
			"@typescript-eslint/no-unnecessary-condition": "off",
			"@typescript-eslint/no-invalid-void-type": "off",
			"@typescript-eslint/no-unsafe-return": "off",
			"@typescript-eslint/no-non-null-assertion": "off",
			"@typescript-eslint/no-unnecessary-type-assertion": "off",
			"@typescript-eslint/restrict-template-expressions": [
				"error",
				{ allowNumber: true },
			],
			...jsDocConfig.rules,
			"jsdoc/require-jsdoc": "off",
			"jsdoc/no-defaults": "off",
		},
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
);
