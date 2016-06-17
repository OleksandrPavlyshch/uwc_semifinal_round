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