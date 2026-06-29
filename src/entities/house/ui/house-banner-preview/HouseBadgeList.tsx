import { HouseBadge } from './HouseBadge'
import { HOUSE_BANNER_BADGES } from './houseBannerBadges'

export function HouseBadgeList() {
	return (
		<div className="flex gap-[8px] flex-wrap mdPlus:gap-[12px] lg:max-w-[60%]">
			{HOUSE_BANNER_BADGES.map((label) => (
				<HouseBadge key={label} label={label} />
			))}
		</div>
	)
}
