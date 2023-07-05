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

  // return winner;

  if (winner === 'player') {
    return (`You Won! ${playerSelection} beats ${computerSelection}.`);
  } else if (winner === 'computer') {
      return (`You Lose! ${computerSelection} beats ${playerSelection}.`);
  } else if (winner === 'nobody') {
      return (`You Drew! ${playerSelection} does not beat ${computerSelection}.`);
  } else {
      return ("choose proper option between rock, paper and scissor");
    }
}


const playerSelection = "Scissor";

const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
