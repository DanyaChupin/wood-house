'use client'

import { ImageBlock } from '@/shared/ui'
import { usePreviewSlider } from '../lib/usePreviewSlider'

export function SliderPreviewPhotos() {
	const { visibleSlide, isVisible } = usePreviewSlider()

	return (
		<div className="relative">
			<ImageBlock
				imgUrl={visibleSlide.img}
				id="sliderImage"
				className={`w-full ${isVisible ? 'opacity-100 blur-[0px]' : '!opacity-0 blur-[3px]'} duration-200 transition-[opacity,blur,filter] h-[511px] left-0 absolute 2xl:h-[604px] mb-[20px] lg:mb-[100px] 2xl:mb-[150px] rounded-card-md lg:rounded-card-lg`}
				alt={visibleSlide.alt}
			/>
		</div>
	)
}
