'use client'

import { useState } from 'react'
import { CompanyLogo } from '@/shared/ui'
import { GoToNextButton } from '@/shared/ui/GoToNextButton'
import { BurgerButton } from './ui/Burger-button'
import { NavMenu } from './ui/Nav-menu'

export function Header() {
	const [isOpen, setIsOpen] = useState(false)
	const toggleBurgerMenu = () => {
		setIsOpen(!isOpen)
	}
	// Нужены размеры экрана в js
	return (
		<header className="h-[64px] sm:h-[68px] lg:h-[74px] 2xl:h-[80px] flex items-center relative mb-[70px] lg:mb-[111px]">
			<div className="flex items-center justify-between w-full px-[15px] lg:px-[25px] 2xl:px-[50px] overflow-x-hidden">
				<CompanyLogo />
				<NavMenu />
				<div className="hidden lg:block w-[163px]">
					<GoToNextButton
						nextUrl="/bron"
						padding="8px 0px"
						fontSize="12px"
					/>
				</div>
				<BurgerButton
					toggleBurgerMenu={toggleBurgerMenu}
					isOpen={isOpen}
				/>
			</div>
			{isOpen && (
				<div className="h-[calc(100vh-64px)] z-50 absolute w-full bg-red-50 px-[15px] top-[64px] animate-fadeIn ">
					Menu mobile
				</div>
			)}
		</header>
	)
}
