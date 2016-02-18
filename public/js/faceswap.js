var first_start = ["Bri", "We", "Law", "Har", "Da", "An", "Tay", "Ro", "Kev", "Jen", "Le", "Li", "No", "Dev"]
    first_end  = ["tt", "n", "rence", "een", "ve", "die", "lor", "b", "in", "ny", "ah", "sa", "ah", "in"],
    last_start = ["Ander", "Xio", "Humph", "God", "Hub", "Yo", "Lam", "Will", "Ya", "Lan", "Deme", "Vu", "Laff", "O'Bry"],
    last_end   = ["son", "ng", "rey", "thi", "er", "ung", "pe", "iams", "ng", "ier", "ter", "ong", "erty", "an"];

var sliderSettings = {
	item: 4,
	loop: true,
	controls: false,
	pager: false,
    onBeforeSlide: resetTimer,
	responsive: [
		{
            breakpoint:1100,
            settings: {
                item:2
            }
        },
        {
            breakpoint:600,
            settings: {
                item:1
          	}	
        }
	]
}

var shuffleTimer = setTimeout(shuffle, 3000);

var sliderTop = $('#top-slider').lightSlider(sliderSettings);
var sliderBot = $('#bottom-slider').lightSlider(sliderSettings);

function shuffle() {
	sliderTop.goToSlide(Math.floor(Math.random() * 9));
	sliderBot.goToSlide(Math.floor(Math.random() * 9));
}

function resetTimer() {
    clearTimeout(shuffleTimer);
    shuffleTimer = setTimeout(shuffle, 3000);
}