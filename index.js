let userName = prompt ('Please, enter your name', 'User');
let userChoice = '';
let gameArray = ['rock', 'scissors', 'paper']; 
let userScore = 0;
let computerScore = 0;


function primeUserChoice () {
  userChoice = prompt ('Rock, Scissors, Paper... Please make your move');
  if (userChoice == null) {
    alert ('You aborted this game. To start new game just refresh the page.');
  } 
  switch (userChoice.toLowerCase()) {
  case 'rock':
    return userChoice = 'rock';
  case userChoice = 'scissors':
    return 'scissors';
  case userChoice = 'paper':
    return 'paper';
  default:
    primeUserChoice();
  }
} 

function randomNumber (numMin, numMax) {
  return Math.floor(Math.random() * (numMax - numMin) + numMin);
}

function game () {
  (primeUserChoice ());
  machineChoise = gameArray [randomNumber (0, 3)];
  alert (`Computer move is: ${machineChoise}`)

  if (userChoice === 'rock' && machineChoise === 'rock' || userChoice === 'scissors' && machineChoise === 'scissors' || userChoice === 'paper' && machineChoise === 'paper') {
    game();
  } else if (userChoice === 'rock' && machineChoise === 'scissors' || userChoice === 'scissors' && machineChoise === 'paper' || userChoice === 'paper' && machineChoise === 'rock') {
    userScore++;     
    alert (`You won this round: Current count is ${userName}: ${userScore}: Computer ${computerScore}`);
  } else {  
    computerScore++;
    alert (`Computer won this round: Current count is ${userName}: ${userScore}: Computer ${computerScore}`);
  }
}

for (let i = 0; i < 1;) {  
if (userScore === 3) {
    alert (`Congratulations. You won this game. Count - You: ${userScore} : Computer ${computerScore}`);
    i++;
  } else if ( computerScore === 3) {
    alert (`Sorry. You lost this game. Count - You: ${userScore} : Computer ${computerScore}`);
    i++;
  } else {
    game();
  }
}

let newGame = confirm ('Do you want to start new game?');
if (newGame) {
  location.reload();
}