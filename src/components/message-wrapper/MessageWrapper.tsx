import { ReactNode } from 'react'
import { MessageBlock } from '../message-block/MessageBlock'

interface IMessageWrapper {
	children: ReactNode
	title: string
	description?: string
	routsButton?: boolean
}

export function MessageWrapper({
	children,
	title,
	description,
	routsButton = true,
}: IMessageWrapper) {
	return (
		<div className="flex flex-col gap-[50px] sm:flex-row">
			<MessageBlock
				routsButton={routsButton}
				title={title}
				description={description}
			/>
			{children}
		</div>
	)
}
