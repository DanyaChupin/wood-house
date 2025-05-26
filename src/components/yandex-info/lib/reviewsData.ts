import avatar1 from '../../../shared/images/avatar-y-1.png'
import avatar2 from '../../../shared/images/avatar-y-2.png'
import avatar3 from '../../../shared/images/avatar-y-3.png'
import reviews1 from '../../../shared/images/reviews-y-1.png'
import reviews2 from '../../../shared/images/reviews-y-2.png'
import reviews3 from '../../../shared/images/reviews-y-3.png'
import reviews4 from '../../../shared/images/reviews-y-4.png'

export const REVIEWS_DATA = [
	{
		name: 'Маша',
		message: `Классное место, чтобы отдохнуть\nот Московской суеты  😍`,
		avatarImg: avatar1,
		imgs: [reviews1],
		position: ' absolute top-0 right-[-10px]',
	},
	{
		name: 'Дима',
		message: `Все свежее, сделано очень\nкачественно и просторно  🙌`,
		avatarImg: avatar2,
		imgs: [reviews2],
		position:
			' absolute right-[120px] md:right-[130px] lg:right-[70px] 2xl:right-[84px] top-[44px] md:top-[95px] lg:top-[180px] 2xl:top-[170px] md:flex-row-reverse z-30',
	},
	{
		name: 'Вика',
		message: `Очень понравилось расположение,\nвремя от Сити всего 45 минут! 🚗`,
		avatarImg: avatar3,
		imgs: [reviews3, reviews4],
		position:
			'absolute bottom-[35px] md:bottom-0 right-[18px] lg:right-[-15px] 2xl:bottom-[46px]',
	},
]
