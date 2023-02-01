
function initialsnakedatafunc()
 {
 if(localStorage.getItem('sspeed')==undefined)
 {
 sspeed=localStorage.setItem('sspeed',12);
 }
 else
 {
 sspeed=localStorage.getItem('sspeed');
 }
 
 if(localStorage.getItem('scolor')==undefined)
 {
 scolor=localStorage.setItem('scolor',JSON.stringify('white'));
 }
 else
 {
 scolor=JSON.parse(localStorage.getItem('scolor'));
 }
 
 if(localStorage.getItem('teleport')==undefined)
 {
 teleport=localStorage.setItem('teleport',0);
 }
 else
 {
 teleport=localStorage.getItem('teleport');
 }
 
 if(localStorage.getItem('bgcode')==undefined)
 {
 bgcode=localStorage.setItem('bgcode',3);
 }
 else
 {
 bgcode=localStorage.getItem('bgcode');
 }
 
 if(localStorage.getItem('foodcode')==undefined)
 {
 foodcode=localStorage.setItem('foodcode',1);
 }
 else
 {
 foodcode=localStorage.getItem('foodcode');
 }
 
 if(localStorage.getItem('saudio')==undefined)
 {
 saudio=localStorage.setItem('saudio',1);
 }
 else
 {
 saudio=localStorage.getItem('saudio');
 }
 }
initialsnakedatafunc();
sspeedcheck();
scolorcheck();
telecheck();
bgcodecheck();
foodcodecheck();
saudiocheck();

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var grid = 16;
var count = 0;
var scores=0;
var foodtext="🍎";

Appleaudio=new Audio('apple.mp3');
goveraudio=new Audio('snakegover.wav');

var snake = {
  x: 240,
  y: 288,
  
  // snake velocity. moves one grid length every frame in either the x or y direction
  dx: grid,
  dy: 0,
  
  // keep track of all grids the snake body occupies
  cells: [],
  
  // length of the snake. grows when eating an apple
  maxCells: 4
};
var apple = {
  x: 0,
  y: 0
};
 apple.x = getRandomInt(0, 50) * grid;
 apple.y = getRandomInt(0, 37) * grid;

// get random whole numbers in a specific range
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function loop() {
  
  requestAnimationFrame(loop);
  // slow game loop to 15 fps instead of 60 (60/15 = 4)
  if (++count < sspeed) {
    return;
  }
  count = 0;
  context.clearRect(0,0,canvas.width,canvas.height);
  // move snake by it's velocity
  snake.x += snake.dx;
  snake.y += snake.dy;
  
  // wrap snake position horizontally on edge of screen
  if (snake.x < 0 || snake.x >= canvas.width) {
      if(teleport==1)
	   teleport1();
      else
       gameover();
  }
  
  // wrap snake position vertically on edge of screen
  if (snake.y < 0 || snake.y >= canvas.height) {
	  if(teleport==1)
	   teleport2();
      else
       gameover();
  }
  
  // keep track of where snake has been. front of the array is always the head
  snake.cells.unshift({x: snake.x, y: snake.y});
  // remove cells as we move away from them
  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }
  // draw apple
  context.font = "15px Arial";
  context.fillText(foodtext,apple.x-2, apple.y+13);
  context.fillStyle = 'transparent';
  context.fillRect(apple.x, apple.y, grid-1, grid-1);
  
  // draw snake one cell at a time
  context.fillStyle = JSON.parse(localStorage.getItem('scolor'));
  snake.cells.forEach(function(cell, index) {
    
    // drawing 1 px smaller than the grid creates a grid effect in the snake body so you can see how long it is
    context.fillRect(cell.x, cell.y, grid-1, grid-1);  
    // snake ate apple
    if (cell.x === apple.x && cell.y === apple.y) {
      snake.maxCells++;
	  scores++;
	  if(saudio==1)
	  {Appleaudio.play();}
	  document.getElementById('score').innerHTML=scores;
	
      // canvas is 400x400 which is 25x25 grids 
      apple.x = getRandomInt(0, 50) * grid;
      apple.y = getRandomInt(0, 37) * grid;
    }
    // check collision with all cells after this one (modified bubble sort)
    for (var i = index + 1; i < snake.cells.length; i++)
	{
      
      // snake occupies same space as a body part. reset game
      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) 
	 {gameover();
      }
    }
  }  
  );  
}
// listen to keyboard events to move the snake
document.addEventListener('keydown', function(e) {
  
  // left arrow key
  if (e.which === 37 && snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0;
  }
  // up arrow key
  else if (e.which === 38 && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  }
  // right arrow key
  else if (e.which === 39 && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  }
  // down arrow key
  else if (e.which === 40 && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }
});
	
function leftgame()
{   if (snake.dx === 0) 
    {snake.dx = -grid;
    snake.dy = 0;}
}
function rightgame()
{   if (snake.dx === 0)
    {snake.dx = grid;
    snake.dy = 0;}
}
function upgame()
{   if (snake.dy === 0)
    {snake.dx = 0;
    snake.dy = -grid;}
}
function downgame()
{   if (snake.dy === 0)
    {snake.dx = 0;
    snake.dy = grid;}
}

function startgame()
{
document.getElementById('restartgame').style.display="none";
document.getElementById('replaygame2').style.display="none";
document.getElementById('score').innerHTML=0;
scores=0;
count=0;
snake.x = 240;
snake.y = 288;
snake.cells = [];
snake.maxCells = 4;
snake.dx = grid;
snake.dy = 0;
apple.x = getRandomInt(0, 50) * grid;
apple.y = getRandomInt(0, 37) * grid;

document.getElementById('gamepaused').style.display="none";
document.getElementById('gamepaused2').style.display="none";
document.getElementById('pausegame').style.display="block";
document.getElementById('resumegame').style.display="none";

timecounter=-1;
startCount();
checkHighScore();
sspeedcheck();
scolorcheck();
telecheck();
bgcodecheck();
foodcodecheck();
saudiocheck();
}

function startgame2()
{
requestAnimationFrame(loop);
document.getElementById('snakegame').style.display="block";
document.getElementById('snakeview').style.display="none";
document.getElementById('score').innerHTML=0;
scores=0;
count=0;
snake.x = 240;
snake.y = 288;
snake.cells = [];
snake.maxCells = 4;
snake.dx = grid;
snake.dy = 0;
apple.x = getRandomInt(0, 50) * grid;
apple.y = getRandomInt(0, 37) * grid;

document.getElementById('gamepaused').style.display="none";
document.getElementById('gamepaused2').style.display="none";

timecounter=-1;
startCount();
checkHighScore();
sspeedcheck();
scolorcheck();
telecheck();
bgcodecheck();
foodcodecheck();
saudiocheck();
}

