import Link from 'next/link'
import { ArrowIcon } from '@/shared/icons/Arrow-icon'

export function YandexButton() {
	return (
		<Link
			target="_blank"
			href="https://yandex.ru/navi/org/vudxauc/143261160280?si=tn0mmygpnev860dyen4z7z1f0w"
			className="py-[14px] z-30 relative bg-black font-[SFPro] hover:bg-GRAY_500 transition-[background-color] duration-200 font-bold rounded-[22px] text-white text-[16px] flex items-center gap-[8px] justify-center w-full active:bg-GRAY_600"
		>
			Яндекс Карты
			<ArrowIcon />
		</Link>
	)
}
