let life = 10;
let bestResult = 0;
let secretNumber = Math.floor(Math.random() * 20) + 1;

const changeUserText = function (text) {
  document.querySelector('.start-message').textContent = text;
};

const changeUserLife = function () {
  life--;
  document.querySelector('.score-life').textContent = life;
};

const gameStart = function () {
  const userInput = Number(document.querySelector('.user-input').value);
  if (!userInput) {
    changeUserText('Введіть число!');
  } else if (userInput !== secretNumber) {
    changeUserText(
      userInput < secretNumber ? 'Ваше число замале' : 'Ваше число велике'
    );
    let backColor = Math.trunc((((userInput * 100) / 20) * 255) / 100);
    document.querySelector(
      'body'
    ).style.background = `rgb(${backColor}, ${backColor}, ${backColor})`;
    if (life > 1) {
      changeUserLife();
    } else {
      changeUserLife();
      document.querySelector('.btn-check').disabled = true;
      document.querySelector('.btn-check').style.background = 'red';
      changeUserText('Ви програли :(');
    }
  } else if (userInput === secretNumber) {
    changeUserText('Ви вгадали :)');
    document.querySelector('.btn-check').disabled = true;
    document.querySelector('.btn-check').style.background = 'green';
    document.querySelector(
      '.secretNumber'
    ).textContent = `Загадане число ${secretNumber}`;
    if (bestResult < life) {
      bestResult = life;
      document.querySelector('.best-score').textContent = bestResult;
    }
    document.querySelector('.user-input').value = '';
  }
};

const gameReStart = function () {
  document.querySelector('body').style.background = 'rgb(0, 0, 0)';
  changeUserText('Почни вгадувати!');
  life = 10;
  document.querySelector('.score-life').textContent = life;
  document.querySelector('.btn-check').disabled = false;
  document.querySelector('.btn-check').style.background = 'rgb(173, 216,246)';
  document.querySelector('.secretNumber').textContent = 'Вгадай число!';
  secretNumber = Math.floor(Math.random() * 20) + 1;
};

document.querySelector('.btn-check').addEventListener('click', gameStart);
document.querySelector('.btn-again').addEventListener('click', gameReStart);
