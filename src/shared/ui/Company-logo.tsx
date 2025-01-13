import Link from 'next/link'
import { Logo } from '../icons/Logo-icon'

export function CompanyLogo() {
	return (
		<Link
			href="/"
			className="flex gap-[4px] items-center text-[23px] lg:text-[26px]"
		>
			<Logo />
			Вудхаус
		</Link>
	)
}
