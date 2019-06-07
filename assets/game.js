
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let wins = 0;
let losses = 0;
let guessesLeft = 9;
let usersGuess = [];
let computerGuess = [];



let letterChosen = letters[Math.floor(Math.random() * letters.length)];
	
computerGuess.push(letterChosen);
console.log("THIS IS THE ANSWER", computerGuess[0]);



document.onkeyup = function (event) {
	const keyPess = event.key;
	usersGuess.push(keyPess);
	console.log("THIS IS MY GUESS", usersGuess);



	if (keyPess === computerGuess[0] && guessesLeft > 0) {
		wins++;
		guessesLeft = 9;
		usersGuess.length = 0;
		computerGuess = [];
		letterChosen = letters[Math.floor(Math.random() * letters.length)];
		computerGuess.push(letterChosen);
		console.log(computerGuess[0]);
	}

	else if ((usersGuess !== computerGuess[0]) && (guessesLeft > 0)) {
		guessesLeft = guessesLeft - 1;
	}

	else {
		losses++;
		guessesLeft = 9;
		usersGuess.length = 0;
		computerGuess = [letters[Math.floor(Math.random() * letters.length)]];
		computerGuess.push(letterChosen);
		console.log(computerGuess[0]);
	}
	let html = "<p>Guess what letter I'm thinking of!</p>" +
		"<p>Wins: " + wins + "</p>" +
		"<p>Losses: " + losses + "</p>" +
		"<p>Guesses left: " + guessesLeft + "</p>" +
		"<p>Your guesses so far: " + usersGuess + "</p>";

	document.querySelector("#game").innerHTML = html;

}
