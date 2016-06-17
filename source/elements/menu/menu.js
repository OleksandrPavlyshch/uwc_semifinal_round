'use strict';
(function () {
	var scrollClass = 'is-scroll',
	body = document.querySelector('body');

	window.addEventListener('scroll', function() {
		var scrollPosition = window.pageYOffset || document.documentElement.scrollTop,
			vieportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

		if(scrollPosition >= vieportHeight/2){
			addClass(body, scrollClass);
		}else{
			removeClass(body, scrollClass);
		}
	});
})();