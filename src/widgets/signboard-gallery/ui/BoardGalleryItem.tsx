import { StaticImageData } from 'next/image'
import { ImageBlock } from '@/shared/ui'

type Props = {
	images: StaticImageData[]
	position: string
}
export function BoardGalleryItem(props: Props) {
	const { images, position } = props
	return (
		<div
			className={`flex w-full h-fit lg:ease-in-out lg:hover:translate-y-6 lg:transition-transform duration-500 ${position} min-w-[105px] flex-col gap-[10px]`}
		>
			<div
				className={`w-full bg-WHITE_800 h-[200px] rounded-card-sm`}
			></div>
			{images.map((img) => (
				<ImageBlock
					key={img.src}
					imgUrl={img}
					className="w-full"
					alt="Фотогалерея коттеджного комплекса Вудхаус"
				/>
			))}
		</div>
	)
}
