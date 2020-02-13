document.addEventListener("DOMContentLoaded", function() {

	$('.bxSlider').bxSlider({
		speed : 1000,
		easing: 'ease',
		infiniteLoop: true,
		auto: true,
		pause: 10000,
		controls: false,
			
		
	});

	$('.registration__item_a').on('click', function(){
		$('.popup-window-wrap').fadeIn();
		$(function($){
			$(document).mouseup(function (e){ // событие клика по веб-документу
				var div = $(".popup-window-content"); // тут указываем ID элемента
				if (!div.is(e.target) // если клик был не по нашему блоку
					&& div.has(e.target).length === 0) { // и не по его дочерним элементам
					$('.popup-window-wrap').fadeOut(); // скрываем его

				}
			});
		});
	});

	$('.popup-close-icon').on('click' ,function(){
		$('.popup-window-wrap').fadeOut();
	});

	$('.slider__content-open-button').on('click', function(){
		$('.slider-content-wrap').toggleClass('closed opened');
		$('.open-button-img').toggleClass('rotate-180');
		$('.slider-content-wrap').slideToggle();
		
	});

	$('.hamburger').on('click', function(){
		$('.hamburger').toggleClass('is-active');
		$('.nav__menu_small').slideToggle();
	});



	$(".menu__submenu").hide(); // скрываем выпадающее меню
	$(".menu__item_li_azienda").hover( function(){
  $(".menu__submenu").stop().fadeToggle(300);
}); /* отбираем элемент списка, который содержит элемент с классом .submenu и добавляем ему функцию при наведении, которая показывает и скрывает выпадающее меню */

// Динамическое изменение высоты блоков при ресайзе окна

window.onresize = function(event) {
	$('.slider').removeClass('h-100vh');
	$('.slider').addClass('h-100vh');
};

});
