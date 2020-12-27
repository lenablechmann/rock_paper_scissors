function user_play() {
  // get user input via prompt function user_play, not case sensitive
  let user_text = prompt("Enter either 'rock' 'paper' or 'scissors'").toLowerCase();

  // Parse user input into 1(rock), 2(paper), 3 (scissors)
  if (user_text.localeCompare("rock") === 0) {
    return 1;
  } else if (user_text.localeCompare("paper") === 0) {
    return 2;
  } else if (user_text.localeCompare("scissors") === 0) {
    return 3;
  } else {
    return 0;
  }
}

function computer_play() {
  // function that randomly selects rock-1, paper-2, scissors-3 for the computer.
  return Math.floor(Math.random() * 3) + 1;
}

function play_round(player_selection, computer_selection) {

  // rock(1) always beats scissors (3), paper(2) beats rock(1), scissors(3) beat paper (2)
  if (player_selection === computer_selection) {
    console.log("It's a draw.");
    return 0;
  } else if (player_selection > computer_selection) {
    console.log("You win.");
    return 1;
  } else if (player_selection === 1 && computer_selection === 3) {
    console.log("You win.");
    return 1;
  } else {
    console.log("You lose.");
    return 2;
  }
}
function play_RPS() {
  // variables for function calls:
  let user_selection, computer_selection;
  // variables for scores:
  let user_score = 0, computer_score = 0, who_won;

  // play 5 rounds, keep score and report the overall score at the end
  for (let count = 0; count < 5; count++) {
    user_selection = user_play();
    console.log("User Int is " + user_selection);
    computer_selection = computer_play();
    console.log("Computer Int is " + computer_selection);
    who_won = play_round(user_selection, computer_selection);
    switch (who_won) {
      case 1:
        user_score++;
        break;
      case 2:
        computer_score++;
        break;
      default:
        break;
    }
    ;
  }
  console.log(
    `The final score is: You ${user_score} :: ${computer_score} Computer.`
  );
}
