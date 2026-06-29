export function Title(title: { title: string }) {
	return (
		<h2 className="font-bold text-BLACK_500 font-[SoyuzGrotesk] text-[40px] leading-[44px] 2xl:text-[64px] 2xl:leading-[100%]">
			{title.title}
		</h2>
	)
}
