import { NavLink } from './Nav-link'

const ROUTES = [
	{
		name: 'Дома',
		routes: '/',
	},
	{
		name: 'Ресторан',
		routes: '/404',
	},
	{
		name: 'Сауна',
		routes: '/spa',
	},
	{
		name: 'Массаж',
		routes: '/massages',
	},
	{
		name: 'Развлечения',
		routes: '/404',
	},
]
export default function NavMenu({
	onClick,
}: {
	onClick?: (newPath?: string) => void
}) {
	return (
		<nav className="flex flex-col justify-center md:items-center md:flex-row gap-[15px] w-full h-full 2xl:gap-[32px]">
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
