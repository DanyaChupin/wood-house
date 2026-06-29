export interface IHousePerkImage {
	src: string
	alt: string
	title?: string
	link: {
		title: string
		href: string
	}
}

export interface IHousePerkView {
	title: string
	description: string
	images: IHousePerkImage[]
}
