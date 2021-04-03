module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:sonarjs/recommended"
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: "module"
	},
	plugins: ["react", "@typescript-eslint", "jsx-a11y", "woke", "no-secrets", "sonarjs"],
	rules: {
		"woke/all": 2,
		"no-secrets/no-secrets": "error",
		"react/react-in-jsx-scope": "off"
	}
};
