import { Metadata } from 'next'
import { MessagesScreen } from '@/screens'
import { SITE_URLS } from '@/shared/const/site'

export const metadata: Metadata = {
	title: {
		absolute: 'Профессиональный массаж на природе | Вудхаус — Подмосковье',
	},
	description:
		'Расслабляющий и лечебный массаж на природе в Истринском районе Подмосковья. Профессиональные мастера, ароматерапия, 50 км от МКАД. Вудхаус.',
	keywords:
		'массаж на природе, расслабляющий массаж Подмосковье, массаж за городом, массаж Истра, ароматерапия, лечебный массаж, массаж с выездом на природу',
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
		title: 'Профессиональный массаж на природе | Вудхаус',
		description:
			'Расслабляющий и лечебный массаж на природе в Истринском районе Подмосковья. Профессиональные мастера, ароматерапия, 50 км от МКАД.',
		url: SITE_URLS.massages,
		siteName: 'Вудхаус',
		images: [
			{
				url: '/images/massages-4.png',
				width: 800,
				height: 600,
				alt: 'Профессиональный массаж на природе | Вудхаус',
			},
		],
		locale: 'ru_RU',
		type: 'website',
	},
	alternates: { canonical: SITE_URLS.massages },
}

export default function Massages() {
	return <MessagesScreen />
}
