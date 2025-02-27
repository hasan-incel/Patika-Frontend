// Dice images for different faces
const diceImages = [
  "dice1.png",
  "dice2.png",
  "dice3.png",
  "dice4.png",
  "dice5.png",
  "dice6.png",
];

// DOM Elements
const rollButton = document.getElementById("rollButton");
const resultDisplay = document.getElementById("result");
const player1Dice = document.getElementById("player1-dice");
const player2Dice = document.getElementById("player2-dice");
const player1Name = document.getElementById("player1-name");
const usernameInput = document.getElementById("username");

// Roll dice function
function rollDice() {
  // Roll dice for both players
  let player1Roll = Math.floor(Math.random() * 6) + 1;
  let player2Roll = Math.floor(Math.random() * 6) + 1;

  // Start animation of changing dice faces
  animateDiceRoll(player1Dice, player2Dice);

  // After 3 seconds, show the results
  setTimeout(() => {
    // Update dice images for both players based on the roll
    player1Dice.innerHTML = `<img src="images/${
      diceImages[player1Roll - 1]
    }" alt="Player 1 Dice">`;
    player2Dice.innerHTML = `<img src="images/${
      diceImages[player2Roll - 1]
    }" alt="Player 2 Dice">`;

    // Determine the result
    determineWinner(player1Roll, player2Roll);
  }, 3000);
}

// Animate the dice roll (change faces repeatedly)
function animateDiceRoll(player1Element, player2Element) {
  let counter = 0;
  let interval = setInterval(() => {
    if (counter > 10) {
      clearInterval(interval);
      return;
    }
    const randomIndex1 = Math.floor(Math.random() * 6);
    const randomIndex2 = Math.floor(Math.random() * 6);
    player1Element.innerHTML = `<img src="images/${diceImages[randomIndex1]}" alt="Player 1 Dice">`;
    player2Element.innerHTML = `<img src="images/${diceImages[randomIndex2]}" alt="Player 2 Dice">`;
    counter++;
  }, 200);
}

// Determine the winner of the round
function determineWinner(player1Roll, player2Roll) {
  if (player1Roll > player2Roll) {
    resultDisplay.textContent = `${player1Name.textContent} Wins!`;
  } else if (player1Roll < player2Roll) {
    resultDisplay.textContent = "Player 2 (PC) Wins!";
  } else {
    resultDisplay.textContent = "It's a Draw!";
  }
}

// Event listener for the roll button
rollButton.addEventListener("click", rollDice);

// Event listener for username input
usernameInput.addEventListener("input", () => {
  if (usernameInput.value.trim() !== "") {
    player1Name.textContent = usernameInput.value;
  } else {
    player1Name.textContent = "Player 1";
  }
});
