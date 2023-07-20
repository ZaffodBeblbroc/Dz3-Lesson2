let userName = prompt ('Please, enter your name', 'User');

alert (`Hello ${userName}`);

function qwe() {
  return prompt ('Rock, Scissors, Paper... Please make your move');
}


let i = 0;

function tif () {
  while (i < 1) {
    switch (qwe()) {
      case 'rock':
        alert ('Molodec');
        i++;
        return 'rock';
      case 'scissors':
        alert ('Molodec2');
        i++;
        return 'scissors';
      default:
        alert ('NE Molodec');
    }
  }
}

// alert (tif())

let gameArray = ['rock', 'scissors', 'paper']; 

function randomNumber (numMin, numMax) {
  return Math.floor(Math.random() * (numMax - numMin) + numMin)
}

let com = gameArray [randomNumber (0, 3)];

alert (com + ' выбрал комп')
// alert (tif() + ' выбрал я')

if (tif() === 'rock' && com === 'scissors' || tif() === 'scissors' && com === 'paper' || tif() === 'paper' && com === 'rock') {
  alert ("Ты победил!!!")
} else {
  alert ("ты проиграл!!!")
}


