export function BronScreen() {
	return (
		<main
			id="sliderScreen"
			className="mb-[150px] lg:mb-[180px] 2xl:mb-[200px] transition-[transform, opacity] closeLeft duration-500"
		>
			<h1 className="flex justify-center w-full text-[72px]">
				BronScreen
			</h1>
			<div className="flex w-full gap-[20px]">
				<div className="w-[80%] h-[500px] bg-black" />
				<div className="w-[20%] bg-black" />
			</div>
			<div className="flex w-full gap-[20px] mt-[20px]">
				<div className="w-[60%] h-[300px] bg-black" />
				<div className="w-[40%] bg-black" />
			</div>
		</main>
	)
}
