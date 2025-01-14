'use client'

import { useEffect, useRef, useState } from 'react'
import { StaticImageData } from 'next/image'
import { ArrowIcon } from '@/shared/icons/Arrow-icon'
import { ImageBlock } from '@/shared/ui'
import { animateSlider } from '../lib/animateSlider'

interface IProductSliderDesk {
	imgUrls: StaticImageData[]
	alt: string
}
export function ProductSlideDesk({ imgUrls, alt }: IProductSliderDesk) {
	const slideRef = useRef<HTMLDivElement | null>(null)
	const [isDisabled, setIsDisabled] = useState(false)
	useEffect(() => {
		let timeout: null | NodeJS.Timeout = null
		if (isDisabled) {
			timeout = setTimeout(() => {
				setIsDisabled(false)
			}, 700)
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
				className="w-full flex overflow-hidden mb-[30px]"
			>
				{imgUrls.map((img) => (
					<div className="shrink-0 w-full" key={img.src}>
						<ImageBlock
							className="h-full shrink-0 w-full"
							imgUrl={img}
							alt={alt}
						/>
					</div>
				))}
				<div className="absolute bottom-[20px] right-[20px] gap-[20px] flex z-20">
					<button
						className="bg-black px-[16px] py-[18px] rounded-[14px] rotate-180 hover:bg-GRAY_500 transition-[background-color] duration-200"
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
						className="bg-black px-[16px] py-[18px] rounded-[14px] hover:bg-GRAY_500  transition-[background-color] duration-200"
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
		</div>
	)
}
