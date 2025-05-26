import houseElem5 from '../../../shared/images/description-of-advantages-5.png'
import houseElem6 from '../../../shared/images/description-of-advantages-6.png'
import houseElem1 from '../../../shared/images/house-one-elem-1.png'
import houseElem2 from '../../../shared/images/house-one-elem-2.png'
import houseElem3 from '../../../shared/images/house-one-elem-6.png'
import houseElem4 from '../../../shared/images/white-kithen.png'

export const descriptionOfAdvantagesData = [
	{
		title: 'Идеальное место для тех, кто ищет гармонию с природой и уединение от городской суеты',
		description: `Вудхаус — это уютный коттеджный комплекс на\nокраине поселка, у самого леса и берега тихой речки.\nЗдесь всё создано для перезагрузки и отдыха\nот городской спешки.`,
		images: [{ img: houseElem1 }, { img: houseElem2 }],
		subPrice: false,
	},
	{
		title: 'Уют и стиль в каждом доме',
		description:
			'Два коттеджа с дизайнерским интерьером и тёплой\nатмосферой. Вечером можно собраться\nу огнища с близкими и насладиться спокойствием.',
		images: [{ img: houseElem3 }, { img: houseElem4 }],
		subPrice: true,
	},
	{
		title: 'Баня, купель и массаж',
		description: `В каждом доме — своя баня и тёплая уличная купель.\nДля максимального расслабления — массаж\nи ароматерапия от профессионалов.`,
		images: [{ img: houseElem5 }, { img: houseElem6 }],
		subPrice: false,
	},
]
