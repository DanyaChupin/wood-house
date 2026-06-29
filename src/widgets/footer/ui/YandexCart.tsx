'use client'


export default function YandexCart() {
	return (
		<iframe
			id="yandex-map"
			loading="lazy"
			title="yandex-map"
			src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=143261160280"
			className={`w-full h-[326px] rounded-card-sm`}
		></iframe>
	)
}
