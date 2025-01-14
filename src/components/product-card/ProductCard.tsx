'use client'

import { useBreakpoints } from '@/shared/hooks/useBreakpoints'
import { IHouse } from '@/shared/types/type'
import { ProductDescription } from './ui/ProductDescription'
import { ProductInformation } from './ui/ProductInfomation'
import { ProductSlideDesk } from './ui/ProductSlideDesk'
import { ProductSliderMobile } from './ui/ProductSliderMobile'
import { ProductTitle } from './ui/ProductTitle'

export function ProductCard({ house }: { house: IHouse }) {
	const { isMobile } = useBreakpoints()
	return (
		<div className="mb-[150px]">
			<div className="flex flex-col md:flex-row md:justify-between md:items-center gap-[8px] mb-[16px] lg:mb-[22px] 2xl:mb-[30px]">
				<ProductTitle title={house.title} />
				<ProductDescription
					livingArea={house.livingArea}
					capacity={house.capacity}
					terraceArea={house.terraceArea}
				/>
			</div>
			{isMobile ? (
				<ProductSliderMobile
					imgUrls={house.mainImgMobile}
					alt={house.title}
				/>
			) : (
				<ProductSlideDesk
					imgUrls={house.mainImgDesktop}
					alt={house.title}
				/>
			)}

			<ProductInformation
				houseName={house.title}
				prevImg={house.prevImg}
			/>
		</div>
	)
}
