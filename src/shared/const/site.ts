export const SITE_URL = 'https://xn--80adg7chcm.xn--p1ai'

export const SITE_ROUTES = {
	home: '/',
	spa: '/spa',
	massages: '/massages',
	bron: '/bron',
	policy: '/policy',
	rules: '/rules',
	oferta: '/oferta',
} as const

export const SITE_URLS = {
	home: SITE_URL,
	spa: `${SITE_URL}/spa`,
	massages: `${SITE_URL}/massages`,
	bron: `${SITE_URL}/bron`,
	policy: `${SITE_URL}/policy`,
	rules: `${SITE_URL}/rules`,
	oferta: `${SITE_URL}/oferta`,
} as const
