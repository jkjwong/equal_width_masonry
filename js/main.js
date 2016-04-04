var SITE_COMPONENTS = {};

(function() {
	var items = [200, 100, 200, 200, 100, 100, 100, 200, 200, 200, 
		200, 100, 100, 100, 100, 100, 100, 200, 300, 400, 600, 100, 
		200, 300, 200, 200];

	SITE_COMPONENTS.masonry = new COMPONENT.Masonry({
		wrapperClass: '.wrapper',
		columnLen: 3,
		items: shuffle(items)
	});

	function shuffle(a) {
		var j, x, i;
		for (i = a.length; i; i -= 1) {
		   j = Math.floor(Math.random() * i);
		   x = a[i - 1];
		   a[i - 1] = a[j];
		   a[j] = x;
		}

		return a;
	}

})();
