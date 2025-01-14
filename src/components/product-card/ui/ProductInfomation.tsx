import { StaticImageData } from 'next/image'
import { ImageBlock } from '@/shared/ui'
import { Convenience } from './Convenience'

interface IProductInfomation {
	houseName: string
	prevImg: StaticImageData[]
}
export function ProductInformation({ prevImg, houseName }: IProductInfomation) {
	return (
		<div className="lg:flex lg:justify-between lg:gap-[60px] lg:w-full">
			<Convenience />
			<div className="hidden lg:flex lg:w-[43%] lg:gap-[20px]">
				{prevImg.map((img) => (
					<ImageBlock
						key={img.src}
						imgUrl={img}
						className="max-w-[287px] h-full w-full max-h-[266px]"
						alt={houseName}
					/>
				))}
			</div>
		</div>
	)
}
