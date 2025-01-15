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
				fadeIn: '5s fadeIn forwards',
				translateXTop: '0.9s translateXTop forwards',
				slideRightSmoke: '8s slideRightSmoke forwards',
			},
			transitionProperty: {
				TRANSLATE_OPACITY: 'transform, opacity',
			},
			keyframes: {
				slideRightSmoke: {
					'0%': {
						transform: 'translateX(-50%)',
						opacity: '0',
						filter: 'blur(3px)',
					},
					'10%': {
						opacity: '0',
						transform: 'translateX(-15%)',
					},
					'15%': {
						opacity: '1',
					},
					'20%': {
						transform: 'translateX(-0.1%)',
						opacity: '1',
						filter: 'blur(0px)',
					},
					'25%': {
						transform: 'translateX(0%)',
					},
					'75%': {
						transform: 'translateX(0%)',
					},
					'80%': {
						transform: 'translateX(0.1%)',
						opacity: '1',
						filter: 'blur(0px)',
					},
					'85%': {
						opacity: '0',
					},
					'90%': {
						transform: 'translateX(15%)',
					},
					'100%': {
						transform: 'translateX(50%)',
						filter: 'blur(3px)',
					},
				},
				translateXTop: {
					'0%': {
						transform: 'translateY(-100%)',
						opacity: '0',
					},
					'50%': {
						opacity: '0',
					},
					'100%': {
						transform: 'translateY(0%)',

						opacity: '1',
					},
				},
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
			colors: {
				GRAY_500: '#4B4B4B',
				GRAY_600: '#2f2f30',
				GRAY_400: '#AEAEB2',
			},
		},
	},
	plugins: [],
} satisfies Config
