import { MessageWrapper } from '@/components/message-wrapper'
import { ImageBlock } from '@/shared/ui'
import houseElemFive from '../../../shared/images/house-one-elem-five.png'
import houseElemFour from '../../../shared/images/house-one-elem-four.png'
import houseElemOne from '../../../shared/images/house-one-elem-one.png'
import houseElemSeven from '../../../shared/images/house-one-elem-seven.png'
import houseElemSix from '../../../shared/images/house-one-elem-six.png'
import houseElemThree from '../../../shared/images/house-one-elem-three.png'
import houseElemTwo from '../../../shared/images/house-one-elem-two.png'

//
export function HomeSections() {
	return (
		<>
			<MessageWrapper
				title="Это тихое место идеально подходит для тех, кто ищет гармонию с природой и уединение от городской суеты"
				description="Коттеджный комплекс Вудхаус находится в тихом  и красивом месте: на окраине поселка рядом  с лесом на берегу маленькой речки"
			>
				<div className="w-full flex sm:flex-col lg:flex-row gap-[12px] lg:gap-[16px] 2xl:gap-[20px]">
					<ImageBlock
						imgUrl={houseElemOne}
						className="w-full h-full min-h-[226px] sm:max-h-[250px] lg:max-h-full xl:min-h-[360px] 2xl:min-h-[460px]"
						alt="Посуточная аренда загородного дома в 50 км от МКАД."
					/>
					<ImageBlock
						imgUrl={houseElemTwo}
						className="w-full h-full min-h-[226px] sm:max-h-[250px] lg:max-h-full xl:min-h-[360px] 2xl:min-h-[460px]"
						alt="Посуточная аренда загородного дома в 50 км от МКАД."
					/>
				</div>
			</MessageWrapper>
			<div className="mb-[150px] lg:mb-[180px] 2xl:mb-[200px]" />
			<MessageWrapper title="Собственная сауна, купель, массаж и природа...">
				<div className="flex flex-col gap-[16px] xl:gap-[22px] 2xl:gap-[30px] mb-[50px]">
					<div className="w-[calc(100%+30px)] sm:w-full sm:ml-0 scrollbar-hide overflow-x-scroll md:overflow-x-visible flex ml-[-15px] sm:flex-col lg:flex-row gap-[12px] lg:gap-[16px] 2xl:gap-[20px]">
						<div className="w-[85%] shrink-0 md:shrink ml-[15px] sm:ml-0 sm:w-full">
							<ImageBlock
								imgUrl={houseElemThree}
								className="w-full max-h-[368px] xs:max-h-[430px] sm:max-h-[250px] lg:max-h-full sm:min-h-auto xl:min-h-[360px] 2xl:min-h-[469px]"
								alt="Посуточная аренда загородного дома в 50 км от МКАД."
							/>
						</div>
						<div className="w-[calc(85%+15px)] shrink-0 md:shrink pr-[15px] sm:pr-0 sm:w-full">
							<ImageBlock
								imgUrl={houseElemFour}
								className="w-full max-h-[368px] xs:max-h-[430px] sm:max-h-[250px] lg:max-h-full sm:min-h-auto xl:min-h-[360px] 2xl:min-h-[469px]"
								alt="Посуточная аренда загородного дома в 50 км от МКАД."
							/>
						</div>
					</div>
					<p className="max-w-[85%] lg:max-w-[50%] leading-[24px]">
						Два новых коттеджа с дизайнерским ремонтом и
						огнище, чтобы посидеть  у костра в кругу родных и
						близких
					</p>
				</div>
			</MessageWrapper>
			<div className="flex flex-col gap-[16px] lg:gap-[22px] 2xl:gap-[30px] mb-[300px]">
				<div className="flex w-[calc(100%+30px)] sm:w-full sm:ml-0 sm:flex-row-reverse ml-[-15px] overflow-x-scroll sm:overflow-x-visible gap-[12px] lg:gap-[16px] flex-nowrap scrollbar-hide">
					<div className="hidden sm:block w-[45%] h-[368px] sm:h-[200px] md:h-full sm:max-h-[232px]">
						<ImageBlock
							imgUrl={houseElemSeven}
							className="w-full h-full"
							alt="Посуточная аренда загородного дома в 50 км от МКАД."
						/>
					</div>
					<div className="w-[85%] shrink-0 ml-[15px] sm:ml-0 sm:w-full sm:shrink h-[368px]">
						<ImageBlock
							imgUrl={houseElemFive}
							className="w-full h-full"
							alt="Посуточная аренда загородного дома в 50 км от МКАД."
						/>
					</div>
					<div className="w-[85%] shrink-0 pr-[15px] sm:w-[45%] sm:pr-0 sm:shrink h-[368px] self-end sm:h-[200px] md:h-full sm:mb-[-30px] sm:max-h-[232px]">
						<ImageBlock
							imgUrl={houseElemSix}
							className="w-full h-full"
							alt="Посуточная аренда загородного дома в 50 км от МКАД."
						/>
					</div>
				</div>
				<p className="sm:ml-[25%] lg:ml-[24.5%] leading-[24px]">
					У каждого дома собственная сауна, а на улице теплая
					купель.
					<br /> Можно обратиться к профессионалам и насладиться
					<br />
					массажем или арома-терапией в сауне
				</p>
			</div>

			{/* <div className="flex flex-col gap-[16px] xl:gap-[22px] 2xl:gap-[30px] mb-[300px]"> */}
			{/* 	<div className="w-[calc(100%+30px)] sm:w-full scrollbar-hide overflow-x-scroll sm:overflow-x-visible flex ml-[-15px] sm:ml-0 gap-[12px]"> */}
			{/* 		<div className="hidden shrink-0 sm:block sm:shrink sm:w-[30%] lg:w-[25%] self-end mb-[-30px]"> */}
			{/* 			<ImageBlock */}
			{/* 				imgUrl={houseElemSeven} */}
			{/* 				className="w-full h-[368px] sm:h-[60%]" */}
			{/* 				alt="Посуточная аренда загородного дома в 50 км от МКАД." */}
			{/* 			/> */}
			{/* 		</div> */}
			{/* 		<div className="w-[85%] h-full shrink-0 ml-[15px] sm:ml-0 sm:w-[40%] lg:w-[55%]"> */}
			{/* 			<ImageBlock */}
			{/* 				imgUrl={houseElemFive} */}
			{/* 				className="w-full h-[368px] sm:h-[300px] lg:h-[350px] xl:h-[400px]" */}
			{/* 				alt="Посуточная аренда загородного дома в 50 км от МКАД." */}
			{/* 			/> */}
			{/* 		</div> */}
			{/* 		<div className="w-[calc(85%+15px)] shrink-0 sm:shrink pr-[15px] sm:pr-0 sm:w-[30%] lg:w-[25%]"> */}
			{/* 			<ImageBlock */}
			{/* 				imgUrl={houseElemSix} */}
			{/* 				className="w-full h-[368px] sm:h-[60%]" */}
			{/* 				alt="Посуточная аренда загородного дома в 50 км от МКАД." */}
			{/* 			/> */}
			{/* 		</div> */}
			{/* 	</div> */}
			{/* 	<p className="max-w-[85%] sm:max-w-[60%] lg:max-w-[50%] sm:ml-[30%] lg:ml-[22.5%] leading-[24px]"> */}
			{/* 		У каждого дома собственная сауна, а на улице теплая */}
			{/* 		купель. Можно обратиться  к профессионалам и */}
			{/* 		насладиться массажем или арома-терапией в сауне */}
			{/* 	</p> */}
			{/* </div> */}
		</>
	)
}
