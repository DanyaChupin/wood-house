import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/screens/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/shared/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			animation: {
				fadeIn: '0.5s fadeIn forwards',
			},
			transitionProperty: {
				TRANSLATE_OPACITY: 'transform, opacity',
			},
			keyframes: {
				fadeIn: {
					'0%': {
						opacity: '0',
					},
					'20%': {
						opacity: '0.9',
					},
					'100%': {
						opacity: '1',
					},
				},
			},
			screens: {
				xs: '500px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1440px',
			},
			colors: {},
		},
	},
	plugins: [],
} satisfies Config
