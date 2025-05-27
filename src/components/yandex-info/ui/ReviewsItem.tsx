'use client'

import { StaticImageData } from 'next/image'
import { ROUNDED } from '@/shared/const/rounded'
import { useBreakpoints } from '@/shared/hooks/useBreakpoints'
import { StarIcon } from '@/shared/icons/Star-icon'
import { ImageBlock } from '@/shared/ui'
import { SecondaryWrapper } from '@/shared/ui/wrappers/SecondaryWrapper'

type Props = {
	name: string
	message: string
	avatarImg: StaticImageData
	images: StaticImageData[]
	position: string
}
export function ReviewsItem(props: Props) {
	const { name, position, message, images, avatarImg } = props
	const { isMobile } = useBreakpoints()
	return (
		<div className={`${position} md:flex md:gap-[30px]  md:items-center`}>
			{!isMobile && (
				<div className="flex gap-[20px]">
					{images.map((img) => (
						<ImageBlock
							key={img.src}
							imgUrl={img}
							className="w-full lg:h-[100px] h-[70px] rounded-[8px] lg:rounded-[16px]"
							alt="Отзыв от яндекс"
						/>
					))}
				</div>
			)}
			<SecondaryWrapper
				className={`shadow-[0px_12px_32px_0px_#0000001A] w-fit `}
				rounded={ROUNDED.sm}
			>
				<div
					className={`flex w-full flex-col gap-[6px] p-[12px] lg:p-[20px]`}
				>
					<div className="flex items-center gap-[6px] ">
						<div className="w-full max-w-[32px] lg:max-w-[56px]">
							<ImageBlock
								imgUrl={avatarImg}
								className="w-[32px] rounded-[50%] h-[32px] lg:h-[56px] lg:w-[56px]"
								alt={name}
							/>
						</div>
						<div className="flex flex-col">
							<p className="text-[12px] lg:text-[18px] font-semibold">
								{name}
							</p>
							<div className="flex items-center">
								<StarIcon />
								<StarIcon />
								<StarIcon />
								<StarIcon />
								<StarIcon />
							</div>
						</div>
						{isMobile && (
							<div className="flex gap-[3px] ml-auto">
								{images.map((img) => (
									<ImageBlock
										key={img.src}
										imgUrl={img}
										className="w-[40px] h-[40px] rounded-[8px] "
										alt="Отзыв от яндекс"
									/>
								))}
							</div>
						)}
					</div>
					<div className="text-[11px] lg:text-[16px] font-normal font-[SFPro] whitespace-pre-wrap">
						{message}
					</div>
				</div>
			</SecondaryWrapper>
		</div>
	)
}
