import { ReactNode } from 'react'
import Link from 'next/link'

interface IGoToNext {
	children?: ReactNode
	padding: string
	borderRadius: string
	fontSize: string
	nextUrl: string
	className?: string
	onClick?: () => void
}
export function GoToNextButton({
	children,
	padding,
	borderRadius,
	fontSize,
	nextUrl,
	className,
	onClick,
}: IGoToNext) {
	return (
		<Link
			href={nextUrl}
			onClick={onClick && onClick}
			style={{
				padding: padding,
				fontSize: fontSize,
				borderRadius: borderRadius,
			}}
			className={`font-bold bg-black lg:hover:bg-GRAY_500 lg:hover:active:bg-GRAY_600 transition-[background-color] duration-200 flex gap-[8px] w-full items-center justify-center text-white font-[SFpro] ${className && className}`}
		>
			Забронировать{children}
		</Link>
	)
}
