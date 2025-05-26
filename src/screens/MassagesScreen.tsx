import { MessageWrapper } from '@/components/message-wrapper'
import { TitlePageInfo } from '@/components/title-page-info'
import { ROUNDED } from '@/shared/const/rounded'
import { ArrowIcon } from '@/shared/icons/Arrow-icon'
import { ImageBlock } from '@/shared/ui'
import { GoToNextButton } from '@/shared/ui/GoToNextButton'
import massages1 from '../shared/images/massages-1.png'
import massages2 from '../shared/images/massages-2.png'
import massages3 from '../shared/images/massages-3.png'
import massages4 from '../shared/images/massages-4.png'
import massages5 from '../shared/images/massages-5.png'

export function MessagesScreen() {
	return (
		<main
			id="sliderScreen"
			className="transition-[transform, opacity] close duration-200 mb-[150px] lg:mb-[180px] 2xl:mb-[200px]"
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
							className={`w-full h-[250px] xs:h-[350px] xl:h-[420px] ${ROUNDED.md} ${ROUNDED.lg}`}
							alt="Посуточная аренда загородного дома в 50 км от МКАД."
						/>
					</div>
					<ImageBlock
						imgUrl={massages2}
						id="sliderImage"
						className={`w-full h-[500px] sm:h-[350px] xl:h-[420px] ${ROUNDED.md} ${ROUNDED.lg}`}
						alt="Посуточная аренда загородного дома в 50 км от МКАД."
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
								<strong>Массаж всего тела</strong>
								<div className="flex flex-col gap-[6px]">
									<span className="self-end sm:self-start whitespace-nowrap font-bold text-[20px] ">
										5 500 ₽
									</span>
									<span className="self-end sm:self-start">
										45 минут
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
									Массаж
									<br /> шейноворотниковой зоны
								</strong>
								<div className="flex flex-col gap-[6px]">
									<span className="self-end sm:self-start whitespace-nowrap font-bold text-[20px]">
										1 500 ₽
									</span>
									<span className="self-end sm:self-start">
										15 минут
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
				<div className="shrink-1">
					<ImageBlock
						imgUrl={massages3}
						className={`hidden sm:block sm:w-[100%] sm:h-[445px] lg:h-[353px] ${ROUNDED.md}`}
						alt="Посуточная аренда загородного дома в 50 км от МКАД | WoodHouse"
					/>
				</div>
			</div>
			<MessageWrapper title="Собственная сауна, купель, массаж и природа...">
				<div className="flex flex-col gap-[16px] xl:gap-[22px] 2xl:gap-[30px] mb-[50px] sm:mb-0">
					<div className="w-[calc(100%+30px)] snap-mandatory snap-x sm:w-full sm:ml-0 scrollbar-hide overflow-x-scroll md:overflow-x-visible flex ml-[-15px] sm:flex-col lg:flex-row gap-[12px] lg:gap-[16px] 2xl:gap-[20px]">
						<div className="w-[85%] snap-center shrink-0 md:shrink ml-[15px] sm:ml-0 sm:w-full">
							<ImageBlock
								imgUrl={massages4}
								className={`w-full max-h-[368px] xs:max-h-[430px] sm:max-h-[250px] lg:max-h-full sm:min-h-auto lg:min-h-[360px] 2xl:min-h-[469px] ${ROUNDED.md}`}
								alt="Посуточная аренда загородного дома в 50 км от МКАД | WoodHouse"
							/>
						</div>
						<div className="w-[calc(85%+15px)] snap-center shrink-0 md:shrink pr-[15px] sm:pr-0 sm:w-full">
							<ImageBlock
								imgUrl={massages5}
								className={`w-full max-h-[368px] xs:max-h-[430px] sm:max-h-[250px] lg:max-h-full sm:min-h-auto lg:min-h-[360px] 2xl:min-h-[469px] ${ROUNDED.md}`}
								alt="Посуточная аренда загородного дома в 50 км от МКАД | WoodHouse"
							/>
						</div>
					</div>
					<p className="max-w-[85%] lg:max-w-[50%] leading-[24px]">
						У каждого дома собственная сауна, а на улице
						теплая купель. Можно обратиться к профессионалам и
						насладиться массажем или арома-терапией в сауне
					</p>
				</div>
			</MessageWrapper>
		</main>
	)
}
