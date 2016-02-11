console.log("working");

var data = {},
	list = [],
	maxTime = 180,
	currentPhrase,
	currentSpeed,
	gameTimer,
	timeinterval,
	gameStartSound = new Audio("../assets/sounds/templebell.mp3");

$.getJSON( "assets/phrases.json", function( d ) {
	data = d;
	console.log(data);

	init();
});

$('#next').click(nextPhrase);

$('#gameover button').click(init);

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
	currentPhrase = 0;
	currentSpeed = 1;

	timeinterval = setTimeout(lowerTimer, 1000);

	$('#game').removeClass('hidden');
	$('#gameover').addClass('hidden');
	$('header').removeClass('hidden');
	gameStartSound.play();
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
		currentSpeed = currentSpeed + 1;

		if (currentPhrase >= list.length) {
			generateList();
		}
	}
}

function lowerTimer() {
    gameTimer = gameTimer - 1;

    if(gameTimer <= 0){
        gameTimer = 0;
        clearInterval(timeinterval);
        console.log("game over!")
        endRound();
        
    } else {
    	setTimeout(lowerTimer, 1000 - currentSpeed * 20);
    }

    console.log(gameTimer);
    $('.category').html(gameTimer);
} 

function endRound() {
	$('#game').addClass('hidden');
	$('#gameover').removeClass('hidden');
	$('header').addClass('hidden');
}