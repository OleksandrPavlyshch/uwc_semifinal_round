'use strict';
(function () {
	var mustHaveBlock = document.querySelector('#must_have')
		, mustHaveHeader = document.querySelector('.must-have_header')
		, mustHaveFirstHalfBlock = document.querySelector('.must-have_first-half')
		, mustHaveSecondHalfBlock = document.querySelector('.must-have_second-half');

	var mustHaveHeaderParallax = new scrollParallax({
		element: mustHaveHeader
		, container: mustHaveBlock
		, takePaddings: true
	});

	var mustHaveFirstHalfBlockParallax = new scrollParallax({
		element: mustHaveFirstHalfBlock
		, container: mustHaveBlock
		, speed: 1.4
	});

	var mustHaveSecondHalfBlockParallax = new scrollParallax({
		element: mustHaveSecondHalfBlock
		, container: mustHaveBlock
		, speed: 3
	});

})();