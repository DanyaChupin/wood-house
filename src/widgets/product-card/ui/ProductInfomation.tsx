'use client'

import { useBreakpoints } from '@/shared/lib/useBreakpoints'
import { ImageBlock } from '@/shared/ui'
import { Convenience } from './Convenience'
import { IImg } from '@/entities/house'

interface IProductInfomation {
	houseName: string
	prevImg: IImg[]
}

export function ProductInformation({ prevImg }: IProductInfomation) {
	const { isMobile } = useBreakpoints()
	return (
		<div className="lg:flex lg:justify-between lg:gap-[60px] lg:w-full">
			<Convenience />
			{!isMobile && (
				<div className="hidden lg:flex lg:w-[43%] lg:gap-[20px]">
					{prevImg.map((img) => (
						<ImageBlock
							key={img.src}
							imgUrl={img.src}
							className="max-w-[287px] h-full w-full max-h-[266px] rounded-card-md"
							alt={img.alt}
						/>
					))}
				</div>
			)}
		</div>
	)
}