function snakehome()
{
window.location.reload();
}
function snakehomedisp()
{
document.getElementById('snakehomedisp').style.display="block";
document.getElementById('replaygame2').style.display="none";
}
function snakegameback()
{
document.getElementById('snakehomedisp').style.display="none";
}
function snakegameback2()
{
document.getElementById('replaygame2').style.display="none";
}
function replaygamedisp()
{
document.getElementById('replaygame2').style.display="block";
document.getElementById('snakehomedisp').style.display="none";
}

function gameover()
{
document.getElementById('snakehomedisp').style.display="none";
document.getElementById('replaygame2').style.display="none";

document.getElementById('gameoverscore').innerHTML="Score- "+scores;
document.getElementById('gameovertime').innerHTML="Time- "+timesnakeshow;
document.getElementById('restartgame').style.display='block';
count=-(10e+100);
if(saudio==1)
{goveraudio.play();}
stopCount();

checkHighScore(scores);
}

function pausegame()
{
count=-(10e+100);
document.getElementById('gamepaused').style.display="block";
document.getElementById('gamepaused2').style.display="block";
document.getElementById('pausegame').style.display="none";
document.getElementById('resumegame').style.display="block";
}
function resumegame()
{
count=0;
document.getElementById('gamepaused').style.display="none";
document.getElementById('gamepaused2').style.display="none";
document.getElementById('pausegame').style.display="block";
document.getElementById('resumegame').style.display="none";
}

var timecounter=-1;
var timer_on=0;
function snaketimefunc()
{
timecounter++;
snaketimeout=setTimeout(snaketimefunc,1000);
snaketimenet=timecounter;
snaketimenets=snaketimenet%60;
if(snaketimenets<10)
snaketimenets='0'+snaketimenets;
snaketimenetm=parseInt(snaketimenet/60);
if(snaketimenetm<10)
snaketimenetm='0'+snaketimenetm;
timesnakeshow=document.getElementById('timescore').innerHTML=snaketimenetm+':'+snaketimenets;
}
function startCount() 
{
if (!timer_on) 
{
timer_on=1;
snaketimefunc();
}
}
function stopCount() 
{
clearTimeout(snaketimeout);
timer_on=0;
}

const NO_OF_HIGH_SCORES = 10;
const HIGH_SCORES = 'highScoress';
function checkHighScore(score) {
  const highScoress = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
  const lowestScore = highScoress[NO_OF_HIGH_SCORES - 1]?.score ?? 0;
  
  if (score > lowestScore) {
    saveHighScore(score, highScoress); 
    showHighScores(); 
  }
}
function saveHighScore(score, highScoress) {
  if (localStorage.getItem('name2s')==undefined)
  localStorage.setItem('name2s','Type here');
  const name = prompt('You secured top 10 spot in game stats, please enter your name:',localStorage.getItem('name2s'));
  const newScore = { name, score };
  name2s=name;
  localStorage.setItem('name2s',name2s);
  highScoress.push(newScore);
  highScoress.sort((a, b) => b.score-a.score);
  highScoress.splice(NO_OF_HIGH_SCORES);
  localStorage.setItem(HIGH_SCORES, JSON.stringify(highScoress));
}
function showHighScores() {
  const highScoress = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
  const highScoreList = document.getElementById(HIGH_SCORES);
  document.getElementById('highscore').innerHTML='Highest Score- '+highScoress[0].score;
  highScoreList.innerHTML = highScoress
    .map((score) => `<li>${score.name}- ${score.score} points`)
    .join('');
}

window.onload=func()
{
showHighScores();
}

function dispsnakestats()
{
document.getElementById('dispsnakestat').style.display="block";
document.getElementById('snakeview').style.display="none";
}
function dispsnakestatsback()
{
document.getElementById('dispsnakestat').style.display="none";
document.getElementById('snakeview').style.display="block";
}

function dispsnakesettings()
{
document.getElementById('dispsnakesetting').style.display="block";
document.getElementById('snakeview').style.display="none";
}
function dispsettingsback()
{
document.getElementById('dispsnakesetting').style.display="none";
document.getElementById('snakeview').style.display="block";
}

