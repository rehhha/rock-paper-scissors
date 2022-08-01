function getComputerChoice() {
  let possibilities = ["rock","paper","scissors"];
  let computerChoice = possibilities[Math.floor(Math.random() * possibilities.length)];
  console.log(computerChoice);
  return computerChoice;
}

function getUserChoice() {

  const weapons = document.querySelectorAll('.weapon');

  
  weapons.forEach((weapon) => {

    weapon.addEventListener('click', () => {
      console.log(weapon.id);
      game(weapon.id);
      return weapon.id;
    });
  });
  
  /*while(true) {
    let userInput = prompt("Rock, Paper or Scissors?")
    userInput = userInput.toLowerCase()
    if(userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        console.log(userInput)
        return userInput
    } else {
        alert("Your input must be Rock, Paper or Scissors")
    }
  }*/
}

function playRound(userChoice, computerChoice) {


  if(userChoice === "rock") {
    if(computerChoice === "paper") {
      return 'computer';
    } else if(computerChoice === 'scissors'){
      return 'user';
    }else {
        return 'draw';
    }
  } else if(userChoice === "paper") {
      if(computerChoice === "scissors") {
          return "computer";
      } else if(computerChoice === "rock") {
          return "user";
      }else {
          return 'draw';
      }
    } else {
      if(computerChoice === "rock") {
        return "computer";
      } else if(computerChoice === "paper") {
        return "user";
      } else {
        return 'draw';
      }
  }
}

function writeResults(userScore, computerScr) {

  const playerScore = document.querySelector('#player-score');
  const computerScore = document.querySelector('#computer-score');

  playerScore.textContent = `${userScore}`;
  computerScore.textContent = `${computerScr}`;

  /*alert("Final scores are: " +
  "\nUser Score: " + userScore +
  "\nComputer Score: " + computerScore)*/
    
}

function getPlayerScore() {
  const playerScore = document.querySelector('#player-score');

  return parseInt(playerScore.textContent);
}

function getComputerScore() {
  const computerScore = document.querySelector('#computer-score');

  return parseInt(computerScore.textContent);
}

function game(weapon) {
  let userScore = getPlayerScore(),
  computerScr = getComputerScore();

  if(userScore === 5 || computerScr === 5) {
    writeResults(userScore, computerScr);
    declareWinner(userScore, computerScr);
    return;
  }
  let winner = playRound(weapon, getComputerChoice());

  if(winner === "user") {
    userScore++;
  } else if(winner === "computer") {
      computerScr++;
  } 

  writeResults(userScore, computerScr);




  

  

    /*alert("Round " + (i+1) + 
    "\nUser Score: " + userScore +
    "\nComputer Score: " + computerScore)
    
    let winner = playRound(getUserChoice(), getComputerChoice())

    if(winner === "user") {
      userScore++
    } else if(winner === "computer") {
        computerScore++
    }     
    

    writeFinalResults()*/
}

function declareWinner(userScore, computerScr){

  const content = document.querySelector('.content');
  const header = document.querySelector('.header');
  const header1 = document.querySelector('h1');


  removeAllChildNodes(content);

  if(userScore > computerScr) {
    header1.textContent = 'You won!';


  } else {
    header1.textContent = 'You lost!';
  }

  const finalScore = document.createElement('h2');
  finalScore.textContent = `Final score was ${userScore} - ${computerScr}`;
  finalScore.style.alignSelf = 'center';
  content.appendChild(finalScore);

  const playAgain = document.createElement('button');
  playAgain.style.alignSelf = 'center';
  playAgain.textContent = 'Play Again';
  content.appendChild(playAgain);

  playAgain.addEventListener('click', () => {
    removeAllChildNodes(content);
    removeAllChildNodes(header);
    createGame();
  })
  
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}


function createGame() {

  //adding header
  const header = document.querySelector('.header');
  const header1 = document.createElement('h1');
  header1.textContent = 'Wanna play?';

  header.appendChild(header1);

  //adding player choices div
  const content = document.querySelector('.content');
  const playerChoices = document.createElement('div');
  playerChoices.classList.add('col', 'player-choices');

  //adding header to player choices
  const playerChoicesTitle = document.createElement('h2');
  playerChoicesTitle.textContent = 'Choose your weapon!';
  playerChoicesTitle.style.alignSelf = 'center';
  playerChoices.appendChild(playerChoicesTitle);

  //div for clickable player choices
  const rps = document.createElement('div');
  rps.classList.add('row', 'rps');

  //rock div
  const rock = document.createElement('div');
  rock.classList.add('weapon');
  rock.id = 'rock';
  rock.style.backgroundImage = "url('./assets/rock.png')"

  rps.appendChild(rock);

  //paper div
  const paper = document.createElement('div');
  paper.classList.add('weapon');
  paper.id = 'paper';
  paper.style.backgroundImage = "url('./assets/paper.png')"

  rps.appendChild(paper);

  //scissors div
  const scissors = document.createElement('div');
  scissors.classList.add('weapon');
  scissors.id = 'scissors';
  scissors.style.backgroundImage = "url('./assets/scissors.png')"

  rps.appendChild(scissors);

  playerChoices.appendChild(rps);

  content.appendChild(playerChoices);

  //score div
  const score = document.createElement('div');
  score.classList.add('row', 'score');

  const playerScoreLabel = document.createElement('h3');
  playerScoreLabel.textContent = 'Your Score: ';

  score.appendChild(playerScoreLabel);

  const playerScore = document.createElement('h3');
  playerScore.id = 'player-score';
  playerScore.textContent = '0';

  score.appendChild(playerScore);

  const computerScoreLabel = document.createElement('h3');
  computerScoreLabel.textContent = 'Computer Score: ';

  score.appendChild(computerScoreLabel);

  const computerScore = document.createElement('h3');
  computerScore.id = 'computer-score';
  computerScore.textContent = '0';

  score.appendChild(computerScore);


  content.appendChild(score);

  const roundResult = document.createElement('h4');
  content.appendChild(roundResult);

  getUserChoice();

}

createGame();
