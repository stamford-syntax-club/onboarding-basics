// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Syntax Club Basics",
	tagline: "For your academic excellence",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://basics.stamford.dev",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "stamford-syntax-club", // Usually your GitHub org/user name.
	projectName: "onboarding-basics", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					routeBasePath: "/",
				},
				blog: false,
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			colorMode: {
				defaultMode: "dark",
			},
			// Replace with your project's social card
			image: "img/docusaurus-social-card.jpg",
			navbar: {
				title: "Syntax Club Basics",
				logo: {
					alt: "Syntax Club Basics Logo",
					src: "img/logo.svg",
				},
				items: [
					{
						href: "https://github.com/stamford-syntax-club/stamfordcenter-backend",
						label: "GitHub",
						position: "right",
					},
				],
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),

	// This has a TON of vulnerabilities, so make sure this is containerized and tucked away XD
	themes: ["@docusaurus/theme-live-codeblock"],
};

module.exports = config;
