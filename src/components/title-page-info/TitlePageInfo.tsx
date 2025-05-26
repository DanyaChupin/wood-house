import { ReactNode } from 'react'

interface ITitlePageInfo {
	title: string
	description: string
	children: ReactNode
	className?: string
}
export function TitlePageInfo({
	title,
	description,
	children,
	className,
}: ITitlePageInfo) {
	return (
		<section>
			<div
				className={`flex flex-col gap-[25px] sm:gap-[30px] lg:gap-[40px] 2xl:gap-[50px] mb-[25px] sm:mb-[61px] lg:mb-[50px] sm:items-center ${className && className}`}
			>
				<h1
					id="sliderTitle"
					className="text-[64px] transition-transform sm:text-[72px] w-fit max-w-[375px] lg:text-[88px] leading-[72px] 2xl:leading-[112px] 2xl:text-[96px]"
				>
					{title}
				</h1>
				<p id="sliderDescription" className="sm:max-w-[375px]">
					{description}
				</p>
			</div>
			{children}
		</section>
	)
}
