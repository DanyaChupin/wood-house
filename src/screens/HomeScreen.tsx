import { HomeSections } from '@/components/home/home-sections/HomeSections'
import { TitlePageInfo } from '@/components/title-page-info'
import { ImageBlock } from '@/shared/ui'
import houseOne from '../shared/images/house-one.png'

export function HomeScreen() {
	return (
		<>
			<TitlePageInfo
				title="Вудхаус"
				description="Посуточная аренда загородного дома в 50 км от МКАД.
				Окунитесь в атмосферу уюта, стиля и спокойствия"
			>
				<ImageBlock
					imgUrl={houseOne}
					className="w-full h-[511px] 2xl:h-[604px] mb-[150px] lg:mb-[200px] 2xl:mb-[268px]"
					alt="Посуточная аренда загородного дома в 50 км от МКАД."
				/>
			</TitlePageInfo>
			<HomeSections />
		</>
	)
}
