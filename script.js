'use strict';

let sectrtNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayGuessMessage = function(message) {
  document.querySelector('.guess-message').textContent = message;
}

const eventHandler = function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  if (!guessingNumber) {
    displayGuessMessage('enter num');
  } else if (guessingNumber === sectrtNum) {
    displayGuessMessage('Yeap');
    document.querySelector('.question').textContent = sectrtNum;
    document.querySelector('body').style.background = 'green';
    document.querySelector('.question').style.width = '50rem';
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }
  }
    else if (guessingNumber !== sectrtNum) {
      if (score > 1) {
        displayGuessMessage(guessingNumber > sectrtNum ? 'More than num' : 'Low than num');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayGuessMessage('game over');
        document.querySelector('.score').textContent = 0;
      }
    }
};
const eventRandom = function () {
  document.querySelector('.question').textContent = '???';
  displayGuessMessage('Начни угадывать');
  document.querySelector('body').style.background = '#000000';
  document.querySelector('.question').style.width = '25rem';
  score = 20;
  document.querySelector('.score').textContent = score;
  sectrtNum = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number-input').value = '';
};



document.querySelector('.check').addEventListener('click', eventHandler);
document.querySelector('.again').addEventListener('click', eventRandom);