function tss1()
{
document.getElementById('tss1').style.border="white 2px solid";
document.getElementById('tss1').style.backgroundColor="lime";
document.getElementById('tss2').style.border="black 2px solid";
document.getElementById('tss2').style.backgroundColor="green";
document.getElementById('tss3').style.border="black 2px solid";
document.getElementById('tss3').style.backgroundColor="green";
document.getElementById('tss4').style.border="black 2px solid";
document.getElementById('tss4').style.backgroundColor="green";
document.getElementById('tss5').style.border="black 2px solid";
document.getElementById('tss5').style.backgroundColor="green";
document.getElementById('tss6').style.border="black 2px solid";
document.getElementById('tss6').style.backgroundColor="green";
document.getElementById('tss7').style.border="black 2px solid";
document.getElementById('tss7').style.backgroundColor="green";
document.getElementById('tss8').style.border="black 2px solid";
document.getElementById('tss8').style.backgroundColor="green";
document.getElementById('tss9').style.border="black 2px solid";
document.getElementById('tss9').style.backgroundColor="green";
document.getElementById('tss10').style.border="black 2px solid";
document.getElementById('tss10').style.backgroundColor="green";

sspeed=12;
localStorage.setItem('sspeed',sspeed);
document.getElementById('speedscore').innerHTML="1";
}
function tss2()
{
document.getElementById('tss1').style.border="black 2px solid";
document.getElementById('tss1').style.backgroundColor="green";
document.getElementById('tss2').style.border="white 2px solid";
document.getElementById('tss2').style.backgroundColor="lime";
document.getElementById('tss3').style.border="black 2px solid";
document.getElementById('tss3').style.backgroundColor="green";
document.getElementById('tss4').style.border="black 2px solid";
document.getElementById('tss4').style.backgroundColor="green";
document.getElementById('tss5').style.border="black 2px solid";
document.getElementById('tss5').style.backgroundColor="green";
document.getElementById('tss6').style.border="black 2px solid";
document.getElementById('tss6').style.backgroundColor="green";
document.getElementById('tss7').style.border="black 2px solid";
document.getElementById('tss7').style.backgroundColor="green";
document.getElementById('tss8').style.border="black 2px solid";
document.getElementById('tss8').style.backgroundColor="green";
document.getElementById('tss9').style.border="black 2px solid";
document.getElementById('tss9').style.backgroundColor="green";
document.getElementById('tss10').style.border="black 2px solid";
document.getElementById('tss10').style.backgroundColor="green";
sspeed=11;
localStorage.setItem('sspeed',sspeed);
document.getElementById('speedscore').innerHTML="2";
}
function tss3()
{
document.getElementById('tss1').style.border="black 2px solid";
document.getElementById('tss1').style.backgroundColor="green";
document.getElementById('tss2').style.border="black 2px solid";
document.getElementById('tss2').style.backgroundColor="green";
document.getElementById('tss3').style.border="white 2px solid";
document.getElementById('tss3').style.backgroundColor="lime";
document.getElementById('tss4').style.border="black 2px solid";
document.getElementById('tss4').style.backgroundColor="green";
document.getElementById('tss5').style.border="black 2px solid";
document.getElementById('tss5').style.backgroundColor="green";
document.getElementById('tss6').style.border="black 2px solid";
document.getElementById('tss6').style.backgroundColor="green";
document.getElementById('tss7').style.border="black 2px solid";
document.getElementById('tss7').style.backgroundColor="green";
document.getElementById('tss8').style.border="black 2px solid";
document.getElementById('tss8').style.backgroundColor="green";
document.getElementById('tss9').style.border="black 2px solid";
document.getElementById('tss9').style.backgroundColor="green";
document.getElementById('tss10').style.border="black 2px solid";
document.getElementById('tss10').style.backgroundColor="green";
sspeed=10;
localStorage.setItem('sspeed',sspeed);
document.getElementById('speedscore').innerHTML="3";
}
function tss4()
{
document.getElementById('tss1').style.border="black 2px solid";
document.getElementById('tss1').style.backgroundColor="green";
document.getElementById('tss2').style.border="black 2px solid";
document.getElementById('tss2').style.backgroundColor="green";
document.getElementById('tss3').style.border="black 2px solid";
document.getElementById('tss3').style.backgroundColor="green";
document.getElementById('tss4').style.border="white 2px solid";
document.getElementById('tss4').style.backgroundColor="lime";
document.getElementById('tss5').style.border="black 2px solid";
document.getElementById('tss5').style.backgroundColor="green";
document.getElementById('tss6').style.border="black 2px solid";
document.getElementById('tss6').style.backgroundColor="green";
document.getElementById('tss7').style.border="black 2px solid";
document.getElementById('tss7').style.backgroundColor="green";
document.getElementById('tss8').style.border="black 2px solid";
document.getElementById('tss8').style.backgroundColor="green";
document.getElementById('tss9').style.border="black 2px solid";
document.getElementById('tss9').style.backgroundColor="green";
document.getElementById('tss10').style.border="black 2px solid";
document.getElementById('tss10').style.backgroundColor="green";
sspeed=9;
localStorage.setItem('sspeed',sspeed);
document.getElementById('speedscore').innerHTML="4";
}
function tss5()
{
document.getElementById('tss1').style.border="black 2px solid";
document.getElementById('tss1').style.backgroundColor="green";
document.getElementById('tss2').style.border="black 2px solid";
document.getElementById('tss2').style.backgroundColor="green";
document.getElementById('tss3').style.border="black 2px solid";
document.getElementById('tss3').style.backgroundColor="green";
document.getElementById('tss4').style.border="black 2px solid";
document.getElementById('tss4').style.backgroundColor="green";
document.getElementById('tss5').style.border="white 2px solid";
document.getElementById('tss5').style.backgroundColor="lime";
document.getElementById('tss6').style.border="black 2px solid";
document.getElementById('tss6').style.backgroundColor="green";
document.getElementById('tss7').style.border="black 2px solid";
document.getElementById('tss7').style.backgroundColor="green";
document.getElementById('tss8').style.border="black 2px solid";
document.getElementById('tss8').style.backgroundColor="green";
document.getElementById('tss9').style.border="black 2px solid";
document.getElementById('tss9').style.backgroundColor="green";
document.getElementById('tss10').style.border="black 2px solid";
document.getElementById('tss10').style.backgroundColor="green";
sspeed=8;
localStorage.setItem('sspeed',sspeed);
document.getElementById('speedscore').innerHTML="5";
}
function tss6()
{
document.getElementById('tss1').style.border="black 2px solid";
document.getElementById('tss1').style.backgroundColor="green";
document.getElementById('tss2').style.border="black 2px solid";
document.getElementById('tss2').style.backgroundColor="green";
document.getElementById('tss3').style.border="black 2px solid";
document.getElementById('tss3').style.backgroundColor="green";
document.getElementById('tss4').style.border="black 2px solid";
document.getElementById('tss4').style.backgroundColor="green";
document.getElementById('tss5').style.border="black 2px solid";
document.getElementById('tss5').style.backgroundColor="green";
document.getElementById('tss6').style.border="white 2px solid";
document.getElementById('tss6').style.backgroundColor="lime";
document.getElementById('tss7').style.border="black 2px solid";
document.getElementById('tss7').style.backgroundColor="green";
document.getElementById('tss8').style.border="black 2px solid";
document.getElementById('tss8').style.backgroundColor="green";
document.getElementById('tss9').style.border="black 2px solid";
document.getElementById('tss9').style.backgroundColor="green";
document.getElementById('tss10').style.border="black 2px solid";
document.getElementById('tss10').style.backgroundColor="green";
sspeed=7;
localStorage.setItem('sspeed',sspeed);
document.getElementById('speedscore').innerHTML="6";
}
function tss7()
{
document.getElementById('tss1').style.border="black 2px solid";
document.getElementById('tss1').style.backgroundColor="green";
document.getElementById('tss2').style.border="black 2px solid";
document.getElementById('tss2').style.backgroundColor="green";
document.getElementById('tss3').style.border="black 2px solid";
document.getElementById('tss3').style.backgroundColor="green";
document.getElementById('tss4').style.border="black 2px solid";
document.getElementById('tss4').style.backgroundColor="green";
document.getElementById('tss5').style.border="black 2px solid";
document.getElementById('tss5').style.backgroundColor="green";
document.getElementById('tss6').style.border="black 2px solid";
document.getElementById('tss6').style.backgroundColor="green";
document.getElementById('tss7').style.border="white 2px solid";
document.getElementById('tss7').style.backgroundColor="lime";
document.getElementById('tss8').style.border="black 2px solid";
document.getElementById('tss8').style.backgroundColor="green";
document.getElementById('tss9').style.border="black 2px solid";
document.getElementById('tss9').style.backgroundColor="green";
document.getElementById('tss10').style.border="black 2px solid";
document.getElementById('tss10').style.backgroundColor="green";
sspeed=6;
localStorage.setItem('sspeed',sspeed);
document.getElementById('speedscore').innerHTML="7";
}
function tss8()
{
document.getElementById('tss1').style.border="black 2px solid";
document.getElementById('tss1').style.backgroundColor="green";
document.getElementById('tss2').style.border="black 2px solid";
document.getElementById('tss2').style.backgroundColor="green";
document.getElementById('tss3').style.border="black 2px solid";
document.getElementById('tss3').style.backgroundColor="green";
document.getElementById('tss4').style.border="black 2px solid";
document.getElementById('tss4').style.backgroundColor="green";
document.getElementById('tss5').style.border="black 2px solid";
document.getElementById('tss5').style.backgroundColor="green";
document.getElementById('tss6').style.border="black 2px solid";
document.getElementById('tss6').style.backgroundColor="green";
document.getElementById('tss7').style.border="black 2px solid";
document.getElementById('tss7').style.backgroundColor="green";
document.getElementById('tss8').style.border="white 2px solid";
document.getElementById('tss8').style.backgroundColor="lime";
document.getElementById('tss9').style.border="black 2px solid";
document.getElementById('tss9').style.backgroundColor="green";
document.getElementById('tss10').style.border="black 2px solid";
document.getElementById('tss10').style.backgroundColor="green";
sspeed=5;
localStorage.setItem('sspeed',sspeed);
document.getElementById('speedscore').innerHTML="8";
}
function tss9()
{
document.getElementById('tss1').style.border="black 2px solid";
document.getElementById('tss1').style.backgroundColor="green";
document.getElementById('tss2').style.border="black 2px solid";
document.getElementById('tss2').style.backgroundColor="green";
document.getElementById('tss3').style.border="black 2px solid";
document.getElementById('tss3').style.backgroundColor="green";
document.getElementById('tss4').style.border="black 2px solid";
document.getElementById('tss4').style.backgroundColor="green";
document.getElementById('tss5').style.border="black 2px solid";
document.getElementById('tss5').style.backgroundColor="green";
document.getElementById('tss6').style.border="black 2px solid";
document.getElementById('tss6').style.backgroundColor="green";
document.getElementById('tss7').style.border="black 2px solid";
document.getElementById('tss7').style.backgroundColor="green";
document.getElementById('tss8').style.border="black 2px solid";
document.getElementById('tss8').style.backgroundColor="green";
document.getElementById('tss9').style.border="white 2px solid";
document.getElementById('tss9').style.backgroundColor="lime";
document.getElementById('tss10').style.border="black 2px solid";
document.getElementById('tss10').style.backgroundColor="green";
sspeed=4;
localStorage.setItem('sspeed',sspeed);
document.getElementById('speedscore').innerHTML="9";
}
function tss10()
{
document.getElementById('tss1').style.border="black 2px solid";
document.getElementById('tss1').style.backgroundColor="green";
document.getElementById('tss2').style.border="black 2px solid";
document.getElementById('tss2').style.backgroundColor="green";
document.getElementById('tss3').style.border="black 2px solid";
document.getElementById('tss3').style.backgroundColor="green";
document.getElementById('tss4').style.border="black 2px solid";
document.getElementById('tss4').style.backgroundColor="green";
document.getElementById('tss5').style.border="black 2px solid";
document.getElementById('tss5').style.backgroundColor="green";
document.getElementById('tss6').style.border="black 2px solid";
document.getElementById('tss6').style.backgroundColor="green";
document.getElementById('tss7').style.border="black 2px solid";
document.getElementById('tss7').style.backgroundColor="green";
document.getElementById('tss8').style.border="black 2px solid";
document.getElementById('tss8').style.backgroundColor="green";
document.getElementById('tss9').style.border="black 2px solid";
document.getElementById('tss9').style.backgroundColor="green";
document.getElementById('tss10').style.border="white 2px solid";
document.getElementById('tss10').style.backgroundColor="lime";
sspeed=3;
localStorage.setItem('sspeed',sspeed);
document.getElementById('speedscore').innerHTML="10";
}
function sspeedcheck()
{
sspeed=localStorage.getItem('sspeed');
if(sspeed==12)
{
document.getElementById('tss1').style.border="white 2px solid";
document.getElementById('tss1').style.backgroundColor="lime";
document.getElementById('tss2').style.border="black 2px solid";
document.getElementById('tss2').style.backgroundColor="green";
document.getElementById('tss3').style.border="black 2px solid";
document.getElementById('tss3').style.backgroundColor="green";
document.getElementById('tss4').style.border="black 2px solid";
document.getElementById('tss4').style.backgroundColor="green";
document.getElementById('tss5').style.border="black 2px solid";
document.getElementById('tss5').style.backgroundColor="green";
document.getElementById('tss6').style.border="black 2px solid";
document.getElementById('tss6').style.backgroundColor="green";
document.getElementById('tss7').style.border="black 2px solid";
document.getElementById('tss7').style.backgroundColor="green";
document.getElementById('tss8').style.border="black 2px solid";
document.getElementById('tss8').style.backgroundColor="green";
document.getElementById('tss9').style.border="black 2px solid";
document.getElementById('tss9').style.backgroundColor="green";
document.getElementById('tss10').style.border="black 2px solid";
document.getElementById('tss10').style.backgroundColor="green";

document.getElementById('speedscore').innerHTML="1";
}
else if(sspeed==11)
{
document.getElementById('tss1').style.border="black 2px solid";
document.getElementById('tss1').style.backgroundColor="green";
document.getElementById('tss2').style.border="white 2px solid";
document.getElementById('tss2').style.backgroundColor="lime";
document.getElementById('tss3').style.border="black 2px solid";
document.getElementById('tss3').style.backgroundColor="green";
document.getElementById('tss4').style.border="black 2px solid";
document.getElementById('tss4').style.backgroundColor="green";
document.getElementById('tss5').style.border="black 2px solid";
document.getElementById('tss5').style.backgroundColor="green";
document.getElementById('tss6').style.border="black 2px solid";
document.getElementById('tss6').style.backgroundColor="green";
document.getElementById('tss7').style.border="black 2px solid";
document.getElementById('tss7').style.backgroundColor="green";
document.getElementById('tss8').style.border="black 2px solid";
document.getElementById('tss8').style.backgroundColor="green";
document.getElementById('tss9').style.border="black 2px solid";
document.getElementById('tss9').style.backgroundColor="green";
document.getElementById('tss10').style.border="black 2px solid";
document.getElementById('tss10').style.backgroundColor="green";

document.getElementById('speedscore').innerHTML="2";
}
else if(sspeed==10)
{
document.getElementById('tss1').style.border="black 2px solid";
document.getElementById('tss1').style.backgroundColor="green";
document.getElementById('tss2').style.border="black 2px solid";
document.getElementById('tss2').style.backgroundColor="green";
document.getElementById('tss3').style.border="white 2px solid";
document.getElementById('tss3').style.backgroundColor="lime";
document.getElementById('tss4').style.border="black 2px solid";
document.getElementById('tss4').style.backgroundColor="green";
document.getElementById('tss5').style.border="black 2px solid";
document.getElementById('tss5').style.backgroundColor="green";
document.getElementById('tss6').style.border="black 2px solid";
document.getElementById('tss6').style.backgroundColor="green";
document.getElementById('tss7').style.border="black 2px solid";
document.getElementById('tss7').style.backgroundColor="green";
document.getElementById('tss8').style.border="black 2px solid";
document.getElementById('tss8').style.backgroundColor="green";
document.getElementById('tss9').style.border="black 2px solid";
document.getElementById('tss9').style.backgroundColor="green";
document.getElementById('tss10').style.border="black 2px solid";
document.getElementById('tss10').style.backgroundColor="green";

document.getElementById('speedscore').innerHTML="3";
}
else if(sspeed==9)
{
document.getElementById('tss1').style.border="black 2px solid";
document.getElementById('tss1').style.backgroundColor="green";
document.getElementById('tss2').style.border="black 2px solid";
document.getElementById('tss2').style.backgroundColor="green";
document.getElementById('tss3').style.border="black 2px solid";
document.getElementById('tss3').style.backgroundColor="green";
document.getElementById('tss4').style.border="white 2px solid";
document.getElementById('tss4').style.backgroundColor="lime";
document.getElementById('tss5').style.border="black 2px solid";
document.getElementById('tss5').style.backgroundColor="green";
document.getElementById('tss6').style.border="black 2px solid";
document.getElementById('tss6').style.backgroundColor="green";
document.getElementById('tss7').style.border="black 2px solid";
document.getElementById('tss7').style.backgroundColor="green";
document.getElementById('tss8').style.border="black 2px solid";
document.getElementById('tss8').style.backgroundColor="green";
document.getElementById('tss9').style.border="black 2px solid";
document.getElementById('tss9').style.backgroundColor="green";
document.getElementById('tss10').style.border="black 2px solid";
document.getElementById('tss10').style.backgroundColor="green";

document.getElementById('speedscore').innerHTML="4";
}
else if(sspeed==8)
{
document.getElementById('tss1').style.border="black 2px solid";
document.getElementById('tss1').style.backgroundColor="green";
document.getElementById('tss2').style.border="black 2px solid";
document.getElementById('tss2').style.backgroundColor="green";
document.getElementById('tss3').style.border="black 2px solid";
document.getElementById('tss3').style.backgroundColor="green";
document.getElementById('tss4').style.border="black 2px solid";
document.getElementById('tss4').style.backgroundColor="green";
document.getElementById('tss5').style.border="white 2px solid";
document.getElementById('tss5').style.backgroundColor="lime";
document.getElementById('tss6').style.border="black 2px solid";
document.getElementById('tss6').style.backgroundColor="green";
document.getElementById('tss7').style.border="black 2px solid";
document.getElementById('tss7').style.backgroundColor="green";
document.getElementById('tss8').style.border="black 2px solid";
document.getElementById('tss8').style.backgroundColor="green";
document.getElementById('tss9').style.border="black 2px solid";
document.getElementById('tss9').style.backgroundColor="green";
document.getElementById('tss10').style.border="black 2px solid";
document.getElementById('tss10').style.backgroundColor="green";

document.getElementById('speedscore').innerHTML="5";
}
else if(sspeed==7)
{
document.getElementById('tss1').style.border="black 2px solid";
document.getElementById('tss1').style.backgroundColor="green";
document.getElementById('tss2').style.border="black 2px solid";
document.getElementById('tss2').style.backgroundColor="green";
document.getElementById('tss3').style.border="black 2px solid";
document.getElementById('tss3').style.backgroundColor="green";
document.getElementById('tss4').style.border="black 2px solid";
document.getElementById('tss4').style.backgroundColor="green";
document.getElementById('tss5').style.border="black 2px solid";
document.getElementById('tss5').style.backgroundColor="green";
document.getElementById('tss6').style.border="white 2px solid";
document.getElementById('tss6').style.backgroundColor="lime";
document.getElementById('tss7').style.border="black 2px solid";
document.getElementById('tss7').style.backgroundColor="green";
document.getElementById('tss8').style.border="black 2px solid";
document.getElementById('tss8').style.backgroundColor="green";
document.getElementById('tss9').style.border="black 2px solid";
document.getElementById('tss9').style.backgroundColor="green";
document.getElementById('tss10').style.border="black 2px solid";
document.getElementById('tss10').style.backgroundColor="green";

document.getElementById('speedscore').innerHTML="6";
}
else if(sspeed==6)
{
document.getElementById('tss1').style.border="black 2px solid";
document.getElementById('tss1').style.backgroundColor="green";
document.getElementById('tss2').style.border="black 2px solid";
document.getElementById('tss2').style.backgroundColor="green";
document.getElementById('tss3').style.border="black 2px solid";
document.getElementById('tss3').style.backgroundColor="green";
document.getElementById('tss4').style.border="black 2px solid";
document.getElementById('tss4').style.backgroundColor="green";
document.getElementById('tss5').style.border="black 2px solid";
document.getElementById('tss5').style.backgroundColor="green";
document.getElementById('tss6').style.border="black 2px solid";
document.getElementById('tss6').style.backgroundColor="green";
document.getElementById('tss7').style.border="white 2px solid";
document.getElementById('tss7').style.backgroundColor="lime";
document.getElementById('tss8').style.border="black 2px solid";
document.getElementById('tss8').style.backgroundColor="green";
document.getElementById('tss9').style.border="black 2px solid";
document.getElementById('tss9').style.backgroundColor="green";
document.getElementById('tss10').style.border="black 2px solid";
document.getElementById('tss10').style.backgroundColor="green";

document.getElementById('speedscore').innerHTML="7";
}
else if(sspeed==5)
{
document.getElementById('tss1').style.border="black 2px solid";
document.getElementById('tss1').style.backgroundColor="green";
document.getElementById('tss2').style.border="black 2px solid";
document.getElementById('tss2').style.backgroundColor="green";
document.getElementById('tss3').style.border="black 2px solid";
document.getElementById('tss3').style.backgroundColor="green";
document.getElementById('tss4').style.border="black 2px solid";
document.getElementById('tss4').style.backgroundColor="green";
document.getElementById('tss5').style.border="black 2px solid";
document.getElementById('tss5').style.backgroundColor="green";
document.getElementById('tss6').style.border="black 2px solid";
document.getElementById('tss6').style.backgroundColor="green";
document.getElementById('tss7').style.border="black 2px solid";
document.getElementById('tss7').style.backgroundColor="green";
document.getElementById('tss8').style.border="white 2px solid";
document.getElementById('tss8').style.backgroundColor="lime";
document.getElementById('tss9').style.border="black 2px solid";
document.getElementById('tss9').style.backgroundColor="green";
document.getElementById('tss10').style.border="black 2px solid";
document.getElementById('tss10').style.backgroundColor="green";

document.getElementById('speedscore').innerHTML="8";
}
else if(sspeed==4)
{
document.getElementById('tss1').style.border="black 2px solid";
document.getElementById('tss1').style.backgroundColor="green";
document.getElementById('tss2').style.border="black 2px solid";
document.getElementById('tss2').style.backgroundColor="green";
document.getElementById('tss3').style.border="black 2px solid";
document.getElementById('tss3').style.backgroundColor="green";
document.getElementById('tss4').style.border="black 2px solid";
document.getElementById('tss4').style.backgroundColor="green";
document.getElementById('tss5').style.border="black 2px solid";
document.getElementById('tss5').style.backgroundColor="green";
document.getElementById('tss6').style.border="black 2px solid";
document.getElementById('tss6').style.backgroundColor="green";
document.getElementById('tss7').style.border="black 2px solid";
document.getElementById('tss7').style.backgroundColor="green";
document.getElementById('tss8').style.border="black 2px solid";
document.getElementById('tss8').style.backgroundColor="green";
document.getElementById('tss9').style.border="white 2px solid";
document.getElementById('tss9').style.backgroundColor="lime";
document.getElementById('tss10').style.border="black 2px solid";
document.getElementById('tss10').style.backgroundColor="green";

document.getElementById('speedscore').innerHTML="9";
}
else if(sspeed==3)
{
document.getElementById('tss1').style.border="black 2px solid";
document.getElementById('tss1').style.backgroundColor="green";
document.getElementById('tss2').style.border="black 2px solid";
document.getElementById('tss2').style.backgroundColor="green";
document.getElementById('tss3').style.border="black 2px solid";
document.getElementById('tss3').style.backgroundColor="green";
document.getElementById('tss4').style.border="black 2px solid";
document.getElementById('tss4').style.backgroundColor="green";
document.getElementById('tss5').style.border="black 2px solid";
document.getElementById('tss5').style.backgroundColor="green";
document.getElementById('tss6').style.border="black 2px solid";
document.getElementById('tss6').style.backgroundColor="green";
document.getElementById('tss7').style.border="black 2px solid";
document.getElementById('tss7').style.backgroundColor="green";
document.getElementById('tss8').style.border="black 2px solid";
document.getElementById('tss8').style.backgroundColor="green";
document.getElementById('tss9').style.border="black 2px solid";
document.getElementById('tss9').style.backgroundColor="green";
document.getElementById('tss10').style.border="white 2px solid";
document.getElementById('tss10').style.backgroundColor="lime";

document.getElementById('speedscore').innerHTML="10";
}
}

