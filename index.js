let userName = prompt ('Please, enter your name', 'User');

// alert (`Hello ${userName}`);

let gameUser = prompt ('Rock, Scissors, Paper... Please make your move');

// alert (`${gameUser}`);

let gameArray = ['rock', 'scissors', 'paper']; 

function randomNumber (numMin, numMax) {
  return Math.floor(Math.random() * (numMax - numMin) + numMin)
}

// alert (gameArray [randomNumber (0, 3)]);

let user = gameUser;
let com = gameArray [randomNumber (0, 3)];

if (user === 'rock' && com === 'scissors' || user === 'scissors' && com === 'paper' || user === 'paper' && com === 'rock') {
  alert ("Ты победил!!!")
} else {
  alert ("ты проиграл!!!")
}
alert (com)
alert (user)
