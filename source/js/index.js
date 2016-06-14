'use strict';
(function () {
	var $body = $('body'),
		$htmlBody = $('html, body'),
		$scrollLinks = $('.scroll-to'),
		$newsItems = $('.news_item'),
		feImage = 'feImage',
		$preloader = $('.preloader'),
		$menuButton = $('.menu_button'),
		menuShowClass = 'menu-show',
		menuClass = '.menu_nav, .menu_button',
		scrollClass = 'is-scroll',
		newCollectionHeader = document.querySelector('.new-collection_header'),
		newCollectionBlock = document.querySelector('#new_collection'),
		headerBgBlock = document.querySelector('.header-bg'),
		headerBlock = document.querySelector("header"),
		mustHaveBlock = document.querySelector('#must_have'),
		mustHaveHeader = document.querySelector('.must-have_header'),
		mustHaveFirstHalfBlock = document.querySelector('.must-have_first-half'),
		mustHaveSecondHalfBlock = document.querySelector('.must-have_second-half'),
		mostWantedHeader = document.querySelector('.most-wanted_header'),
		mostWantedBlock = document.querySelector('#most_wanted'),
		saleHeader = document.querySelector('.sale_header'),
		saleBlock = document.querySelector('#sale'),
		saleBgBlock = document.querySelector('.sale_bg');

	var onDomReady = function function_name () {
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

		//parallax
		var blockParalax = function (element, container, scrollPosition, blockType, speed) {
			var parallaxSpeed = speed || 1,
				elementHeight = element.clientHeight,
				containerOffset = container.offsetTop,
				containerTopPadding = parseInt(getComputedStyle(container).paddingTop),
				containerBotPadding = parseInt(getComputedStyle(container).paddingTop),
				containerOutHeight = container.offsetHeight,
				startPoint = 0,
				endPoint = 0,
				parallaxValue = 0,
				parallaxInt = "";

				if(blockType === "header"){
					var startPoint = containerOffset+containerTopPadding-30,
						endPoint = (containerOffset + containerOutHeight)-elementHeight-containerBotPadding-15,
						parallaxValue = scrollPosition-containerOffset-containerTopPadding+30,
						parallaxInt = "px";
				}

				if(blockType === "bgBlock"){
					var startPoint = containerOffset,
						endPoint = containerOffset + containerOutHeight,
						parallaxValue = scrollPosition-containerOffset,
						parallaxInt = "%";
				}

				if(scrollPosition >= startPoint && scrollPosition <= endPoint){
					element.style.transform = "translateY(" + parallaxValue/parallaxSpeed + parallaxInt +")";
					element.style["-webkit-transform"] = "translateY(" + parallaxValue/parallaxSpeed + parallaxInt +")";
					return;
				}

				if(scrollPosition < startPoint){
					element.style.transform = "translateY(" + 0 + parallaxInt +")";
					element.style["-webkit-transform"] = "translateY(" + 0 + parallaxInt +")";
					return;
				}
		};

	
		window.onscroll = function() {
			var scrollPosition = window.pageYOffset || document.documentElement.scrollTop,
				vieportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

			blockParalax(headerBgBlock, headerBlock, scrollPosition,"bgBlock", 30);
			blockParalax(newCollectionHeader, newCollectionBlock, scrollPosition, "header");
			blockParalax(mustHaveHeader, mustHaveBlock, scrollPosition, "header");
			blockParalax(mustHaveFirstHalfBlock, mustHaveBlock, scrollPosition,"bgBlock", 7);
			blockParalax(mustHaveSecondHalfBlock, mustHaveBlock, scrollPosition,"bgBlock", 20);
			blockParalax(mostWantedHeader, mostWantedBlock, scrollPosition, "header");
			blockParalax(saleHeader, saleBlock, scrollPosition, "header");
			blockParalax(saleBgBlock, saleBlock, scrollPosition,"bgBlock", 30);

			if(scrollPosition >= vieportHeight/2){
				$body.addClass(scrollClass);
			}else{
				$body.removeClass(scrollClass);
			}
		};


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

		//fade-preloader
		$preloader.delay(6000).fadeOut(1500);
	};



	onDomReady();

})();