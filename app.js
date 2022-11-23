//Player and computer score variables
let playerScore = 0;
let computerScore = 0;

//DOM elements for pushing content
const body = document.querySelector('body');
const container = document.createElement('div');
const img = document.createElement('img');
const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');
const result = document.createElement('p');
const resultHolder = document.createElement('div');
const buttonHolder = document.createElement('div');
const scoreHolder = document.createElement('div');
const finResult = document.createElement('h2');
const pScore = document.createElement('p');
const cScore = document.createElement('p');

buttonHolder.classList.add('selections');
scoreHolder.classList.add('scores');
resultHolder.classList.add('result');
rock.classList.add('rock');
paper.classList.add('rock');
scissors.classList.add('rock');
container.setAttribute('id', 'container');

rock.textContent = 'ROCK';
paper.textContent = 'PAPER';
scissors.textContent = 'SCISSORS';

body.append(container);
container.appendChild(scoreHolder);
container.appendChild(resultHolder);
container.appendChild(buttonHolder);
buttonHolder.appendChild(rock);
buttonHolder.appendChild(paper);
buttonHolder.appendChild(scissors);
resultHolder.appendChild(result);
resultHolder.appendChild(img);
scoreHolder.appendChild(pScore);
scoreHolder.appendChild(cScore);

//Styling of elements
body.style.backgroundColor = 'black';

container.style.backgroundColor = 'gray';
container.style.margin = 'auto';
container.style.width = '700px';
container.style.height = '95vh';
container.style.borderRadius = '10px';
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.gap = '5px';
container.style.padding = '5px';

rock.style.backgroundImage = "url('images/rock.png')";
rock.style.width = '240px';
rock.style.height = '240px';
rock.style.fontSize = '2rem';
rock.style.border = 'black solid 5px';
rock.style.borderRadius = '10px';
rock.style.fontWeight = '800';

paper.style.backgroundImage = "url('images/paper.png')";
paper.style.width = '240px';
paper.style.height = '240px';
paper.style.fontSize = '2rem';
paper.style.border = 'black solid 5px';
paper.style.borderRadius = '10px';
paper.style.fontWeight = '800';

scissors.style.backgroundImage = "url('images/scissors.png')";
scissors.style.width = '240px';
scissors.style.height = '240px';
scissors.style.fontSize = '2rem';
scissors.style.border = 'black solid 5px';
scissors.style.borderRadius = '10px';
scissors.style.fontWeight = '800';

buttonHolder.style.display = 'flex';
buttonHolder.style.width = '690px';
buttonHolder.style.gap = '5px';
buttonHolder.style.alignSelf = 'end';
buttonHolder.style.borderRadius = '10px';

resultHolder.style.backgroundColor = 'black';
resultHolder.style.alignSelf = 'center';
resultHolder.style.alignItems = 'center';
resultHolder.style.margin = 'auto';
resultHolder.style.borderRadius = '10px';
resultHolder.style.padding = '5px';

result.style.color = 'white'
result.style.display = 'flex';
result.style.width = '400px';
result.style.height = '30px';
result.style.textAlign = 'center';
result.style.fontSize = '1.5rem';
result.style.fontFamily = 'cursive';

img.style.width = '200px;';
img.style.height = '200px';
img.style.display = 'flex';
img.style.margin = 'auto';
img.style.padding = '5px';

scoreHolder.style.display = 'flex';
scoreHolder.style.alignSelf = 'start';
scoreHolder.style.height = '15px';
scoreHolder.style.width = '100%';
scoreHolder.style.padding = '5px';

pScore.style.color = 'red';
pScore.style.fontWeight = '900';
pScore.style.fontFamily = 'Verdana';
pScore.style.fontSize = '1.2rem';
pScore.style.marginRight = 'auto';

cScore.style.color = 'darkblue';
cScore.style.fontWeight = '900';
cScore.style.fontFamily = 'Verdana';
cScore.style.fontSize = '1.2rem';

finResult.style.color = 'white';

//Computer makes a choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

//Plays one round of the game
function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        result.textContent = "It's a tie";
      } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++
        result.textContent = 'You lose! Paper beats Rock';
        img.src = 'images/paper.png';
      } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        result.textContent = 'You win! Rock beats Scissors';
        img.src = 'images/rock.png';
      } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++
        result.textContent = 'You lose! Scissors beats Paper';
        img.src = 'images/scissors.png';
      } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        result.textContent = 'You win! Paper beats Rock';
        img.src = 'images/paper.png';
      } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++
        result.textContent = 'You lose! Rock beats Scissors';
        img.src = 'images/rock.png';
      } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        result.textContent = 'You win! Scissors beats Paper';
        img.src = 'images/scissors.png';
      }
    
}

//Calls a new game from start
const newGame = () => {
    playerScore = 0;
    computerScore = 0;
    resultHolder.appendChild(result);
    resultHolder.appendChild(img);
}

//Checks for a game winner after 5 rounds
const checkWinner = (playerScore, computerScore) => {
  if (playerScore === 5) {
    finResult.textContent = `YOU WON ${playerScore} TO ${computerScore}!`;
    resultHolder.removeChild(result);
    resultHolder.removeChild(img);
    resultHolder.append(finResult);
  
    newGame();
  }
  if (computerScore === 5) {
    finResult.textContent = `YOU LOST ${computerScore} TO ${playerScore}!`;
    resultHolder.removeChild(result);
    resultHolder.removeChild(img);
    resultHolder.append(finResult);
  
    newGame();
   }
  pScore.textContent = `Player Score: ${playerScore}`;
  cScore.textContent = `Computer Score: ${computerScore}`;
}

//Button controller for user choices
rock.addEventListener('click', () => {
    playerSelection = 'rock';
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    checkWinner(playerScore, computerScore);
})
paper.addEventListener('click', () => {
  playerSelection = 'paper';
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  checkWinner(playerScore, computerScore);
})
scissors.addEventListener('click', () => {
  playerSelection = 'scissors';
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  checkWinner(playerScore, computerScore);
})