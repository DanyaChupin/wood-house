import { memo } from 'react'

function ProductTitle({ title }: { title: string }) {
	return (
		<h2 className="text-[32px] md:text-[38px] 2xl:text-[48px]">
			{title}
		</h2>
	)
}
export default memo(ProductTitle)
