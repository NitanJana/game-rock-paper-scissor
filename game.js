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

function checkWin(winnerScore, winner,result,reason) {
  if (winnerScore > 4) {
    document.querySelector('.buttons').remove();
    const retryButton = document.createElement('button');
    retryButton.textContent = 'Retry';
    retryButton.classList.add("button");
    retryButton.setAttribute("onClick","window.location.reload();")
    
    const mainDiv = document.querySelector(".main");
    mainDiv.insertBefore(retryButton,document.querySelector('.score'));
    
    result.textContent = `${winner} won ${winnerScore} rounds!!!`;
    reason.textContent = "";

  }
}

function outputVisual(winner,playerSelection, computerSelection) {
  const result = document.querySelector('#result');
  const reason = document.querySelector('#reason');

  const playerScoreSpan = document.querySelector('#playerScore');
  const computerScoreSpan = document.querySelector('#computerScore');

  if (winner === 'player') {
    playerScore++;
    playerScoreSpan.textContent = playerScore;

    result.textContent = `You Won this round!`;
    reason.textContent = `${playerSelection} beats ${computerSelection}.`;

    checkWin(playerScore, winner,result,reason);
  } else if (winner === 'computer') {
    computerScore++;
    computerScoreSpan.textContent = computerScore;

    result.textContent = `You Lose this round!`;
    reason.textContent = `${computerSelection} beats ${playerSelection}.`;

    checkWin(computerScore, winner,result,reason);
  } else if (winner === 'nobody') {
      result.textContent = `You Drew this round!`;
      reason.textContent = `${playerSelection} does not beat ${computerSelection}.`;
  } else {
      result.textContent = "choose proper option between rock, paper and scissor";
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

  outputVisual(winner,playerSelection, computerSelection);
}


let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', () => playRound(button.id, getComputerChoice())));
