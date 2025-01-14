import { IHouse } from '@/shared/types/type'
import { ProductCard } from '../product-card'

const HOUSING: IHouse[] = [
	{
		title: 'Темный дом',
		capacity: '2 - 4 гостя',
		livingArea: `98.3м`,
		terraceArea: '25м',
	},
]
export function ProductList() {
	return (
		<div>
			{HOUSING.map((house) => (
				<ProductCard house={house} key={house.title} />
			))}
		</div>
	)
}