function scwhite()
{
document.getElementById('scwhite').style.border="lime 2px solid";
document.getElementById('scred').style.border="black 2px solid";
document.getElementById('scyellow').style.border="black 2px solid";
document.getElementById('scblue').style.border="black 2px solid";
document.getElementById('scgray').style.border="black 2px solid";
document.getElementById('sclime').style.border="black 2px solid";

scolor='white';
localStorage.setItem('scolor',JSON.stringify(scolor));
}
function scred()
{
document.getElementById('scwhite').style.border="black 2px solid";
document.getElementById('scred').style.border="lime 2px solid";
document.getElementById('scyellow').style.border="black 2px solid";
document.getElementById('scblue').style.border="black 2px solid";
document.getElementById('scgray').style.border="black 2px solid";
document.getElementById('sclime').style.border="black 2px solid";

scolor='red';
localStorage.setItem('scolor',JSON.stringify(scolor));
}
function scblue()
{
document.getElementById('scwhite').style.border="black 2px solid";
document.getElementById('scred').style.border="black 2px solid";
document.getElementById('scyellow').style.border="black 2px solid";
document.getElementById('scblue').style.border="lime 2px solid";
document.getElementById('scgray').style.border="black 2px solid";
document.getElementById('sclime').style.border="black 2px solid";

scolor='blue';
localStorage.setItem('scolor',JSON.stringify(scolor));
}
function scgray()
{
document.getElementById('scwhite').style.border="black 2px solid";
document.getElementById('scred').style.border="black 2px solid";
document.getElementById('scyellow').style.border="black 2px solid";
document.getElementById('scblue').style.border="black 2px solid";
document.getElementById('scgray').style.border="lime 2px solid";
document.getElementById('sclime').style.border="black 2px solid";

scolor='gray';
localStorage.setItem('scolor',JSON.stringify(scolor));
}
function sclime()
{
document.getElementById('scwhite').style.border="black 2px solid";
document.getElementById('scred').style.border="black 2px solid";
document.getElementById('scyellow').style.border="black 2px solid";
document.getElementById('scblue').style.border="black 2px solid";
document.getElementById('scgray').style.border="black 2px solid";
document.getElementById('sclime').style.border="lime 2px solid";

scolor='lime';
localStorage.setItem('scolor',JSON.stringify(scolor));
}
function scyellow()
{
document.getElementById('scwhite').style.border="black 2px solid";
document.getElementById('scred').style.border="black 2px solid";
document.getElementById('scyellow').style.border="lime 2px solid";
document.getElementById('scblue').style.border="black 2px solid";
document.getElementById('scgray').style.border="black 2px solid";
document.getElementById('sclime').style.border="black 2px solid";

scolor='yellow';
localStorage.setItem('scolor',JSON.stringify(scolor));
}

