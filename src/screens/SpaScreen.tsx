import { MessageWrapper } from '@/components/message-wrapper'
import { SpectrsBlock } from '@/components/spectrs-block'
import { TitlePageInfo } from '@/components/title-page-info'
import { ROUNDED } from '@/shared/const/rounded'
import { ImageBlock } from '@/shared/ui'
import spa1 from '../shared/images/spa-1.png'
import spa2 from '../shared/images/spa-2.png'
import spa3 from '../shared/images/spa-3.png'
import spa4 from '../shared/images/spa-4.png'

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
				className="text-left"
			>
				<div className="mb-[50px] flex flex-col gap-[15px] lg:gap-[20px]">
					<ImageBlock
						imgUrl={spa1}
						id="sliderImage"
						className={`w-full h-[511px] sm:h-[400px] xl:h-[456px] ${ROUNDED.md} ${ROUNDED.lg}`}
						alt="Посуточная аренда загородного дома в 50 км от МКАД."
					/>
					<div className="flex gap-[15px] lg:gap-[20px]">
						<div className="md:max-w-[40%] w-full">
							<ImageBlock
								imgUrl={spa2}
								id="sliderImage"
								className={`w-full h-[220px] sm:h-[380px] xl:h-[420px] ${ROUNDED.md} ${ROUNDED.lg}`}
								alt="Посуточная аренда загородного дома в 50 км от МКАД."
							/>
						</div>
						<ImageBlock
							imgUrl={spa3}
							id="sliderImage"
							className={`w-full h-[220px] sm:h-[380px] xl:h-[420px] ${ROUNDED.md} ${ROUNDED.lg}`}
							alt="Посуточная аренда загородного дома в 50 км от МКАД."
						/>
					</div>
				</div>
			</TitlePageInfo>
			<div className="md:ml-[calc(40%+15px)] lg:ml-[calc(40%+20px)] mb-[150px] lg:mb-[200px] 2xl:mb-[200px]">
				<h2 className="text-[32px] leading-[40px] mb-[8px] lg:text-[40px] lg:leading-[46px] lg:mb-[15px] 2xl:text-[48px] 2xl:leading-[56px] 2xl:mb-[32px]">
					Понежиться в теплой воде
					<br /> на свежем воздухе или
					<br /> попариться компанией...
				</h2>
				<p>
					Выбирать вам, а мы сделаем все, чтобы <br /> вы ощутили
					весь вкус вашего отдыха
				</p>
			</div>
			<SpectrsBlock />
			<div className="md:max-w-[80%] mb-[20px] lg:mb-[100px] 2xl:mb-[150px]">
				<MessageWrapper
					title="А может выбрать профессиональное очищение?"
					description="Если же хочется более глубокого очищения, расслабления и перезагрузки — у нас есть профессиональный банщик"
					routsButton={false}
				>
					<div>
						<ImageBlock
							imgUrl={spa4}
							className={`w-full h-full ${ROUNDED.md} lg:min-h-[420px]`}
							alt="Посуточная аренда загородного дома в 50 км от МКАД | WoodHouse"
						/>
						<p className="mt-[16px]">
							Соблюдая лучшие традиции оздоровления,
							<br /> он проведет банные ритуалы, расскажет
							<br /> историю процедур
						</p>
					</div>
				</MessageWrapper>
			</div>
		</main>
	)
}
