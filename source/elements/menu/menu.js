'use strict';
(function () {
	var scrollClass = 'is-scroll'
	, body = document.querySelector('body')
	, menuButton = document.querySelector('.menu_button')
	, menuShowClass = 'menu-show'
	, menuClass = '.menu_nav';

	window.addEventListener('scroll', function() {
		var scrollPosition = window.pageYOffset || document.documentElement.scrollTop,
			vieportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

		if(scrollPosition >= vieportHeight/2){
			addClass(body, scrollClass);
		}else{
			removeClass(body, scrollClass);
		}
	});
	
	//menu-show
	menuButton.addEventListener('click', function(){
		toggleClass(body, menuShowClass);
	});

	window.addEventListener('click', function (event) {
		if(closest(event.target, menuClass))
			return;
		removeClass(body, menuShowClass);
		event.stopPropagation();
	});

})();