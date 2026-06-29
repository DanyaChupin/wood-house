interface INavLink {
	url: string | null
	nameLink: string
	onClick?: (newPath?: string | null) => void
}

const navLinkStyles = [
	// base
	'relative w-fit text-left font-medium font-[SFPro]',
	'text-[32px] md:text-[14px]',
	'transition-[transform,background,_color] duration-200',
	// desktop pill
	'md:px-[16px] md:py-[6px] md:rounded-[12px]',
	// desktop hover/active
	'md:hover:bg-[#E8E8E8] md:hover:text-GRAY_500 md:hover:translate-x-0',
	'md:active:translate-y-[1px] md:active:translate-x-0 md:active:text-GRAY_400',
	// mobile hover
	'hover:translate-x-3',
	// underline ::after animation
	'after:left-0 after:w-0 after:hover:w-full md:after:hover:w-[83%]',
	// disabled (current page) strikethrough
	'disabled:cursor-not-allowed',
	'disabled:after:absolute ',
	'disabled:after:top-1/2 md:disabled:after:left-[10px] disabled:after:h-[3px] lg:disabled:after:h-[2px]',
	'disabled:after:bg-BLACK_500 disabled:after:transition-[width]',
	'hover:disabled:before:content-[""]',
].join(' ')

export function NavLink({ url, nameLink, onClick }: INavLink) {
	return (
		<button
			onClick={() => onClick && onClick(url)}
			disabled={url === null}
			className={navLinkStyles}
		>
			{nameLink}
		</button>
	)
}
