import { ReactNode } from 'react'
import { ArrowIcon } from '@/shared/icons/Arrow-icon'
import { GoToNextButton } from '@/shared/ui/GoToNextButton'
import { SITE_ROUTES } from '@/shared/const/site'

interface IMessageBlock {
	title?: string
	subMessageSizeTitle?: string
	subTitle?: ReactNode
	description?: string
	titlePosition?: string
	buttonPosition?: string
	routsButton: boolean
}
export function MessageBlock({
	title,
	subTitle,
	subMessageSizeTitle = '',
	description,
	routsButton,
	titlePosition = 'justify-normal',
	buttonPosition = '',
}: IMessageBlock) {
	return (
		<div
			className={`flex flex-col ${!!subMessageSizeTitle ? 'gap-y-[15px]' : 'sm:gap-y-[10px] md:gap-y-[20px] xl:gap-y-[30px]'}`}
		>
			{title && (
				<div
					className={`flex w-full ${titlePosition} ${title ? 'gap-x-[10px]' : ''}`}
				>
					<h2
						className={`font-bold ${subMessageSizeTitle || 'text-[32px] md:text-[36px] 2xl:text-[48px] leading-[40px] 2xl:leading-[56px]'} `}
					>
						{title}
					</h2>
					{subTitle && subTitle}
				</div>
			)}

			{description && (
				<p
					className={`text-[16px] font-normal leading-[24px] whitespace-pre-wrap`}
				>
					{description}
				</p>
			)}
			{routsButton && (
				<div
					className={`sm:max-w-[213px] ${buttonPosition} ${description ? '' : 'mt-[10%]'}`}
				>
					<GoToNextButton
						padding="14px 0px"
						borderRadius="16px"
						fontSize="14px"
						nextUrl={SITE_ROUTES.bron}
					>
						<ArrowIcon />
					</GoToNextButton>
				</div>
			)}
		</div>
	)
}
