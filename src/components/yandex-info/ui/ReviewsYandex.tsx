import { REVIEWS_DATA } from '../lib/reviewsData'
import { ReviewsItem } from './ReviewsItem'

export function ReviewsYandex() {
	return (
		<div className="h-[276px] md:h-[300px] lg:h-[500px] 2xl:h-[540px] w-full relative">
			{REVIEWS_DATA.map((review) => (
				<ReviewsItem
					name={review.name}
					message={review.message}
					avatarImg={review.avatarImg}
					images={review.imgs}
					key={review.message}
					position={review.position}
				/>
			))}
		</div>
	)
}
