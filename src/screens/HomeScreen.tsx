import dynamic from 'next/dynamic'
import { SignBoardGallery } from '@/components/signboard-gallery/SignBoardGallery'
import { SliderPreviewPhotos } from '@/components/slider-preview-photos/SliderPreviewPhotos'
import { TitlePageInfo } from '@/components/title-page-info'
import { YandexInfo } from '@/components/yandex-info/YandexInfo'

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
					<SliderPreviewPhotos />
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
