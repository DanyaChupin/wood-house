import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { IButtonProps } from './type'

const VARIANT_STYLE = {
	primary: 'bg-BLACK_500 text-WHITE_500 hover:bg-GRAY_500 active:bg-GRAY_600 disabled:opacity-30',
	secondary:
		'bg-WHITE_500 text-BLACK_500 hover:bg-WHITE_800 active:bg-WHITE_700 disabled:opacity-30',
	custom: '',
} as const

const SIZE_STYLE = {
	sm: 'text-[14px] leading-[100%] py-[10px] px-[24px] font-semibold',
	md: 'text-[16px] leading-[100%] font-bold py-[18px] px-[32px]',
	custom: '',
} as const

const ROUNDED_STYLE = {
	sm: 'rounded-[12px]',
	md: 'rounded-[16px]',
	custom: '',
} as const

export function Button(props: IButtonProps) {
	const {
		children,
		variant = 'primary',
		size = 'md',
		rounded = size === 'custom' ? 'custom' : size,
		className,
		...rest
	} = props as IButtonProps & { asLink?: boolean; href?: string }

	const mergedClassName = twMerge(
		'transition-[background-color,color,border-color] duration-200 w-fit flex items-center justify-center gap-[8px] font-[SFpro]',
		VARIANT_STYLE[variant],
		SIZE_STYLE[size],
		ROUNDED_STYLE[rounded as keyof typeof ROUNDED_STYLE],
		className
	)

	const { asLink, href, ...restWithoutLink } = rest as {
		asLink?: boolean
		href?: string
	} & Record<string, unknown>

	if (asLink === true) {
		return (
			<Link
				href={href!}
				{...(restWithoutLink as object)}
				className={mergedClassName}
			>
				{children}
			</Link>
		)
	}

	return (
		<button {...(restWithoutLink as object)} className={mergedClassName}>
			{children}
		</button>
	)
}
