import { AnimalIcon } from '@/shared/icons/Animal-icon'
import { ArrowIcon } from '@/shared/icons/Arrow-icon'
import { ClosetIcon } from '@/shared/icons/Closet-icon'
import { IronIcon } from '@/shared/icons/Iron-icon'
import { ParkingIcon } from '@/shared/icons/Parking-icon'
import { SnowIcon } from '@/shared/icons/Snow-icon'
import { WifiIcon } from '@/shared/icons/Wifi-icon'
import { GoToNextButton } from '@/shared/ui/GoToNextButton'

export function Convenience() {
	return (
		<div>
			<strong className="text-[20px]">удобства:</strong>
			<div className="flex items-center gap-[15px] mb-[20px] mt-[10px]">
				<WifiIcon />
				<ParkingIcon />
				<SnowIcon />
				<IronIcon />
				<ClosetIcon />
				<AnimalIcon />
			</div>
			<ul className="sm:h-[72px] text-[16px] flex flex-col w-fit sm:gap-x-[43px] flex-wrap mb-[16px]">
				<li>
					<p>спальня (двуспальная кровать)</p>
				</li>
				<li>
					<p>кухня-гостиная с +2 спальными местами*</p>
				</li>
				<li>
					<p>ванная комната</p>
				</li>
				<li>
					<p>теплая купель для купания*</p>
				</li>
				<li>
					<p>сауна</p>
				</li>
				<li>
					<p>мангальная зона</p>
				</li>
			</ul>
			<div className="sm:max-w-[213px] mb-[10px]">
				<GoToNextButton
					padding="14px 0px"
					borderRadius="16px"
					fontSize="14px"
					nextUrl="/bron"
				>
					<ArrowIcon />
				</GoToNextButton>
			</div>
			<p className="text-GRAY_400 leading-[14px] text-[12px]">
				*Информацию по дополнительным спальным местам уточняйте
				<br />у администратора
			</p>
		</div>
	)
}
