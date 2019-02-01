//Global Variables
var dogCelebs = ['Woof Blitzer', 'Bark Cuban', 'Mick Wagger', 'Julio Bones', 'Alex Ofetchkin', 'Jason Beagle', 'Hillary Ruff', 'Pet Farvre', 'Waggie Gyllenhall'];
var wins = 0;
var losses = 0;
var wordSplit = [];
var guessesLeft = 8;
var gamehud = [];
var wrongGuesses = [];
var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var gamehud = [];
var lettersRemaining = 0;
var wordIndex = [];

function startGame(event) {

	lettersRemaining = 0;
	var randomWord = dogCelebs[Math.floor(Math.random() * dogCelebs.length)];
	guessesLeft = 8;
	wrongGuesses = [];
	gamehud=[];

	// Split / underscores
	wordSplit = randomWord.split('');
	wordSplit = dogCelebs[Math.floor(Math.random() * dogCelebs.length)];
	wordSplit = wordSplit.replace(/\s/g, '');
	wordSplit = wordSplit.toUpperCase();
	wordSplit = wordSplit.split('')

	for (i in wordSplit) {
		gamehud.push("_");
		lettersRemaining++;
	};

	//Guess Word
	document.getElementById("gamehud").innerHTML = gamehud.join(' ');
	// Letters Guessed
	document.getElementById('wrongGuesses').innerHTML = wrongGuesses;
	//Guesses Remaining
	document.getElementById('guessesLeft').innerHTML = guessesLeft;
	// Wins
	document.getElementById('wins').innerHTML = wins;
	// Losses
	document.getElementById('losses').innerHTML = losses;
};

function checkLetter(letter) {
	// check if letter, check if not number, check if guessed
	// call guessWord function
	var letterGuessed = String.fromCharCode(event.keyCode).toUpperCase();
	var letterInWord = false;

	if (alphabet.indexOf(letterGuessed) === -1) {
		alert('That is not a letter');
		return;
	};
	if (wrongGuesses.indexOf(letterGuessed) !== -1) {
	alert('You already guessed that letter')
	} else {
		wrongGuesses.push(letterGuessed);
		guessWord();
	};

	function guessWord(letter) {
	// check to see if in word
	// update variables as necessary (remove guess remaining and add to heads up display)
		if (wordSplit.indexOf(letterGuessed) === -1) {
			document.getElementById('wrongGuesses').innerHTML = wrongGuesses;
			guessesLeft--;
			document.getElementById('guessesLeft').innerHTML = guessesLeft;
		} else {
			letterInWord = true;
		};
		if (letterInWord = true) {
				// document.getElementById('wrongGuesses').innerHTML = wrongGuesses;
			for (var i = 0; i < wordSplit.length; i++) {
				if (wordSplit[i] === letterGuessed) {
					gamehud[i] = letterGuessed;
					document.getElementById("gamehud").innerHTML = gamehud.join(' ');
					lettersRemaining--;
					console.log(gamehud);
					console.log(letterGuessed);
				};
			};
		};
	};
};

function checkWin(event) {
	if (guessesLeft === 0) {
		alert('You lose. Your defeat will be etched in the annals of history and your great, great, great, grandchildren will be ashamed of your existence until you are inevitably forgotten.');
		losses++;
		alert("Your word was" + random)

		document.getElementById('losses').innerHTML=losses;
		var playAgain = confirm('Would you like to play again?');

		if (playAgain == true) {
			startGame();
		}	else {
			alert("Fine, I don't want you playing my game anyway. I put a lot of work into this you know. I honestly hope your butt falls off.")
			console.log(losses)
			document.getElementById('losses');
		};
	};
	if (lettersRemaining === 0) {
		wins++;
		document.getElementById('wins').innerHTML=wins;
		alert('You win!');
		var playAgain = confirm('Would you like to play again?');

		if (playAgain == true) {
			startGame();
		} else {
			alert("Fine, I don't want you playing my game anyway. I put a lot of work into this you know. I honestly hope your butt falls off.")
			document.getElementById('wins');
			console.log(wins);
		};
	};
};

function playGame (event) {
	checkLetter();
	checkWin();
};

startGame();
document.onkeyup = function (event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toUpperCase();
	playGame();
};