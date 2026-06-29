import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/screens/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/features/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/entities/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/shared/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			animation: {
				fadeIn: '5s fadeIn forwards',
				fadeInBlur: '0.2s fadeInBlur forwards',
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
				fadeInBlur: {
					'0%': {
						opacity: '0',
						filter: 'blur(0.5px)',
					},

					'100%': {
						opacity: '1',
						filter: 'blur(0px)',
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
				mdPlus: '950px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1440px',
			},
			borderRadius: {
				'card-sm': '16px',
				'card-md': '24px',
				'card-lg': '32px',
			},
			colors: {
				GRAY_550: '#636362',
				GRAY_500: '#4B4B4B',
				GRAY_600: '#2f2f30',
				GRAY_300: '#DADADA',
				GRAY_350: '#D0D0D0',
				GRAY_400: '#AEAEB2',
				GRAY_200: '#F5F5F5',
				WHITE_300: '#F8F7F5',
				WHITE_700: '#F3F0EA',
				WHITE_500: '#FFFFFF',
				WHITE_800: '#F2F0EC',
				BLACK_500: '#000000',
			},
		},
	},
	plugins: [],
} satisfies Config
