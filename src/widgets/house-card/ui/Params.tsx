type Props = {
	params: {
		label: string
		value: string
	}[]
}
export function HouseParams(props: Props) {
	const { params } = props
	return (
		<div className="flex gap-[8px] 2xl:py-[24px] 2xl:px-[30px] 2xl:bg-[#F8F7F5] 2xl:gap-[56px] 2xl:rounded-[24px]">
			{params.map((item) => (
				<ParamsItem
					key={item.label}
					label={item.label}
					value={item.value}
				/>
			))}
		</div>
	)
}
export function Params() {
	return <div className="flex items-center gap-[12px]"></div>
}
type IParamsItemProps = {
	label: string
	value: string
}
function ParamsItem(props: IParamsItemProps) {
	const { label, value } = props
	return (
		<div className="bg-[#F8F7F5] p-[12px] rounded-[16px] w-full 2xl:p-0">
			<p className="text-BLACK_500 font-semibold leading-[28px] text-[20px]">
				{value}
			</p>
			<p className="text-[#666666] text-[16px] leading-[22px] font-normal">
				{label}
			</p>
		</div>
	)
}
