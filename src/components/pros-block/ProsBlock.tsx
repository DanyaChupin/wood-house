'use client'

import { useEffect, useState } from 'react'
import { ProsItem } from './ui/ProsItem'

const prosData = [
	{
		title: 'Место гармонии и теплых воспоминаний',
		description:
			'Расположение домов рядом с лесом на берегу реки создает идеальную атмосферу для романтического и семейного отдыха',
	},
	{
		title: '~ 35 минут на дорогу из Москвы',
		description:
			'Добраться в комплекс можно на личном автомобиле или такси по скоростному Новорижскому шоссе за ~35 мин',
	},
	{
		title: 'Высокий уровень сервиса',
		description:
			'Наш менеджер/управляющий всегда на связи. Поможет решить вопросы, организовать активный или спокойный отдых, питание.',
	},
]

export default function ProsBlock() {
	const [currentSlide, setCurrentSlide] = useState(1)
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => {
				if (prev === 3) {
					return 1
				} else {
					return prev + 1
				}
			})
		}, 7100)

		return () => {
			if (interval) {
				clearInterval(interval)
			}
		}
	}, [])
	return (
		<ul className="w-[calc(100%+30px)] md:w-full md:ml-0 ml-[-15px] ease-linear flex flex-nowrap overflow-hidden relative h-[200px] mb-[150px] lg:mb-[180px] 2xl:mb-[200px]">
			{prosData.map((info, index) => (
				<ProsItem
					key={info.title}
					currentSlider={currentSlide}
					slideIndex={index + 1}
					title={info.title}
					description={info.description}
				/>
			))}
		</ul>
	)
}
