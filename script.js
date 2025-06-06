function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
function getHumanchoice() {
  let humanchoice = prompt("Enter rock, paper, or scissors:").toLowerCase();
  return humanchoice;
}
let humanscore = 0;
let computerscore = 0;
function playRound(humanchoice, computerChoice) {
  if (humanchoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanchoice === "rock" && computerChoice === "scissors") ||
    (humanchoice === "paper" && computerChoice === "rock") ||
    (humanchoice === "scissors" && computerChoice === "paper")
  ) {
    humanscore++;
    return `You win! ${humanchoice} beats ${computerChoice}.`;
  } else {
    computerscore++;
    return `You lose! ${computerChoice} beats ${humanchoice}.`;
  }
}
function playGame() {
  for (let i = 0; i < 5; i++) {
    const computerChoice = getComputerChoice();
    const humanchoice = getHumanchoice();
    const result = playRound(humanchoice, computerChoice);
    console.log(result);
    console.log(`Score: You ${humanscore} - Computer ${computerscore}`);
  }
  if (humanscore > computerscore) {
    console.log("Congratulations! You win the game!");
  } else if (humanscore < computerscore) {
    console.log("Sorry! You lose the game.");
  } else {
    console.log("It's a tie overall!");
  }
}
playGame();
