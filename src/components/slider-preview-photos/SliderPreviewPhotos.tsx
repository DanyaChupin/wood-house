'use client'

import { useEffect, useState } from 'react'
import { ROUNDED } from '@/shared/const/rounded'
import { ImageBlock } from '@/shared/ui'
import { usePreviewSlider } from './lib/usePreviewSlider'

export function SliderPreviewPhotos() {
	const { currentImage, prevImage } = usePreviewSlider()
	const [isInit, setIsInit] = useState(false)
	const [isShow, setIsShow] = useState(true)
	useEffect(() => {
		setIsInit(true)
	}, [])

	useEffect(() => {
		if (isInit) setIsShow(false)
		const timer = setTimeout(() => {
			setIsShow(true)
		}, 500)

		return () => {
			clearTimeout(timer)
		}
	}, [currentImage])

	return (
		<div className="relative">
			<ImageBlock
				imgUrl={prevImage}
				id="sliderImage"
				className={`w-full ${isShow ? 'opacity-100 blur-[0px]' : '!opacity-0 blur-[3px]'} duration-200 transition-[opacity,filter] h-[511px] left-0 absolute 2xl:h-[604px] mb-[20px] lg:mb-[100px] 2xl:mb-[150px] ${ROUNDED.md} ${ROUNDED.lg}`}
				alt="Посуточная аренда загородного дома в 50 км от МКАД."
			/>
		</div>
	)
}
