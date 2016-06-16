'use strict';

function scrollParallax(params) {
	

	this.extend = function (a, b){
		for(var key in b)
			if(b.hasOwnProperty(key))
				a[key] = b[key];
		return a;
	};

	var settings;

	var defaults = {
		speed: 1
		, units: 'px'
		, container: null
		, element: null
	};

	settings = this.extend( defaults, params);

	window.addEventListener('scroll', function() {
		// console.log(settings);
		var scrollPosition = window.pageYOffset || document.documentElement.scrollTop
			, elementHeight = settings.element.clientHeight
			, containerOffset = settings.container.offsetTop
			, containerTopPadding = parseInt(getComputedStyle(settings.container).paddingTop)
			, containerBotPadding = parseInt(getComputedStyle(settings.container).paddingBottom)
			, containerOutHeight = settings.container.offsetHeight
			, startPoint = containerOffset
			, endPoint = containerOffset + containerOutHeight
			, parallaxValue = scrollPosition-containerOffset;

		
		if(scrollPosition >= startPoint && scrollPosition <= endPoint){
			settings.element.style.transform = "translateY(" + parallaxValue/settings.speed + settings.units +")";
			settings.element.style["-webkit-transform"] = "translateY(" + parallaxValue/settings.speed + settings.units +")";
			console.log(settings.element + ' scroll');
			return;
		}

		if(scrollPosition < startPoint){
			settings.element.style.transform = "translateY(" + 0 + settings.units +")";
			settings.element.style["-webkit-transform"] = "translateY(" + 0 + settings.units +")";
			console.log(settings.element + ' scroll end');
			return;
		}

	});


}

