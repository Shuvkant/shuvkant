"use strict";

/*console.log(displayMessage);
document.querySelector('.message').textContent = 'Correct Number!🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//making function for maths handler
const Mathshandler = function () {
  Math.trunc(Math.random() * 20 + 1);
};
let secretNumber = Mathshandler;
let score = 20;
let highScore = 0;

//making the function for displaying message content
const displayMessage = function (message) {
  document.querySelector(".message").textContent = "message";
};

//making the function for displaying secret number
const displaySecretnumber = function (number) {
  document.querySelector(".number").textContent = number;
};

//making the function for displaying score
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    displayMessage("⛔️ No n umber!");
  } //when player wins
  else if (guess === secretNumber) {
    displayMessage("Correct Number!🎉");
    displaySecretnumber(secretNumber);
    // document.querySelector('.number').textContent = secretNumber;

    //changing the background when the guess is right
    document.querySelector("body").style.backgroundColor = "#60b347";

    //changing the widht when the guess is right
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } //when the guess is different
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage = guess > secretNumber ? "📈 Too high!" : "📉Too Low!";
      score--;
      // document.querySelector('.score').textContent = score;
      displayScore(score);
    } else {
      displayMessage = "🚨 You lost the game.";
      // document.querySelector('.score').textContent = 0;
      displayScore(0);
    }
  }

  //When the guess is too high
  //  else if (guess > secretNumber) {
  //   if (score > 1) {
  //     displayMessage = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //    displayMessage = '🚨 You lost the game.';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //When the guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     displayMessage = '📉Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     displayMessage = '🚨 You lost the game.';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Mathshandler;

  displayMessage = "Start guessing...";
  // displayMessage('Start guessing...');
  displayScore(score);
  // document.querySelector('.score').textContent = score;
  displaySecretnumber("?");
  // document.querySelector('.number').textContent = '?';
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
