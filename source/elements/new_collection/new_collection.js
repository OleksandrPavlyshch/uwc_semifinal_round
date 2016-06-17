'use strict';
(function () {
	var newCollectionHeader = document.querySelector('.new-collection_header')
	, newCollectionBlock = document.querySelector('#new_collection');

	
	var newCollectionHeaderParallax = new scrollParallax({
		element: newCollectionHeader
		, container: newCollectionBlock
		, takePaddings: true
	}); 

})();