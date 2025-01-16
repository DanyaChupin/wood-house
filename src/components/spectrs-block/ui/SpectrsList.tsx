'use client'

import { useState } from 'react'
import { ArrowIcon } from '@/shared/icons/Arrow-icon'
import { GoToNextButton } from '@/shared/ui/GoToNextButton'

const SPECTRS_DATA = [
	[
		{
			title: 'Максимум',
			information: [
				'парение дубовыми вениками  на сенной перине',
				'растирание медом с солью',
				'массаж шейно-воротниковой зоны',
				'догрев дубовыми вениками',
				'контрасный душ ледяной водой / снегом',
			],
			price: '5 500 ₽',
			time: '45 минут',
		},
		{
			title: 'Классика',
			information: [
				'парение дубовыми вениками на сенной перине',
				'цветочная арома-терапия',
			],
			price: '3 000 ₽',
			time: '15 минут',
		},
	],
	[
		{
			title: 'Ёлки-иголки',
			information: [
				`Тёплая купель на основе можевельника с добавлением целебных ароматных трав и цитрусовых культур. Комплекс витаминов повышает иммунитет, оздоравливает тело, успокаивает ум и душу`,
				'Температура воды от <strong>+37°С до +39°С</strong>',
			],
			price: '6 000 ₽',
			time: 'Бронируйте за 4 часа',
		},
		{
			title: 'Глинтвейн',
			information: [
				'Купель с добавлением цитрусовых и пряностей — \nкорицы, кардамона и мяты',
				'Температура воды от <strong>+37°С до +39°С</strong>',
			],
			price: '6 500 ₽',
			time: 'Бронируйте за 4 часа',
		},
	],
]

export function SpectrsList() {
	const [activeSlide, setActiveSlide] = useState(1)
	const changeSlider = (slideIndex: number) => {
		if (slideIndex === activeSlide) return
		const currentSpectr = document.querySelector('#spectrList')
		if (currentSpectr) {
			currentSpectr.classList.remove('slideClose')
			currentSpectr.classList.add('slideOpen')

			setTimeout(() => {
				setActiveSlide(slideIndex)
				currentSpectr.classList.remove('slideOpen')
				currentSpectr.classList.add('slideClose')
			}, 300)
		}
	}
	return (
		<div className="mb-[150px] lg:mb-[180px] 2xl:mb-[200px] xs:max-w-[70%]  md:max-w-[50%] lg:max-w-[524px] xs:justify-self-center sm:self-center">
			<div className="flex gap-[10px] xs:w-[200px] items-center mb-[25px] lg:mb-[30px] 2xl:mb-[38px]">
				<button
					onClick={() => changeSlider(1)}
					aria-label="показать возможности бани"
					className={`w-full px-[16px] py-[8px] ${activeSlide !== 1 ? 'bg-GRAY_200' : 'bg-GRAY_300'} lg:active:bg-GRAY_350 active:translate-y-[2px] transition-[transform, background-color] duration-300 rounded-[16px] font-[SFPro]`}
				>
					Парение
				</button>
				<button
					onClick={() => changeSlider(2)}
					aria-label="показать возможности купели"
					className={`w-full text-center px-[16px] ${activeSlide !== 2 ? 'bg-GRAY_200' : 'bg-GRAY_300'} lg:active:bg-GRAY_350 active:translate-y-[2px] transition-[transform, background-color] duration-300 py-[8px] rounded-[16px] font-[SFPro]`}
				>
					Купель
				</button>
			</div>
			<div
				id="spectrList"
				className="flex flex-col gap-[120px] md:gap-[100px] lg:gap-[80px] transition-[transform, opacity] slideClose"
			>
				{SPECTRS_DATA[activeSlide - 1].map((elem) => (
					<div
						key={elem.title}
						className="md:flex md:flex-col gap-[10px] lg:gap-[15px] w-full"
					>
						<h4 className="text-[20px]">{elem.title}</h4>
						<div className="flex mt-[10px] flex-wrap justify-between gap-[10px] w-full">
							{elem.information.map((spectr) => (
								<p
									key={spectr}
									dangerouslySetInnerHTML={{
										__html: spectr,
									}}
									className="whitespace-pre-wrap leading-[24px]"
								></p>
							))}
							<div className="w-full mt-[10px] sm:flex">
								<div className="flex flex-col w-full mb-[16px]">
									<span className="self-end sm:self-start font-bold text-[20px] mb-[6px]">
										{elem.price}
									</span>
									<span className="self-end sm:self-start">
										{elem.time}
									</span>
								</div>
								<GoToNextButton
									padding="14px 0px"
									borderRadius="16px"
									fontSize="14px"
									nextUrl="/bron"
									className="h-fit"
								>
									<ArrowIcon />
								</GoToNextButton>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
