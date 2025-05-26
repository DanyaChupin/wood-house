import { StaticImageData } from 'next/image'
import { ROUNDED } from '@/shared/const/rounded'
import { ImageBlock } from '@/shared/ui'

interface IProductSliderMobile {
	imgUrls: StaticImageData[]
	alt: string
}
export default function ProductSliderMobile({
	imgUrls,
	alt,
}: IProductSliderMobile) {
	return (
		<div className="w-[calc(100%+50px)] snap-mandatory snap-x overflow-y-hidden scrollbar-hide ml-[-25px] flex gap-[16px] mb-[16px] overflow-x-scroll md:hidden">
			{imgUrls.map((img) => (
				<div
					className="shrink-0 snap-center first:ml-[15px] last:pr-[15px] w-[87%]"
					key={img.src}
				>
					<ImageBlock
						className={`h-full w-full ${ROUNDED.sm}`}
						imgUrl={img}
						alt={alt}
					/>
				</div>
			))}
		</div>
	)
}
