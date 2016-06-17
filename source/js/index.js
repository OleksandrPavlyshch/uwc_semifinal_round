'use strict';
(function () {
	var $body = $('body'),
		$htmlBody = $('html, body'),
		$scrollLinks = $('.scroll-to'),
		$newsItems = $('.news_item'),
		feImage = 'feImage',

		$menuButton = $('.menu_button'),
		menuShowClass = 'menu-show',
		menuClass = '.menu_nav, .menu_button',
		scrollClass = 'is-scroll';

	var onDomReady = function () {


		$newsItems.hover(function() {
			$(this).find(feImage).animate({
				"x": "14%",
				"y": "6%",
				"width": "72%",
				"height": "88%"
			},
			{
				duration: 600,
				step: function (now, tween) {
					$(this).attr(tween.prop, now + "%");
				}
			});
		},
		function() {
			$(this).find(feImage).animate({
				"x": "50%",
				"y": "50%",
				"width": "0%",
				"height": "0%"
			},{
				duration: 600,
				step: function (now, tween) {
					$(this).attr(tween.prop, now + "%");
				}
			});
		});


		//skroll-to
		$scrollLinks.on('click', function(event) {
			event.preventDefault();

			var $this = $(this),
				link = $this.attr("href"),
				section = $body.find(link);

			if(section.length){
				$htmlBody.animate({scrollTop: section.offset().top}, 1000);
				return;
			}
		});


		//menu-show
		$menuButton.on('click', function() {
			$body.toggleClass(menuShowClass);
		});

		$(document).click( function(event){
			if( $(event.target).closest(menuClass).length )
				return;
			$body.removeClass(menuShowClass);
			event.stopPropagation();
		});



	};



	onDomReady();

})();