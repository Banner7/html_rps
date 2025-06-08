const choices = ["rock", "paper", "scissors"];
const result = document.getElementById("result");
const humanRounddisplay = document.getElementById("humanchoice");
const computerRounddisplay = document.getElementById("computerchoice");
const humanscore = document.getElementById("humanScore");
const computerscore = document.getElementById("computerScore");
const roundSelect = document.getElementById("select");
let round = roundSelect.value;
roundSelect.addEventListener("change", (event) => {
  round = event.target.value;
});

// addEventListener("change",(event)=>())
//rounds?
//one round
function playround(Humanchoice) {
  humanRounddisplay.innerHTML = Humanchoice.toUpperCase();
  const computerchoice = choices[Math.floor(Math.random() * 3)];
  computerRounddisplay.innerHTML = computerchoice.toUpperCase();
  const rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
  let Roundresult = "";

  if (computerchoice === Humanchoice) {
    return "Tie";
  } else if (computerchoice === rules[Humanchoice]) {
    return "Human won!";
  } else {
    return "Computer won!";
  }
  result.innerHTML = Roundresult;
}
// function loopingrounds(round) {
//   let humancurrentscore = 0, computercurrentscore = 0;
//   for (let i = 0; i < round; i++) {
//     if (Roundresult === "Human won!"&& humancurrentscore<(Math.ceil(round)) ) {
//       humancurrentscore++;
//     }
//     else if (Roundresult === "Computer won!" && computercurrentscore<(Math.ceil(round)) ){
//       computercurrentscore++;
//     }
