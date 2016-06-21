'use strict';
var addClass = function (element, className) {
	if (element.classList)
		element.classList.add(className);
	else
		element.className += ' ' + className;
};

var removeClass = function (element, className) {
	if (element.classList)
		element.classList.remove(className);
	else
		element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
};

var toggleClass = function (element, className) {

	if (element.classList) {
		element.classList.toggle(className);
	} else {
		var classes = element.className.split(' ');
		var existingIndex = classes.indexOf(className);

		if (existingIndex >= 0)
			classes.splice(existingIndex, 1);
		else
		classes.push(className);

		element.className = classes.join(' ');
	}
};

var closest = function (el, selector) {
	var matchesFn;

	['matches','webkitMatchesSelector','mozMatchesSelector','msMatchesSelector','oMatchesSelector'].some(function(fn) {
		if (typeof document.body[fn] == 'function') {
			matchesFn = fn;
			return true;
		}
		return false;
	});

	var parent;

	// traverse parents
	while (el) {
		parent = el.parentElement;
		if (parent && parent[matchesFn](selector) || el.className && new RegExp("(\\s|^)" + selector.replace('.', '') + "(\\s|$)").test(el.className)) {
			return parent;
		}
		el = parent;
	}

	return null;
};

var scrollToAnchor = function (anchorId, duration) {
	if (duration <= 0) return;

	var anchor = document.querySelector(anchorId)
		, currentLocation = window.pageYOffset
		, to = anchor.offsetTop;
	

	var difference = to - currentLocation
		, perTick = difference / duration * 5;
	
	setTimeout(function() {
		window.scrollTo(0, currentLocation + perTick);
		if (anchor.scrollTop == to) return;
		scrollToAnchor(anchorId, duration - 5);
	}, 5);
};
