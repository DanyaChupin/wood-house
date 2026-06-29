'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useRouter } from 'next/navigation'
import { Button, ImageBlock } from '@/shared/ui'
import { IHousePerkImage } from '../model/IHousePerk'

interface IHousePerkDesktopImagesProps {
	images: IHousePerkImage[]
	activeIndex: number
	onImageClick: (index: number) => void
}

export function HousePerkDesktopImages({
	images,
	activeIndex,
	onImageClick,
}: IHousePerkDesktopImagesProps) {
	const [first, second, third] = images
	const { push } = useRouter()
	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={activeIndex}
				className="grid grid-cols-2 grid-rows-2 gap-[12px] h-full"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.25 }}
			>
				{/* Левая колонка — две маленькие */}
				<button
					onClick={() => onImageClick(0)}
					className="group relative rounded-[24px] overflow-hidden"
				>
					<ImageBlock
						imgUrl={first.src}
						alt={first.alt}
						className="w-full h-full transition-transform duration-500 group-hover:scale-[1.03]"
					/>

					<div className="absolute flex flex-col group-hover:opacity-100 opacity-0 gap-[20px] transition-opacity duration-200 w-[calc(100%-48px)] left-[24px] z-10 bottom-[24px]">
						{first.title && (
							<p className="font-[SoyuzGrotesk] font-bold text-[48px] text-WHITE_500 text-left leading-[110%]">
								{first.title}
							</p>
						)}
						<Button
							className=" bg-[#E8E8E8] w-full"
							variant="secondary"
							size="md"
							asLink
							onClick={(e) => {
								e.isPropagationStopped()
								push(first.link.href)
							}}
							href={first.link.href}
						>
							{first.link.title}
						</Button>
					</div>
					<div className="absolute inset-0 bg-BLACK_500/0 group-hover:bg-BLACK_500/15 transition-all duration-300" />
				</button>

				{/* Правая колонка — большая, занимает обе строки */}
				<button
					onClick={() => onImageClick(2)}
					className="group relative row-span-2 rounded-[24px] overflow-hidden"
				>
					<ImageBlock
						imgUrl={third.src}
						alt={third.alt}
						className="w-full h-full transition-transform duration-500 group-hover:scale-[1.03]"
					/>
					<div className="absolute flex flex-col group-hover:opacity-100 opacity-0 gap-[20px] transition-opacity duration-200 w-[calc(100%-48px)] left-[24px] z-10 bottom-[24px]">
						{third.title && (
							<p className="font-[SoyuzGrotesk] font-bold text-[48px] text-WHITE_500 text-left leading-[110%]">
								{third.title}
							</p>
						)}

						<Button
							className=" bg-[#E8E8E8] w-full"
							variant="secondary"
							size="md"
							asLink
							onClick={(e) => {
								e.isPropagationStopped()
								push(third.link.href)
							}}
							href={third.link.href}
						>
							{third.link.title}
						</Button>
					</div>
					<div className="absolute inset-0 bg-BLACK_500/0 group-hover:bg-BLACK_500/15 transition-all duration-300" />
				</button>

				{/* Левая колонка — вторая маленькая */}
				<button
					onClick={() => onImageClick(1)}
					className="group relative rounded-[24px] overflow-hidden"
				>
					<ImageBlock
						imgUrl={second.src}
						alt={second.alt}
						className="w-full h-full transition-transform duration-500 group-hover:scale-[1.03]"
					/>
					<div className="absolute flex flex-col group-hover:opacity-100 opacity-0 gap-[20px] transition-opacity duration-200 w-[calc(100%-48px)] left-[24px] z-10 bottom-[24px]">
						{second.title && (
							<p className="font-[SoyuzGrotesk] font-bold text-[48px] text-WHITE_500 text-left leading-[110%]">
								{second.title}
							</p>
						)}

						<Button
							className=" bg-[#E8E8E8] w-full"
							variant="secondary"
							size="md"
							asLink
							onClick={(e) => {
								e.isPropagationStopped()
								push(second.link.href)
							}}
							href={second.link.href}
						>
							{second.link.title}
						</Button>
					</div>
					<div className="absolute inset-0 bg-BLACK_500/0 group-hover:bg-BLACK_500/15 transition-all duration-300" />
				</button>
			</motion.div>
		</AnimatePresence>
	)
}
