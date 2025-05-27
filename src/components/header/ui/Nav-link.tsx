interface INavLink {
	url: string | null
	nameLink: string
	onClick?: (newPath?: string | null) => void
}
export function NavLink({ url, nameLink, onClick }: INavLink) {
	return (
		<button
			onClick={() => onClick && onClick(url)}
			disabled={url === null}
			className="font-medium w-fit hover:disabled:before:content-[''] disabled:after:top-1/2 disabled:after:h-[3px] lg:disabled:after:h-[2px] disabled:cursor-not-allowed disabled:after:bg-black disabled:after:block disabled:after:absolute disabled:after:transition-[width] after:w-0 after:hover:w-full  text-left hover:translate-x-3 md:active:translate-y-[1px] md:hover:text-GRAY_500 md:active:translate-x-0 md:hover:translate-x-0 md:active:text-GRAY_400 transition-[transform, color] duration-200 text-[32px] md:text-[14px] font-[SFPro]"
		>
			{nameLink}
		</button>
	)
}
