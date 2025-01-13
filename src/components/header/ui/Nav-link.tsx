import Link from 'next/link'

interface INavLink {
	url: string
	nameLink: string
}
export function NavLink({ url, nameLink }: INavLink) {
	return (
		<Link className="font-medium hidden font-[SFpro] lg:block" href={url}>
			{nameLink}
		</Link>
	)
}
