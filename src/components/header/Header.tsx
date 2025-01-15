'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useBreakpoints } from '@/shared/hooks/useBreakpoints'
import CompanyLogo from '@/shared/ui/Company-logo'
import { GoToNextButton } from '@/shared/ui/GoToNextButton'
import { BurgerButton } from './ui/Burger-button'

const NavMenu = dynamic(() => import('./ui/Nav-menu'))

let timesAnimLock: null | NodeJS.Timeout = null
export function Header() {
	const [isOpen, setIsOpen] = useState(false)
	const { isMobile } = useBreakpoints()
	const pathName = usePathname()
	const { push } = useRouter()

	const [isTimeDisabled, setIsTimeDisabled] = useState(false)
	useEffect(() => {
		const newScreen = document.querySelector('#sliderScreen')
		if (newScreen) {
			newScreen.classList.add('open') // Добавляем класс при открытии
			newScreen.classList.remove('close') // Добавляем класс при открытии
		}
	}, [pathName])
	useEffect(() => {
		if (document) {
			if (isOpen) {
				document.body.style.overflow = 'hidden'
			} else {
				document.body.style.overflow = 'visible'
			}
		}
	}, [isOpen])
	const onClickLink = (newPath?: string) => {
		setIsOpen(false)

		if (typeof newPath === 'string') {
			if (newPath === pathName) {
				if (isMobile) return
				const currentTitle = document.querySelector('#sliderTitle')
				const currentDescription =
					document.querySelector('#sliderDescription')
				const currentImage = document.querySelector('#sliderImage')
				if (
					currentTitle &&
					currentDescription &&
					currentImage &&
					!isTimeDisabled
				) {
					currentTitle.classList.add('translateUpHigh')
					currentImage.classList.add('translateUpLow')
					currentDescription.classList.add('translateUpMedium')
					if (timesAnimLock) {
						clearTimeout(timesAnimLock)
					}
					setIsTimeDisabled(true)
					timesAnimLock = setTimeout(() => {
						currentTitle.classList.remove('translateUpHigh')
						currentImage.classList.remove('translateUpLow')
						currentDescription.classList.remove(
							'translateUpMedium'
						)
						setIsTimeDisabled(false)
					}, 1400)
				}
				return
			}
			const currentScreen = document.querySelector('#sliderScreen')
			if (currentScreen) {
				currentScreen.classList.remove('open') // Убираем класс при закрытии
				currentScreen.classList.add('close') // Убираем класс при закрытии
				setTimeout(() => {
					push(newPath)
				}, 300)
			}
		}
	}
	return (
		<header className="h-[64px] sm:h-[68px] lg:h-[74px] 2xl:h-[80px] flex items-center relative mb-[70px] lg:mb-[111px] md:animate-fadeInBlur md:transition-opcaity">
			<div className="flex items-center justify-between w-full px-[15px] lg:px-[25px] 2xl:px-[50px] overflow-x-hidden">
				<CompanyLogo />
				{!isMobile && <NavMenu onClick={onClickLink} />}
				<div className="hidden md:block tracking-[1px] w-[200px]">
					<GoToNextButton
						nextUrl="/bron"
						borderRadius="14px"
						padding="8px 0px"
						fontSize="12px"
					/>
				</div>
				<BurgerButton
					toggleBurgerMenu={() => setIsOpen(!isOpen)}
					isOpen={isOpen}
				/>
			</div>
			{isMobile && (
				<div
					className={`z-50 absolute w-full bg-white px-[15px] top-[64px] grid duration-[400ms] transition-[grid, opacity] ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
				>
					<div
						className={`min-h-0 overflow-y-hidden ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}
					>
						<div className="h-[calc(100vh-64px)] pb-[100px] flex justify-between flex-col">
							<NavMenu onClick={onClickLink} />
							<GoToNextButton
								padding="14px 0px"
								borderRadius="16px"
								fontSize="14px"
								nextUrl="/bron"
							/>
						</div>
					</div>
				</div>
			)}
		</header>
	)
}
