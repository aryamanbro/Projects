let player = {
  name: "Shamit",
  chips: 290,
};
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message");
let sumEl = document.getElementById("sum");
let cardsEl = document.getElementById("cards");
let playerEl = document.getElementById("player");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let num = Math.floor(Math.random() * 13) + 1;
  if (num === 1) {
    return 1;
  } else if (num > 10) {
    return 10;
  } else {
    return num;
  }
}

function startgame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  rendergame();
}

function rendergame() {
  cardsEl.textContent = "Cards:";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "SUM: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got a Blackjack!";
    hasBlackjack = true;
  } else {
    message = "You're out of the game";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newcard() {
  if (isAlive === true && hasBlackjack === false) {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    rendergame();
  }
}
