let compChoices = ["rock", "paper", "scissors"];
const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");
const user = document.querySelector(".user");
const comp = document.querySelector(".comp");
let compChoice;
const whoWin = document.querySelector(".result");

const setImage = function (element, image) {
  //change user image in dynamic way)
  element.style.backgroundImage = `url('${image}.png')`;
  element.style.backgroundSize = "contain";
};

const detWinner = function (userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a Tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You Win!";
  } else {
    return "You lose!";
  }
};

function getCompChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  compChoice = compChoices[randomNumber];
  return compChoice;
}

btnRock.addEventListener("click", function () {
  setImage(user, "rock");
  getCompChoice();
  setImage(comp, compChoice);
  whoWin.textContent = detWinner("rock", compChoice);
});

btnPaper.addEventListener("click", function () {
  setImage(user, "paper");
  getCompChoice();
  setImage(comp, compChoice);
  whoWin.textContent = detWinner("paper", compChoice);
});

btnScissors.addEventListener("click", function () {
  setImage(user, "scissors");
  getCompChoice();
  setImage(comp, compChoice);
  whoWin.textContent = detWinner("scissors", compChoice);
});
