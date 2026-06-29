'use client'

import { useBreakpoints } from '@/shared/lib/useBreakpoints'
import { MessageBlock } from '@/widgets/message-block'
import { BoardGallery } from './BoardGallery'

export function SignBoardGallery() {
	const { isMobile } = useBreakpoints()
	return (
		<div
			className={`bg-WHITE_300 rounded-card-md overflow-hidden p-[25px] relative mb-[20px] 2xl:p-[50px] lg:mb-[100px] 2xl:mb-[150px]`}
		>
			<BoardGallery />
			<div className="flex w-full justify-center text-center mt-[-50px] lg:mt-[-30px] 2xl:mt-[-50px] whitespace-pre-wrap">
				<MessageBlock
					titlePosition="justify-center"
					routsButton={!isMobile}
					buttonPosition="self-center w-full"
					subMessageSizeTitle="text-[28px] leading-[114%] lg:text-[34px] lg:leading-[40px] 2xl:text-[48px] 2xl:leading-[56px]"
					description={`Расположение домов рядом с лесом на\nберегу реки создает идеальную атмосферу\nдля романтического и семейного отдыха`}
					title={`Место гармонии\nи теплых воспоминаний`}
				/>
			</div>
		</div>
	)
}
