import { TitlePageInfo } from '@/components/title-page-info'
import { ImageBlock } from '@/shared/ui'
import houseOne from '../shared/images/house-one.png'

export function SpaScreen() {
	return (
		<main
			id="sliderScreen"
			className="transition-[transform, opacity] close duration-200"
		>
			<TitlePageInfo
				title="Отдохнуть душой и телом"
				description="Наши древесные сауны и купели идеально подойдут для вашего отдыха. 
В каждом доме коттеджного комплекса есть сауна; ее использование входит  в стоимость аренды дома"
			>
				<ImageBlock
					imgUrl={houseOne}
					id="sliderImage"
					className="w-full h-[511px] 2xl:h-[604px] mb-[150px] lg:mb-[200px] 2xl:mb-[268px]"
					alt="Посуточная аренда загородного дома в 50 км от МКАД."
				/>
			</TitlePageInfo>
		</main>
	)
}
