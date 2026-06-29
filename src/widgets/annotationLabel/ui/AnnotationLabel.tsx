import { SecondaryWrapper } from '@/shared/ui/wrappers/SecondaryWrapper'

type Props = {
	lable: string
	bgColor?: string
}
export function AnnotationLabel(props: Props) {
	const { lable, bgColor = '' } = props
	return (
		<SecondaryWrapper
			bgColor={bgColor}
			rounded="rounded-[8px] h-fit w-fit"
		>
			<span className="px-[12px] pt-[6px] pb-[6px] whitespace-nowrap text-[14px] font-semibold">
				{lable}
			</span>
		</SecondaryWrapper>
	)
}
