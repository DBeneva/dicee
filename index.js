const randomNumber1 = Math.floor(Math.random() * 6 + 1);
const firstPlayerDice = document.querySelector('.img1');
firstPlayerDice.setAttribute('src', `./images/dice${randomNumber1}.png`);

const randomNumber2 = Math.floor(Math.random() * 6 + 1);
const secondPlayerDice = document.querySelector('.img2');
secondPlayerDice.setAttribute('src', `./images/dice${randomNumber2}.png`);

const heading = document.querySelector('h1');

if (randomNumber1 > randomNumber2) {
    heading.innerHTML = `🚩 Player 1 Wins!`;
} else if (randomNumber2 > randomNumber1) {
    heading.innerHTML = `Player 2 Wins! 🚩`;
} else {
    heading.innerHTML = 'Draw!';
}