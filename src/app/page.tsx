import { Metadata } from 'next'
import { HomeScreen } from '@/screens'

export const metadata: Metadata = {
	title: 'Вудхаус | Дома',
	description:
		'Вудхаус — уютный уголок на природе, где можно забронировать комфортные дома, насладиться отдыхом в спа, бане, заказать массаж и провести время в гармонии с природой.',
	keywords:
		'Вудхаус, отдых на природе, аренда домов, спа, баня, массаж, отдых с детьми, природа, отдых на выходные, загородный отдых',
	robots: {
		index: true,
		follow: true,
	},
	icons: {
		icon: ['/favicon.ico?v=4'],
		shortcut: ['/favicon.ico?v=4'],
		apple: ['/logo.svg'],
	},
	openGraph: {
		title: 'Вудхаус | Дома',
		description:
			'Вудхаус — уютный уголок на природе, где можно забронировать комфортные дома, насладиться отдыхом в спа, бане, заказать массаж и провести время в гармонии с природой.',
		url: 'https://вудхаус.рф',
		siteName: 'Вудхаус',
		images: [
			{
				url: '../shared/images/black-house-desk-1.png',
				width: 800,
				height: 600,
				alt: 'Посуточная аренда загородного дома в 50 км от МКАД | Вудxаус',
			},
		],
		locale: 'ru_RU',
		type: 'website',
	},
}
export default function Home() {
	return <HomeScreen />
}
