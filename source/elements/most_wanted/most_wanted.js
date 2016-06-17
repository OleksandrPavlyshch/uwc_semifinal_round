'use strict';
(function () {
	var mostWantedHeader = document.querySelector('.most-wanted_header')
		, mostWantedBlock = document.querySelector('#most_wanted')


	var mostWantedHeaderParallax = new scrollParallax({
		element: mostWantedHeader
		, container: mostWantedBlock
	});

})();