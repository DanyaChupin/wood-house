'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ROUNDED } from '@/shared/const/rounded'
import { ImageBlock } from '@/shared/ui'
import footerImg from '../../shared/images/footer-img.png'
import { SocialLinks } from './ui/SocialLinks'

const YandexCart = dynamic(() => import('./ui/YandexCart'))
export default function Footer() {
	return (
		<footer className="mb-[100px] relative">
			<div
				className={`relative h-[450px] mb-[20px] lg:mb-[100px] 2xl:mb-[150px] xl:h-[640px] w-full ${ROUNDED.md} overflow-hidden`}
			>
				<h5 className="text-[32px] z-30 text-white absolute whitespace-pre-wrap sm:bottom-0 left-0 sm:top-0  right-0 top-[25px] grid sm:place-items-center leading-[40px] 2xl:text-[48px] lg:text-[36px] lg:leading-[48px] w-full justify-center 2xl:leading-[56px]">
					Это тихое место
					<br />
					идеально подходит
					<br />
					для тех, кто ищет
					<br />
					гармонию с природой
					<br />и уединение от
					<br />
					городской суеты
				</h5>
				<ImageBlock
					imgUrl={footerImg}
					className={`w-full min-h-[450px] object-left ${ROUNDED.lg} h-full`}
					alt="Посуточная аренда загородного дома в 50 км от МКАД | WoodHouse"
				/>
			</div>
			<div className="flex flex-col lg:flex-row gap-[30px] 2xl:gap-[70px]">
				<div className="lg:w-[60%] xl:w-[50%]">
					<div className="flex flex-col mb-[30px]">
						<p className="font-bold text-[32px] mb-[24px] lg:mb-[54px] 2xl:mb-[74px] leading-[40px] 2xl:text-[48px] lg:text-[36px] lg:leading-[48px]">
							Если все еще <br /> остались вопросы
						</p>
						<p className="font-semibold text-[20px] leading-[28px]">
							Московская область, городской <br /> округ
							Истра, деревня Лукино, 24а <br />
							<span className="text-GRAY_400 mt-[6px] text-[16px]">
								Адрес
							</span>
						</p>
					</div>
					<div className="flex flex-col gap-[24px] mb-[30px]">
						<p className="font-semibold text-[20px] leading-[28px]">
							<Link
								aria-label="Номер телефона WoodHouse"
								href="tel:+7 (977) 777-73-32"
							>
								+7 (977) 777-73-32
							</Link>
							<br />
							<Link
								aria-label="email WoodHouse"
								href="mailto:vudxauc@gmail.com"
							>
								vudxauc@gmail.com
							</Link>
							<br />
							<span className="text-GRAY_400 mt-[6px] text-[16px]">
								Контакты
							</span>
						</p>
					</div>
					<SocialLinks />
					<nav className="flex-col hidden lg:flex lg:absolute gap-[2px] lg:right-0 lg:items-end lg:bottom-0 font-[SFPro]">
						<Link href="/policy">
							Политика конфиденциальности
						</Link>
						<Link href="/rules">Правила посещения</Link>
						<Link href="/oferta">Публичная оферта </Link>
					</nav>
				</div>
				<YandexCart />
			</div>
			<nav className="flex flex-col mt-[50px] lg:hidden gap-[5px] text-[14px] xs:gap-[4px] font-[SFPro]">
				<Link href="/policy">Политика конфиденциальности</Link>
				<Link href="/rules">Правила посещения</Link>
				<Link href="/oferta">Публичная оферта </Link>
			</nav>
		</footer>
	)
}
