import { FC } from 'react'
import { IImg } from '@/entities/house'

export interface IPhotoGalleryItem {
	label: string
	icon: FC
	photos: IImg[]
}
