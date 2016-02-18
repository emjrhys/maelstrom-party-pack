var sliderSettings = {
	item: 3,
	loop: true,
	controls: false,
	pager: false,
	responsive: [
		{
            breakpoint:1100,
            settings: {
                item:2
            }
        },
        {
            breakpoint:700,
            settings: {
                item:1
          	}	
        }
	]
}

var top = $('#top-slider').lightSlider(sliderSettings);

var bottom = $('#bottom-slider').lightSlider(sliderSettings);

// top.goToSlide(Math.floor(Math.random() * 9));
// bottom.goToSlide(Math.floor(Math.random() * 9));