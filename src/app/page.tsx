import { Metadata } from 'next'
import { SITE_URLS } from '@/shared/const/site'
import { HomeScreen } from '@/screens/home-screen'

export const metadata: Metadata = {
	title: {
		absolute: 'Аренда загородного дома 50 км от МКАД — Вудхаус',
	},
	description:
		'Вудхаус — коттеджный комплекс у леса в Истринском районе. Аренда домов посуточно, баня с купелью, спа и массаж. 50 км от МКАД по Новорижскому шоссе.',
	keywords:
		'аренда загородного дома, отдых на природе, коттедж 50 км от Москвы, баня с купелью, спа за городом, массаж на природе, отдых на выходные, Истра, деревня Лукино',
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
		title: 'Аренда загородного дома 50 км от МКАД — Вудхаус',
		description:
			'Вудхаус — коттеджный комплекс у леса в Истринском районе. Аренда домов посуточно, баня с купелью, спа и массаж. 50 км от МКАД по Новорижскому шоссе.',
		url: SITE_URLS.home,
		siteName: 'Вудхаус',
		images: [
			{
				url: '/images/black-house-desk-1.png',
				width: 800,
				height: 600,
				alt: 'Посуточная аренда загородного дома в 50 км от МКАД | Вудхаус',
			},
		],
		locale: 'ru_RU',
		type: 'website',
	},
	alternates: { canonical: SITE_URLS.home },
}

export default function Home() {
	return <HomeScreen />
}
