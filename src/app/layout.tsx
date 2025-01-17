import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Header } from '@/components/header'
import '../shared/styles/global.css'

const Footer = dynamic(() => import('@/components/footer/Footer'))
export const metadata: Metadata = {
	title: {
		template: 'Вудхаус | %s',
		default: 'Вудхаус',
	},
	applicationName: 'Вудхаус',
	robots: {
		index: true,
		follow: true,
	},
	icons: {
		icon: ['./favicon.ico?v=4'],
		shortcut: ['./favicon.ico?v=4'],
		apple: ['./logo.svg'],
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
				<Header />
				<div className="px-[15px] lg:px-[25px] 2xl:px-[50px]">
					{children}
					<Footer />
				</div>
			</body>
		</html>
	)
}
