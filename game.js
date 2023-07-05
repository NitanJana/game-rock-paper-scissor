function getComputerChoice() {
  const randomNumber = (Math.floor(Math.random() * 3));

  /* 0 returns rock,
   1 returns paper,
   2 returns scissor
  */
  
  if (randomNumber === 0) {
    return ("rock");
  } else if (randomNumber === 1) {
    return ("paper");
  } else {
    return ("scissor");
  }
}

function playRound(playerSelection, computerSelection) {
  let winner = '';
  
  /* case insensitivity */

  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  /* logic for choices being same */

  if (playerSelection === computerSelection) {
    winner = 'nobody';
  }

  /* logic for choices being different */
  if (playerSelection === 'rock') {
    if (computerSelection === 'scissor') {
      winner = 'player';
    } else if (computerSelection === 'paper') {
      winner = 'computer';
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      winner = 'player';
    } else if (computerSelection === 'scissor') {
      winner = 'computer';
    } 
  } else if (playerSelection === 'scissor') {
    if (computerSelection === 'paper') {
      winner = 'player';
    } else if (computerSelection === 'rock') {
        winner = 'computer';
    } 
  }

  /* output */

  
  if (winner === 'player') {
    console.log(`You Won this round! ${playerSelection} beats ${computerSelection}.`);
  } else if (winner === 'computer') {
      console.log(`You Lose this round! ${computerSelection} beats ${playerSelection}.`);
  } else if (winner === 'nobody') {
      console.log(`You Drew this round! ${playerSelection} does not beat ${computerSelection}.`);
  } else {
      console.log("choose proper option between rock, paper and scissor");
    }
  
  return winner;
}

function game(MAX_ROUND_NUMBER) {
  for (let i = 0; i < MAX_ROUND_NUMBER; i++) {
    const playerSelection = prompt("Choose rock/paper/scissor");
    console.log(`You chose ${playerSelection}`);
    const computerSelection = getComputerChoice();
    console.log(`Computer chose ${computerSelection}`);

    let roundWinner = playRound(playerSelection, computerSelection);
    if (roundWinner === 'player') {
      score++;
    }
  }

  console.log(`Your score is: ${score}`);

}


let score = 0;
const MAX_ROUND_NUMBER = 5;

game(MAX_ROUND_NUMBER);
