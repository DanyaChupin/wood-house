import { ReactNode } from 'react'
import { MessageBlock } from '../message-block/MessageBlock'

interface IMessageWrapper {
	children: ReactNode
	title: string
	description?: string
}

export function MessageWrapper({
	children,
	title,
	description,
}: IMessageWrapper) {
	return (
		<div className="flex flex-col gap-[50px] sm:flex-row">
			<MessageBlock title={title} description={description} />
			{children}
		</div>
	)
}
