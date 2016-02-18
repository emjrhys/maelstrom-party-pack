var top = $('#top-slider').lightSlider({
	items: 2,
	loop: true,
	controls: false,
	pager: false
});

var bottom = $('#bottom-slider').lightSlider({
	items: 2,
	loop: true,
	controls: false,
	pager: false
});

top.goToSlide(Math.floor(Math.random() * 9));
bottom.goToSlide(Math.floor(Math.random() * 9));