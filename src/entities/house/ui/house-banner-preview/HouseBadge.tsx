interface IHouseBadgeProps {
	label: string
}

export function HouseBadge({ label }: IHouseBadgeProps) {
	return (
		<p className="px-[12px] py-[8px] text-[16px] font-medium leading-[22px] ring-[2px] ring-inset ring-WHITE_500/10 text-WHITE_500 rounded-[12px] backdrop-blur-[25px]">
			{label}
		</p>
	)
}
