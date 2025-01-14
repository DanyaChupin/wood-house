import { RefObject } from 'react'

export const animateSlider = (
	ref: RefObject<HTMLDivElement | null>,
	to: number
) => {
	ref.current?.scrollBy({
		left: to,
		behavior: 'smooth',
	})
}
