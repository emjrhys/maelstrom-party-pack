var sliderSettings = {
	item: 4,
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

var sliderTop = $('#top-slider').lightSlider(sliderSettings);

var sliderBot = $('#bottom-slider').lightSlider(sliderSettings);

function shuffle() {
	sliderTop.goToSlide(Math.floor(Math.random() * 9));
	sliderBot.goToSlide(Math.floor(Math.random() * 9));
}