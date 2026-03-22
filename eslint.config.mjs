import javascript from "@eslint/js";
import prettierConfig from "eslint-config-prettier/flat";
import { importX } from "eslint-plugin-import-x";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";
import typescript from "typescript-eslint";

export default defineConfig([
	javascript.configs.recommended,
	typescript.configs.recommendedTypeChecked,
	react.configs.flat.recommended,
	react.configs.flat["jsx-runtime"],
	reactHooks.configs.flat["recommended-latest"],
	importX.flatConfigs.recommended,
	importX.flatConfigs.typescript,
	jsxA11y.flatConfigs.strict,
	prettierConfig,
	{
		languageOptions: { parserOptions: { projectService: true } },
		settings: { react: { version: "detect" } },
		rules: { "react/no-unescaped-entities": "off" },
	},
]);
