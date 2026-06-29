'use client'

import { useState } from 'react'
import Image from 'next/image'

interface IImageBlock {
	imgUrl: string
	className?: string
	alt: string
	id?: string
}
export function ImageBlock({ imgUrl, className = '', alt, id }: IImageBlock) {
	const [isLoading, setIsLoading] = useState(true)
	return (
		<div id={id} className={`relative overflow-hidden ${className}`}>
			<div
				className={`absolute inset-0 z-10 bg-gray-200 transition-opacity duration-500 ${isLoading ? 'animate-pulse opacity-100' : 'opacity-0'}`}
			/>
			<Image
				className={`object-cover z-20 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
				onLoad={() => setIsLoading(false)}
				loading="lazy"
				src={imgUrl}
				alt={alt}
				fill
			/>
		</div>
	)
}
