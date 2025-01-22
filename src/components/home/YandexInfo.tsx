'use client'

import Link from 'next/link'
import { ArrowIcon } from '@/shared/icons/Arrow-icon'

export function YandexInfo() {
	return (
		<div className="flex flex-col mb-[37px] lg:mb-[43px] 2xl:mb-[50px] items-start ml-[10%] sm:ml-[18%] lg:ml-[21%] gap-[30px] lg:gap-[23px] 2xl:gap-[15px]">
			<h4 className="text-[32px] lg:text-[40px] leading-[40px] 2xl:leading-[56px] 2xl:text-[48px]">
				Наши гости деляться
				<br />
				своими эмоциями
				<br />
				на Яндекс Картах.
				<br />
				Поделитесь и вы
			</h4>
			<Link
				target="_blank"
				href="https://yandex.ru/navi/org/vudxauc/143261160280?si=tn0mmygpnev860dyen4z7z1f0w"
				className="py-[14px] bg-black font-[SFPro] hover:bg-GRAY_500 transition-[background-color] duration-200 font-bold rounded-[12px] text-white text-[16px] flex items-center gap-[8px] justify-center w-[202px] active:bg-GRAY_600"
			>
				Яндекс Карты
				<ArrowIcon />
			</Link>
		</div>
	)
}
