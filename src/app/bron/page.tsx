import { Metadata } from 'next'
import { BronScreen } from '@/screens'

export const metadata: Metadata = {
	title: 'Бронирование',
	description:
		'Забронируйте дом для отдыха в Вудхаус на природе. Удобная система онлайн-бронирования поможет вам выбрать идеальное место для отдыха с друзьями или семьей.',
	keywords:
		'бронирование, аренда домов, отдых на природе, забронировать дом, отдых в Вудхаус, онлайн-бронирование, дом на выходные, аренда на природу',
	robots: {
		index: true,
		follow: true,
	},
	icons: {
		icon: ['./favicon.ico?v=4'],
		shortcut: ['./favicon.ico?v=4'],
		apple: ['./apple-touch-icon.png'],
	},
	openGraph: {
		title: 'Вудхаус | бронирование',
		description:
			'Забронируйте дом для отдыха в Вудхаус на природе. Удобная система онлайн-бронирования поможет вам выбрать идеальное место для отдыха с друзьями или семьей.',
		url: 'https://вудхаус.рф/bron',
		siteName: 'Вудхаус',
		images: [
			{
				url: '../../shared/images/black-house-desk-1.png',
				width: 800,
				height: 600,
				alt: 'Посуточная аренда загородного дома в 50 км от МКАД | Вудxаус',
			},
		],
		locale: 'ru_RU',
		type: 'website',
	},

	alternates: { canonical: 'https://вудхаус.рф/bron' },
}
export default function Bron() {
	return <BronScreen />
}
