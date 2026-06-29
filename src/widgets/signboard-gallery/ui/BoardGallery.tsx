import { GALLERY_DATA } from '../lib/galleryData'
import { BoardGalleryItem } from './BoardGalleryItem'

export function BoardGallery() {
	return (
		<div className="w-[calc(100%+50px)] mt-[-25px] 2xl:mt-[-50px] ml-[-25px] flex-nowrap gap-[10px] flex justify-center lg:justify-between">
			{GALLERY_DATA.map((img) => (
				<BoardGalleryItem
					images={img.img}
					position={img.position}
					key={img.img[0]}
				/>
			))}
		</div>
	)
}
