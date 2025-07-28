import { defineConfig } from "eslint/config";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default defineConfig([
	{
		extends: fixupConfigRules(
			compat.extends(
				"eslint:recommended",
				"plugin:react/recommended",
				"plugin:react/jsx-runtime",
				"plugin:@typescript-eslint/recommended",
				"plugin:import/recommended",
				"plugin:import/typescript",
				"plugin:jsx-a11y/strict",
				"prettier",
			),
		),
		plugins: { "@typescript-eslint": fixupPluginRules(typescriptEslint) },
		languageOptions: { parser: tsParser },
		settings: { "import/resolver": "typescript", react: { version: "detect" } },
		rules: {
			"react/no-unescaped-entities": "off",
			"sort-imports": ["warn", { ignoreDeclarationSort: true }],
			"import/order": [
				"warn",
				{ alphabetize: { order: "asc", caseInsensitive: true } },
			],
		},
	},
]);
