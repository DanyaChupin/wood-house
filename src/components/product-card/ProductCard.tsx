'use client'

import dynamic from 'next/dynamic'
import { bgAccent } from '@/shared/const/bgAccent'
import { ROUNDED } from '@/shared/const/rounded'
import { useBreakpoints } from '@/shared/hooks/useBreakpoints'
import { IHouse } from '@/shared/types/type'
import ProductDescription from './ui/ProductDescription'
import { ProductInformation } from './ui/ProductInfomation'
import ProductTitle from './ui/ProductTitle'

const ProductSliderMobile = dynamic(() => import('./ui/ProductSliderMobile'))
const ProductSliderDesk = dynamic(() => import('./ui/ProductSlideDesk'))

export function ProductCard({ house, id }: { house: IHouse; id: string }) {
	const { isMobile } = useBreakpoints()
	return (
		<section
			id={'product-cart-' + id}
			className={`${bgAccent} ${ROUNDED.md} md:bg-transparent md:rounded-none p-[25px] lg:p-0 lg:py-[50px] `}
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
				<ProductSliderMobile
					imgUrls={house.mainImgMobile}
					alt={house.title}
				/>
			) : (
				<ProductSliderDesk
					imgUrls={house.mainImgDesktop}
					alt={house.title}
				/>
			)}

			<ProductInformation
				houseName={house.title}
				prevImg={house.prevImg}
			/>
		</section>
	)
}
