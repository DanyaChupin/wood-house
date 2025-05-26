'use client'

import { bgAccent } from '@/shared/const/bgAccent'
import { ROUNDED } from '@/shared/const/rounded'
import { useBreakpoints } from '@/shared/hooks/useBreakpoints'
import { ReviewsYandex } from './ui/ReviewsYandex'
import { YandexButton } from './ui/YandexButton'

export function YandexInfo() {
	const { isMobile } = useBreakpoints()
	return (
		<div
			className={`flex ${bgAccent} mb-[20px] lg:mb-[100px] 2xl:mb-[150px] justify-center w-full p-[25px] 2xl:p-[50px] ${ROUNDED.md}`}
		>
			<div className="flex gap-[15px] flex-col relative justify-between">
				<h4 className="text-[28px] md:absolute whitespace-nowrap text-GRAY_550 lg:text-[50px] mdPlus:text-[40px] lg:leading-[100%] leading-[40px] 2xl:leading-[117%] 2xl:text-[64px]">
					Наши гости деляться
					<br />
					своими эмоциями
					<br />
					на Яндекс Картах.
					<br />
					<strong className="text-black">Поделитесь и вы</strong>
				</h4>
				{isMobile && <ReviewsYandex />}
				<div className="md:w-[202px] md:absolute bottom-0">
					<YandexButton />
				</div>
			</div>
			{!isMobile && <ReviewsYandex />}
		</div>
	)
}
