'use client'

import { useEffect, useState } from 'react'
import house1 from '../../../shared/images/slider-house-1.png'
import house2 from '../../../shared/images/slider-house-2.jpeg'

const imagesData = [house1, house2]

export const usePreviewSlider = () => {
	const [currentImage, setCurrentImage] = useState(imagesData[0])

	const [prevImage, setPrevImage] = useState(currentImage)

	const [countImage, setCountImage] = useState(0)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setPrevImage(currentImage)
		}, 500)
		return () => {
			clearTimeout(timeout)
		}
	}, [currentImage])

	useEffect(() => {
		const timer = setTimeout(() => {
			const nextCount = (countImage + 1) % imagesData.length
			setCurrentImage(imagesData[nextCount])
			setCountImage(nextCount)
		}, 4000)

		return () => {
			clearTimeout(timer)
		}
	}, [countImage])

	return { currentImage, prevImage }
}
