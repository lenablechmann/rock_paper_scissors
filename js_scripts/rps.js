const btn = document.querySelectorAll('button');
btn.forEach((button) => {
  button.addEventListener('click', () => {
    userSelection = parseInt(button.id);
    // should call a function that will replace the image according to player selection
    console.log("Player chose: " + userSelection);
    computerSelection = parseInt(computerPlay());
    // should call a function that will replace the image according to computer selection
    console.log("Computer chose: " + computerSelection);
    result = playRound(userSelection, computerSelection);
    // refactor play round + let it call a more generic function like play 5 rounds
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