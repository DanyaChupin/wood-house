'use client'

import { useState } from 'react'
import { IViewerImage } from '@/shared/ui'
import { IHousePerkView } from '../model/IHousePerk'
import { HOUSE_PERKS_DATA } from '../model/housePerkData'
import { HousePerkDesktopImages } from './HousePerkDesktopImages'
import { HousePerkDesktopItem } from './HousePerkDesktopItem'

interface IHousePerkDesktopProps {
	onViewerOpen: (images: IViewerImage[], index: number) => void
}

function toViewerImages(perk: IHousePerkView): IViewerImage[] {
	return perk.images.map((img) => ({ src: img.src, alt: img.alt }))
}

export function HousePerkDesktop({ onViewerOpen }: IHousePerkDesktopProps) {
	const [activeIndex, setActiveIndex] = useState(0)
	const activePerk = HOUSE_PERKS_DATA[activeIndex]

	return (
		<div className="flex gap-[24px]">
			{/* Левый список */}
			<div className="flex flex-col gap-[12px] max-w-[496px] 2xl:max-w-[596px]">
				{HOUSE_PERKS_DATA.map((perk, i) => (
					<HousePerkDesktopItem
						key={perk.title}
						perk={perk}
						isActive={i === activeIndex}
						onHover={() => setActiveIndex(i)}
					/>
				))}
			</div>

			{/* Правая сетка картинок */}
			<div className="flex-1">
				<HousePerkDesktopImages
					images={activePerk.images}
					activeIndex={activeIndex}
					onImageClick={(index) =>
						onViewerOpen(toViewerImages(activePerk), index)
					}
				/>
			</div>
		</div>
	)
}
