import { ArrowIcon } from '@/shared/icons/Arrow-icon'
import { GoToNextButton } from '@/shared/ui/GoToNextButton'

interface IMessageBlock {
	title: string
	description?: string
}
export function MessageBlock({ title, description }: IMessageBlock) {
	return (
		<div className="flex flex-col sm:max-w-[50%] justify-center">
			<h2 className="font-bold text-[32px] md:text-[36px] 2xl:text-[48px] mb-[8px] md:mb-[16px] 2xl:mb-[30px] leading-[40px] 2xl:max-w-[80%]">
				{title}
			</h2>
			{description && (
				<p className="text-[16px] mb-[30px] sm:max-w-[70%]">
					{description}
				</p>
			)}
			<div
				className={`sm:max-w-[213px] ${description ? '' : 'mt-[10%]'}`}
			>
				<GoToNextButton
					padding="14px 0px"
					fontSize="14px"
					nextUrl="/bron"
				>
					<ArrowIcon />
				</GoToNextButton>
			</div>
		</div>
	)
}
