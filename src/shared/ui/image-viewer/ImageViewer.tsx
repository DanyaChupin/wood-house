'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { ArrowIcon } from '@/shared/icons/Arrow-icon'
import { CloseIcon } from '@/shared/icons/Close-icon'
import { IImg } from '@/entities/house'

interface IImageViewerProps {
	images: IImg[]
	initialIndex: number
	onClose: () => void
}

const slideVariants = {
	enter: (direction: number) => ({
		x: direction > 0 ? '60%' : '-60%',
		opacity: 0,
	}),
	center: { x: 0, opacity: 1 },
	exit: (direction: number) => ({
		x: direction > 0 ? '-60%' : '60%',
		opacity: 0,
	}),
}

export function ImageViewer({
	images,
	initialIndex,
	onClose,
}: IImageViewerProps) {
	const [[currentIndex, direction], setPage] = useState([initialIndex, 0])

	const navigate = useCallback(
		(dir: number) => {
			const next = (currentIndex + dir + images.length) % images.length
			setPage([next, dir])
		},
		[currentIndex, images.length]
	)

	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === 'ArrowRight') navigate(1)
			if (e.key === 'ArrowLeft') navigate(-1)
			if (e.key === 'Escape') onClose()
		}
		window.addEventListener('keydown', handleKey)
		return () => window.removeEventListener('keydown', handleKey)
	}, [navigate, onClose])

	const currentImage = images[currentIndex]

	return createPortal(
		<motion.div
			className="fixed inset-0 z-50 h-[100svh] flex flex-col bg-BLACK_500/80"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2 }}
			onClick={onClose}
		>
			{/* Хедер */}
			<div
				className="flex items-center justify-between px-[16px] py-[16px] shrink-0"
				onClick={(e) => e.stopPropagation()}
			>
				<p className="text-WHITE_500 font-[SFPro] text-[14px]">
					{currentIndex + 1} / {images.length}
				</p>
				<button
					onClick={onClose}
					className="w-[36px] h-[36px] rounded-[12px] bg-WHITE_500 flex items-center justify-center"
				>
					<CloseIcon />
				</button>
			</div>

			{/* Картинка */}
			<div
				className="flex-1 mx-[16px] flex items-center justify-center overflow-hidden"
				onClick={(e) => e.stopPropagation()}
			>
				<AnimatePresence
					initial={false}
					custom={direction}
					mode="wait"
				>
					<motion.div
						key={currentIndex}
						custom={direction}
						variants={slideVariants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{ duration: 0.25, ease: 'easeOut' }}
					>
						<Image
							src={currentImage.src}
							alt={currentImage.alt}
							width={0}
							height={0}
							sizes="100vw"
							className="w-full h-full min-h-[50svh] object-contain min-w-[30svw] block"
						/>
					</motion.div>
				</AnimatePresence>
			</div>

			{/* Навигация */}
			{images.length > 1 && (
				<div
					className="flex items-center justify-between px-[16px] py-[24px] shrink-0"
					onClick={(e) => e.stopPropagation()}
				>
					<button
						onClick={() => navigate(-1)}
						className="w-[48px] h-[48px] rounded-[16px] bg-WHITE_500/15 flex items-center justify-center rotate-180 text-WHITE_500"
					>
						<ArrowIcon />
					</button>

					<div className="flex gap-[6px]">
						{images.map((_, i) => (
							<div
								key={i}
								className={`h-[4px] rounded-full transition-all duration-300 ${
									i === currentIndex
										? 'w-[24px] bg-WHITE_500'
										: 'w-[4px] bg-WHITE_500/40'
								}`}
							/>
						))}
					</div>

					<button
						onClick={() => navigate(1)}
						className="w-[48px] h-[48px] rounded-[16px] bg-WHITE_500/15 flex items-center justify-center text-WHITE_500"
					>
						<ArrowIcon />
					</button>
				</div>
			)}
		</motion.div>,
		document.body
	)
}
