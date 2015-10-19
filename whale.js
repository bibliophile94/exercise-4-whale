jQuery(document).ready(function($) {
    function update() {
		jQuery(document).ready(function($) {
		var num = parseInt(location.hash.substr(1));
		console.log(num);
		if (isNaN(num)) {
			num = 0;
		}
		$.get('/whale/txt/' + num + '.txt', function(txt)) {
			$('a').html(txt);
			$('a').attr('href', '#' + (num + 1));
		});
		});
	}
	update();
	window.addEventListener('hashchange', update, false);
});