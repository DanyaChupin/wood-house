'use client'

import { motion } from 'motion/react'
import { ArrowIcon } from '@/shared/icons/Arrow-icon'
import { IHousePerkView } from '../model/IHousePerk'

interface IHousePerkDesktopItemProps {
	perk: IHousePerkView
	isActive: boolean
	onHover: () => void
}

export function HousePerkDesktopItem({
	perk,
	isActive,
	onHover,
}: IHousePerkDesktopItemProps) {
	return (
		<div
			className={`py-[22px] px-[24px] rounded-[24px] flex flex-col gap-[16px] cursor-pointer transition-[border-color,background-color] duration-200 border ${
				isActive
					? 'border-BLACK_500 bg-WHITE_500'
					: 'border-transparent bg-[#F6F6F4]'
			}`}
			onMouseEnter={onHover}
		>
			<div className="flex items-center gap-[8px]">
				<motion.span
					animate={{
						width: isActive ? 14 : 0,
						opacity: isActive ? 1 : 0,
					}}
					transition={{ duration: 0.2, ease: 'easeOut' }}
					className="shrink-0 overflow-hidden"
				>
					<ArrowIcon />
				</motion.span>
				<p className="font-[SoyuzGrotesk] font-bold text-[24px] leading-[110%] tracking-[-0.2px]">
					{perk.title}
				</p>
			</div>
			<p className="font-[SFPro] font-normal text-[16px] leading-[24px] text-GRAY_500">
				{perk.description}
			</p>
		</div>
	)
}
