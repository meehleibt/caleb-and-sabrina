/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				forest: "#212612",
				olive: "#716C33",
				orchid: "#5D204A",
				wine: "#2A1A1E",
				gold: "#C08F1C",
			},
			fontSize: {
				'9xl': '160px',
				'10xl': '190px'
			}
		},
	},
	plugins: [],
}
