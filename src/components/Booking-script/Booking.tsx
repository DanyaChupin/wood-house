import { useEffect } from 'react'

export default function Booking() {
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

	return <div className="left" id="booking_iframe" />
}
