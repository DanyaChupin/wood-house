import { EveningIcon } from '@/shared/icons/Evening-icon'
import { FontIcon } from '@/shared/icons/Font-icon'
import { ForestIcon } from '@/shared/icons/Forest-icon'
import { InteriorIcon } from '@/shared/icons/Interior-icon'
import { RiverIcon } from '@/shared/icons/River-icon'
import { TerraceIcon } from '@/shared/icons/Terrace-icon'
import { IPhotoGalleryItem } from './type'

export const photoGalleryData: IPhotoGalleryItem[] = [
	{
		label: 'Прогулка по лесу',
		icon: ForestIcon,
		photos: [
			{ src: '/images/photo-gallery/forest/forest-1.webp', alt: 'Тропинка в сосновом лесу' },
			{ src: '/images/photo-gallery/forest/forest-2.webp', alt: 'Лесная поляна рядом с домом' },
			{ src: '/images/photo-gallery/forest/forest-3.webp', alt: 'Деревья вдоль прогулочной тропы' },
			{ src: '/images/photo-gallery/forest/forest-4.webp', alt: 'Лес в окружении дома' },
		],
	},
	{
		label: 'Завтрак на террасе',
		icon: TerraceIcon,
		photos: [
			{ src: '/images/photo-gallery/terrace/terrace-1.webp', alt: 'Накрытый стол на открытой террасе' },
			{ src: '/images/photo-gallery/terrace/terrace-2.webp', alt: 'Утренний чай с видом на природу' },
			{ src: '/images/photo-gallery/terrace/terrace-3.webp', alt: 'Терраса с деревянной мебелью' },
		],
	},
	{
		label: 'Купель',
		icon: FontIcon,
		photos: [
			{ src: '/images/photo-gallery/font/font-1.webp', alt: 'Деревянная купель на улице' },
			{ src: '/images/photo-gallery/font/font-2.webp', alt: 'Купель в окружении леса' },
			{ src: '/images/photo-gallery/font/font-3.webp', alt: 'Купель у дома' },
		],
	},
	{
		label: 'Вид на реку',
		icon: RiverIcon,
		photos: [
			{ src: '/images/photo-gallery/river/river-1.webp', alt: 'Река с высокого берега' },
			{ src: '/images/photo-gallery/river/river-2.webp', alt: 'Спокойная гладь реки' },
			{ src: '/images/photo-gallery/river/river-3.webp', alt: 'Берег реки в окружении деревьев' },
		],
	},
	{
		label: 'Интерьер',
		icon: InteriorIcon,
		photos: [
			{ src: '/images/photo-gallery/interior/interior-1.webp', alt: 'Гостиная с деревянной отделкой' },
			{ src: '/images/photo-gallery/interior/interior-2.webp', alt: 'Уютная спальня' },
			{ src: '/images/photo-gallery/interior/interior-3.webp', alt: 'Обеденная зона' },
			{ src: '/images/photo-gallery/interior/interior-4.webp', alt: 'Кухня с деревянными деталями' },
			{ src: '/images/photo-gallery/interior/interior-5.webp', alt: 'Зона отдыха внутри дома' },
			{ src: '/images/photo-gallery/interior/interior-6.webp', alt: 'Деревянные балки и стены' },
			{ src: '/images/photo-gallery/interior/interior-7.webp', alt: 'Вид из окна на природу' },
			{ src: '/images/photo-gallery/interior/interior-8.webp', alt: 'Уютный уголок с освещением' },
		],
	},
	{
		label: 'Вечер у костра',
		icon: EveningIcon,
		photos: [
			{ src: '/images/photo-gallery/evening/evening-1.webp', alt: 'Костёр на закате' },
			{ src: '/images/photo-gallery/evening/evening-2.webp', alt: 'Вечерний отдых у огня' },
			{ src: '/images/photo-gallery/evening/evening-3.webp', alt: 'Ночное небо над домом' },
		],
	},
]
