'use client'

import { AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { IViewerImage, ImageViewer } from '@/shared/ui'
import { IHousePerkView } from '../model/IHousePerk'
import { HOUSE_PERKS_DATA } from '../model/housePerkData'
import { HousePerkDesktop } from './HousePerkDesktop'
import { HousePerkMobileCard } from './HousePerkMobileCard'

interface IViewerState {
	images: IViewerImage[]
	initialIndex: number
}

function toViewerImages(perk: IHousePerkView): IViewerImage[] {
	return perk.images.map((img) => ({ src: img.src, alt: img.alt }))
}

export function HousePerks() {
	const [viewer, setViewer] = useState<IViewerState | null>(null)

	const openViewer = (images: IViewerImage[], index: number) => {
		setViewer({ images, initialIndex: index })
	}

	return (
		<section className="w-full mb-[88px] 2xl:mb-[160px]">
			{/* Десктоп */}
			<div className="hidden mdPlus:block">
				<HousePerkDesktop onViewerOpen={openViewer} />
			</div>

			{/* Мобилка */}
			<div className="mdPlus:hidden flex flex-col gap-[16px]">
				{HOUSE_PERKS_DATA.map((perk) => (
					<HousePerkMobileCard
						key={perk.title}
						perk={perk}
						onImageClick={(index) =>
							openViewer(toViewerImages(perk), index)
						}
					/>
				))}
			</div>

			<AnimatePresence>
				{viewer && (
					<ImageViewer
						images={viewer.images}
						initialIndex={viewer.initialIndex}
						onClose={() => setViewer(null)}
					/>
				)}
			</AnimatePresence>
		</section>
	)
}
