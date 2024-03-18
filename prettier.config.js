/** @type {import('prettier').Config} */
export default {
	printWidth: 117,
	bracketSpacing: true,
	useTabs: true,
	tabWidth: 2,
	quoteProps: "consistent",
	trailingComma: "all",
	semi: true,
	singleQuote: false,
	singleAttributePerLine: true,
	arrowParens: "always",
	plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
};
