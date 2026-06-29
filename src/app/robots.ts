import type { MetadataRoute } from 'next'
import { SITE_URLS } from '@/shared/const/site'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: `${SITE_URLS.home}/sitemap.xml`,
	}
}
