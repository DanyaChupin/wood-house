'use client'

import { memo, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Logo } from '../icons/Logo-icon'

let timesAnimLock: null | NodeJS.Timeout = null
function CompanyLogo() {
	const { push } = useRouter()
	const [isTimeDisabled, setIsTimeDisabled] = useState(false)
	const pathName = usePathname()
	const animChangePage = () => {
		const currentScreen = document.querySelector('#sliderScreen')
		if ('/' === pathName) {
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
				currentImage.classList.add('translateUpLow1')
				currentDescription.classList.add('translateUpMedium')
				if (timesAnimLock) {
					clearTimeout(timesAnimLock)
				}
				setIsTimeDisabled(true)
				timesAnimLock = setTimeout(() => {
					currentTitle.classList.remove('translateUpHigh')
					currentImage.classList.remove('translateUpLow1')
					currentDescription.classList.remove(
						'translateUpMedium'
					)
					setIsTimeDisabled(false)
				}, 1400)
			}
			return
		}
		if (currentScreen) {
			currentScreen.classList.remove('open') // Убираем класс при закрытии
			currentScreen.classList.add('close') // Убираем класс при закрытии
			setTimeout(() => {
				push('/')
			}, 200)
		}
	}
	const isHome = pathName === '/'

	return (
		<button
			onClick={animChangePage}
			className={`flex gap-[4px] items-center text-[23px] lg:text-[36px] ${isHome ? 'md:text-WHITE_500' : 'md:text-BLACK_500'}`}
		>
			<div className="w-[22px] h-[22px] md:h-[30px] md:w-[30px] lg:w-[40px] lg:h-[40px]">
				<Logo />
			</div>
			Вудхаус
		</button>
	)
}
export default memo(CompanyLogo)
