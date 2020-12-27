function user_play(){
    // get user input via prompt function user_play, turn it to lower case (not case sensitive)
    let user_text = prompt("Enter either 'rock' 'paper' or 'scissors'").toLowerCase();

    // Parse user input into 1(rock), 2(paper), 3 (scissors)
    // return that number
    if (user_text.localeCompare("rock") === 0)
    {
        console.log("user chose rock");
        return 1;
    }
    else if (user_text.localeCompare("paper") === 0)
    {
        console.log("user chose paper");
        return 2;
    }
    else if (user_text.localeCompare("scissors") === 0)
    {
        console.log("user chose scissors");
        return 3;
    }
    else {
        console.log("user chose the void");
        return 0;
    }
}

    // write a function computer_play
function computer_play() {
    // that randomly selects rock, paper, scissors for the computer.
    // this computerPlay function will return its result as an int (from 1 to 3)
    return (Math.floor(Math.random()*3) + 1);
}

// write a function that plays a single round of RPS playRound()
/*function play_round() {
// which will take 2 parameters: player_selection and computer_selection
// it shall return a string like "You Lose! Paper beats Rock."
}
*/
function play_RPS() {
    // write another function, that will play 5 rounds, 
    // keeps score and reports the overall winner at the end
    let user_selection = user_play();
    console.log("User Int is " + user_selection);
    let computer_selection = computer_play();
    console.log("Computer Int is " + computer_selection);
}