var COMPONENT = COMPONENT || {};

COMPONENT.Masonry = (function() {
	function Masonry(options) {
		this._eventNameSpace = 'Masonry';

		this.options = {
			wrapperClass: options.wrapperClass,
			columnLen: options.columnLen,
			items: options.items
		}

		this.init();
	}

	Masonry.prototype = {
		init: function() {
			console.log('Masonry object initialised');

			var items = this.options.items;
			var wrapperClass = this.options.wrapperClass;

			for (var i=0; i<items.length; i++) {
				var colHeights = [];

				for (var j=0; j<this.options.columnLen; j++) {
					currentHeight = document.querySelectorAll(wrapperClass + ' .col' + (j+1))[0].clientHeight;

					colHeights.push(currentHeight);
				}

				var shortestCol = colHeights.indexOf(Math.min.apply(Math, colHeights));

				var box = document.createElement('div');
				box.className = 'box';
				box.style.height = items[i] + 'px';

				document.querySelectorAll(wrapperClass + ' .col' + (shortestCol + 1))[0].appendChild(box);
			}
		}
	}
	return Masonry;
})();