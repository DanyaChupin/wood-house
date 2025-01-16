import { TitlePageInfo } from '@/components/title-page-info'
import { ImageBlock } from '@/shared/ui'
import massages1 from '../shared/images/massages-1.png'
import massages2 from '../shared/images/massages-2.png'

export function MessagesScreen() {
	return (
		<main
			id="sliderScreen"
			className="transition-[transform, opacity] close duration-200"
		>
			<TitlePageInfo
				title="Мммм
массаж..."
				description="Погрузитесь в мир расслабления с нашим массажем, который помогает устранить мышечное напряжение  и восстановить гармонию в теле"
				className="text-left"
			>
				<div className="flex flex-col md:flex-row gap-[15px] lg:gap-[20px] mb-[150px]">
					<div className="md:max-w-[40%] w-full">
						<ImageBlock
							imgUrl={massages1}
							id="sliderImage"
							className="w-full h-[250px] xs:h-[350px] xl:h-[420px]"
							alt="Посуточная аренда загородного дома в 50 км от МКАД."
						/>
					</div>
					<ImageBlock
						imgUrl={massages2}
						id="sliderImage"
						className="w-full h-[500px] sm:h-[350px] xl:h-[420px]"
						alt="Посуточная аренда загородного дома в 50 км от МКАД."
					/>
				</div>
			</TitlePageInfo>
		</main>
	)
}
