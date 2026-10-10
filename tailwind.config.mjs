/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/flowbite/**/*.js"
],
	darkMode:"class",
	theme: {
		extend: {
			screens: {
				'max-870': { 'max': '870px' }, // Media query para un max-width de 870px
			},
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
