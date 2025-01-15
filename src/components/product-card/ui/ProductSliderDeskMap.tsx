import { memo } from 'react'
import { StaticImageData } from 'next/image'
import { ImageBlock } from '@/shared/ui'

function ProductSliderDeskMap({
	imgUrls,
	alt,
}: {
	imgUrls: StaticImageData[]
	alt: string
}) {
	return (
		<>
			{imgUrls.map((img) => (
				<div className="shrink-0 snap-center w-full" key={img.src}>
					<ImageBlock
						className="h-full shrink-0 w-full"
						imgUrl={img}
						alt={alt}
					/>
				</div>
			))}
		</>
	)
}
export default memo(ProductSliderDeskMap)
