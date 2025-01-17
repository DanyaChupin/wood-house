import { Metadata } from 'next'
import { SpaScreen } from '@/screens'

export const metadata: Metadata = {
	title: 'Спа',
	description:
		'Вудхаус предлагает уникальное спа-обслуживание для полного расслабления и восстановления. Расслабьтесь в сауне, бани или насладитесь оздоровительными процедурами для тела и души.',
	keywords:
		'спа, оздоровление, релакс, процедуры для тела, сауна, баня, спа-процедуры, отдых в спа, массажи, восстановление',
	robots: {
		index: true,
		follow: true,
	},
	icons: {
		icon: ['./favicon.ico?v=4'],
		shortcut: ['./favicon.ico?v=4'],
		apple: ['./logo.svg'],
	},
	openGraph: {
		title: 'Вудхаус',
		description:
			'Вудхаус предлагает уникальное спа-обслуживание для полного расслабления и восстановления. Расслабьтесь в сауне, бани или насладитесь оздоровительными процедурами для тела и души.',
		url: 'https://вудхаус.рф/spa',
		siteName: 'Вудхаус',
		images: [
			{
				url: '../../shared/images/spa-3.png',
				width: 800,
				height: 600,
				alt: 'Посуточная аренда загородного дома в 50 км от МКАД | Вудxаус',
			},
		],
		locale: 'ru_RU',
		type: 'website',
	},
}
export default function Spa() {
	return <SpaScreen />
}
