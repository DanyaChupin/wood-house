'use client'

import { AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { Button, IViewerImage, ImageBlock, ImageViewer } from '@/shared/ui'
import { photoGalleryData } from '../model/'
import { IImg } from '@/entities/house'

interface IViewerState {
	images: IViewerImage[]
	initialIndex: number
}
export function PhotoGallery() {
	const [currentBlock, setCurrentBlock] = useState(photoGalleryData[0])
	const [viewer, setViewer] = useState<IViewerState | null>(null)
	const openViewer = (images: IImg[], index: number) => {
		setViewer({ images, initialIndex: index })
	}
	return (
		<section className="flex flex-col w-full gap-y-[12px] 2xl:gap-y-[16px]">
			<div className="flex items-center gap-x-[8px] w-[calc(100%+16px)] ml-[-8px] scrollbar-hide overflow-x-scroll">
				{photoGalleryData.map((item) => {
					const isActive = currentBlock.label === item.label
					return (
						<Button
							variant={!isActive ? 'secondary' : 'primary'}
							onClick={() => setCurrentBlock(item)}
							className={`w-full flex items-center whitespace-nowrap font-[SFPro] text-[16px] leading-[20px] font-bold first:ml-[8px] last:mr-[8px] ${!isActive ? 'bg-[#E8E8E8]' : ''}`}
							key={item.label}
						>
							<item.icon />
							{item.label}
						</Button>
					)
				})}
			</div>
			<div className="flex items-center gap-x-[8px] rounded-[24px] w-[calc(100%+16px)] ml-[-8px] scrollbar-hide overflow-x-scroll">
				{currentBlock.photos.map((item, i) => (
					<button
						key={item.alt}
						onClick={() => openViewer(currentBlock.photos, i)}
					>
						<ImageBlock
							className="w-[280px] shrink-0 first:ml-[8px] last:mr-[8px] rounded-[24px] h-[280px] 2xl:w-[488px] 2xl:h-[488px]"
							alt={item.alt}
							imgUrl={item.src}
						/>
					</button>
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
