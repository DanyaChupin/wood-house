import { SITE_ROUTES } from '@/shared/const/site'
import { NavLink } from './Nav-link'

const ROUTES = [
	{
		name: 'Дома',
		routes: SITE_ROUTES.home,
	},
	{
		name: 'Баня',
		routes: SITE_ROUTES.spa,
	},
	{
		name: 'Массаж',
		routes: SITE_ROUTES.massages,
	},
	{
		name: 'Развлечения',
		routes: null,
	},
]

export default function NavMenu({
	onClick,
}: {
	onClick?: (newPath?: string | null) => void
}) {
	return (
		<nav className="flex flex-col justify-center md:items-center md:flex-row gap-[15px] md:gap-[8px] w-full h-full md:bg-WHITE_500 p-[4px] rounded-[16px]">
			{ROUTES.map((routs) => (
				<NavLink
					onClick={onClick}
					key={routs.name}
					url={routs.routes}
					nameLink={routs.name}
				/>
			))}
		</nav>
	)
}
