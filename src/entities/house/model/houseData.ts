import { IHouseView } from './IHouse'
import { BLACK_HOUSE_IMAGES, WHITE_HOUSE_IMAGES } from './houseImages'

export const HOUSES_DATA: IHouseView[] = [
	{
		title: 'Темный дом',
		capacity: '2 - 4 гостя',
		livingArea: '71м2',
		terraceArea: '25м2',
		mainImgs: BLACK_HOUSE_IMAGES.images,

		facilities: {
			info: [
				{
					title: 'спальня (двуспальная кровать)',
					subPrice: false,
				},
				{
					title: 'кухня-гостиная  с 2 спальными местами',
					subPrice: true,
				},
				{
					title: 'ванная комната',
					subPrice: false,
				},
				{
					title: 'теплая купель для купания',
					subPrice: true,
				},
				{
					title: 'баня',
					subPrice: false,
				},
				{
					title: 'мангальная зона',
					subPrice: false,
				},
			],
		},
	},
	{
		title: 'Светлый дом',
		capacity: '2 - 4 гостя',
		livingArea: '71м2',
		terraceArea: '25м2',
		mainImgs: WHITE_HOUSE_IMAGES.images,
		facilities: {
			info: [
				{
					title: 'спальня (двуспальная кровать)',
					subPrice: false,
				},
				{
					title: 'кухня-гостиная  с 2 спальными местами',
					subPrice: true,
				},
				{
					title: 'ванная комната',
					subPrice: false,
				},
				{
					title: 'теплая купель для купания',
					subPrice: true,
				},
				{
					title: 'баня',
					subPrice: false,
				},
				{
					title: 'мангальная зона',
					subPrice: false,
				},
			],
		},
	},
]
