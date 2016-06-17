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
		, takePaddings: false
	};

	settings = this.extend( defaults, params);

	window.addEventListener('scroll', function() {
		var scrollPosition = window.pageYOffset || document.documentElement.scrollTop
			, elementHeight = settings.takePaddings ? settings.element.clientHeight : 0
			, containerOffset = settings.container.offsetTop
			, containerTopPadding = settings.takePaddings ? Math.round(parseInt(getComputedStyle(settings.container).paddingTop)) : 0
			, containerBotPadding = settings.takePaddings ? Math.round(parseInt(getComputedStyle(settings.container).paddingBottom)) : 0
			, containerOutHeight = settings.container.offsetHeight
			, startPoint = containerOffset + containerTopPadding
			, endPoint = containerOffset + containerOutHeight - elementHeight - containerBotPadding
			, parallaxValue = scrollPosition - containerOffset - containerTopPadding;

			// console.log(containerTopPadding);

		
		if(scrollPosition >= startPoint && scrollPosition <= endPoint){
			settings.element.style.transform = "translateY(" + Math.round(parallaxValue/settings.speed) + settings.units +")";
			settings.element.style["-webkit-transform"] = "translateY(" +Math.round( parallaxValue/settings.speed) + settings.units +")";
			console.log(scrollPosition);
			return;
		}

		if(scrollPosition < startPoint){
			settings.element.style.transform = "translateY(" + 0 + settings.units +")";
			settings.element.style["-webkit-transform"] = "translateY(" + 0 + settings.units +")";
			// console.log(settings.element + ' scroll end');
			return;
		}

	});


}

