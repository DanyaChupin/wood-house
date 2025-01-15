import { ImageBlock } from '@/shared/ui'
import catAvatar from '../../shared/images/cat-avatar.png'
import reviewsImg1 from '../../shared/images/reviews-1.png'
import reviewsImg2 from '../../shared/images/reviews-2.png'
import reviewsImg3 from '../../shared/images/reviews-3.png'
import reviewsImg4 from '../../shared/images/reviews-4.png'
import reviewsImg5 from '../../shared/images/reviews-5.png'
import reviewsImg6 from '../../shared/images/reviews-6.png'

export function ReviewsBlock() {
	return (
		<div className="overflow-x-scroll scrollbar-hide flex w-[calc(100%+30px)] lg:w-[calc(100%+60px)] ml-[-15px] lg:ml-[-30px] 2xl:w-full 2xl:ml-0 mb-[150px] lg:mb-[180px] 2xl:mb-[200px]">
			<div className="w-[100%] ml-[15px] lg:ml-[30px] 2xl:ml-0 flex gap-[20px]">
				<div className="flex w-[312px] shrink-0 flex-col gap-[20px]">
					<ImageBlock
						imgUrl={reviewsImg1}
						className="w-full h-[371px]"
						alt="one"
					/>
					<div className="flex gap-[9px] items-center">
						<div className="bg-[#4A9FFF] text-white flex justify-center items-center rounded-[50%] w-[33px] h-[33px]">
							В
						</div>
						<div className="flex flex-col ">
							<p className="font-semibold">
								виктория чистякова
							</p>
							<span className="text-GRAY_400 text-[12px]">
								22.09.2024
							</span>
						</div>
					</div>
				</div>
				<div className="w-[312px] shrink-0 flex flex-col gap-[20px]">
					<ImageBlock
						imgUrl={reviewsImg2}
						className="w-full h-[200px]"
						alt="one"
					/>
					<ImageBlock
						imgUrl={reviewsImg3}
						className="w-full h-[326px]"
						alt="one"
					/>
				</div>
				<div className="flex flex-col">
					<div className="flex w-[312px] shrink-0 flex-col gap-[20px] mt-[100px]">
						<ImageBlock
							imgUrl={reviewsImg4}
							className="w-full h-[200px]"
							alt="one"
						/>
						<div className="flex gap-[9px] items-center">
							<div className="w-[33px] h-[33px]">
								<ImageBlock
									imgUrl={catAvatar}
									alt="Артем аватарка"
									className="w-full h-full rounded-[50%]"
								/>
							</div>
							<div className="flex flex-col shrink-0">
								<p className="font-semibold">Артем</p>
								<span className="text-GRAY_400 text-[12px]">
									24.09.2024
								</span>
							</div>
						</div>
					</div>
					<div className="flex w-[312px] shrink-0 flex-col gap-[20px] mt-[100px]">
						<ImageBlock
							imgUrl={reviewsImg5}
							className="w-full h-[326px]"
							alt="one"
						/>
						<div className="flex gap-[9px] items-center">
							<div className="bg-[#FFAB4A] text-white flex justify-center items-center rounded-[50%] w-[33px] h-[33px]">
								Ю
							</div>
							<div className="flex flex-col ">
								<p className="font-semibold">Юлия А.</p>
								<span className="text-GRAY_400 text-[12px]">
									23.09.2024
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="flex w-[312px] shrink-0 flex-col gap-[20px] pr-[15px] lg:pr-[30px] 2xl:pr-0">
					<ImageBlock
						imgUrl={reviewsImg6}
						className="w-full h-[326px]"
						alt="one"
					/>
					<div className="flex gap-[9px] items-center">
						<div className="bg-[#FFAB4A] text-white flex justify-center items-center rounded-[50%] w-[33px] h-[33px]">
							Н
						</div>
						<div className="flex flex-col ">
							<p className="font-semibold">Никита Б.</p>
							<span className="text-GRAY_400 text-[12px]">
								17.11.2024
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
