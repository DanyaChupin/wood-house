import { ArrowIcon } from '@/shared/icons/Arrow-icon'
import { Button } from '@/shared/ui'

export function ReviewButton() {
	return (
		<Button
			asLink
			href={`https://yandex.ru/maps/org/vudkhaus/143261160280/reviews/?ll=36.804821%2C55.831919&z=16`}
			target="_blank"
			className="w-full !font-[SFPro] font-bold"
		>
			Отзывы на Яндекс.Картах
			<span>
				<ArrowIcon />
			</span>
		</Button>
	)
}
