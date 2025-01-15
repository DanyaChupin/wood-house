interface INavLink {
	url: string
	nameLink: string
	onClick?: (newPath?: string) => void
}
export function NavLink({ url, nameLink, onClick }: INavLink) {
	return (
		<button
			onClick={() => onClick && onClick(url)}
			className="font-medium text-left active:translate-x-3 md:active:translate-y-[1px] md:hover:text-GRAY_500 md:active:translate-x-0 md:active:text-GRAY_400 transition-[transform, color] duration-200 text-[32px] md:text-[14px] font-[SFPro]"
		>
			{nameLink}
		</button>
	)
}
