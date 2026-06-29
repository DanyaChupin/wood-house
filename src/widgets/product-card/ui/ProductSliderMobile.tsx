import { IImg } from '@/entities/house'
import { ImageBlock } from '@/shared/ui'

interface IProductSliderMobileProps {
	imgUrls: IImg[]
}

export default function ProductSliderMobile({ imgUrls }: IProductSliderMobileProps) {
	return (
		<div className="w-[calc(100%+50px)] snap-mandatory snap-x overflow-y-hidden pr-[15px] scrollbar-hide ml-[-25px] flex gap-[16px] mb-[16px] overflow-x-scroll md:hidden">
			{imgUrls.map((img) => (
				<div
					className="shrink-0 snap-center first:ml-[15px] w-[87%]"
					key={img.src}
				>
					<ImageBlock
						className="h-full w-full rounded-card-sm"
						imgUrl={img.src}
						alt={img.alt}
					/>
				</div>
			))}
		</div>
	)
}
