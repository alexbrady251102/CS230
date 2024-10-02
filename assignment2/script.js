
//declaring necessary variables first
const startButton = document.querySelector("#start");
const myScore = document.querySelector("#myscore");
const highScore = document.querySelector("#highscore");
const indicator = document.querySelector("#indicator");
const greenButton = document.querySelector("#buttonGreen");
const redButton = document.querySelector("#buttonRed");
const yellowButton = document.querySelector("#buttonYellow");
const blueButton = document.querySelector("#buttonBlue");
const controlPanel = document.querySelector("#controlPanel")


let gameColours = []; //colours flashed for player to click
let playerColours = []; //colours that player clicked - length of this will be score
let playerScore = 0;
let prevScores = []; //holds all the previous scores achieved
let highestScore = 0; //obtained by cycling through prev score array
let gameEnd = true;
let playerTurn;
let gameTurn;
let rightMove;
let start = false;
let win = false;
let intervalID;
let round=1;
let numOfFlash;

//eventlistener made for clicking the start button
startButton.addEventListener('click', (event) => {
  if (indicator.style.background != 'green'){
    indicator.style.background = 'green';
    start=true;
   setTimeout(() =>{playGame();}, 3000) //use setTimeout(() => {playGame();}, 3000);
  }else{
    indicator.style.background = 'red';
    start=false;
    resetColours();
    clearInterval(intervalID);
  }
});

function playGame() {
  gameColours = [];
  playerColours = [];
  win = false;
  rightMove = true; // no bad moves made yet as game hasn't begun
  gameEnd=false;
  round = 1;
  numOfFlash=0;

 
  for(var i =0; i<99; i++){
    gameColours.push(Math.floor(Math.random() * 4) + 1);
  }

  gameTurn=true;
  intervalID = setInterval(gameStarts, 100); 
}

function gameStarts() {
    start = false; // player cant make move
  if(numOfFlash==round) { //if flashes are equal to number of rounds it means games turn is over
    clearInterval(intervalID);
    gameTurn=false;
    start=true;
    resetColours();
  }

  //check if games turn
  if(gameTurn){
    resetColours();
    setTimeout(()=>{
      if(gameColours[numOfFlash]==1) flashGreen();
      if(gameColours[numOfFlash]==2) flashRed();
      if(gameColours[numOfFlash]==3) flashYellow();
      if(gameColours[numOfFlash]==4) flashBlue();
    }, 300);
  }
}

function flashGreen(){  greenButton.style.background='lightgreen';
}

function flashRed(){  redButton.style.background='tomato';
}

function flashYellow(){  yellowButton.style.background='#FFDB58';
}

function flashBlue(){  blueButton.style.background='#FFDB58';
}

function resetColours(){
  greenButton.style.background='#50EBEC';
}

