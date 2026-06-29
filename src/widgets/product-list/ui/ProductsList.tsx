import { HOUSES_DATA } from '@/entities/house'
import { ProductCard } from '@/widgets/product-card'

export function ProductsList() {
	return (
		<div className="flex flex-col mb-[20px] lg:mb-[100px] 2xl:mb-[150px] gap-[20px] lg:gap-0">
			{HOUSES_DATA.map((house, index) => (
				<div key={house.title}>
					{index !== 0 && (
						<div className="h-[2px] bg-WHITE_700 w-[calc(100%+100px)] hidden lg:block ml-[-50px]" />
					)}
					<ProductCard
						id={(index + 1).toString()}
						house={house}
						key={house.title}
					/>
				</div>
			))}
		</div>
	)
}
