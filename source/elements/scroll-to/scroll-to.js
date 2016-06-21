'use strict';
(function () {
	var scrollLinks = document.querySelector('.scroll-to');


	scrollLinks.addEventListener('click', function (event) {
		event.preventDefault();
		var anchorId = event.target.getAttribute('href');
		scrollToAnchor(anchorId, 600);
	});


})();