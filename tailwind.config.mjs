/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#212712",
				secondary: "C08F1D",
				orchid: "#5D204A",
				accent: "#00000080",
			},
		},
	},
	plugins: [],
}
