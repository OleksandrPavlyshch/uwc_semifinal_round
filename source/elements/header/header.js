'use strict';
(function () {
	var headerBgBlock = document.querySelector('.header-bg')
	, headerBlock = document.querySelector("header")

	var headerBgBlockParallax = new scrollParallax({
		element: headerBgBlock
		, container: headerBlock
		, speed: 1
	}); 
})();