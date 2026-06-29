'use client'

import { ImageBlock } from '@/shared/ui'
import { usePreviewSlider } from '@/widgets/slider-preview-photos/lib/usePreviewSlider'

export function HouseBannerBackground() {
	const { visibleSlide, isVisible } = usePreviewSlider()
	return (
		<div className="absolute w-full z-0">
			<ImageBlock
				imgUrl={visibleSlide.img}
				id="sliderImage"
				className={`w-full h-[670px] 2xl:h-[790px] 3xl:h-[878px] rounded-card-md transition-[opacity] duration-[600ms] ${isVisible ? 'opacity-100' : 'opacity-50'}`}
				alt={visibleSlide.alt}
			/>
		</div>
	)
}
