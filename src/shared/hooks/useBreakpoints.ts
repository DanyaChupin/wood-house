'use client'

import { useEffect, useState } from 'react'

const DESKTOP = 1440 // 1160
const TABLET = 1280 // 770
const MOBILE = 768 // 375
const LAPTOP = 1440

export function useBreakpoints() {
	const width = useWindowSize()
	const isDesktop = width >= LAPTOP
	const isLaptop = width < DESKTOP && width >= TABLET
	const isTablet = width < TABLET && width >= MOBILE
	const isMobile = width < MOBILE
	return { isDesktop, isLaptop, isTablet, isMobile }
}

function useWindowSize() {
	const [width, setWidth] = useState(0)
	useEffect(() => {
		function updateSize() {
			setWidth(window.innerWidth)
		}
		window.addEventListener('resize', updateSize, { passive: true })
		updateSize()
		return () => window.removeEventListener('resize', updateSize)
	}, [])
	return width
}
