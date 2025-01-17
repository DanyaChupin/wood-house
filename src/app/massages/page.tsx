import { Metadata } from 'next'
import { MessagesScreen } from '@/screens'

export const metadata: Metadata = {
	title: 'Массажи',
	description:
		'Окунитесь в атмосферу полного релакса с профессиональными массажами от Вудхаус. Мы предлагаем разнообразные виды массажа для снятия стресса и восстановления энергии.',
	keywords:
		'массаж, расслабляющий массаж, лечебный массаж, антистресс, оздоровление, массажи для тела, восстановление после тренировок, массажные процедуры',
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
		title: 'Вудхаус | Массажи',
		description:
			'Окунитесь в атмосферу полного релакса с профессиональными массажами от Вудхаус. Мы предлагаем разнообразные виды массажа для снятия стресса и восстановления энергии.',
		url: 'https://вудхаус.рф/massages',
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
}
export default function Massages() {
	return <MessagesScreen />
}
