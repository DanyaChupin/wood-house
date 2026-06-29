import { AverageScore } from './AverageScore'
import { ReviewButton } from './ReviewButton'
import { ReviewGallery } from './ReviewGallery'

export function ReviewsBlock() {
	return (
		<section>
			<div className="lg:bg-[#F8F7F5] lg:border-[1px] lg:rounded-[32px] lg:h-[640px] lg:border-[#EDEDED] lg:flex">
				<div className="lg:min-w-[660px] lg:p-[50px]">
					<p className="mb-[24px] 2xl:mb-[48px] font-[SoyuzGrotesk] font-bold text-[40px] leading-[44px] whitespace-pre-wrap 2xl:text-[64px] 2xl:leading-[100%]">
						{`Наши гости деляться\nсвоими эмоциями\nна Яндекс Картах.\nПоделитесь и вы`}
					</p>
					<ReviewGallery className="flex lg:hidden mb-[24px] gap-x-[8px] overflow-scroll w-[calc(100%+16px)] ml-[-8px] [&>li:first-child]:ml-[8px] [&>li:last-child]:mr-[8px] scrollbar-hide" />
					<AverageScore />
					<div className="hidden lg:block lg:max-w-[368px] mt-[38px]">
						<ReviewButton />
					</div>
				</div>
				<div className="hidden h-full overflow-hidden lg:block">
					<ReviewGallery className="gap-y-[12px] overflow-y-scroll h-full flex flex-col scrollbar-hide [&>li:first-child]:mt-[50px] [&>li:last-child]:mb-[50px]" />
				</div>
			</div>
		</section>
	)
}