function scolorcheck()
{
scolor=JSON.parse(localStorage.getItem('scolor'));
if(scolor=='white')
{
document.getElementById('scwhite').style.border="lime 2px solid";
document.getElementById('scred').style.border="black 2px solid";
document.getElementById('scyellow').style.border="black 2px solid";
document.getElementById('scblue').style.border="black 2px solid";
document.getElementById('scgray').style.border="black 2px solid";
document.getElementById('sclime').style.border="black 2px solid";
}
else if(scolor=='red')
{
document.getElementById('scwhite').style.border="black 2px solid";
document.getElementById('scred').style.border="lime 2px solid";
document.getElementById('scyellow').style.border="black 2px solid";
document.getElementById('scblue').style.border="black 2px solid";
document.getElementById('scgray').style.border="black 2px solid";
document.getElementById('sclime').style.border="black 2px solid";
}
else if(scolor=='gray')
{
document.getElementById('scwhite').style.border="black 2px solid";
document.getElementById('scred').style.border="black 2px solid";
document.getElementById('scyellow').style.border="black 2px solid";
document.getElementById('scblue').style.border="black 2px solid";
document.getElementById('scgray').style.border="lime 2px solid";
document.getElementById('sclime').style.border="black 2px solid";
}
else if(scolor=='blue')
{
document.getElementById('scwhite').style.border="black 2px solid";
document.getElementById('scred').style.border="black 2px solid";
document.getElementById('scyellow').style.border="black 2px solid";
document.getElementById('scblue').style.border="lime 2px solid";
document.getElementById('scgray').style.border="black 2px solid";
document.getElementById('sclime').style.border="black 2px solid";
}
else if(scolor=='lime')
{
document.getElementById('scwhite').style.border="black 2px solid";
document.getElementById('scred').style.border="black 2px solid";
document.getElementById('scyellow').style.border="black 2px solid";
document.getElementById('scblue').style.border="black 2px solid";
document.getElementById('scgray').style.border="black 2px solid";
document.getElementById('sclime').style.border="lime 2px solid";
}
else if(scolor=='yellow')
{
document.getElementById('scwhite').style.border="black 2px solid";
document.getElementById('scred').style.border="black 2px solid";
document.getElementById('scyellow').style.border="lime 2px solid";
document.getElementById('scblue').style.border="black 2px solid";
document.getElementById('scgray').style.border="black 2px solid";
document.getElementById('sclime').style.border="black 2px solid";
}
}

