import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Metrika } from '@/shared/config/Metrika'
import { SITE_URL } from '@/shared/const/site'
import '../shared/styles/global.css'
import { Header } from '@/widgets/header'

const lodgingSchema = {
	'@context': 'https://schema.org',
	'@type': 'LodgingBusiness',
	name: 'Вудхаус',
	url: SITE_URL,
	description:
		'Вудхаус — коттеджный комплекс для загородного отдыха в 50 км от МКАД. Аренда домов, баня, купель, массаж и спа на природе.',
	telephone: '+79777777332',
	email: 'vudxauc@gmail.com',
	address: {
		'@type': 'PostalAddress',
		streetAddress: 'деревня Лукино, 24а',
		addressLocality: 'городской округ Истра',
		addressRegion: 'Московская область',
		addressCountry: 'RU',
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: 55.831919,
		longitude: 36.804822,
	},
	image: `${SITE_URL}/images/black-house-desk-1.png`,
	sameAs: [
		'https://t.me/vudxauc',
		'https://www.instagram.com/vudxauc',
		'https://yandex.ru/navi/org/vudxauc/143261160280',
	],
	amenityFeature: [
		{
			'@type': 'LocationFeatureSpecification',
			name: 'Баня',
			value: true,
		},
		{
			'@type': 'LocationFeatureSpecification',
			name: 'Купель',
			value: true,
		},
		{ '@type': 'LocationFeatureSpecification', name: 'Спа', value: true },
		{
			'@type': 'LocationFeatureSpecification',
			name: 'Массаж',
			value: true,
		},
		{
			'@type': 'LocationFeatureSpecification',
			name: 'Мангальная зона',
			value: true,
		},
	],
	numberOfRooms: 2,
	petsAllowed: false,
	checkinTime: '14:00',
	checkoutTime: '12:00',
}

const Footer = dynamic(() => import('@/widgets/footer').then((m) => m.Footer))
export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		template: 'Вудхаус | %s',
		default: 'Вудхаус',
	},
	applicationName: 'Вудхаус',
	robots: {
		index: true,
		follow: true,
	},
	verification: {
		yandex: 'd7b7c6f43dd4f111',
		google: 'Z6e4toSEcotF_YIDPppu3ga1IFlCLd0xcbbYSkSQ6gI',
	},
	openGraph: {
		title: 'Вудхаус',
		description:
			'Вудхаус — уютный уголок на природе, где можно забронировать комфортные дома, насладиться отдыхом в спа, бане, заказать массаж и провести время в гармонии с природой.',
		url: SITE_URL,
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
	icons: {
		icon: ['./favicon.ico?v=4'],
		shortcut: ['./favicon.ico?v=4'],
		apple: ['./apple-touch-icon.png'],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ru">
			<body className="antialiased">
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(lodgingSchema),
					}}
				/>
				<Header />
				<div className="px-[8px] lg:px-[16px]">
					{children}
					<Footer />
				</div>
				<Metrika />
			</body>
		</html>
	)
}
