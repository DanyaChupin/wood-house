import { IHouse } from '@/shared/types/type'

type LivingTerraceType = Pick<IHouse, 'livingArea' | 'terraceArea' | 'capacity'>
export function ProductDescription({
	livingArea,
	terraceArea,
	capacity,
}: LivingTerraceType) {
	return (
		<div className="flex flex-wrap gap-x-[42px] gap-y-[18px]">
			<div>
				<span className="font-semibold text-[20px]">
					{capacity}
				</span>
				<p className="text-[16px]">Вместительность</p>
			</div>
			<div>
				<span className="font-semibold text-[20px]">
					{livingArea} <sup className="font-semibold">2</sup>
				</span>
				<p className="text-[16px]">Жилая площадь</p>
			</div>
			<div>
				<span className="font-semibold text-[20px]">
					{terraceArea} <sup className="font-semibold">2</sup>
				</span>
				<p className="text-[16px]">Площадь террасы</p>
			</div>
		</div>
	)
}
