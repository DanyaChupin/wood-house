import { SITE_ROUTES } from '@/shared/const/site'
import { IHousePerkView } from './IHousePerk'

const spaImgData = [
	{
		src: '/images/perks/баня.webp',
		alt: `баня`,
		title: `баня`,
		link: {
			title: 'Подробнее',
			href: SITE_ROUTES.spa,
		},
	},
	{
		src: '/images/perks/купель.webp',
		alt: `купель`,
		title: `Купель`,
		link: {
			title: 'Подробнее',
			href: SITE_ROUTES.spa,
		},
	},
	{
		src: '/images/perks/массаж.webp',
		alt: `массаж`,
		title: `Массаж`,
		link: {
			title: 'Подробнее',
			href: SITE_ROUTES.spa,
		},
	},
]
const silentImgData = [
	{
		src: '/images/perks/гамаки.webp',
		alt: `гамаки`,
		link: {
			title: 'Забронировать',
			href: SITE_ROUTES.bron,
		},
	},
	{
		src: '/images/perks/дом.webp',
		alt: `дом`,
		link: {
			title: 'Забронировать',
			href: SITE_ROUTES.bron,
		},
	},
	{
		src: '/images/perks/природа.webp',
		alt: `природа`,
		link: {
			title: 'Забронировать',
			href: SITE_ROUTES.spa,
		},
	},
]
const companyImgData = [
	{
		src: '/images/perks/телевизор.webp',
		alt: `телевизор`,
		link: {
			title: 'Забронировать',
			href: SITE_ROUTES.bron,
		},
	},
	{
		src: '/images/perks/интерьер.webp',
		alt: `интерьер`,
		link: {
			title: 'Забронировать',
			href: SITE_ROUTES.bron,
		},
	},
	{
		src: '/images/perks/компания.webp',
		alt: `компания`,
		link: {
			title: 'Забронировать',
			href: SITE_ROUTES.spa,
		},
	},
]
const cosinessImgData = [
	{
		src: '/images/perks/баня-прихожая.webp',
		alt: `прихожая бани`,
		link: {
			title: 'Забронировать',
			href: SITE_ROUTES.bron,
		},
	},
	{
		src: '/images/perks/веранда.webp',
		alt: `верада`,
		link: {
			title: 'Забронировать',
			href: SITE_ROUTES.bron,
		},
	},
	{
		src: '/images/perks/гостинная.webp',
		alt: `гостинная`,
		link: {
			title: 'Забронировать',
			href: SITE_ROUTES.spa,
		},
	},
]
export const HOUSE_PERKS_DATA: IHousePerkView[] = [
	{
		title: 'Тишина и приватность',
		description:
			'Дома расположены в лесу, вдали от дорог и соседей. Никакого шума — только природа, птицы и полное уединение.',
		images: silentImgData,
	},
	{
		title: 'Баня, тёплая купель и массаж',
		description:
			'Финская баня, кедровая купель и возможность заказать массаж прямо в доме — всё для восстановления и расслабления.',
		images: spaImgData,
	},
	{
		title: 'Формат для двоих или маленькой компании',
		description:
			'Каждый дом рассчитан на 2–4 гостей. Идеально для романтических выходных или тихого отдыха с друзьями.',
		images: companyImgData,
	},
	{
		title: 'Уют как дома, но лучше',
		description:
			'Полностью оборудованная кухня, стильный интерьер, тёплые полы, панорамные окна и вид на лес.',
		images: cosinessImgData,
	},
]
