interface IProsItem {
	title: string
	description: string
	currentSlider: number
	slideIndex: number
}
export function ProsItem({
	title,
	description,
	currentSlider,
	slideIndex,
}: IProsItem) {
	return (
		<li
			className={`w-full absolute  flex flex-col gap-[8px] lg:gap-[10px] 2xl:gap-[12px] items-center ease-linear justify-center transition-TRANSLATE_OPACITY translate-x-[-100%] ${
				currentSlider === slideIndex && 'animate-slideRightSmoke'
			} translate-x-[-50%] blur-[1px] opacity-0`}
		>
			<h3 className="text-[32px] leading-[40px] md:text-[40px] lg:leading-[56px] lg:text-[48px] w-[85%] sm:w-[70%] md:w-[55%] lg:w-[40%] text-center">
				{title}
			</h3>
			<p className="text-[16px] w-[75%] sm:w-[50%] md:w-[40%] lg:w-[35%] xl:w-[25%] text-center">
				{description}
			</p>
		</li>
	)
}
