'use client'

import { useEffect, useRef, useState } from 'react'

interface ISlide {
	img: string
	alt: string
}

const SLIDES: ISlide[] = [
	{
		img: '/images/house-banner-preview/banner-1.webp',
		alt: 'Вудхаус — уединённый дом в лесу, вид снаружи',
	},

	{
		img: '/images/house-banner-preview/banner-2.webp',
		alt: 'Вудхаус — интерьер загородного дома',
	},
	{
		img: '/images/house-banner-preview/banner-3.webp',
		alt: 'Вудхаус — терраса с панорамным видом на лес',
	},
	{
		img: '/images/house-banner-preview/banner-4.webp',
		alt: 'Вудхаус — баня с купелью',
	},
	{
		img: '/images/house-banner-preview/banner-5.webp',
		alt: 'Вудхаус — вечерний вид на дом',
	},
	{
		img: '/images/house-banner-preview/banner-6.webp',
		alt: 'Вудхаус — зона отдыха на природе',
	},
]

const SLIDE_INTERVAL_MS = 4000
const TRANSITION_MS = 400

export const usePreviewSlider = () => {
	const [index, setIndex] = useState(0)
	const [visibleSlide, setVisibleSlide] = useState<ISlide>(SLIDES[0])
	const [isVisible, setIsVisible] = useState(true)
	const prevIndex = useRef(-1)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIndex((prev) => (prev + 1) % SLIDES.length)
		}, SLIDE_INTERVAL_MS)
		return () => clearTimeout(timer)
	}, [index])

	useEffect(() => {
		if (prevIndex.current === index) return
		const isFirstMount = prevIndex.current === -1
		prevIndex.current = index
		if (isFirstMount) return

		setIsVisible(false)
		const timer = setTimeout(() => {
			setVisibleSlide(SLIDES[index])
			setIsVisible(true)
		}, TRANSITION_MS)
		return () => clearTimeout(timer)
	}, [index])

	return { visibleSlide, isVisible }
}
