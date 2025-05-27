'use client'

import { useState } from 'react'
import { ArrowIcon } from '@/shared/icons/Arrow-icon'
import { GoToNextButton } from '@/shared/ui/GoToNextButton'

const BUTTONS_SPECTRS = [
	'парение и спа процедуры',
	'чан фурако (теплая бочка)',
	'аксессуры для бани',
]
const SPECTRS_DATA = [
	[
		{
			title: 'Классика',
			information: ['парение дубовыми вениками на сенной перине'],
			price: '3 000 ₽',
			time: 'до 15 минут',
		},
		{
			title: 'парение в два захода',
			information: [
				'первый заход с разогревом всего тела,контраст холодной водой или снегом,догрев в парной ,скраб медом с солью ',
			],
			price: '5 000 ₽',
			time: 'до 45 минут',
		},
		{
			title: 'мыльная помывка с березовыми вениками',
			price: '3 000 ₽',
			time: 'до 15 минут',
		},
		{
			title: 'аромопарение для 4х человек',
			information: [
				'мощный прогрев парной с примением и прослущиванием трех трав',
			],
			price: '4 000 ₽',
			time: 'до 20 минут',
		},
	],
	[
		// {
		// 	title: 'Ёлки-иголки',
		// 	information: [
		// 		`Тёплая купель на основе можевельника с добавлением апельсина ,грейпфрута и мяты оздоравливает тело, успокаивает ум и душу.`,
		// 		'Температура воды от <strong>+37°С до +39°С</strong>',
		// 	],
		// 	price: '6 500 ₽',
		// 	time: 'Бронируйте за 4 часа',
		// },
		// {
		// 	title: 'Цветочная',
		// 	information: [
		// 		'Теплая купель на основе сухой ромашки и других полевых цветов с добавлением аромомасел , аромат и визуальная\nсостовлящая бочки  — невероятный.',
		// 		'Температура воды от <strong>+37°С до +39°С</strong>',
		// 	],
		// 	price: '6 700 ₽',
		// 	time: 'Бронируйте за 4 часа',
		// },
		{
			title: 'Пихта-цитрус',
			information: ['пихта, апельсин, грйпфрут'],
			price: '6 500 ₽',
		},
		{
			title: 'Травяной',
			information: [
				'набор луговых и горных трав таких как: <strong>донник</strong>,<strong>мята</strong> и др.',
			],
			price: '6 500 ₽',
		},
		{
			title: 'Стандартный',
			information: ['без добавок'],
			price: '5 000 ₽',
		},
	],
	[
		{
			title: 'веники',
			information: ['(уточняйте по наличию)'],
			price: '550 ₽',
		},
		{
			title: 'фирменная шапочка из натуральной шерсти',
			price: '4000 ₽',
		},
		{
			title: 'резиновые тапочки',
			price: '1 500 ₽',
		},
		{
			title: 'кофейный скраб',
			price: '500 ₽',
		},
		{
			title: 'медовый скраб',
			price: '500 ₽',
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
			<div className="flex gap-[10px] flex-wrap mdPlus:flex-nowrap items-center mb-[25px] lg:mb-[30px] 2xl:mb-[38px]">
				{BUTTONS_SPECTRS.map((button, i) => (
					<button
						onClick={() => changeSlider(i + 1)}
						key={button}
						aria-label={button}
						className={`w-full px-[16px] py-[8px] whitespace-nowrap ${activeSlide !== i + 1 ? 'bg-GRAY_200' : 'bg-GRAY_300'} lg:active:bg-GRAY_350 active:translate-y-[2px] transition-[transform, background-color] duration-300 rounded-[16px] font-[SFPro]`}
					>
						{button}
					</button>
				))}
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
							{elem?.information &&
								elem.information.map((spectr) => (
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
									{elem?.time && (
										<span className="self-end sm:self-start">
											{elem.time}
										</span>
									)}
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