function teleon()
{teleport=1;
localStorage.setItem('teleport',teleport);
}
function teleoff()
{teleport=0;
localStorage.setItem('teleport',teleport);
}

function telecheck()
{
if(localStorage.getItem('teleport')==0)
{
document.getElementById('teleoff').checked=true;
document.getElementById('teleon').checked=false;
}
else
{
document.getElementById('teleoff').checked=false;
document.getElementById('teleon').checked=true;
}
}

function teleport1()
{
if (snake.x < 0) 
{
snake.x = canvas.width - grid;
}
else if (snake.x >= canvas.width) 
{
snake.x = 0;
}
}
function teleport2()
{
if (snake.y < 0) 
{
snake.y = canvas.height - grid;
}
else if (snake.y >= canvas.height) 
{
snake.y = 0;
}	
}

function bgcool()
{
document.getElementById('game').style.background="url('cool.jpg')";
document.getElementById('game').style.backgroundSize="800px 592px";

document.getElementById('bgcool').style.border="lime 2px solid";
document.getElementById('bggrass').style.border="black 2px solid";
document.getElementById('bgground').style.border="black 2px solid";
document.getElementById('bgdark').style.border="black 2px solid";
document.getElementById('bgbrick').style.border="black 2px solid";
document.getElementById('bgwoody').style.border="black 2px solid";

bgcode=1;
localStorage.setItem('bgcode',bgcode);
}
function bgdark()
{
document.getElementById('game').style.background="url('dark.jpg')";
document.getElementById('game').style.backgroundSize="800px 592px";

document.getElementById('bgcool').style.border="black 2px solid";
document.getElementById('bggrass').style.border="black 2px solid";
document.getElementById('bgground').style.border="black 2px solid";
document.getElementById('bgdark').style.border="lime 2px solid";
document.getElementById('bgbrick').style.border="black 2px solid";
document.getElementById('bgwoody').style.border="black 2px solid";

bgcode=2;
localStorage.setItem('bgcode',bgcode);
}
function bggrass()
{
document.getElementById('game').style.background="url('grass.jpg')";
document.getElementById('game').style.backgroundSize="800px 592px";

document.getElementById('bgcool').style.border="black 2px solid";
document.getElementById('bggrass').style.border="lime 2px solid";
document.getElementById('bgground').style.border="black 2px solid";
document.getElementById('bgdark').style.border="black 2px solid";
document.getElementById('bgbrick').style.border="black 2px solid";
document.getElementById('bgwoody').style.border="black 2px solid";

bgcode=3;
localStorage.setItem('bgcode',bgcode);
}
function bgwoody()
{
document.getElementById('game').style.background="url('woody.jpg')";
document.getElementById('game').style.backgroundSize="800px 592px";

document.getElementById('bgcool').style.border="black 2px solid";
document.getElementById('bggrass').style.border="black 2px solid";
document.getElementById('bgground').style.border="black 2px solid";
document.getElementById('bgdark').style.border="black 2px solid";
document.getElementById('bgbrick').style.border="black 2px solid";
document.getElementById('bgwoody').style.border="lime 2px solid";

bgcode=4;
localStorage.setItem('bgcode',bgcode);
}
function bgground()
{
document.getElementById('game').style.background="url('ground.jpg')";
document.getElementById('game').style.backgroundSize="800px 592px";

document.getElementById('bgcool').style.border="black 2px solid";
document.getElementById('bggrass').style.border="black 2px solid";
document.getElementById('bgground').style.border="lime 2px solid";
document.getElementById('bgdark').style.border="black 2px solid";
document.getElementById('bgbrick').style.border="black 2px solid";
document.getElementById('bgwoody').style.border="black 2px solid";

bgcode=5;
localStorage.setItem('bgcode',bgcode);
}
function bgbrick()
{
document.getElementById('game').style.background="url('Brick.jpg')";
document.getElementById('game').style.backgroundSize="800px 592px";

document.getElementById('bgcool').style.border="black 2px solid";
document.getElementById('bggrass').style.border="black 2px solid";
document.getElementById('bgground').style.border="black 2px solid";
document.getElementById('bgdark').style.border="black 2px solid";
document.getElementById('bgbrick').style.border="lime 2px solid";
document.getElementById('bgwoody').style.border="black 2px solid";

bgcode=6;
localStorage.setItem('bgcode',bgcode);
}

