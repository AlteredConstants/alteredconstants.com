import { defineConfig } from "eslint/config";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import javascript from "@eslint/js";
import typescript from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettierConfig from "eslint-config-prettier/flat";

export default defineConfig([
	javascript.configs.recommended,
	typescript.configs.recommendedTypeChecked,
	react.configs.flat.recommended,
	react.configs.flat["jsx-runtime"],
	reactHooks.configs.flat["recommended-latest"],
	importPlugin.flatConfigs.recommended,
	importPlugin.flatConfigs.typescript,
	jsxA11y.flatConfigs.strict,
	prettierConfig,
	{
		languageOptions: { parserOptions: { projectService: true } },
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
