'use client'

import { useEffect } from 'react'

export function BronScreen() {
	useEffect(() => {
		const script = document.createElement('script')
		script.async = true
		script.src = '//widget.reservationsteps.ru/js/bnovo.js'
		document.body.appendChild(script)

		script.onload = () => {
			;(function () {
				// eslint-disable-next-line
				//@ts-ignore
				Bnovo_Widget.init(function () {
					// eslint-disable-next-line
					//@ts-ignore
					Bnovo_Widget.open('_bn_widget_', {
						type: 'vertical',
						uid: '156c880f-c885-4975-95b2-81e1efcbad31',
						lang: 'ru',
						currency: 'RUB',
						width: '300',
						width_mobile: '300',
						background: '#ffffff',
						background_mobile: '#ffffff',
						bg_alpha: '100',
						bg_alpha_mobile: '100',
						border_color_mobile: '#C6CAD3',
						padding: '24',
						padding_mobile: '24',
						border_radius: '8',
						button_font_size: '14',
						button_height: '42',
						font_type: 'inter',
						title_color: '#242742',
						title_color_mobile: '#242742',
						title_size: '22',
						title_size_mobile: '22',
						inp_color: '#242742',
						inp_bordhover: '#BBBBBB',
						inp_bordcolor: '#DDDDDD',
						inp_alpha: '10',
						btn_background: '#f08f18',
						btn_background_over: '#F08F18',
						btn_textcolor: '#FFFFFF',
						btn_textover: '#FFFFFF',
						btn_bordcolor: '#F08F18',
						btn_bordhover: '#F08F18',
						min_age: '0',
						max_age: '17',
						adults_default: '1',
						dates_preset: 'on',
						dfrom_today: 'on',
						dfrom_value: '2',
						dto_nextday: 'on',
						dto_value: '2',
						cancel_color: '#1875F0',
						url: 'https://wood-house-three.vercel.app/bron',
						switch_mobiles_width: '800',
					})
				})
			})()
		}
	}, [])

	return (
		<main
			id="sliderScreen"
			className="mb-[150px] lg:mb-[180px] 2xl:mb-[200px] transition-[transform, opacity] closeLeft duration-500"
		>
			<h1 className="text-[64px] transition-transform sm:text-[72px]  w-full lg:text-[88px] leading-[72px] 2xl:leading-[112px] 2xl:text-[96px] flex justify-center mb-[71px] sm:mb-[61px] lg:mb-[50px]">
				Бронирование
			</h1>

			<div className="left" id="_bn_widget_" />
		</main>
	)
}
