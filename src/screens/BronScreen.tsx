'use client'

import { useEffect } from 'react'

export function BronScreen() {
	useEffect(() => {
		const script = document.createElement('script')
		script.async = true
		script.src =
			'https://widget.reservationsteps.ru/iframe/library/dist/booking_iframe.js'
		document.body.appendChild(script)

		script.onload = () => {
			;(function () {
				// eslint-disable-next-line
				//@ts-ignore
				const BnovoBookFrame = new BookingIframe({
					html_id: 'booking_iframe',
					uid: '156c880f-c885-4975-95b2-81e1efcbad31',
					lang: 'ru',
					width: 'auto',
					height: 'auto',
					rooms: '',
					IsMobile: '0',
					scroll_to_rooms: '0',
				})
				BnovoBookFrame.init()
			})()
		}
	}, [])

	return (
		<main
			id="sliderScreen"
			className="mb-[150px] lg:mb-[180px] 2xl:mb-[200px] transition-[transform, opacity] closeLeft duration-500"
		>
			<h1 className="text-[53px] transition-transform sm:text-[72px]  w-full lg:text-[88px] leading-[72px] 2xl:leading-[112px] 2xl:text-[96px] flex justify-center mb-[71px] sm:mb-[61px] lg:mb-[50px]">
				Бронирование
			</h1>
			<div className="left" id="booking_iframe" />
		</main>
	)
}
