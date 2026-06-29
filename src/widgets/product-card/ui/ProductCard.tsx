'use client'

import dynamic from 'next/dynamic'
import { useBreakpoints } from '@/shared/lib/useBreakpoints'
import ProductDescription from './ProductDescription'
import { ProductInformation } from './ProductInfomation'
import ProductTitle from './ProductTitle'
import { IHouseView } from '@/entities/house'

const ProductSliderMobile = dynamic(() => import('./ProductSliderMobile'))
const ProductSliderDesk = dynamic(() => import('./ProductSlideDesk'))

export function ProductCard({ house, id }: { house: IHouseView; id: string }) {
	const { isMobile } = useBreakpoints()
	return (
		<section
			id={'product-cart-' + id}
			className={`bg-WHITE_300 rounded-card-md md:bg-transparent md:rounded-none p-[25px] lg:p-0 lg:py-[50px] `}
		>
			<div className="flex flex-col md:flex-row md:justify-between md:items-center gap-[8px] mb-[16px] lg:mb-[22px] 2xl:mb-[30px]">
				<ProductTitle title={house.title} />
				<ProductDescription
					livingArea={house.livingArea}
					capacity={house.capacity}
					terraceArea={house.terraceArea}
				/>
			</div>
			{isMobile ? (
				<ProductSliderMobile imgUrls={house.mainImgs} />
			) : (
				<ProductSliderDesk imgUrls={house.mainImgs} />
			)}

			<ProductInformation
				houseName={house.title}
				prevImg={house.mainImgs}
			/>
		</section>
	)
}
