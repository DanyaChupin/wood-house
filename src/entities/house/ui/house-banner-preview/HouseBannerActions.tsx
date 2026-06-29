import { ArrowIcon } from '@/shared/icons/Arrow-icon'
import { Button } from '@/shared/ui'

export function HouseBannerActions() {
	const handleScroll = () => {
		document
			.getElementById('dark-house')
			?.scrollIntoView({ behavior: 'smooth' })
	}
	return (
		<div className="flex flex-col gap-y-[12px]">
			<Button
				variant="secondary"
				rounded="sm"
				className="w-full mdPlus:max-w-[228px]"
			>
				Забронировать
				<span>
					<ArrowIcon />
				</span>
			</Button>

			<Button onClick={handleScroll} className="w-full mdPlus:hidden">
				Посмотреть дома
			</Button>
		</div>
	)
}
