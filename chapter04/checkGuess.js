window.onload = init;

function init () {
	var button = document.getElementById("button");
	button.onclick = checkGuess;
}

function checkGuess () {
	var lastNewAnswerArray = document.getElementsByClassName("newAnswer");
	if (lastNewAnswerArray.length) {
		var lastNewAnswer = lastNewAnswerArray[0];
		lastNewAnswer.setAttribute("class","oldAnswer");
	}

	var guessInput = document.getElementById("guess");
	var guess = guessInput.value;

	var answers = ["red", "green", "blue"];
	var index = Math.floor(Math.random() * answers.length);
	var answer;
	if (guess == answers[index]) {
		answer = "You're right! I was thinking of " + answers[index];
	} else {
		answer = "Sorry, I was thinking of " + answers[index];
	}
	var answerBoard = document.createElement("p");
	answerBoard.setAttribute("class","newAnswer");
	answerBoard.innerHTML = answer;
	var form = document.getElementById("form");
	form.appendChild(answerBoard);
	return answer;
}