function bgcodecheck()
{
bgcode=localStorage.getItem('bgcode');
if(bgcode==1)	
{
document.getElementById('game').style.background="url('cool.jpg')";
document.getElementById('game').style.backgroundSize="800px 592px";

document.getElementById('bgcool').style.border="lime 2px solid";
document.getElementById('bggrass').style.border="black 2px solid";
document.getElementById('bgground').style.border="black 2px solid";
document.getElementById('bgdark').style.border="black 2px solid";
document.getElementById('bgbrick').style.border="black 2px solid";
document.getElementById('bgwoody').style.border="black 2px solid";
}
else if(bgcode==2)	
{
document.getElementById('game').style.background="url('dark.jpg')";
document.getElementById('game').style.backgroundSize="800px 592px";

document.getElementById('bgcool').style.border="black 2px solid";
document.getElementById('bggrass').style.border="black 2px solid";
document.getElementById('bgground').style.border="black 2px solid";
document.getElementById('bgdark').style.border="lime 2px solid";
document.getElementById('bgbrick').style.border="black 2px solid";
document.getElementById('bgwoody').style.border="black 2px solid";
}
else if(bgcode==3)	
{
document.getElementById('game').style.background="url('grass.jpg')";
document.getElementById('game').style.backgroundSize="800px 592px";

document.getElementById('bgcool').style.border="black 2px solid";
document.getElementById('bggrass').style.border="lime 2px solid";
document.getElementById('bgground').style.border="black 2px solid";
document.getElementById('bgdark').style.border="black 2px solid";
document.getElementById('bgbrick').style.border="black 2px solid";
document.getElementById('bgwoody').style.border="black 2px solid";
}
else if(bgcode==4)	
{
document.getElementById('game').style.background="url('woody.jpg')";
document.getElementById('game').style.backgroundSize="800px 592px";

document.getElementById('bgcool').style.border="black 2px solid";
document.getElementById('bggrass').style.border="black 2px solid";
document.getElementById('bgground').style.border="black 2px solid";
document.getElementById('bgdark').style.border="black 2px solid";
document.getElementById('bgbrick').style.border="black 2px solid";
document.getElementById('bgwoody').style.border="lime 2px solid";
}
else if(bgcode==5)	
{
document.getElementById('game').style.background="url('ground.jpg')";
document.getElementById('game').style.backgroundSize="800px 592px";

document.getElementById('bgcool').style.border="black 2px solid";
document.getElementById('bggrass').style.border="black 2px solid";
document.getElementById('bgground').style.border="lime 2px solid";
document.getElementById('bgdark').style.border="black 2px solid";
document.getElementById('bgbrick').style.border="black 2px solid";
document.getElementById('bgwoody').style.border="black 2px solid";
}
else if(bgcode==6)	
{
document.getElementById('game').style.background="url('Brick.jpg')";
document.getElementById('game').style.backgroundSize="800px 592px";

document.getElementById('bgcool').style.border="black 2px solid";
document.getElementById('bggrass').style.border="black 2px solid";
document.getElementById('bgground').style.border="black 2px solid";
document.getElementById('bgdark').style.border="black 2px solid";
document.getElementById('bgbrick').style.border="lime 2px solid";
document.getElementById('bgwoody').style.border="black 2px solid";
}
}

