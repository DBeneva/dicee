const randomNumber1 = Math.floor(Math.random() * 6 + 1);
const firstPlayerDice = document.querySelector('.img1');
firstPlayerDice.setAttribute('src', `./images/dice${randomNumber1}.png`);

const randomNumber2 = Math.floor(Math.random() * 6 + 1);
const secondPlayerDice = document.querySelector('.img2');
secondPlayerDice.setAttribute('src', `./images/dice${randomNumber2}.png`);

const heading = document.querySelector('h1');
heading.innerHTML = randomNumber1 === randomNumber2
    ? 'Draw!'
    : `Player ${randomNumber1 > randomNumber2 ? 1 : 2} Wins!`;