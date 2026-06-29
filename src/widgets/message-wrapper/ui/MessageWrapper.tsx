import { ReactNode } from 'react'
import { MessageBlock } from '@/widgets/message-block'

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
			className={`p-[25px] flex flex-col gap-y-[25px] 2xl:gap-y-[50px] lg:p-[50px] bg-WHITE_300 rounded-card-md`}
		>
			<div
				className={`flex md:flex-col justify-between mdPlus:flex-row flex-col gap-[15px]`}
			>
				<div className="shrink-0 mdPlus:max-w-[340px]">
					<MessageBlock
						routsButton={routsButton}
						title={title}
						description={description}
					/>
				</div>
				{children}
			</div>
			{subInfo}
		</div>
	)
}
