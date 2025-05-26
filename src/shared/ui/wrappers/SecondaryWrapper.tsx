import { ReactNode } from 'react'

type Props = {
	children: ReactNode
	rounded: string
	bgColor?: string
	className?: string
}
export function SecondaryWrapper(props: Props) {
	const {
		children,
		rounded = '',
		bgColor = 'bg-white',
		className = '',
	} = props
	return (
		<div
			className={`${bgColor} border-WHITE_700 border-[1px] ${className} ${rounded}`}
		>
			{children}
		</div>
	)
}
