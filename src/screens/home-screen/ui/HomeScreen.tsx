import { Achievements } from './achievements'
import { HOUSES_DATA, HouseBannerPreview } from '@/entities/house'
import { HouseCard } from '@/widgets/house-card'
import { HousePerks } from '@/widgets/house-perks'
import { PhotoGallery } from '@/widgets/photo-gallery'
import { ReviewsBlock } from '@/widgets/reviews-block'

// const ProsBlock = dynamic(() => import('@/widgets/pros-block/ProsBlock'))
// const ReviewsBlock = dynamic(
// 	() => import('@/widgets/reviews-block/ReviewsBlock')
// )
// const HomeInfoSection = dynamic(() =>
// 	import('@/widgets/home').then((c) => c.HomeInfoSection)
// )
// const ProductsList = dynamic(() =>
// 	import('@/widgets/product-list').then((c) => c.ProductsList)
// )

// export function HomeScreen() {
// 	return (
// 		<>
// 			<main
// 				id="sliderScreen"
// 				className="transition-[transform, opacity] closeLeft duration-200"
// 			>
// 				<TitlePageInfo
// 					title="Вудхаус"
// 					description="Посуточная аренда загородного дома в 50 км от МКАД.
// 				Окунитесь в атмосферу уюта, стиля и спокойствия"
// 					className="sm:text-center"
// 				>
// 					<SliderPreviewPhotos />
// 				</TitlePageInfo>
// 				<HomeInfoSection />
// 				<ProductsList />
// 				<SignBoardGallery />
// 				{/* <ProsBlock /> */}
// 				<YandexInfo />
// 				{/* <ReviewsBlock /> */}
// 			</main>
// 		</>
// 	)
// }

export function HomeScreen() {
	return (
		<>
			<main
				id="sliderScreen"
				className="transition-[transform, opacity] relative closeLeft duration-200"
			>
				<HouseBannerPreview />
				<Achievements />
				<p className="mb-[24px] 2xl:mb-[40px] font-[SoyuzGrotesk] font-bold text-[32px] leading-[38px] whitespace-pre-wrap 2xl:text-[48px] 2xl:leading-[52px]">
					{`Идеальное место для тех, кто\nищет гармонию с природой и\nуединение от городской суеты`}
				</p>
				<HousePerks />
				<div className="flex flex-col w-full gap-y-[80px] mb-[80px] 2xl:mb-[160px]">
					{HOUSES_DATA.map((house, index) => (
						<HouseCard key={house.title} house={house} id={index === 0 ? 'dark-house' : undefined} />
					))}
				</div>
				<div className="mb-[32px] 2xl:mb-[51px] flex flex-col gap-y-[8px]">
					<h3 className="font-[SoyuzGrotesk] font-bold text-[40px] leading-[44px] whitespace-pre-wrap 2xl:text-[64px] 2xl:leading-[100%]">
						{`Что вы получите\nот выходных в Вудхаусе`}
					</h3>
					<p className="text-[18px] font-medium font-[SFPro] leading-[26px] 2xl:leading-[140%] whitespace-pre-wrap text-BLACK_500/60">
						{`Несколько дней, когда не нужно никуда ехать,\nникого ждать и ничего выполнять.\nТолько лес, баня, купель и близкие люди рядом.`}
					</p>
				</div>
				<div className="mb-[80px]">
					<PhotoGallery />
				</div>
				<div className="mb-[80px] lg:mb-[130px]">
					<ReviewsBlock />
				</div>
			</main>
		</>
	)
}
