import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Вудхаус',
		short_name: 'Вудхаус',
		description:
			'Вудхаус — уютный уголок на природе, где можно забронировать комфортные дома, насладиться отдыхом в спа, бане, заказать массаж и провести время в гармонии с природой.',
		start_url: '/',
		display: 'standalone',
		background_color: 'red',
		theme_color: 'white',
		icons: [
			{
				src: '/apple-touch-icon.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: '/apple-touch-icon.png',
				sizes: '256x256',
				type: 'image/png',
			},
			{
				src: '/apple-touch-icon.png',
				sizes: '384x384',
				type: 'image/png',
			},
			{
				src: '/apple-touch-icon.png',
				sizes: '512x512',
				type: 'image/png',
			},
		],
	}
}
