import { Facilities } from './Facilities'
import { HouseParams } from './Params'
import { SliderImages } from './SliderImages'
import { Title } from './Title'
import { IHouseView } from '@/entities/house'

interface IHouseCardProps {
	house: IHouseView
	id?: string
}

export function HouseCard({ house, id }: IHouseCardProps) {
	const { title, capacity, livingArea, terraceArea, mainImgs, facilities } =
		house
	return (
		<div id={id}>
			<div className="mb-[6px] lg:mb-[20px] 2xl:mb-[24px]">
				<Title title={title} />
			</div>
			<div className="lg:flex gap-x-[24px]">
				<div className="lg:hidden mb-[12px]">
					<HouseParams
						params={[
							{
								label: 'Вместительность',
								value: capacity,
							},
							{
								label: 'Жилая площадь',
								value: livingArea,
							},
							{
								label: 'Площадь террасы',
								value: terraceArea,
							},
						]}
					/>
				</div>
				<div className="mb-[12px] min-w-0 lg:mb-0">
					<SliderImages images={mainImgs} />
				</div>
				<div className="w-full lg:max-w-[480px] 2xl:max-w-[560px] shrink-0">
					<div className="hidden lg:block mb-[12px] w-full">
						<HouseParams
							params={[
								{
									label: 'Вместительность',
									value: capacity,
								},
								{
									label: 'Жилая площадь',
									value: livingArea,
								},
								{
									label: 'Площадь террасы',
									value: terraceArea,
								},
							]}
						/>
					</div>
					<Facilities facilities={{ facilities: facilities }} />
				</div>
			</div>
		</div>
	)
}
