'use strict';
(function () {
	var saleHeader = document.querySelector('.sale_header')
	, saleBlock = document.querySelector('#sale')
	, saleBgBlock = document.querySelector('.sale_bg');

	var saleHeaderParallax = new scrollParallax({
		element: saleHeader
		, container: saleBlock
		, takePaddings: true
	});

	var saleBgBlockParallax = new scrollParallax({
		element: saleBgBlock
		, container: saleBlock
		, speed: 1.2
	}); 


})();