function applefood()
{
foodtext="🍎";
foodcode=1;
localStorage.setItem('foodcode',foodcode);
}
function gapplefood()
{
foodtext="🍏";
foodcode=2;
localStorage.setItem('foodcode',foodcode);
}
function meatfood()
{
foodtext="🥩";
foodcode=3;
localStorage.setItem('foodcode',foodcode);
}
function meat2food()
{
foodtext="🍖";
foodcode=4;
localStorage.setItem('foodcode',foodcode);
}

function foodcodecheck()
{
foodcode=localStorage.getItem('foodcode');
if(foodcode==1)
{document.getElementById('applefood').checked=true;
document.getElementById('gapplefood').checked=false;
document.getElementById('meatfood').checked=false;
document.getElementById('meat2food').checked=false;
foodtext="🍎";
}
else if(foodcode==2)
{document.getElementById('applefood').checked=false;
document.getElementById('gapplefood').checked=true;
document.getElementById('meatfood').checked=false;
document.getElementById('meat2food').checked=false;
foodtext="🍏";
}
else if(foodcode==3)
{document.getElementById('applefood').checked=false;
document.getElementById('gapplefood').checked=false;
document.getElementById('meatfood').checked=true;
document.getElementById('meat2food').checked=false;
foodtext="🥩";
}
else if(foodcode==4)
{document.getElementById('applefood').checked=false;
document.getElementById('gapplefood').checked=false;
document.getElementById('meatfood').checked=false;
document.getElementById('meat2food').checked=true;
foodtext="🍖";
}
}

function soundon()
{
saudio=1;
localStorage.setItem('saudio',saudio);
}
function soundoff()
{
saudio=0;
localStorage.setItem('saudio',saudio);
}

function saudiocheck()
{
saudio=localStorage.getItem('saudio');
if(saudio==1)
{
document.getElementById('soundon').checked=true;
document.getElementById('soundoff').checked=false;
}
else if(saudio==0)
{
document.getElementById('soundon').checked=false;
document.getElementById('soundoff').checked=true;
}
}
