import { AnnotationLabel } from '@/widgets/annotationLabel'
import { MessageWrapper } from '@/widgets/message-wrapper'
import { SpectrsBlock } from '@/widgets/spectrs-block'
import { TitlePageInfo } from '@/widgets/title-page-info'
import { ImageBlock } from '@/shared/ui'

export function SpaScreen() {
	return (
		<main
			id="sliderScreen"
			className="transition-[transform, opacity] close duration-200"
		>
			<TitlePageInfo
				title="Отдохнуть душой и телом"
				className="text-left"
			>
				<div className="my-[10px]">
					<AnnotationLabel
						bgColor="bg-WHITE_700 lg:*:text-[18px]"
						lable="Стоимость бани от 2500₽ в час"
					/>
				</div>
				<div className="mb-[50px] flex flex-col gap-[15px] lg:gap-[20px]">
					<ImageBlock
						imgUrl="/images/spa/1.png"
						id="sliderImage"
						className={`w-full h-[511px] sm:h-[400px] xl:h-[456px] rounded-card-md lg:rounded-card-lg`}
						alt="Баня с купелью на природе — Вудхаус, Истринский район"
					/>
					<div className="flex gap-[15px] lg:gap-[20px]">
						<div className="md:max-w-[40%] w-full">
							<ImageBlock
								imgUrl="/images/spa/2.png"
								id="sliderImage"
								className={`w-full h-[220px] sm:h-[380px] xl:h-[420px] rounded-card-md lg:rounded-card-lg`}
								alt="Финская сауна в коттеджном комплексе Вудхаус"
							/>
						</div>
						<ImageBlock
							imgUrl="/images/spa/3.png"
							id="sliderImage"
							className={`w-full h-[220px] sm:h-[380px] xl:h-[420px] rounded-card-md lg:rounded-card-lg`}
							alt="Купель на свежем воздухе — загородный отдых в Вудхаус"
						/>
					</div>
				</div>
			</TitlePageInfo>
			<div className="md:ml-[calc(40%+15px)] lg:ml-[calc(40%+20px)] mb-[150px] lg:mb-[200px] 2xl:mb-[200px]">
				<h2 className="text-[32px] leading-[40px] mb-[8px] lg:text-[40px] lg:leading-[46px] lg:mb-[15px] 2xl:text-[48px] 2xl:leading-[56px] 2xl:mb-[32px]">
					Понежиться в теплой воде
					<br /> на свежем воздухе или
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
					description={`Если же хочется более глубокого очищения,\nрасслабления и перезагрузки — у нас есть профессиональный банщик`}
					routsButton={false}
				>
					<div>
						<ImageBlock
							imgUrl="/images/spa/4.png"
							className={`w-full h-full rounded-card-md lg:min-h-[420px]`}
							alt="Профессиональный банщик проводит банные ритуалы — Вудхаус"
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
