import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	fonts: [
		{
			provider: fontProviders.local(),
			name: "CMU Serif",
			cssVariable: "--font-cmu",
			fallbacks: ["serif"],
			options: {
				variants: [
					{
						weight: 400,
						style: "normal",
						src: ["computer-modern/fonts/cmu-serif-500-roman.woff2"],
						display: "block",
					},
					{
						weight: 400,
						style: "italic",
						src: ["computer-modern/fonts/cmu-serif-500-italic.woff2"],
						display: "block",
					},
					{
						weight: 700,
						style: "normal",
						src: ["computer-modern/fonts/cmu-serif-700-roman.woff2"],
						display: "block",
					},
					{
						weight: 700,
						style: "italic",
						src: ["computer-modern/fonts/cmu-serif-700-italic.woff2"],
						display: "block",
					},
				],
			},
		},
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
