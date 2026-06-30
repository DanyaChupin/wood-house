import { SITE_ROUTES } from '@/shared/const/site'
import { AnimalIcon } from '@/shared/icons/Animal-icon'
import { ArrowIcon } from '@/shared/icons/Arrow-icon'
import { ClosetIcon } from '@/shared/icons/Closet-icon'
import { IronIcon } from '@/shared/icons/Iron-icon'
import { ParkingIcon } from '@/shared/icons/Parking-icon'
import { SnowIcon } from '@/shared/icons/Snow-icon'
import { WifiIcon } from '@/shared/icons/Wifi-icon'
import { Button } from '@/shared/ui'
import { IHouseView } from '@/entities/house'

type Props = {
	facilities: Pick<IHouseView, 'facilities'>
}
export function Facilities(props: Props) {
	const { facilities } = props
	return (
		<div className="bg-[#F8F7F5] p-[16px] rounded-[24px] lg:p-[20px] 2xl:p-[24px]">
			<p className="mb-[16px] lg:mb-[20px] 2xl:mb-[24px] font-[SoyuzGrotesk] font-bold text-[32px] leading-[40px] 2xl:text-[32px] 2xl:leading-[28px]">
				Удобства:
			</p>
			<div className="flex items-center gap-x-[20px] mb-[16px] lg:mb-[20px] 2xl:mb-[24px]">
				<WifiIcon />
				<ParkingIcon />
				<SnowIcon />
				<IronIcon />
				<ClosetIcon />
				<AnimalIcon />
			</div>
			<div className="flex flex-col gap-y-[8px]">
				{facilities.facilities.info.map((elem) => (
					<div
						key={elem.title}
						className="p-[8px] flex items-center gap-x-[6px] rounded-full bg-[#0000000A]"
					>
						<div className="flex items-center gap-x-[8px]">
							<svg
								width="17"
								height="17"
								className="shrink-0"
								viewBox="0 0 17 17"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.33333 16.6667C12.9357 16.6667 16.6667 12.9357 16.6667 8.33333C16.6667 3.73096 12.9357 0 8.33333 0C3.73096 0 0 3.73096 0 8.33333C0 12.9357 3.73096 16.6667 8.33333 16.6667ZM12.8809 6.21426L7.5 11.5952L3.99408 8.08925L5.17259 6.91075L7.5 9.23817L11.7024 5.03574L12.8809 6.21426Z"
									fill="black"
								/>
							</svg>
							<p className="text-[16px] break-all font-[SFPro]">
								{elem.title}
							</p>
						</div>
						{elem.subPrice ? (
							<span className="py-[2px] shrink-0 px-[8px] rounded-full bg-[#04670026] text-[#046700] text-[14px] font-medium font-[SFPro]">
								доп. стоимость
							</span>
						) : null}
					</div>
				))}
			</div>
			<p className="text-[14px] leading-[120%] my-[16px] lg:my-[20px] 2xl:my-[24px] text-[#AEAEB2]">
				*Информацию по дополнительным спальным местам  уточняйте у
				администратора
			</p>
			<Button
				asLink
				href={SITE_ROUTES.bron}
				variant="primary"
				rounded="sm"
				className="w-full "
			>
				Забронировать
				<span>
					<ArrowIcon />
				</span>
			</Button>
		</div>
	)
}
