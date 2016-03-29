(function() {
	var app = {
		values: {
			items: [200, 100, 200, 200, 100, 100, 100, 200, 200, 200, 200, 100, 100, 100, 100, 100, 100, 200, 300, 400, 600, 100, 200, 300, 200, 200]
		},
		init: function() {
			console.log('init');

			this.loadMasonry();
		},
		loadMasonry: function() {
			var items = this.values.items;
			this.shuffle(items);

			console.log(items);

			for (var i=0; i<items.length; i++) {

				var colHeights = [];

				for (var j=0; j<3; j++) {
					currentHeight = $('.col' + (j+1)).height();

					colHeights.push(currentHeight);
				}

				console.log('heights', colHeights);

				shortestCol = colHeights.indexOf(Math.min.apply(Math, colHeights));

				$('.col' + (shortestCol + 1)).append('<div class="box" style="height:'+items[i]+'px"></div>');
			}
		},
		shuffle: function(a) {
			var j, x, i;
		   for (i = a.length; i; i -= 1) {
		       j = Math.floor(Math.random() * i);
		       x = a[i - 1];
		       a[i - 1] = a[j];
		       a[j] = x;
		   }
		}
	}

	app.init();

})();




