import { SpectrsList } from './ui/SpectrsList'

export function SpectrsBlock() {
	return (
		<section>
			<h3 className="text-[32px] lg:text-[40px] 2xl:text-[48px] leading-[40px] 2xl:leading-[56px] mb-[25px] lg:mb-[36px] 2xl:mb-[46px]">
				Полный спектр
				<br /> наслаждения
			</h3>
			<SpectrsList />
		</section>
	)
}
