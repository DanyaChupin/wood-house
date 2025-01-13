import { BurgerIcon } from '@/shared/icons/Burger-icon'
import { CloseIcon } from '@/shared/icons/Close-icon'

interface IBurgerButton {
	toggleBurgerMenu: () => void
	isOpen: boolean
}
export function BurgerButton({ toggleBurgerMenu, isOpen }: IBurgerButton) {
	return (
		<button
			onClick={toggleBurgerMenu}
			className="p-[5px] lg:hidden flex items-center relative"
		>
			<div
				className={`${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'} duration-300 transition-TRANSLATE_OPACITY absolute right-0`}
			>
				<CloseIcon />
			</div>
			<div
				className={`${isOpen ? 'translate-x-6 opacity-0' : 'translate-x-0 opacity-100'} duration-300 transition-TRANSLATE_OPACITY absolute right-0`}
			>
				<BurgerIcon />
			</div>
		</button>
	)
}
