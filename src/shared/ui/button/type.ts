import { ButtonHTMLAttributes, ComponentProps, ReactNode } from 'react'
import Link from 'next/link'

export type ButtonVariant = 'primary' | 'secondary' | 'custom'
export type ButtonSize = 'sm' | 'md' | 'custom'
export type ButtonRounded = 'sm' | 'md' | 'custom'

interface IButtonBaseProps {
	variant?: ButtonVariant
	size?: ButtonSize
	rounded?: ButtonRounded
	children?: ReactNode
	className?: string
}

type IButtonAsButton = IButtonBaseProps &
	Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof IButtonBaseProps> & {
		asLink?: false
		href?: never
	}

type IButtonAsLink = IButtonBaseProps &
	Omit<ComponentProps<typeof Link>, keyof IButtonBaseProps> & {
		asLink: true
		href: ComponentProps<typeof Link>['href']
	}

export type IButtonProps = IButtonAsButton | IButtonAsLink
