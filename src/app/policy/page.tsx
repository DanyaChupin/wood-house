import { Metadata } from 'next'
import { MessagesScreen } from '@/screens'

export const metadata: Metadata = {
	title: 'Политика конфиденциальности',
	description: '',
	keywords: '',
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
		title: 'Вудхаус | Политика конфиденциальности',
		description: '',
		url: 'https://вудхаус.рф/policy',
		siteName: 'Вудхаус',
		images: [
			{
				url: '../../shared/images/massages-4.png',
				width: 800,
				height: 600,
				alt: 'Посуточная аренда загородного дома в 50 км от МКАД | Вудxаус',
			},
		],
		locale: 'ru_RU',
		type: 'website',
	},

	alternates: { canonical: 'https://вудхаус.рф/policy' },
}
export default function Policy() {
	return <MessagesScreen />
}
