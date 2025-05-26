import { ReactNode } from 'react'
import { bgAccent } from '@/shared/const/bgAccent'
import { ROUNDED } from '@/shared/const/rounded'
import { MessageBlock } from '../message-block/MessageBlock'

interface IMessageWrapper {
	children: ReactNode
	title: string
	description?: string
	routsButton?: boolean
	subInfo?: ReactNode
}

export function MessageWrapper({
	children,
	title,
	description,
	routsButton = true,
	subInfo,
}: IMessageWrapper) {
	return (
		<div
			className={`p-[25px] flex flex-col gap-y-[25px] 2xl:gap-y-[50px] lg:p-[50px] ${bgAccent} ${ROUNDED.md}`}
		>
			<div
				className={`flex md:flex-col mdPlus:flex-row flex-col gap-[15px]`}
			>
				<MessageBlock
					routsButton={routsButton}
					title={title}
					description={description}
				/>
				{children}
			</div>
			{subInfo}
		</div>
	)
}
