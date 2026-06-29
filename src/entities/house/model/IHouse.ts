export interface IImg {
	src: string
	alt: string
}

export interface IHouseView {
	title: string
	capacity: string
	livingArea: string
	terraceArea: string
	mainImgs: IImg[]
	facilities: {
		info: { title: string; subPrice: boolean }[]
	}
}
