import { Metadata } from 'next'
import { BronScreen } from '@/screens'
import { SITE_URLS } from '@/shared/const/site'

export const metadata: Metadata = {
	title: {
		absolute: 'Забронировать загородный дом | Вудхаус — онлайн-бронирование',
	},
	description:
		'Онлайн-бронирование загородного дома в Вудхаус. Выберите даты, уточните наличие и забронируйте коттедж у леса в Истринском районе за 50 км от МКАД.',
	keywords:
		'забронировать загородный дом, онлайн-бронирование коттеджа, аренда дома на выходные, снять дом Подмосковье, коттедж Истра бронь',
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
		title: 'Забронировать загородный дом | Вудхаус',
		description:
			'Онлайн-бронирование загородного дома в Вудхаус. Выберите даты и забронируйте коттедж у леса в Истринском районе за 50 км от МКАД.',
		url: SITE_URLS.bron,
		siteName: 'Вудхаус',
		images: [
			{
				url: '/images/black-house-desk-1.png',
				width: 800,
				height: 600,
				alt: 'Забронировать загородный дом | Вудхаус',
			},
		],
		locale: 'ru_RU',
		type: 'website',
	},
	alternates: { canonical: SITE_URLS.bron },
}

export default function Bron() {
	return <BronScreen />
}
