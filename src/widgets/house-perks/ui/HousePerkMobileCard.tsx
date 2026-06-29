import { ImageBlock } from '@/shared/ui'
import { IHousePerkView } from '../model/IHousePerk'

interface IHousePerkMobileCardProps {
	perk: IHousePerkView
	onImageClick: (index: number) => void
}

export function HousePerkMobileCard({
	perk,
	onImageClick,
}: IHousePerkMobileCardProps) {
	return (
		<div className="w-full  p-[16px] rounded-[24px] bg-[#F6F6F4] flex flex-col">
			<p className="font-[SoyuzGrotesk] font-bold text-[24px] leading-[28px]">
				{perk.title}
			</p>
			<p className="font-[SFPro] font-normal text-[14px] leading-[20px] text-[#666666] mb-[16px]">
				{perk.description}
			</p>
			<div className="flex gap-[8px] flex-1">
				{perk.images.map((img, i) => (
					<button
						key={img.src + img.title}
						onClick={() => onImageClick(i)}
						className="flex-1 rounded-[16px] min-h-[120px] overflow-hidden"
					>
						<ImageBlock
							imgUrl={img.src}
							alt={img.alt}
							className="w-full h-full"
						/>
					</button>
				))}
			</div>
		</div>
	)
}
