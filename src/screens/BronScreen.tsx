import Script from 'next/script'

export function BronScreen() {
	return (
		<main
			id="sliderScreen"
			className="mb-[150px] lg:mb-[180px] 2xl:mb-[200px] transition-[transform, opacity] closeLeft duration-500"
		>
			<Script
				id="connect_bnovo"
				async
				src="https://widget.reservationsteps.ru/iframe/library/dist/booking_iframe.js"
			></Script>
			<h1 className="flex justify-center w-full text-[72px]">
				BronScreen
			</h1>
			<div className="flex w-full gap-[20px]">
				<div className="w-[80%] h-[500px] bg-black" />
				<div className="w-[20%] bg-black" />
			</div>
			<div className="flex w-full gap-[20px] mt-[20px]">
				<div className="w-[60%] h-[300px] bg-black" />
				<div className="w-[40%] bg-black" />
			</div>

			<div id="booking_iframe" className="relative pb-[30px]">
				<div
					id="bn_iframe"
					className="font-[Proxima nova,Helvetica Neue, Cera Pro Medium, Arial, Helvetica, sans-serif] relative right-0 bottom-0 text-[12px] leading-[1em] opacity-[0.5] z-10 mt-[10px]"
				>
					<div className="!text-[#1403fc] !bg-[rgba(0, 0, 0, 0)]">
						<a
							className="!text-[#808080] !bg-[#fff]"
							href="https://bnovo.ru/bnovo-mb/?utm_source=client_modul_br"
							id="bnovo_link"
							target="_blank"
						>
							Система управления отелем Bnovo ©
						</a>
					</div>
				</div>
			</div>

			<Script id="bnovo" type="text/javascript">
				{`
(function () {
var BnovoBookFrame = new BookingIframe({
html_id: "booking_iframe",
uid: "156c880f-c885-4975-95b2-81e1efcbad31",
lang: "ru",
width: "auto",
height: "auto",
rooms: "",			
IsMobile: "0",
scroll_to_rooms: "0",
});
BnovoBookFrame.init();
})();

`}
			</Script>
		</main>
	)
}
