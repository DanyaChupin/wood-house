import type { NextConfig } from 'next'

const IMMUTABLE = 'public, max-age=31536000, immutable'
const STATIC_ASSETS = 'public, max-age=86400, stale-while-revalidate=604800'
const PAGES = 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	compress: true,
	async headers() {
		return [
			{
				// JS/CSS бандлы Next.js — хеш в имени файла, кешируем навсегда
				source: '/_next/static/:path*',
				headers: [
					{ key: 'Cache-Control', value: IMMUTABLE },
				],
			},
			{
				// Шрифты
				source: '/fonts/:path*',
				headers: [
					{ key: 'Cache-Control', value: IMMUTABLE },
				],
			},
			{
				// Картинки из public/images (OG-изображения и прочее)
				source: '/images/:path*',
				headers: [
					{ key: 'Cache-Control', value: STATIC_ASSETS },
				],
			},
			{
				// Фавиконы и манифест
				source: '/:file(favicon.ico|apple-touch-icon.png|manifest.webmanifest)',
				headers: [
					{ key: 'Cache-Control', value: STATIC_ASSETS },
				],
			},
			{
				// HTML-страницы — короткий кеш на CDN, быстрая ревалидация
				source: '/:path*',
				headers: [
					{ key: 'Cache-Control', value: PAGES },
				],
			},
		]
	},
}

export default nextConfig
