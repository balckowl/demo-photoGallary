$(function () {

	//typist.js
	$('.typist').typist({ speed: 9 }).typistAdd('美しい写真をあなたに。');

	//slider_1
	//左から右に動くスライド
	$('.slider_1').slick({
		arrows: true,
		slidesToShow: 3,
		infinite: true,
		autoplay: true,
		centerMode: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 1100, 
				settings: {
					arrows: false,
				},
			},
			{
				breakpoint: 768, 
				settings: {
					slidesToShow: 2,
					arrows: false,
				},
			},
			{
				breakpoint: 599,
				settings: {
					slidesToShow: 1,
					arrows: false,
				},
			},
		] 
	});

	//slider_2
	//右から左に動くスライド
	$('.slider_2').slick({
		arrows: true,
		slidesToShow: 3,
		infinite: true,
		autoplay: true,
		centerMode: true,
		autoplaySpeed: 3000,
		rtl: true,
		responsive: [
			{
				breakpoint: 1100, 
				settings: {
					arrows: false,
				},
			},
			{
				breakpoint: 768, 
				settings: {
					slidesToShow: 2,
					arrows: false,
				},
			},
			{
				breakpoint: 599, 
				settings: {
					slidesToShow: 1,
					arrows: false,
				},
			},
		] 
	});

	//inveiw.js
	$(".js-fadeUp").on("inview", function () {
		$(this).addClass("is-inview");
	});

});


const { createApp } = Vue

createApp({
	data() {
		return {
			message: 'Hello Vue!',
			isActive: false,
		}
	},
	watch: {
		isActive: function (prev, next) {
			console.log(`prev:${prev}`)
			console.log(`next:${next}`)
		}
	},
	methods: {
		onClick: function () {
			console.log('Yes')
		}
	},
}).mount('#app')

