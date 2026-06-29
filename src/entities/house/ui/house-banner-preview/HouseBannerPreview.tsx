'use client'

import { motion } from 'motion/react'
import { HouseBadgeList } from './HouseBadgeList'
import { HouseBannerActions } from './HouseBannerActions'
import { HouseBannerBackground } from './HouseBannerBackground'
import { HouseBannerInfo } from './HouseBannerInfo'
import { HousePreviewCard } from './HousePreviewCard'

export function HouseBannerPreview() {
	return (
		<div className="relative h-[670px] 2xl:h-[790px] 3xl:h-[878px] w-full top-[-70px]">
			<HouseBannerBackground />
			<div className="relative items-end flex z-[10] mdPlus:gap-x-[120px] h-full p-[16px] 2xl:p-[40px] pt-[96px]">
				<div className="w-full rounded-[24px] flex mdPlus:shrink flex-col h-full justify-end">
					<div className="flex flex-col mdPlus:flex-col-reverse">
						<motion.div
							className="mb-[20px] sm:mb-[52px]"
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.55,
								ease: 'easeOut',
								delay: 0.3,
							}}
						>
							<HouseBannerInfo />
						</motion.div>
						<motion.div
							className="mb-[24px]"
							initial={{ opacity: 0, y: 0 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.15,
							}}
						>
							<HouseBadgeList />
						</motion.div>
					</div>
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.55,
							ease: 'easeOut',
							delay: 0.5,
						}}
					>
						<HouseBannerActions />
					</motion.div>
				</div>
				<motion.div
					className="hidden mdPlus:block mdPlus:justify-self-end mdPlus:w-[462px] mdPlus:shrink-0"
					initial={{ opacity: 0, x: 40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{
						duration: 0.6,
						ease: 'easeOut',
						delay: 0.5,
					}}
				>
					<HousePreviewCard />
				</motion.div>
			</div>
		</div>
	)
}
