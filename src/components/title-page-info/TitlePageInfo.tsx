import { ReactNode } from 'react'

interface ITitlePageInfo {
	title: string
	description: string
	children: ReactNode
}
export function TitlePageInfo({
	title,
	description,
	children,
}: ITitlePageInfo) {
	return (
		<>
			<div
				id="top"
				className="flex flex-col gap-[25px] sm:gap-[30px] lg:gap-[40px] 2xl:gap-[50px] mb-[71px] sm:mb-[61px] lg:mb-[50px] sm:items-center"
			>
				<h1 className="text-[64px] sm:text-[82px] lg:text-[88px] 2xl:text-[96px]">
					{title}
				</h1>
				<p className="sm:max-w-[300px] sm:text-center">
					{description}
				</p>
			</div>
			{children}
		</>
	)
}
