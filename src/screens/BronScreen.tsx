'use client'

import dynamic from 'next/dynamic'

const Booking = dynamic(() =>
	import('@/features/booking').then((m) => m.Booking)
)
export function BronScreen() {
	return (
		<main
			id="sliderScreen"
			className="mb-[150px] lg:mb-[180px] 2xl:mb-[200px] transition-[transform, opacity] closeLeft duration-500"
		>
			<h1 className="text-[53px] transition-transform sm:text-[72px]  w-full lg:text-[88px] leading-[72px] 2xl:leading-[112px] 2xl:text-[96px] flex justify-center mb-[71px] sm:mb-[61px] lg:mb-[50px]">
				Бронирование
			</h1>
			<Booking />
		</main>
	)
}
