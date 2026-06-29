import { ImageBlock } from '@/shared/ui'

interface IBoardGalleryItemProps {
	images: string[]
	position: string
}

export function BoardGalleryItem({ images, position }: IBoardGalleryItemProps) {
	return (
		<div
			className={`flex w-full h-fit lg:ease-in-out lg:hover:translate-y-6 lg:transition-transform duration-500 ${position} min-w-[105px] flex-col gap-[10px]`}
		>
			<div
				className={`w-full bg-WHITE_800 h-[200px] rounded-card-sm`}
			></div>
			{images.map((img) => (
				<ImageBlock
					key={img}
					imgUrl={img}
					className="w-full"
					alt="Фотогалерея коттеджного комплекса Вудхаус"
				/>
			))}
		</div>
	)
}
