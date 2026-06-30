import { Fragment } from 'react'

const achievementsData = [
	{
		title: '250+',
		description: 'гостей побывали у нас за этот год',
	},
	{
		title: '5★',
		description: 'средняя оценка на Яндекс.Картах',
	},
	{
		title: '100%',
		description: 'приватность — нет соседей и шума',
	},
	{
		title: '0',
		description: 'шумных соседей поблизости',
	},
]

export function Achievements() {
	return (
		<div className="grid grid-cols-2 gap-[8px] mb-[80px] mdPlus:flex mdPlus:gap-0 2xl:mb-[100px] 2xl:mx-[34px]">
			{achievementsData.map((item, i) => (
				<Fragment key={item.title}>
					{i > 0 && (
						<div
							aria-hidden
							className="hidden mdPlus:block shrink-0 w-[1px] bg-gray-200 self-stretch mx-[30px] lg:mx-[50px]"
						/>
					)}
					<AchievementItem {...item} />
				</Fragment>
			))}
		</div>
	)
}

interface IAchievementItemProps {
	title: string
	description: string
}

function AchievementItem({ title, description }: IAchievementItemProps) {
	return (
		<div className="mdPlus:flex-1 p-[16px] flex flex-col mdPlus:p-0 2xl:gap-y-[12px] gap-y-[8px] rounded-card-sm bg-[#f6f6f4] mdPlus:bg-transparent">
			<h2 className="font-bold text-[48px] leading-[52px] lg:text-[60px] tracking-[-0.2px] 2xl:text-[96px] 2xl:leading-[100px]">
				{title}
			</h2>
			<p className="text-[16px] leading-[22px]">{description}</p>
		</div>
	)
}
