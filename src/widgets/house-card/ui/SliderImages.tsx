'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { IViewerImage, ImageBlock, ImageViewer } from '@/shared/ui'
import { IImg } from '@/entities/house'

interface ISliderImagesProps {
	images: IImg[]
}

interface IViewerState {
	images: IViewerImage[]
	initialIndex: number
}

export function SliderImages({ images }: ISliderImagesProps) {
	const [viewer, setViewer] = useState<IViewerState | null>(null)
	const openViewer = (imgs: IImg[], index: number) => {
		setViewer({ images: imgs, initialIndex: index })
	}
	const [currentImage, setCurrentImage] = useState(images[0])
	return (
		<>
			<AnimatePresence>
				{viewer && (
					<ImageViewer
						images={viewer.images}
						initialIndex={viewer.initialIndex}
						onClose={() => setViewer(null)}
					/>
				)}
			</AnimatePresence>
			<div className="flex w-full flex-col gap-y-[8px]">
				<button
					onClick={() =>
						openViewer(images, images.indexOf(currentImage))
					}
				>
					<AnimatePresence mode="wait" initial={false}>
						<motion.div
							key={currentImage.src}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2, ease: 'easeInOut' }}
						>
							<ImageBlock
								className="w-full h-[264px] lg:h-[557px] rounded-[24px]"
								imgUrl={currentImage.src}
								alt={currentImage.alt}
							/>
						</motion.div>
					</AnimatePresence>
				</button>
				<div className="flex scrollbar-hide items-center gap-x-[8px] lg:ml-0 ml-[-8px] lg:w-full w-[calc(100%+16px)] overflow-x-scroll">
					{images.map((item) => (
						<button
							key={item.alt}
							className="first:ml-[8px] last:mr-[8px] lg:first:ml-0 lg:last:mr-0"
							onClick={() => setCurrentImage(item)}
						>
							<ImageBlock
								key={item.src}
								className="w-[96px] h-[96px] lg:h-[100px] lg:w-[100px] rounded-[16px] cursor-pointer"
								imgUrl={item.src}
								alt={item.alt}
							/>
						</button>
					))}
				</div>
			</div>
		</>
	)
}
