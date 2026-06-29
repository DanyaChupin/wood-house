'use client'

import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { SITE_ROUTES } from '@/shared/const/site'
import { useBreakpoints } from '@/shared/lib/useBreakpoints'
import { Button } from '@/shared/ui'
import CompanyLogo from '@/shared/ui/Company-logo'
import { GoToNextButton } from '@/shared/ui/GoToNextButton'
import { BurgerButton } from './Burger-button'

const NavMenu = dynamic(() => import('./Nav-menu'))

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

	const onClickLink = (newPath?: string | null) => {
		setIsOpen(false)

		if (typeof newPath === 'string') {
			if (newPath === pathName) {
				if (pathName === '/') {
					const productCart =
						document.querySelector('#product-cart-1')
					if (productCart)
						productCart.scrollIntoView({
							behavior: 'smooth',
							block: 'start',
						})
					return
				}
				if (isMobile) return
				const currentTitle = document.querySelector('#sliderTitle')
				const currentDescription =
					document.querySelector('#sliderDescription')
				const currentImage =
					document.querySelectorAll('#sliderImage')
				if (
					currentTitle &&
					currentDescription &&
					currentImage &&
					!isTimeDisabled
				) {
					if (typeof currentImage === 'object') {
						Array.from(currentImage).map((el, index) =>
							el.classList.add(
								'translateUpLow' + (index + 1)
							)
						)
					} else {
						// eslint-disable-next-line
						//@ts-ignore
						currentImage.classList.add('translateUpLow1')
					}
					currentTitle.classList.add('translateUpHigh')
					currentDescription.classList.add('translateUpMedium')
					if (timesAnimLock) {
						clearTimeout(timesAnimLock)
					}
					setIsTimeDisabled(true)
					timesAnimLock = setTimeout(() => {
						currentTitle.classList.remove('translateUpHigh')

						if (typeof currentImage === 'object') {
							Array.from(currentImage).map((el, index) =>
								el.classList.remove(
									'translateUpLow' + (index + 1)
								)
							)
						} else {
							// eslint-disable-next-line
							//@ts-ignore
							currentImage.classList.remove(
								'translateUpLow1'
							)
						}
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
	const isHome = pathName === '/'

	return (
		<header
			className={`h-[56px] z-[60] mt-[24px] lg:mt-[30px] flex items-center relative transition-[opacity, margin] duration-200 ${isOpen ? 'mx-0' : 'mx-[24px] 2xl:mx-0'}`}
		>
			<motion.div
				className="relative z-[61] flex items-center bg-WHITE_500/70 md:bg-transparent rounded-card-sm justify-between p-[16px] w-full 2xl:px-[54px] overflow-x-hidden"
				initial={{ opacity: 0, y: 0 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.15,
					delay: 0.4,
				}}
			>
				<CompanyLogo />
				<div className="hidden md:block">
					<NavMenu onClick={onClickLink} />
				</div>
				<div className="hidden md:block">
					<Button
						asLink
						size="sm"
						variant={!isHome ? 'primary' : 'secondary'}
						rounded="sm"
						href={SITE_ROUTES.bron}
					>
						Забронировать
					</Button>
				</div>
				<BurgerButton
					toggleBurgerMenu={() => setIsOpen(!isOpen)}
					isOpen={isOpen}
				/>
			</motion.div>
			{isMobile && (
				<div
					className={`z-50 fixed w-full bg-WHITE_500 h-svh px-[15px] left-0 top-0 grid duration-[400ms] transition-[grid,_opacity] ${isOpen ? 'grid-rows-[1fr] opacity-100 pointer-events-auto' : 'grid-rows-[0fr] opacity-0 pointer-events-none'}`}
				>
					<div
						className={`min-h-0 overflow-y-hidden ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}
					>
						<div className="h-[calc(100svh-64px)] pb-[100px] flex justify-between flex-col">
							<NavMenu onClick={onClickLink} />
							<GoToNextButton
								onClick={onClickLink}
								padding="14px 0px"
								borderRadius="16px"
								fontSize="14px"
								nextUrl={SITE_ROUTES.bron}
							/>
						</div>
					</div>
				</div>
			)}
		</header>
	)
}
