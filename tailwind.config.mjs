/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: "#212712",
				secondary: "#00000080",
				forest: "#212712",
				orchid: "#5D204A",
				gold: "C08F1D"
			},
		},
	},
	plugins: [],
}
