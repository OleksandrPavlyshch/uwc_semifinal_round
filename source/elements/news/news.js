'use strict';
(function () {
	var $newsItems = $('.news_item'),
		feImage = 'feImage';

	$newsItems.hover(function() {
		$(this).find(feImage).animate({
			"x": "14%",
			"y": "6%",
			"width": "72%",
			"height": "88%"
		},
		{
			duration: 600,
			step: function (now, tween) {
				$(this).attr(tween.prop, now + "%");
			}
		});
	},
	function() {
		$(this).find(feImage).animate({
			"x": "50%",
			"y": "50%",
			"width": "0%",
			"height": "0%"
		},{
			duration: 600,
			step: function (now, tween) {
				$(this).attr(tween.prop, now + "%");
			}
		});
	});
})();