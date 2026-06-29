import { StaticImageData } from 'next/image'

export interface IHouseView {
	title: string
	capacity: string
	livingArea: string
	terraceArea: string
	mainImgMobile: StaticImageData[]
	mainImgDesktop: StaticImageData[]
	prevImg: StaticImageData[]
}
