/** @type {import("tailwindcss").Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				transparent: "transparent",
				default: "#F6F8FF",
				white: "#FFFFFF",
				red: "#CF3B3B",
				blue: "#253D5B",
				green: "#355834",
				purple: "#564D7C",
			},
		},
	},
	plugins: [],
};
