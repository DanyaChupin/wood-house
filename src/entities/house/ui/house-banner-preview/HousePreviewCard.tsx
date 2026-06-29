'use client'

import { Button, ImageBlock } from '@/shared/ui'
import { BLACK_HOUSE_IMAGES } from '../../model/houseImages'

export function HousePreviewCard() {
	const houseImg = BLACK_HOUSE_IMAGES.images[2]

	const handleScroll = () => {
		document.getElementById('dark-house')?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<div className="bg-WHITE_500 w-full flex flex-col gap-y-[12px] rounded-[24px] p-[16px]">
			<div className="flex flex-col px-[8px] gap-y-[8px]">
				<p className="font-bold font-[SoyuzGrotesk] text-[28px] leading-[20px]">
					Темный дом
				</p>
				<p className="font-normal text-[16px] leading-[24px] text-[#666666]">
					Для тех, кто хочет тишину, отдых  и перезагрузку без
					долгих перелётов.
				</p>
			</div>
			<ImageBlock
				imgUrl={houseImg.src}
				className="w-full h-[270px] rounded-[16px]"
				alt={houseImg.alt}
			/>
			<Button className="w-full" onClick={handleScroll}>Посмотреть дом</Button>
		</div>
	)
}
