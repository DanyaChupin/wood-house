import { ReactNode } from 'react'
import Link from 'next/link'

interface IGoToNext {
	children?: ReactNode
	padding: string
	fontSize: string
	nextUrl: string
}
export function GoToNextButton({
	children,
	padding,
	fontSize,
	nextUrl,
}: IGoToNext) {
	return (
		<Link
			href={nextUrl}
			style={{ padding: padding, fontSize: fontSize }}
			className="font-bold bg-black flex gap-[8px] rounded-[16px] w-full items-center justify-center text-white font-[SFpro]"
		>
			ЗАБРОНИРОВАТЬ{children}
		</Link>
	)
}
