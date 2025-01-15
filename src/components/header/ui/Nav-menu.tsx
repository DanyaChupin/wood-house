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
export default function NavMenu() {
	return (
		<nav className="flex items-center gap-[32px]">
			{ROUTES.map((routs) => (
				<NavLink
					key={routs.name}
					url={routs.routes}
					nameLink={routs.name}
				/>
			))}
		</nav>
	)
}
