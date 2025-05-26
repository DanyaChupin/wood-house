'use client'

import dynamic from 'next/dynamic'
import { SignBoardGallery } from '@/components/signboard-gallery/SignBoardGallery'
import { TitlePageInfo } from '@/components/title-page-info'
import { YandexInfo } from '@/components/yandex-info/YandexInfo'
import { ROUNDED } from '@/shared/const/rounded'
import { ImageBlock } from '@/shared/ui'
import houseOne from '../shared/images/house-one.png'

// const ProsBlock = dynamic(() => import('@/components/pros-block/ProsBlock'))
// const ReviewsBlock = dynamic(
// 	() => import('@/components/reviews-block/ReviewsBlock')
// )
const HomeInfoSection = dynamic(
	() => import('@/components/home/HomeInfoSection')
)
const ProductList = dynamic(
	() => import('@/components/product-list/ProductsList')
)

export function HomeScreen() {
	return (
		<>
			<main
				id="sliderScreen"
				className="transition-[transform, opacity] closeLeft duration-200"
			>
				<TitlePageInfo
					title="Вудхаус"
					description="Посуточная аренда загородного дома в 50 км от МКАД.
				Окунитесь в атмосферу уюта, стиля и спокойствия"
					className="sm:text-center"
				>
					<ImageBlock
						imgUrl={houseOne}
						id="sliderImage"
						className={`w-full h-[511px] 2xl:h-[604px] mb-[20px] lg:mb-[100px] 2xl:mb-[150px] ${ROUNDED.md} ${ROUNDED.lg}`}
						alt="Посуточная аренда загородного дома в 50 км от МКАД."
					/>
				</TitlePageInfo>
				<HomeInfoSection />
				<ProductList />
				<SignBoardGallery />
				{/* <ProsBlock /> */}
				<YandexInfo />
				{/* <ReviewsBlock /> */}
			</main>
		</>
	)
}
