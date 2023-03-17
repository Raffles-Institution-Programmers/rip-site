/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'JetBrains': ['JetBrainsMono Nerd Font', 'monospace'],
			}
		},
	},
	plugins: [],
}
