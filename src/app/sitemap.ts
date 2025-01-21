import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://вудхаус.рф',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: 'https://вудхаус.рф/spa',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: 'https://вудхаус.рф/massages',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: 'https://вудхаус.рф/bron',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: 'https://вудхаус.рф/policy',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.1,
		},
		{
			url: 'https://вудхаус.рф/rules',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.1,
		},
		{
			url: 'https://вудхаус.рф/oferta',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.1,
		},
	]
}
