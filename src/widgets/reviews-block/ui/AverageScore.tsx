import { ReviewButton } from './ReviewButton'

export function AverageScore() {
	return (
		<div className="bg-[#F6F6F4] lg:bg-[#F6F6F4] lg:shadow-[0px_12px_45px_0px_rgba(0,_0,_0,_0.1)] lg:p-[24px] p-[16px] rounded-[24px]">
			<div>
				<div className="flex items-center gap-x-[6px] mb-[12px]">
					<svg
						width="32"
						height="32"
						viewBox="0 0 32 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							width="32"
							height="32"
							rx="16"
							fill="black"
						/>
						<path
							d="M14.8662 8.84119C15.2398 7.7196 16.7602 7.7196 17.1338 8.8412L18.2658 12.2388C18.4306 12.7336 18.8732 13.069 19.3751 13.0797L22.822 13.153C23.9598 13.1772 24.4296 14.6858 23.5227 15.4031L20.7754 17.5762C20.3754 17.8927 20.2063 18.4355 20.3517 18.9369L21.35 22.3798C21.6796 23.5163 20.4496 24.4487 19.5155 23.7704L16.6856 21.7159C16.2735 21.4167 15.7265 21.4167 15.3144 21.7159L12.4845 23.7704C11.5504 24.4487 10.3204 23.5163 10.65 22.3798L11.6483 18.9369C11.7937 18.4355 11.6246 17.8927 11.2246 17.5762L8.4773 15.4031C7.57039 14.6858 8.04019 13.1772 9.17804 13.153L12.6249 13.0797C13.1268 13.069 13.5694 12.7336 13.7342 12.2388L14.8662 8.84119Z"
							fill="white"
						/>
					</svg>
					<span className="text-[18px] font-bold font-[SFPro] leading-[20px]">
						Средняя оценка 5 из 5
					</span>
				</div>
				<p className="mb-[16px] lg:mb-0 text-[18px] font-medium leading-[26px] whitespace-pre-wrap text-[#666666]">
					{`Основано на отзывах\nреальных гостей на Яндекс.Картах`}
				</p>
				<div className="lg:hidden">
					<ReviewButton />
				</div>
			</div>
		</div>
	)
}
