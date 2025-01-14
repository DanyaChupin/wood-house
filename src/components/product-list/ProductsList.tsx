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
import blackHousePrevOne from '../../shared/images/black-house-prev-1.png'
import blackHousePrevTwo from '../../shared/images/black-house-prev-2.png'
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
		prevImg: [blackHousePrevOne, blackHousePrevTwo],
	},
]
export default function ProductList() {
	return (
		<div>
			{HOUSING.map((house) => (
				<ProductCard house={house} key={house.title} />
			))}
		</div>
	)
}
