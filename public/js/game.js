console.log("working");

var data = {},
	list = [],
	maxTime = 10000,
	currentPhrase = 0,
	gameTimer,
	timeinterval;

$.getJSON( "data/phrases.json", function( d ) {
	data = d;
	console.log(data);

	init();
});

$('#next').click(nextPhrase);

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function generateList() {
	list = [];

	data.categories.forEach(function(cat) {
		cat.elements.forEach(function(el) {
			list.push(el);
		});
	});

	shuffle(list);
	console.log(list.length);
}

function init() {
	generateList();

	gameTimer = maxTime;
	timeinterval = setInterval(lowerTimer, 1000);
	nextPhrase();
}

function nextPhrase() {
	if (gameTimer > 0) {
		var phrase = list[currentPhrase];

		$('#image').addClass('hidden').html();
		$('#phrase').html(phrase.name);

		if (phrase.src) {
			var im = $('<img src="' + phrase.src + '">');
			$('#image').html(im);
			$('#image').removeClass('hidden');
		}

		currentPhrase = currentPhrase + 1;

		if (currentPhrase >= list.length) {
			generateList();
		}
	}
}

function lowerTimer() {
	var t = gameTimer;

    gameTimer = t - 1;

    if(t <= 0){
        t = 0;
        clearInterval(timeinterval);
        console.log("game over!")
    }
}

function endRound() {
}