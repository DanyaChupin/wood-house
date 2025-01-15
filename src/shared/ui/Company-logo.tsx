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
		if (currentScreen) {
			currentScreen.classList.remove('open') // Убираем класс при закрытии
			currentScreen.classList.add('close') // Убираем класс при закрытии
			setTimeout(() => {
				push('/')
			}, 200)
		}
	}
	return (
		<button
			onClick={animChangePage}
			className="flex gap-[4px] items-center text-[23px] lg:text-[26px]"
		>
			<Logo />
			Вудхаус
		</button>
	)
}
export default memo(CompanyLogo)
