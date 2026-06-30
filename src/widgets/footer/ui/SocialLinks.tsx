import Link from 'next/link'
import { InstIcon } from '@/shared/icons/Inst-icon'
import { TelegramIcon } from '@/shared/icons/Telegram-icon'

export function SocialLinks() {
	return (
		<>
			<div className="flex gap-[6px] items-center mb-[30px]">
				<Link
					target="_blank"
					aria-label="инстаграм ссылка woodhouse"
					href="https://www.instagram.com/vudxauc?igsh=OW5sN2I2eDBpeml2"
				>
					<InstIcon />
				</Link>
				<Link
					target="_blank"
					aria-label="телеграм ссылка woodhouse"
					href="https://t.me/vudxauc"
					className="bg-black text-WHITE_500 flex items-center rounded-full pl-[6px] pr-[20px]"
				>
					<TelegramIcon />

					<p>Telegram</p>
				</Link>
			</div>
			<p className="text-GRAY_400">
				*Meta – запрещенная в РФ организация
			</p>
		</>
	)
}
