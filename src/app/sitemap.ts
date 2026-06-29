import type { MetadataRoute } from 'next'
import { SITE_URLS } from '@/shared/const/site'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: SITE_URLS.home,
			lastModified: new Date('2026-06-24'),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: SITE_URLS.spa,
			lastModified: new Date('2026-06-24'),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: SITE_URLS.massages,
			lastModified: new Date('2026-06-24'),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: SITE_URLS.bron,
			lastModified: new Date('2026-06-24'),
			changeFrequency: 'weekly',
			priority: 0.9,
		},
		{
			url: SITE_URLS.policy,
			lastModified: new Date('2025-12-12'),
			changeFrequency: 'yearly',
			priority: 0.1,
		},
		{
			url: SITE_URLS.rules,
			lastModified: new Date('2025-12-12'),
			changeFrequency: 'yearly',
			priority: 0.1,
		},
		{
			url: SITE_URLS.oferta,
			lastModified: new Date('2025-12-12'),
			changeFrequency: 'yearly',
			priority: 0.1,
		},
	]
}
