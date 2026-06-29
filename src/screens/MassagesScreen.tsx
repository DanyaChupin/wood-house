import { ArrowIcon } from '@/shared/icons/Arrow-icon'
import { ImageBlock } from '@/shared/ui'
import { GoToNextButton } from '@/shared/ui/GoToNextButton'
import { MessageWrapper } from '@/widgets/message-wrapper'
import { TitlePageInfo } from '@/widgets/title-page-info'

export function MessagesScreen() {
	return (
		<main
			id="sliderScreen"
			className="transition-[transform, opacity] close duration-200 mb-[150px] lg:mb-[180px] 2xl:mb-[200px]"
		>
			<TitlePageInfo
				title="Мммм
массаж..."
				description="Погрузитесь в мир расслабления с нашим массажем, который помогает устранить мышечное напряжение  и восстановить гармонию в теле"
				className="text-left"
			>
				<div className="flex flex-col md:flex-row gap-[15px] lg:gap-[20px] mb-[150px]">
					<div className="md:max-w-[40%] w-full">
						<ImageBlock
							imgUrl="/images/massages/1.png"
							id="sliderImage"
							className={`w-full h-[250px] xs:h-[350px] xl:h-[420px] rounded-[24px]`}
							alt="Посуточная аренда загородного дома в 50 км от МКАД."
						/>
					</div>
					<ImageBlock
						imgUrl="/images/massages/2.png"
						id="sliderImage"
						className={`w-full h-[500px] sm:h-[350px] xl:h-[420px] rounded-[24px]`}
						alt="Посуточная аренда загородного дома в 50 км от МКАД."
					/>
				</div>
			</TitlePageInfo>
			<div className="flex flex-col sm:flex-row gap-[20px] mb-[150px] lg:mb-[180px] 2xl:mb-[200px]">
				<div className="w-full flex flex-col gap-[25px] sm:justify-between md:w-[50%]">
					<h2 className="text-[32px] leading-[40px] lg:text-[40px] lg:leading-[50px] 2xl:leading-[56px]">
						Отдых телом
						<br /> и душой
					</h2>
					<div className="flex flex-col lg:flex-row shrink-0 gap-[10px] xl:gap-[20px] 2xl:gap-[40px] w-full">
						<div className="w-full sm:flex sm:flex-col mb-[120px] gap-[10px] sm:mb-[50px] lg:mb-0 lg:self-end xl:relative">
							<div className="flex flex-row w-full justify-between mb-[16px] gap-[10px] xl:mb-0 lg:flex-col">
								<strong>
									комплексный массаж всего тела
								</strong>
								<div className="flex flex-col gap-[6px]">
									<span className="self-end sm:self-start whitespace-nowrap font-bold text-[20px] ">
										5 000 ₽
									</span>
									<span className="self-end sm:self-start">
										до 45 минут
									</span>
								</div>
							</div>
							<GoToNextButton
								padding="14px 0px"
								borderRadius="16px"
								fontSize="14px"
								nextUrl="/bron"
								className="h-fit xl:absolute xl:bottom-[5px] xl:right-0 xl:w-[220px]"
							>
								<ArrowIcon />
							</GoToNextButton>
						</div>
						<div className="w-full sm:flex sm:flex-col gap-[10px] xl:relative">
							<div className="flex flex-row w-full justify-between  gap-[10px] mb-[16px] xl:mb-0 lg:flex-col">
								<strong>
									массаж шейно-воротниковой зоны
								</strong>
								<div className="flex flex-col gap-[6px]">
									<span className="self-end sm:self-start whitespace-nowrap font-bold text-[20px]">
										2 000 ₽
									</span>
									<span className="self-end sm:self-start">
										до 20 минут
									</span>
								</div>
							</div>
							<GoToNextButton
								padding="14px 0px"
								borderRadius="16px"
								fontSize="14px"
								nextUrl="/bron"
								className="h-fit xl:absolute xl:bottom-[5px] xl:right-0 xl:w-[220px]"
							>
								<ArrowIcon />
							</GoToNextButton>
						</div>
					</div>
				</div>
			</div>
			<MessageWrapper title="Собственная сауна, купель, массаж и природа...">
				<div className="flex-1 min-w-0 flex flex-col gap-[16px] xl:gap-[22px] 2xl:gap-[30px] mb-[50px] sm:mb-0">
					<div className="w-[calc(100%+50px)] snap-mandatory snap-x sm:w-full ml-[-25px] sm:ml-0 scrollbar-hide overflow-x-scroll md:overflow-x-visible flex sm:flex-col lg:flex-row gap-[12px] lg:gap-[16px] 2xl:gap-[20px]">
						<div className="w-[85%] snap-center shrink-0 md:shrink ml-[15px] sm:ml-0 sm:w-full">
							<ImageBlock
								imgUrl="/images/massages/4.png"
								className="w-full h-[420px] sm:h-[360px] lg:h-[500px] 2xl:h-[600px] rounded-[24px]"
								alt="Посуточная аренда загородного дома в 50 км от МКАД | WoodHouse"
							/>
						</div>
						<div className="w-full snap-center shrink-0 md:shrink pr-[15px] sm:pr-0 sm:w-full">
							<ImageBlock
								imgUrl="/images/massages/5.png"
								className="w-full h-[420px] sm:h-[360px] lg:h-[500px] 2xl:h-[600px] rounded-[24px]"
								alt="Посуточная аренда загородного дома в 50 км от МКАД | WoodHouse"
							/>
						</div>
					</div>
				</div>
			</MessageWrapper>
		</main>
	)
}
