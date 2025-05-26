import { IHouse } from '@/shared/types/type'
import blackHouseDesk1 from '../../shared/images/black-house-desk-1.png'
import blackHouseDesk2 from '../../shared/images/black-house-desk-2.png'
import blackHouseDesk3 from '../../shared/images/black-house-desk-3.png'
import blackHouseDesk4 from '../../shared/images/black-house-desk-4.png'
import blackHouseDesk5 from '../../shared/images/black-house-desk-5.png'
import blackHouseDesk6 from '../../shared/images/black-house-desk-6.png'
import blackHouseDesk7 from '../../shared/images/black-house-desk-7.png'
import blackHouseDesk8 from '../../shared/images/black-house-desk-8.png'
import blackHouseDesk9 from '../../shared/images/black-house-desk-9.png'
import blackHouseDesk10 from '../../shared/images/black-house-desk-10.png'
import blackHouseDesk11 from '../../shared/images/black-house-desk-11.png'
import blackHouseDesk12 from '../../shared/images/black-house-desk-12.png'
import blackHouseDesk13 from '../../shared/images/black-house-desk-13.png'
import blackHouseMobile1 from '../../shared/images/black-house-mobile-1.png'
import blackHouseMobile2 from '../../shared/images/black-house-mobile-2.png'
import blackHouseMobile3 from '../../shared/images/black-house-mobile-3.png'
import blackHouseMobile4 from '../../shared/images/black-house-mobile-4.png'
import blackHouseMobile5 from '../../shared/images/black-house-mobile-5.png'
import blackHouseMobile6 from '../../shared/images/black-house-mobile-6.png'
import blackHouseMobile7 from '../../shared/images/black-house-mobile-7.png'
import blackHouseMobile8 from '../../shared/images/black-house-mobile-8.png'
import blackHouseMobile9 from '../../shared/images/black-house-mobile-9.png'
import blackHouseMobile10 from '../../shared/images/black-house-mobile-10.png'
import blackHouseMobile11 from '../../shared/images/black-house-mobile-11.png'
import blackHouseMobile12 from '../../shared/images/black-house-mobile-12.png'
import blackHouseMobile13 from '../../shared/images/black-house-mobile-13.png'
import blackHousePrev1 from '../../shared/images/black-house-prev-1.png'
import blackHousePrev2 from '../../shared/images/black-house-prev-2.png'
import whiteHouseDesk1 from '../../shared/images/white-house-desk-1.png'
import whiteHouseDesk2 from '../../shared/images/white-house-desk-2.png'
import whiteHouseDesk3 from '../../shared/images/white-house-desk-3.png'
import whiteHouseDesk4 from '../../shared/images/white-house-desk-4.png'
import whiteHouseDesk5 from '../../shared/images/white-house-desk-5.png'
import whiteHouseDesk6 from '../../shared/images/white-house-desk-6.png'
import whiteHouseDesk7 from '../../shared/images/white-house-desk-7.png'
import whiteHouseDesk8 from '../../shared/images/white-house-desk-8.png'
import whiteHouseDesk9 from '../../shared/images/white-house-desk-9.png'
import whiteHouseDesk10 from '../../shared/images/white-house-desk-10.png'
import whiteHouseDesk11 from '../../shared/images/white-house-desk-11.png'
import whiteHouseDesk12 from '../../shared/images/white-house-desk-12.png'
import whiteHouseDesk13 from '../../shared/images/white-house-desk-13.png'
import whiteHouseMobile1 from '../../shared/images/white-house-mobile-1.png'
import whiteHouseMobile2 from '../../shared/images/white-house-mobile-2.png'
import whiteHouseMobile3 from '../../shared/images/white-house-mobile-3.png'
import whiteHouseMobile4 from '../../shared/images/white-house-mobile-4.png'
import whiteHouseMobile5 from '../../shared/images/white-house-mobile-5.png'
import whiteHouseMobile6 from '../../shared/images/white-house-mobile-6.png'
import whiteHouseMobile7 from '../../shared/images/white-house-mobile-7.png'
import whiteHouseMobile8 from '../../shared/images/white-house-mobile-8.png'
import whiteHouseMobile9 from '../../shared/images/white-house-mobile-9.png'
import whiteHouseMobile10 from '../../shared/images/white-house-mobile-10.png'
import whiteHouseMobile11 from '../../shared/images/white-house-mobile-11.png'
import whiteHouseMobile12 from '../../shared/images/white-house-mobile-12.png'
import whiteHouseMobile13 from '../../shared/images/white-house-mobile-13.png'
import whiteHousePrev1 from '../../shared/images/white-house-prev-1.png'
import whiteHousePrev2 from '../../shared/images/white-house-prev-2.png'
import { ProductCard } from '../product-card'

const HOUSING: IHouse[] = [
	{
		title: 'Темный дом',
		capacity: '2 - 4 гостя',
		livingArea: `98.3м`,
		terraceArea: '25м',
		mainImgMobile: [
			blackHouseMobile1,
			blackHouseMobile2,
			blackHouseMobile3,
			blackHouseMobile4,
			blackHouseMobile5,
			blackHouseMobile6,
			blackHouseMobile7,
			blackHouseMobile8,
			blackHouseMobile9,
			blackHouseMobile10,
			blackHouseMobile11,
			blackHouseMobile12,
			blackHouseMobile13,
		],
		mainImgDesktop: [
			blackHouseDesk1,
			blackHouseDesk2,
			blackHouseDesk3,
			blackHouseDesk4,
			blackHouseDesk5,
			blackHouseDesk6,
			blackHouseDesk7,
			blackHouseDesk8,
			blackHouseDesk9,
			blackHouseDesk10,
			blackHouseDesk11,
			blackHouseDesk12,
			blackHouseDesk13,
		],
		prevImg: [blackHousePrev1, blackHousePrev2],
	},
	{
		title: 'Светлый дом',
		capacity: '2 - 4 гостя',
		livingArea: `98.6м`,
		terraceArea: '25м',
		mainImgMobile: [
			whiteHouseMobile1,
			whiteHouseMobile2,
			whiteHouseMobile3,
			whiteHouseMobile4,
			whiteHouseMobile5,
			whiteHouseMobile6,
			whiteHouseMobile7,
			whiteHouseMobile8,
			whiteHouseMobile9,
			whiteHouseMobile10,
			whiteHouseMobile11,
			whiteHouseMobile12,
			whiteHouseMobile13,
		],
		mainImgDesktop: [
			whiteHouseDesk1,
			whiteHouseDesk2,
			whiteHouseDesk3,
			whiteHouseDesk4,
			whiteHouseDesk5,
			whiteHouseDesk6,
			whiteHouseDesk7,
			whiteHouseDesk8,
			whiteHouseDesk9,
			whiteHouseDesk10,
			whiteHouseDesk11,
			whiteHouseDesk12,
			whiteHouseDesk13,
		],
		prevImg: [whiteHousePrev1, whiteHousePrev2],
	},
]
export default function ProductList() {
	return (
		<div className="flex flex-col mb-[20px] lg:mb-[100px] 2xl:mb-[150px] gap-[20px] lg:gap-0">
			{HOUSING.map((house, index) => (
				<div key={house.title}>
					{index !== 0 && (
						<div className="h-[2px] bg-WHITE_700 w-[calc(100%+100px)] hidden lg:block ml-[-50px]" />
					)}
					<ProductCard
						id={(index + 1).toString()}
						house={house}
						key={house.title}
					/>
				</div>
			))}
		</div>
	)
}
