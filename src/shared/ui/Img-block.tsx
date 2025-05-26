'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'

interface IImageBlock {
	imgUrl: StaticImageData
	className?: string
	alt: string
	id?: string
}
export function ImageBlock({ imgUrl, className = '', alt, id }: IImageBlock) {
	const [isLoading, setIsLoading] = useState(true)
	return (
		<div id={id && id} className="relative w-full h-full">
			<div
				className={`${isLoading ? 'animate-pulse' : 'opacity-100'} z-10 absolute transition-opacity bg-gray-200 ${className ? className : ''}`}
			/>
			<Image
				className={`object-cover relative z-20 ${!isLoading ? 'opacity-100' : 'opacity-0'} duration-500 transition-opacity ${className ? className : ''}`}
				onLoad={() => setIsLoading(false)}
				loading="lazy"
				src={imgUrl}
				alt={alt}
			/>
		</div>
	)
}
