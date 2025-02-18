import Image from 'next/image'
import Script from 'next/script'

export const Metrika = () => {
	return (
		<>
			{/* 			<Script id="GoogleAnalyticsTracking"> */}
			{/* 				{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': */}
			{/* new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], */}
			{/* j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= */}
			{/* 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); */}
			{/* })(window,document,'script','dataLayer','GTM-WM9NMMJC'); */}
			{/* `} */}
			{/* 			</Script> */}
			{/* 			<noscript> */}
			{/* 				<iframe */}
			{/* 					src="https://www.googletagmanager.com/ns.html?id=GTM-WM9NMMJC" */}
			{/* 					height="0" */}
			{/* 					width="0" */}
			{/* 					style={{ display: 'none', visibility: 'hidden' }} */}
			{/* 				></iframe> */}
			{/* 			</noscript> */}
			{/**/}
			<Script id="YandexAnalyticsTracking" type="text/javascript">
				{`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(98660635, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
`}
			</Script>
			<noscript>
				<div>
					<Image
						loading="lazy"
						src="https://mc.yandex.ru/watch/98660635"
						className="position:absolute; left:-9999px;"
						alt=""
					/>
				</div>
			</noscript>
		</>
	)
}
