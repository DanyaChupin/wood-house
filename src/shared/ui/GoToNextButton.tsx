import { ReactNode } from 'react'
import Link from 'next/link'

interface IGoToNext {
	children?: ReactNode
	padding: string
	borderRadius: string
	fontSize: string
	nextUrl: string
}
export function GoToNextButton({
	children,
	padding,
	borderRadius,
	fontSize,
	nextUrl,
}: IGoToNext) {
	return (
		<Link
			href={nextUrl}
			style={{
				padding: padding,
				fontSize: fontSize,
				borderRadius: borderRadius,
			}}
			className="font-bold bg-black lg:hover:bg-GRAY_500 transition-[background-color] duration-200 flex gap-[8px] w-full items-center justify-center text-white font-[SFpro]"
		>
			Забронировать{children}
		</Link>
	)
}
