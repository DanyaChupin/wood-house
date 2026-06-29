'use client'

import { useEffect, useRef, useState } from 'react'
import { StaticImageData } from 'next/image'
import { ArrowIcon } from '@/shared/icons/Arrow-icon'
import { animateSlider } from '../lib/animateSlider'
import ProductSliderDeskMap from './ProductSliderDeskMap'

interface IProductSliderDesk {
	imgUrls: StaticImageData[]
	alt: string
}
export default function ProductSliderDesk({
	imgUrls,
	alt,
}: IProductSliderDesk) {
	const slideRef = useRef<HTMLDivElement | null>(null)
	const [isDisabled, setIsDisabled] = useState(false)
	useEffect(() => {
		let timeout: null | NodeJS.Timeout = null
		if (isDisabled) {
			timeout = setTimeout(() => {
				setIsDisabled(false)
			}, 200)
		}
		return () => {
			if (timeout) {
				clearTimeout(timeout)
			}
		}
	}, [isDisabled])
	return (
		<div className="relative">
			<div
				ref={slideRef}
				className={`w-full flex snap-mandatory snap-x scrollbar-hide overflow-x-scroll mb-[30px] rounded-card-md`}
			>
				<ProductSliderDeskMap imgUrls={imgUrls} alt={alt} />
			</div>
			<div className="absolute bottom-[20px] right-[20px] gap-[20px] flex z-20">
				<button
					className="bg-black px-[16px] py-[18px] rounded-[14px] rotate-180 active:bg-GRAY_600 hover:bg-GRAY_500 transition-[background-color] duration-200"
					aria-label="прошлый слайд"
					onClick={() => {
						if (slideRef.current) {
							if (!isDisabled)
								animateSlider(
									slideRef,
									-slideRef.current.getBoundingClientRect()
										.width
								)
							setIsDisabled(true)
						}
					}}
				>
					<ArrowIcon />
				</button>
				<button
					className="bg-black px-[16px] py-[18px] rounded-[14px] hover:bg-GRAY_500 active:bg-GRAY_600 transition-[background-color] duration-200"
					aria-label="следующий слайд"
					onClick={() => {
						if (slideRef.current)
							if (!isDisabled)
								animateSlider(
									slideRef,
									slideRef.current.getBoundingClientRect()
										.width
								)
						setIsDisabled(true)
					}}
				>
					<ArrowIcon />
				</button>
			</div>
		</div>
	)
}
