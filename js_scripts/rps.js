function user_play(){
    // get user input via prompt function user_play, turn it to lower case (not case sensitive)
    let user_text = prompt("Enter either 'rock' 'paper' or 'scissors'").toLowerCase();

    // Parse user input into 0(rock), 1(paper), 2 (scissors)
    // return that number
    (user_text.localeCompare("rock") === 0) ? console.log("user chose rock") :
    (user_text.localeCompare("paper") === 0) ? console.log("user chose paper") :
    (user_text.localeCompare("scissors") === 0) ? console.log("user chose scissors") : console.log("user chose unknown.");


}

// write a function computer_play
// that randomly selects rock, paper, scissors for the computer.
// this computerPlay function will return its result as an int


// write a function that plays a single round of RPS playRound()
// which will take 2 parameters: player_selection and computer_selection
// it shall return a string like "You Lose! Paper beats Rock."

// write another function, that will play 5 rounds, 
// keeps score and reports the overall winner at the end