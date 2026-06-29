import { ImageBlock } from '@/shared/ui'

interface IReviewGalleryItem {
	imgUrl: string
	alt: string
}

const REVIEW_GALLERY_ITEMS: IReviewGalleryItem[] = [
	{ imgUrl: '/images/review-gallery/Review.webp', alt: 'Отзыв 1' },
	{ imgUrl: '/images/review-gallery/Review-1.webp', alt: 'Отзыв 2' },
	{ imgUrl: '/images/review-gallery/Review-2.webp', alt: 'Отзыв 3' },
	{ imgUrl: '/images/review-gallery/Review-3.webp', alt: 'Отзыв 4' },
	{ imgUrl: '/images/review-gallery/Review-4.webp', alt: 'Отзыв 5' },
	{ imgUrl: '/images/review-gallery/Review-5.webp', alt: 'Отзыв 6' },
]

interface IReviewGalleryProps {
	className?: string
}

export function ReviewGallery({ className }: IReviewGalleryProps) {
	return (
		<ul className={className}>
			{REVIEW_GALLERY_ITEMS.map((item) => (
				<li key={item.imgUrl}>
					<ImageBlock
						className="w-[338px] h-[400px] lg:w-[530px] lg:h-[400px] [&>img]:object-left rounded-[24px]"
						alt={item.alt}
						imgUrl={item.imgUrl}
					/>
				</li>
			))}
		</ul>
	)
}
