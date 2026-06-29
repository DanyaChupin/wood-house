'use client'

import { useBreakpoints } from '@/shared/lib/useBreakpoints'
import { ImageBlock } from '@/shared/ui'
import { SecondaryWrapper } from '@/shared/ui/wrappers/SecondaryWrapper'
import { descriptionOfAdvantagesData } from '../helper/descriptionOfAdvantagesData'
import { AnnotationLabel } from '@/widgets/annotationLabel'
import { MessageBlock } from '@/widgets/message-block'
import { MessageWrapper } from '@/widgets/message-wrapper'

export function DescriptionOfAdvantages() {
	const { isMobile, isMobilePlus } = useBreakpoints()
	const slicerData = !isMobile
		? descriptionOfAdvantagesData.slice(0, 1)
		: descriptionOfAdvantagesData
	if (!isMobile)
		descriptionOfAdvantagesData[0].images = [
			{ img: '/images/description-of-advantages/7.png', alt: 'Вид на коттедж Вудхаус со стороны леса' },
			{ img: '/images/description-of-advantages/8.png', alt: 'Терраса загородного дома Вудхаус на природе' },
		]
	return (
		<div className="flex flex-col gap-y-[20px] lg:gap-y-[100px] 2xl:gap-y-[150px] mb-[20px] md:mb-[100px] 2xl:mb-[150px]">
			{slicerData.map((desc) => (
				<MessageWrapper
					key={desc.title}
					subInfo={
						!isMobilePlus && (
							<SecondaryWrapper rounded="rounded-card-md">
								<div className="p-[30px] flex gap-x-[15px]">
									<div className="flex gap-y-[20px] flex-col">
										<div className="flex gap-x-[15px]">
											{descriptionOfAdvantagesData[1].images.map(
												(img) => (
													<ImageBlock
														key={img.img}
														imgUrl={
															img.img
														}
														className={`min-w-full h-[240px] rounded-card-sm`}
														alt={
															img.alt
														}
													/>
												)
											)}
										</div>
										<MessageBlock
											subMessageSizeTitle="text-[28px]"
											routsButton={false}
											description={
												descriptionOfAdvantagesData[1]
													.description
											}
											title={
												descriptionOfAdvantagesData[1]
													.title
											}
										/>
									</div>
									<div className="flex gap-y-[20px] flex-col">
										<div className="flex gap-x-[15px]">
											{descriptionOfAdvantagesData[2].images.map(
												(img) => (
													<ImageBlock
														key={img.img}
														imgUrl={
															img.img
														}
														className={`min-w-full h-[240px] rounded-card-sm`}
														alt={
															img.alt
														}
													/>
												)
											)}
										</div>
										<MessageBlock
											subMessageSizeTitle="text-[28px]"
											subTitle={
												<div className="mt-[7px]">
													<AnnotationLabel
														bgColor="lg:bg-WHITE_700"
														lable="*дополнительная стоимость"
													/>
												</div>
											}
											routsButton={false}
											description={
												descriptionOfAdvantagesData[2]
													.description
											}
											title={
												descriptionOfAdvantagesData[2]
													.title
											}
										/>
									</div>
								</div>
							</SecondaryWrapper>
						)
					}
					routsButton={!isMobile}
					title={desc.title}
					description={!isMobile ? desc.description : ''}
				>
					{desc.subPrice && (
						<AnnotationLabel
							bgColor="bg-white"
							lable="*дополнительная стоимость"
						/>
					)}
					<div className="w-full md:min-w-[400px] 2xl:min-w-[unset] flex gap-[12px] lg:gap-[16px] 2xl:gap-[25px]">
						{desc.images.map((img) => (
							<ImageBlock
								key={img.img}
								imgUrl={img.img}
								className={`w-full 2xl:min-w-[286px] md:h-[350px] mdPlus:h-full h-full lg:max-h-full xl:min-h-[360px] rounded-card-sm`}
								alt={img.alt}
							/>
						))}
					</div>
					{isMobile && (
						<MessageBlock
							routsButton={false}
							description={desc.description}
						/>
					)}
				</MessageWrapper>
			))}
		</div>
	)
}
