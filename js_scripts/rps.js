const btn = document.querySelectorAll('button');

btn.forEach((button) => {
  button.addEventListener('click', () => {
    userSelection = parseInt(button.id);
    // should call a function that will replace the image according to player selection
    showPlayerSelection(userSelection);
    console.log("Player chose: " + userSelection);
    computerSelection = parseInt(computerPlay());
    showComputerSelection(computerSelection);
    // should call a function that will replace the image according to computer selection
    // showComputerSelection(computerSelection)
    console.log("Computer chose: " + computerSelection);
    // should call a play many rounds function playSeveralRounds(userSelection, computerSelection)
    result = playRound(userSelection, computerSelection);
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