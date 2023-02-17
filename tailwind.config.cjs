/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/tw-elements/dist/js/**/*.js'],
	theme: {
	  extend: {
		fontFamily: {
		  sofia : ['Sofia sans', 'sans serif']
		},
		fontWeight: {
		  extrablack : "900"
		},
		scale: {
			"102": "1.02"
		},
		colors: {
			"red-1": "#C31E25",
			"yellow-1": "#FFBC0F"
		},
		opacity: {
			"60": ".60",
		}
	  }
	},
	plugins: [
		require('tw-elements/dist/plugin')
	],
}  