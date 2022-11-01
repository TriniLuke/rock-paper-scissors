//Computer makes a choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

// Player makes a choice
function getPlayerChoice() {
    const playerChoice = prompt("Rock, Paper or Scissors...");
    const choice = playerChoice.toLowerCase();
    return choice;
}

//Plays one round of the game
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
        return "It's a tie";
      } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose! Paper beats Rock';
      } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats Scissors';
      } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose! Scissors beats Paper';
      } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats Rock';
      } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose! Rock beats Scissors';
      } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats Paper';
      }
    
}

//Plays 5 rounds of the game and tally the score
function game() {
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        const result = playRound(getPlayerChoice(), getComputerChoice());
        console.log(result);

        if (result.includes("win")) {
            playerScore++;
            console.log(`Computer: ${computerScore} | Player: ${playerScore}`);
          } else if (result.includes("lose")) {
            computerScore++;
            console.log(`Computer: ${computerScore} | Player: ${playerScore}`);
          }
          
        }
        console.log(
            "Final Results: Player: " + playerScore + " Computer: " + computerScore
          );
          if (playerScore > computerScore) {
            console.log("You win the game!");
          } else if (playerScore < computerScore) {
            console.log("You lose the game.");
          } else {
            console.log("The game was an overall tie.");
          }
      }
      
      
game();