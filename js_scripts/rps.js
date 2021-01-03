
let userScore = 0, computerScore = 0, result; 

const btn = document.querySelectorAll('button');

btn.forEach((button) => {
  button.addEventListener('click', () => {
      let userSelection = parseInt(button.id);
      showPlayerSelection(userSelection);

      let computerSelection = parseInt(computerPlay());
      showComputerSelection(computerSelection);

      result = playRound(userSelection, computerSelection);

      displayRoundResult(result);
        switch (result) {
          case 1:
            userScore++;
            break;
          case 2:
            computerScore++;
            break;
          default:
            break;
        }
        // call function that changes score to the current
      displayScores(userScore, computerScore);
  });
});

function computerPlay() {
  // function that randomly selects rock-1, paper-2, scissors-3 for the computer.
  return Math.floor(Math.random() * 3) + 1;
}

function playRound(playerSelection, computerSelection) {
  // rock(1) always beats scissors (3), paper(2) beats rock(1), scissors(3) beat paper (2)
  if (playerSelection === computerSelection) {
    console.log("It's a draw.");
    return 0;
  } else if (playerSelection > computerSelection) {
    console.log("You win.");
    return 1;
  } else if (playerSelection === 1 && computerSelection === 3) {
    console.log("You win.");
    return 1;
  } else {
    console.log("You lose.");
    return 2;
  }
}

function showPlayerSelection(userSelection) {
  // changes the user image choice
switch (userSelection) {
  case 1:
    document.getElementById('player-choice').src='/images/rock.png'
    break;
  case 2:
    document.getElementById('player-choice').src='/images/paper.png'
    break;
  case 3:
    document.getElementById('player-choice').src='/images/scissors.png'
    break;
  default:
    break
  }
}

function showComputerSelection(computerSelection) {
  // changes the computer image choice
switch (computerSelection) {
  case 1:
    document.getElementById('computer-choice').src='/images/rockR.png'
    break;
  case 2:
    document.getElementById('computer-choice').src='/images/paperR.png'
    break;
  case 3:
    document.getElementById('computer-choice').src='/images/scissorsR.png'
    break;
  default:
    break
  }
}

function displayRoundResult(result){
  heading = document.querySelector("#result > h2")
  switch (result) {
    case 0:
      heading.textContent = "It's a draw."
      break;
    case 1:
      heading.textContent = "You win."
      break;
    case 2:
      heading.textContent = "You lose."
      break;
  }
}

function displayScores(userScore, computerScore) {
  score = document.querySelector(".score > h2")
  score.textContent = `${userScore} : ${computerScore}`;
}