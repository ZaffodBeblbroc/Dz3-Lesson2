let userName = prompt ('Please, enter your name', 'User');
let UserChoice = '';
let gameArray = ['rock', 'scissors', 'paper']; 
let levay = 0;
let levayDva = 0;

alert (`Hello ${userName}`);

function primeUserChoice () {
  UserChoice = prompt ('Rock, Scissors, Paper... Please make your move');
  switch (UserChoice.toLowerCase()) {
    case 'rock':
      return UserChoice = 'rock';
    case UserChoice = 'scissors':
      return 'scissors';
    case UserChoice = 'paper':
      return 'paper';
    default:
      alert ('NE Molodec');
  }
} 

function randomNumber (numMin, numMax) {
  return Math.floor(Math.random() * (numMax - numMin) + numMin)
}

function game () {
  (primeUserChoice ());
  machineChoise = gameArray [randomNumber (0, 3)];
  alert (`Computer move is: ${machineChoise}`)
  
  if (UserChoice === 'rock' && machineChoise === 'scissors' || UserChoice === 'scissors' && machineChoise === 'paper' || UserChoice === 'paper' && machineChoise === 'rock') {
    levay++;  
  } else {  
    levayDva++;
  }
}

for (levay; levay < 3;){ 
  game();
  alert (`Ball User ${levay}` + ` Ball PC ${levayDva}`);
}
