import { IHouse } from '@/shared/types/type'
import { ProductDescription } from './ui/ProductDescription'
import { ProductInformation } from './ui/ProductInfomation'
import { ProductTitle } from './ui/ProductTitle'

export function ProductCard({ house }: { house: IHouse }) {
	return (
		<div>
			<div className="flex flex-col md:flex-row md:justify-between md:items-center gap-[8px] mb-[16px] lg:mb-[22px] 2xl:mb-[30px]">
				<ProductTitle title={house.title} />
				<ProductDescription
					livingArea={house.livingArea}
					capacity={house.capacity}
					terraceArea={house.terraceArea}
				/>
			</div>
			<div className="w-full h-[368px] bg-GRAY_500 mb-[16px] lg:mb-[22px] 2xl:mb-[30px]">
				Slider
			</div>
			<ProductInformation />
		</div>
	)
}
