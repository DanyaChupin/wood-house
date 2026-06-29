import { Metadata } from 'next'
import { SpaScreen } from '@/screens'
import { SITE_URLS } from '@/shared/const/site'

export const metadata: Metadata = {
	title: {
		absolute: 'Баня, купель и спа на природе | Вудхаус — 50 км от Москвы',
	},
	description:
		'Баня с купелью, финская сауна и спа-процедуры на природе в Истринском районе. Полное расслабление в 50 км от МКАД. Бронируйте онлайн на вудхаус.рф.',
	keywords:
		'баня с купелью, спа на природе, финская сауна, спа за городом, баня Подмосковье, спа Истра, отдых в бане, оздоровление на природе',
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
		title: 'Баня, купель и спа на природе | Вудхаус',
		description:
			'Баня с купелью, финская сауна и спа-процедуры на природе в Истринском районе. Полное расслабление в 50 км от МКАД.',
		url: SITE_URLS.spa,
		siteName: 'Вудхаус',
		images: [
			{
				url: '/images/spa-3.png',
				width: 800,
				height: 600,
				alt: 'Спа, баня и купель на природе | Вудхаус',
			},
		],
		locale: 'ru_RU',
		type: 'website',
	},
	alternates: { canonical: SITE_URLS.spa },
}

export default function Spa() {
	return <SpaScreen />
}
