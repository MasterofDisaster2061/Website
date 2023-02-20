
sensitivitycheck();
gravityicheck();
minScheck();
jaudiocheck();
powercheck();
bgcodeddcheck();
doodlecodecheck();
platformcodecheck();

function initialdoodledatafunc()
 {
 if(localStorage.getItem('sensitivity')==undefined)
 {
 sensitivity=localStorage.setItem('sensitivity',3);
 }
 else
 {
 sensitivity=localStorage.getItem('sensitivity');
 }
 
 if(localStorage.getItem('gravityi')==undefined)
 {
 gravityi=localStorage.setItem('gravityi',0.26);
 }
 else
 {
 gravityi=localStorage.getItem('gravityi');
 }
 
 if(localStorage.getItem('minS')==undefined)
 {
 minS=localStorage.setItem('minS',50);
 maxS=localStorage.setItem('maxS',60);
 }
 else
 {
 minS=localStorage.getItem('minS');
 maxS=localStorage.getItem('maxS');
 }
 
 if(localStorage.getItem('jaudio')==undefined)
 {
 jaudio=localStorage.setItem('jaudio',1);
 }
 else
 {
 jaudio=localStorage.getItem('jaudio');
 }
 
 if(localStorage.getItem('powerup')==undefined)
 {
 powerup=localStorage.setItem('powerup',1);
 }
 else
 {
 powerup=localStorage.getItem('powerup');
 }
 
 if(localStorage.getItem('bgcodedd')==undefined)
 {
 bgcodedd=localStorage.setItem('bgcodedd',1);
 }
 else
 {
 bgcodedd=localStorage.getItem('bgcodedd');
 }
 
 if(localStorage.getItem('doodlecode')==undefined)
 {
 doodlecode=localStorage.setItem('doodlecode',1);
 }
 else
 {
 doodlecode=localStorage.getItem('doodlecode');
 }
 
 if(localStorage.getItem('platformcode')==undefined)
 {
 platformcode=localStorage.setItem('platformcode',1);
 }
 else
 {
 platformcode=localStorage.getItem('platformcode');
 }
 }
 
initialdoodledatafunc();

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
var scoredoodle = 0;
var jumpaudio = new Audio('jump.mp3');
var jetjumpaudio = new Audio('jetjump.mp3');
var supersneakersaudio = new Audio('jump2.mp3');
var antigravityaudio = new Audio('antigravity.mp3');
var fallaudio = new Audio('fall.wav');

// width and height of each platform and where platforms start
const platformWidth = 65;
const platformHeight = 20;
const platformStart = canvas.height - 50;

// player physics
gravity = Number(gravityi);
drag = 0.3;
bounceVelocity = -12.5;

var i=1;ii=1;iii=1;j=0;jj=0;jjj=0;
document.getElementById('jetjump').disabled=true;
document.getElementById('supersneakers').disabled=true;
document.getElementById('antigravity').disabled=true;
setTimeout(jetjumpable,30000);
setTimeout(antigravityable,45000);
setTimeout(supersneakersable,60000);

function jetjump()
{
antigravityaudio.pause();
bounceVelocity = -55;
gravity = Number(gravityi);
document.getElementById('jetjump').disabled=true;
document.getElementById('supersneakers').disabled=true;
document.getElementById('antigravity').disabled=true;
i=1;j=1;
document.getElementById('antigravityshow').style.display="none";
document.getElementById('supersneakersshow').style.display="none";
document.getElementById('jetjumpshow').style.display="block";
setTimeout(jetjumpstop,3000);
}
function jetjumpstop()
{
j=0;
document.getElementById('jetjumpshow').style.display="none";
bounceVelocity = -12.5;
if(iii==0)
document.getElementById('supersneakers').disabled=false;
if(ii==0)
document.getElementById('antigravity').disabled=false;
setTimeout(jetjumpable,30000);
}
function jetjumpable()
{
document.getElementById('jetjump').disabled=false;
i=0;
}

function antigravity()
{
if(jaudio==1)
antigravityaudio.play();
gravity = 0.05;
bounceVelocity = -12.5;
document.getElementById('antigravity').disabled=true;
document.getElementById('jetjump').disabled=true;
document.getElementById('supersneakers').disabled=true;
ii=1;jj=1;
document.getElementById('antigravityshow').style.display="block";
document.getElementById('supersneakersshow').style.display="none";
document.getElementById('jetjumpshow').style.display="none";
setTimeout(antigravitystop,22000);
}
function antigravitystop()
{
jj=0;
document.getElementById('antigravityshow').style.display="none";
gravity = Number(gravityi);
if(i==0)
document.getElementById('jetjump').disabled=false;
if(iii==0)
document.getElementById('supersneakers').disabled=false;
setTimeout(antigravityable,45000);
}
function antigravityable()
{
document.getElementById('antigravity').disabled=false;
ii=0;
}

function supersneakers()
{
antigravityaudio.pause();
bounceVelocity = -30;
gravity = Number(gravityi);
document.getElementById('supersneakers').disabled=true;
document.getElementById('jetjump').disabled=true;
document.getElementById('antigravity').disabled=true;
iii=1;jjj=1;
document.getElementById('antigravityshow').style.display="none";
document.getElementById('supersneakersshow').style.display="block";
document.getElementById('jetjumpshow').style.display="none";
setTimeout(supersneakersstop,10000);
}
function supersneakersstop()
{
jjj=0;
document.getElementById('supersneakersshow').style.display="none";
bounceVelocity = -12.5;

if(i==0)
document.getElementById('jetjump').disabled=false;
if(ii==0)
document.getElementById('antigravity').disabled=false;
setTimeout(supersneakersable,60000);
}
function supersneakersable()
{
document.getElementById('supersneakers').disabled=false;
iii=0;
clearTimeout(supersneakersinterval);
}

// minimum and maximum vertical space between each platform
let minPlatformSpace = Number(minS);
let maxPlatformSpace = Number(maxS);

// information about each platform. the first platform starts in the
// bottom middle of the screen
let platforms = [{
  x: canvas.width / 2 - platformWidth / 2,
  y: platformStart
}];

// get a random number between the min (inclusive) and max (exclusive)
function random(min, max) {
  return Math.random() * (max - min) + min;
}

// fill the initial screen with platforms
let y = platformStart;
while (y > 0) {
  // the next platform can be placed above the previous one with a space
  // somewhere between the min and max space
  y -= platformHeight + random(minPlatformSpace, maxPlatformSpace);
  // a platform can be placed anywhere 25px from the left edge of the canvas
  // and 25px from the right edge of the canvas (taking into account platform
  // width).
  // however the first few platforms cannot be placed in the center so
  // that the player will bounce up and down without going up the screen
  // until they are ready to move
  
  let x;
  do { 
    x = random(25, canvas.width - 25 - platformWidth);
  } while (
    y > canvas.height / 2 &&
    x > canvas.width / 2 - platformWidth * 1.5 &&
    x < canvas.width / 2 + platformWidth / 2
  );
  platforms.push({ x, y });
}

// the doodle jumper
const doodle = {
  width: 50,
  height: 60,
  x: canvas.width / 2 - 20,
  y: platformStart - 60,

  // velocity
  dx: 0,
  dy: 0
};

// keep track of player direction and actions
let playerDir = 0;
let keydown = false;
let prevDoodleY = doodle.y;

// game loop
function loop() {
  requestAnimationFrame(loop);
  context.clearRect(0,0,canvas.width,canvas.height);

  // apply gravity to doodle
  doodle.dy += gravity;

  // if doodle reaches the middle of the screen, move the platforms down
  // instead of doodle up to make it look like doodle is going up
  if (doodle.y < canvas.height / 2 && doodle.dy < 0) {
    platforms.forEach(function(platform) {
      platform.y += -doodle.dy;
    });

    // add more platforms to the top of the screen as doodle moves up
    while (platforms[platforms.length - 1].y > 0) {
      platforms.push({
        x: random(25, canvas.width - 25 - platformWidth),
        y: platforms[platforms.length - 1].y - (platformHeight + random(minPlatformSpace, maxPlatformSpace))
      })

      // add a bit to the min/max platform space as the player goes up
      minPlatformSpace += 0.04;
      maxPlatformSpace += 0.04;
	  
      // cap max space
      maxPlatformSpace = Math.min(maxPlatformSpace, canvas.height / 2);
	  
	  scoredoodle++;
      document.getElementById('scoredoodle').innerHTML='Score- '+scoredoodle;
    }
  }
  else {
    doodle.y += doodle.dy;
  }

  // only apply drag to horizontal movement if key is not pressed
  if (!keydown) {
    if (playerDir < 0) {
      doodle.dx += drag;

      // don't let dx go above 0
      if (doodle.dx > 0) {
        doodle.dx = 0;
        playerDir = 0;
      }
    }
    else if (playerDir > 0) {
      doodle.dx -= drag;

      if (doodle.dx < 0) {
        doodle.dx = 0;
        playerDir = 0;
      }
    }
  }

  doodle.x += doodle.dx;

  // make doodle wrap the screen
  if (doodle.x + doodle.width < 0) {
    doodle.x = canvas.width;
  }
  else if (doodle.x > canvas.width) {
    doodle.x = -doodle.width;
  }

  // draw platforms
  doodlepic2=new Image();
  doodlepic2.src= doodlepic1000;
  platforms.forEach(function(platform) {
  context.drawImage(doodlepic2,platform.x, platform.y, platformWidth, platformHeight);

    // make doodle jump if it collides with a platform from above
    if (
      // doodle is falling
      doodle.dy > 0 &&

      // doodle was previous above the platform
      prevDoodleY + doodle.height <= platform.y &&

      // doodle collides with platform
      // (Axis Aligned Bounding Box [AABB] collision check)
      doodle.x < platform.x + platformWidth &&
      doodle.x + doodle.width > platform.x &&
      doodle.y < platform.y + platformHeight &&
      doodle.y + doodle.height > platform.y
    ) {
      // reset doodle position so it's on top of the platform
      doodle.y = platform.y - doodle.height;
      doodle.dy = bounceVelocity;
	  if(j==0 && jj==0 && jjj==0 && jaudio==1)
	  {jumpaudio.play();
	  jumpaudio.playbackRate=2.5;}
	  if(j==1 && jaudio==1)
	  jetjumpaudio.play();
      if(jjj==1 && jaudio==1)
	  supersneakersaudio.play();
    }
  });

  // draw doodle
  
  doodlepic=new Image();
  doodlepic.src= doodlepic100;
  context.drawImage(doodlepic,doodle.x, doodle.y, doodle.width+10, doodle.height+10);
  
  prevDoodleY = doodle.y;

  // remove any platforms that have gone offscreen
  platforms = platforms.filter(function(platform) {
    return platform.y < canvas.height;
  })
}

// listen to keyboard events to move doodle
document.addEventListener('keydown', function(e) {
  // left arrow key
  if (e.which === 37) {
    keydown = true;
    playerDir = -1;
    doodle.dx = -Number(sensitivity);

  }
  // right arrow key
  else if (e.which === 39) {
    keydown = true;
    playerDir = 1;
    doodle.dx = Number(sensitivity);
  }
  // up arrow
  else if (e.which === 38 && powerup==1) {
    if(i==0)
	jetjump();
  }
  // down arrow
  else if (e.which === 40 && powerup==1) {
    if(ii==0)
	antigravity();
  }
  // spacebar
  else if (e.code === 'Space' && powerup==1) {
    if(iii==0)
	supersneakers();
  }
});

document.addEventListener('keyup', function(e) {
  keydown = false;
});

document.getElementById('leftpad').addEventListener('mousedown',function()
{   keydown = true;
    playerDir = -1;
    doodle.dx = -Number(sensitivity);
});
document.getElementById('rightpad').addEventListener('mousedown',function()
{   keydown = true;
    playerDir = 1;
    doodle.dx = Number(sensitivity);
});

document.getElementById('leftpad').addEventListener('mouseup',function()
{   keydown = false;
});
document.getElementById('rightpad').addEventListener('mouseup',function()
{   keydown = false;
});

doodleinterval=setInterval(function()
{
if(doodle.y>700)
{
if(jaudio==1)
{fallaudio.play();
fallaudio.playbackRate=2;}

stopCount();
antigravityaudio.pause();

document.getElementById('antigravityshow').style.display="none";
document.getElementById('supersneakersshow').style.display="none";
document.getElementById('jetjumpshow').style.display="none";
document.getElementById('powerup').style.display="none";
powerup=0;

setTimeout(gameoverfunc,100);
clearInterval(doodleinterval);
}
},10);

function gameoverfunc()
{
checkHighScore(scoredoodle);

document.getElementById('gameoverscore').innerHTML='Score- '+scoredoodle;
document.getElementById('gameovertime').innerHTML=timedoodleshow;
document.getElementById('gameover').style.display="block";
document.getElementById('homedisp').style.display="none";
document.getElementById('replaygame2').style.display="none";
}

setInterval(function()
{
if(document.getElementById('jetjump').disabled==true)
{
document.getElementById('jetjump').style.border="2px gray solid";
document.getElementById('jetjump').style.background="url('jetjump2.jpg')";
document.getElementById('jetjump').style.backgroundSize="70px 79px";
}
else if(document.getElementById('jetjump').disabled==false)
{
document.getElementById('jetjump').style.border="2px lime solid";
document.getElementById('jetjump').style.background="url('jetjump.jpg')";
document.getElementById('jetjump').style.backgroundSize="70px 79px";
}

if(document.getElementById('antigravity').disabled==true)
{
document.getElementById('antigravity').style.border="2px gray solid";
document.getElementById('antigravity').style.background="url('antigravity2.jpg')";
document.getElementById('antigravity').style.backgroundSize="78px 76px";
}
else if(document.getElementById('antigravity').disabled==false)
{
document.getElementById('antigravity').style.border="2px lime solid";
document.getElementById('antigravity').style.background="url('antigravity.jpg')";
document.getElementById('antigravity').style.backgroundSize="78px 76px";
}

if(document.getElementById('supersneakers').disabled==true)
{
document.getElementById('supersneakers').style.border="2px gray solid";
document.getElementById('supersneakers').style.background="url('supersneakers2.jpg')";
document.getElementById('supersneakers').style.backgroundSize="80px 76px";
}
else if(document.getElementById('supersneakers').disabled==false)
{
document.getElementById('supersneakers').style.border="2px lime solid";
document.getElementById('supersneakers').style.background="url('supersneakers.JPG')";
document.getElementById('supersneakers').style.backgroundSize="80px 76px";
}
},10);

function powerupsdescription()
{
document.getElementById('powerupshints').style.display="block";
}
function hintsclose()
{
document.getElementById('powerupshints').style.display="none";
}

function dispdoodlestats()
{
document.getElementById('doodlestats').style.display="block";
document.getElementById('doodleview').style.display="none";
}
function doodlestatsback()
{
document.getElementById('doodlestats').style.display="none";
document.getElementById('doodleview').style.display="block";
}

const NO_OF_HIGH_SCORES = 10;
const HIGH_SCORES = 'highScoresd';
function checkHighScore(score) {
  const highScoresd = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
  const lowestScore = highScoresd[NO_OF_HIGH_SCORES - 1]?.score ?? 0;
  
  if (score > lowestScore) {
    saveHighScore(score, highScoresd); 
    showHighScores(); 
  }
}
function saveHighScore(score, highScoresd) {	
if(localStorage.getItem('name2d')==undefined)
localStorage.setItem('name2d','Type here');

  const name = prompt('You secured top 10 spot in game stats, please enter your name:',localStorage.getItem('name2d'));
  const newScore = { name, score };
  localStorage.setItem('name2d',name);
  highScoresd.push(newScore);
  highScoresd.sort((a, b) => b.score-a.score);
  highScoresd.splice(NO_OF_HIGH_SCORES);
  localStorage.setItem(HIGH_SCORES, JSON.stringify(highScoresd));
}
function showHighScores() {
  const highScoresd = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
  const highScoreList = document.getElementById(HIGH_SCORES);
  document.getElementById('highscore').innerHTML='Highest Score- '+highScoresd[0].score;
  highScoreList.innerHTML = highScoresd
    .map((score) => `<li>${score.name}- ${score.score} points`)
    .join('');
}

function doodlehome()
{
window.location.reload();
}

function replaygamedisp()
{
document.getElementById('replaygame2').style.display="block";
document.getElementById('homedisp').style.display="none";
}
function doodlehomedisp()
{
document.getElementById('homedisp').style.display="block";
document.getElementById('replaygame2').style.display="none";
}

function gameback()
{
document.getElementById('replaygame2').style.display="none";
document.getElementById('homedisp').style.display="none";
}

function startgame()
{
sessionStorage.setItem('doodlestart','true');
document.location.reload();
}
function restartgame()
{
sessionStorage.setItem('doodlestart','true');
document.location.reload();
}

window.onload=function()
{
storage = sessionStorage.getItem('doodlestart');
if(storage)
{
sessionStorage.removeItem('doodlestart');
requestAnimationFrame(loop);
document.getElementById('doodleview').style.display="none";
document.getElementById('doodlegameview').style.display="block";
startCount();
sensitivitycheck();
gravityicheck();
minScheck();
jaudiocheck();
powercheck();
bgcodeddcheck();
doodlecodecheck();
platformcodecheck();
showHighScores(); 
}
}

var timecounter=-1;
var timer_on=0;
function doodletimefunc()
{
timecounter++;
doodletimeout=setTimeout(doodletimefunc,1000);
doodletimenet=timecounter;
doodletimenets=doodletimenet%60;
if(doodletimenets<10)
doodletimenets='0'+doodletimenets;
doodletimenetm=parseInt(doodletimenet/60);
if(doodletimenetm<10)
doodletimenetm='0'+doodletimenetm;
timedoodleshow=document.getElementById('timedoodle').innerHTML='Time- '+doodletimenetm+':'+doodletimenets;
}
function startCount() 
{
if (!timer_on) 
{
timer_on=1;
doodletimefunc();
}
}
function stopCount() 
{
clearTimeout(doodletimeout);
timer_on=0;
}

function dispdoodlesettings()
{
document.getElementById('dispdoodlesettings').style.display="block";
document.getElementById('doodleview').style.display="none";
}

function dispsettingsback()
{
document.getElementById('dispdoodlesettings').style.display="none";
document.getElementById('doodleview').style.display="block";
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

sensitivity=3;
localStorage.setItem('sensitivity',sensitivity);
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

sensitivity=4;
localStorage.setItem('sensitivity',sensitivity);
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

sensitivity=5;
localStorage.setItem('sensitivity',sensitivity);
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

sensitivity=6;
localStorage.setItem('sensitivity',sensitivity);
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

sensitivity=7;
localStorage.setItem('sensitivity',sensitivity);
}

function sensitivitycheck()
{
sensitivity=localStorage.getItem('sensitivity');
if(sensitivity==3)
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
}
else if(sensitivity==4)
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
}
else if(sensitivity==5)
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
}
else if(sensitivity==6)
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
}
else if(sensitivity==7)
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
}
}

function g1()
{
document.getElementById('g1').style.border="white 2px solid";
document.getElementById('g1').style.backgroundColor="lime";
document.getElementById('g2').style.border="black 2px solid";
document.getElementById('g2').style.backgroundColor="green";
document.getElementById('g3').style.border="black 2px solid";
document.getElementById('g3').style.backgroundColor="green";
document.getElementById('g4').style.border="black 2px solid";
document.getElementById('g4').style.backgroundColor="green";
document.getElementById('g5').style.border="black 2px solid";
document.getElementById('g5').style.backgroundColor="green";

gravityi=0.15;
localStorage.setItem('gravityi',gravityi);
}
function g2()
{
document.getElementById('g1').style.border="black 2px solid";
document.getElementById('g1').style.backgroundColor="green";
document.getElementById('g2').style.border="white 2px solid";
document.getElementById('g2').style.backgroundColor="lime";
document.getElementById('g3').style.border="black 2px solid";
document.getElementById('g3').style.backgroundColor="green";
document.getElementById('g4').style.border="black 2px solid";
document.getElementById('g4').style.backgroundColor="green";
document.getElementById('g5').style.border="black 2px solid";
document.getElementById('g5').style.backgroundColor="green";

gravityi=0.2;
localStorage.setItem('gravityi',gravityi);
}
function g3()
{
document.getElementById('g1').style.border="black 2px solid";
document.getElementById('g1').style.backgroundColor="green";
document.getElementById('g2').style.border="black 2px solid";
document.getElementById('g2').style.backgroundColor="green";
document.getElementById('g3').style.border="white 2px solid";
document.getElementById('g3').style.backgroundColor="lime";
document.getElementById('g4').style.border="black 2px solid";
document.getElementById('g4').style.backgroundColor="green";
document.getElementById('g5').style.border="black 2px solid";
document.getElementById('g5').style.backgroundColor="green";

gravityi=0.26;
localStorage.setItem('gravityi',gravityi);
}
function g4()
{
document.getElementById('g1').style.border="black 2px solid";
document.getElementById('g1').style.backgroundColor="green";
document.getElementById('g2').style.border="black 2px solid";
document.getElementById('g2').style.backgroundColor="green";
document.getElementById('g3').style.border="black 2px solid";
document.getElementById('g3').style.backgroundColor="green";
document.getElementById('g4').style.border="white 2px solid";
document.getElementById('g4').style.backgroundColor="lime";
document.getElementById('g5').style.border="black 2px solid";
document.getElementById('g5').style.backgroundColor="green";

gravityi=0.325;
localStorage.setItem('gravityi',gravityi);
}
function g5()
{
document.getElementById('g1').style.border="black 2px solid";
document.getElementById('g1').style.backgroundColor="green";
document.getElementById('g2').style.border="black 2px solid";
document.getElementById('g2').style.backgroundColor="green";
document.getElementById('g3').style.border="black 2px solid";
document.getElementById('g3').style.backgroundColor="green";
document.getElementById('g4').style.border="black 2px solid";
document.getElementById('g4').style.backgroundColor="green";
document.getElementById('g5').style.border="white 2px solid";
document.getElementById('g5').style.backgroundColor="lime";

gravityi=0.4;
localStorage.setItem('gravityi',gravityi);
}

function gravityicheck()
{
gravityi=localStorage.getItem('gravityi');
if(gravityi==0.15)
{
document.getElementById('g1').style.border="white 2px solid";
document.getElementById('g1').style.backgroundColor="lime";
document.getElementById('g2').style.border="black 2px solid";
document.getElementById('g2').style.backgroundColor="green";
document.getElementById('g3').style.border="black 2px solid";
document.getElementById('g3').style.backgroundColor="green";
document.getElementById('g4').style.border="black 2px solid";
document.getElementById('g4').style.backgroundColor="green";
document.getElementById('g5').style.border="black 2px solid";
document.getElementById('g5').style.backgroundColor="green";
}
else if(gravityi==0.2)
{
document.getElementById('g1').style.border="black 2px solid";
document.getElementById('g1').style.backgroundColor="green";
document.getElementById('g2').style.border="white 2px solid";
document.getElementById('g2').style.backgroundColor="lime";
document.getElementById('g3').style.border="black 2px solid";
document.getElementById('g3').style.backgroundColor="green";
document.getElementById('g4').style.border="black 2px solid";
document.getElementById('g4').style.backgroundColor="green";
document.getElementById('g5').style.border="black 2px solid";
document.getElementById('g5').style.backgroundColor="green";
}
else if(gravityi==0.26)
{
document.getElementById('g1').style.border="black 2px solid";
document.getElementById('g1').style.backgroundColor="green";
document.getElementById('g2').style.border="black 2px solid";
document.getElementById('g2').style.backgroundColor="green";
document.getElementById('g3').style.border="white 2px solid";
document.getElementById('g3').style.backgroundColor="lime";
document.getElementById('g4').style.border="black 2px solid";
document.getElementById('g4').style.backgroundColor="green";
document.getElementById('g5').style.border="black 2px solid";
document.getElementById('g5').style.backgroundColor="green";
}
else if(gravityi==0.325)
{
document.getElementById('g1').style.border="black 2px solid";
document.getElementById('g1').style.backgroundColor="green";
document.getElementById('g2').style.border="black 2px solid";
document.getElementById('g2').style.backgroundColor="green";
document.getElementById('g3').style.border="black 2px solid";
document.getElementById('g3').style.backgroundColor="green";
document.getElementById('g4').style.border="white 2px solid";
document.getElementById('g4').style.backgroundColor="lime";
document.getElementById('g5').style.border="black 2px solid";
document.getElementById('g5').style.backgroundColor="green";
}
else if(gravityi==0.4)
{
document.getElementById('g1').style.border="black 2px solid";
document.getElementById('g1').style.backgroundColor="green";
document.getElementById('g2').style.border="black 2px solid";
document.getElementById('g2').style.backgroundColor="green";
document.getElementById('g3').style.border="black 2px solid";
document.getElementById('g3').style.backgroundColor="green";
document.getElementById('g4').style.border="black 2px solid";
document.getElementById('g4').style.backgroundColor="green";
document.getElementById('g5').style.border="white 2px solid";
document.getElementById('g5').style.backgroundColor="lime";
}
}

function pg1()
{
document.getElementById('pg1').style.border="white 2px solid";
document.getElementById('pg1').style.backgroundColor="lime";
document.getElementById('pg2').style.border="black 2px solid";
document.getElementById('pg2').style.backgroundColor="green";
document.getElementById('pg3').style.border="black 2px solid";
document.getElementById('pg3').style.backgroundColor="green";
document.getElementById('pg4').style.border="black 2px solid";
document.getElementById('pg4').style.backgroundColor="green";
document.getElementById('pg5').style.border="black 2px solid";
document.getElementById('pg5').style.backgroundColor="green";

minS=50;
localStorage.setItem('minS',minS);
maxS=60;
localStorage.setItem('maxS',maxS);
}
function pg2()
{
document.getElementById('pg1').style.border="black 2px solid";
document.getElementById('pg1').style.backgroundColor="green";
document.getElementById('pg2').style.border="white 2px solid";
document.getElementById('pg2').style.backgroundColor="lime";
document.getElementById('pg3').style.border="black 2px solid";
document.getElementById('pg3').style.backgroundColor="green";
document.getElementById('pg4').style.border="black 2px solid";
document.getElementById('pg4').style.backgroundColor="green";
document.getElementById('pg5').style.border="black 2px solid";
document.getElementById('pg5').style.backgroundColor="green";

minS=60;
localStorage.setItem('minS',minS);
maxS=70;
localStorage.setItem('maxS',maxS);
}
function pg3()
{
document.getElementById('pg1').style.border="black 2px solid";
document.getElementById('pg1').style.backgroundColor="green";
document.getElementById('pg2').style.border="black 2px solid";
document.getElementById('pg2').style.backgroundColor="green";
document.getElementById('pg3').style.border="white 2px solid";
document.getElementById('pg3').style.backgroundColor="lime";
document.getElementById('pg4').style.border="black 2px solid";
document.getElementById('pg4').style.backgroundColor="green";
document.getElementById('pg5').style.border="black 2px solid";
document.getElementById('pg5').style.backgroundColor="green";

minS=70;
localStorage.setItem('minS',minS);
maxS=80;
localStorage.setItem('maxS',maxS);
}
function pg4()
{
document.getElementById('pg1').style.border="black 2px solid";
document.getElementById('pg1').style.backgroundColor="green";
document.getElementById('pg2').style.border="black 2px solid";
document.getElementById('pg2').style.backgroundColor="green";
document.getElementById('pg3').style.border="black 2px solid";
document.getElementById('pg3').style.backgroundColor="green";
document.getElementById('pg4').style.border="white 2px solid";
document.getElementById('pg4').style.backgroundColor="lime";
document.getElementById('pg5').style.border="black 2px solid";
document.getElementById('pg5').style.backgroundColor="green";

minS=80;
localStorage.setItem('minS',minS);
maxS=90;
localStorage.setItem('maxS',maxS);
}
function pg5()
{
document.getElementById('pg1').style.border="black 2px solid";
document.getElementById('pg1').style.backgroundColor="green";
document.getElementById('pg2').style.border="black 2px solid";
document.getElementById('pg2').style.backgroundColor="green";
document.getElementById('pg3').style.border="black 2px solid";
document.getElementById('pg3').style.backgroundColor="green";
document.getElementById('pg4').style.border="black 2px solid";
document.getElementById('pg4').style.backgroundColor="green";
document.getElementById('pg5').style.border="white 2px solid";
document.getElementById('pg5').style.backgroundColor="lime";

minS=90;
localStorage.setItem('minS',minS);
maxS=100;
localStorage.setItem('maxS',maxS);
}

function minScheck()
{
minS=localStorage.getItem('minS');
if(minS==50)
{
document.getElementById('pg1').style.border="white 2px solid";
document.getElementById('pg1').style.backgroundColor="lime";
document.getElementById('pg2').style.border="black 2px solid";
document.getElementById('pg2').style.backgroundColor="green";
document.getElementById('pg3').style.border="black 2px solid";
document.getElementById('pg3').style.backgroundColor="green";
document.getElementById('pg4').style.border="black 2px solid";
document.getElementById('pg4').style.backgroundColor="green";
document.getElementById('pg5').style.border="black 2px solid";
document.getElementById('pg5').style.backgroundColor="green";
maxS=60;
localStorage.setItem('maxS',maxS);
}
else if(minS==60)
{
document.getElementById('pg1').style.border="black 2px solid";
document.getElementById('pg1').style.backgroundColor="green";
document.getElementById('pg2').style.border="white 2px solid";
document.getElementById('pg2').style.backgroundColor="lime";
document.getElementById('pg3').style.border="black 2px solid";
document.getElementById('pg3').style.backgroundColor="green";
document.getElementById('pg4').style.border="black 2px solid";
document.getElementById('pg4').style.backgroundColor="green";
document.getElementById('pg5').style.border="black 2px solid";
document.getElementById('pg5').style.backgroundColor="green";
maxS=70;
localStorage.setItem('maxS',maxS);
}
else if(minS==70)
{
document.getElementById('pg1').style.border="black 2px solid";
document.getElementById('pg1').style.backgroundColor="green";
document.getElementById('pg2').style.border="black 2px solid";
document.getElementById('pg2').style.backgroundColor="green";
document.getElementById('pg3').style.border="white 2px solid";
document.getElementById('pg3').style.backgroundColor="lime";
document.getElementById('pg4').style.border="black 2px solid";
document.getElementById('pg4').style.backgroundColor="green";
document.getElementById('pg5').style.border="black 2px solid";
document.getElementById('pg5').style.backgroundColor="green";
maxS=80;
localStorage.setItem('maxS',maxS);
}
else if(minS==80)
{
document.getElementById('pg1').style.border="black 2px solid";
document.getElementById('pg1').style.backgroundColor="green";
document.getElementById('pg2').style.border="black 2px solid";
document.getElementById('pg2').style.backgroundColor="green";
document.getElementById('pg3').style.border="black 2px solid";
document.getElementById('pg3').style.backgroundColor="green";
document.getElementById('pg4').style.border="white 2px solid";
document.getElementById('pg4').style.backgroundColor="lime";
document.getElementById('pg5').style.border="black 2px solid";
document.getElementById('pg5').style.backgroundColor="green";
maxS=90;
localStorage.setItem('maxS',maxS);
}
else if(minS==90)
{
document.getElementById('pg1').style.border="black 2px solid";
document.getElementById('pg1').style.backgroundColor="green";
document.getElementById('pg2').style.border="black 2px solid";
document.getElementById('pg2').style.backgroundColor="green";
document.getElementById('pg3').style.border="black 2px solid";
document.getElementById('pg3').style.backgroundColor="green";
document.getElementById('pg4').style.border="black 2px solid";
document.getElementById('pg4').style.backgroundColor="green";
document.getElementById('pg5').style.border="white 2px solid";
document.getElementById('pg5').style.backgroundColor="lime";
maxS=100;
localStorage.setItem('maxS',maxS);
}
}

function soundon()
{
jaudio=1;
localStorage.setItem('jaudio',jaudio);
}
function soundoff()
{
jaudio=0;
localStorage.setItem('jaudio',jaudio);
}

function jaudiocheck()
{
jaudio=localStorage.getItem('jaudio');
if(jaudio==1)
{
document.getElementById('soundon').checked=true;
document.getElementById('soundoff').checked=false;
}
else if(jaudio==0)
{
document.getElementById('soundon').checked=false;
document.getElementById('soundoff').checked=true;
}
}

function poweron()
{
powerup=1;
localStorage.setItem('powerup',powerup);
document.getElementById('powerup').style.display="block";
}
function poweroff()
{
powerup=0;
localStorage.setItem('powerup',powerup);
document.getElementById('powerup').style.display="none";
}

function powercheck()
{
powerup=localStorage.getItem('powerup');
if(powerup==1)
{
document.getElementById('poweron').checked=true;
document.getElementById('poweroff').checked=false;
document.getElementById('powerup').style.display="block";
}
else if(powerup==0)
{
document.getElementById('poweron').checked=false;
document.getElementById('poweroff').checked=true;
document.getElementById('powerup').style.display="none";
}
}

function bgpaper()
{
document.getElementById('game').style.background="url('paper.jpg')";
document.getElementById('game').style.backgroundSize="375px 667px";

document.getElementById('bgpaper').style.border="lime 2px solid";
document.getElementById('bgsky').style.border="black 2px solid";
document.getElementById('bgcomet').style.border="black 2px solid";
document.getElementById('bgcloud').style.border="black 2px solid";

bgcodedd=1;
localStorage.setItem('bgcodedd',bgcodedd);
}
function bgsky()
{
document.getElementById('game').style.background="url('sky3.jpg')";
document.getElementById('game').style.backgroundSize="375px 667px";

document.getElementById('bgpaper').style.border="black 2px solid";
document.getElementById('bgsky').style.border="lime 2px solid";
document.getElementById('bgcomet').style.border="black 2px solid";
document.getElementById('bgcloud').style.border="black 2px solid";

bgcodedd=2;
localStorage.setItem('bgcodedd',bgcodedd);
}
function bgcloud()
{
document.getElementById('game').style.background="url('cloud4.gif')";
document.getElementById('game').style.backgroundSize="375px 667px";

document.getElementById('bgpaper').style.border="black 2px solid";
document.getElementById('bgsky').style.border="black 2px solid";
document.getElementById('bgcomet').style.border="black 2px solid";
document.getElementById('bgcloud').style.border="lime 2px solid";

bgcodedd=3;
localStorage.setItem('bgcodedd',bgcodedd);
}
function bgcomet()
{
document.getElementById('game').style.background="url('comet2.gif')";
document.getElementById('game').style.backgroundSize="375px 667px";

document.getElementById('bgpaper').style.border="black 2px solid";
document.getElementById('bgsky').style.border="black 2px solid";
document.getElementById('bgcomet').style.border="lime 2px solid";
document.getElementById('bgcloud').style.border="black 2px solid";

bgcodedd=4;
localStorage.setItem('bgcodedd',bgcodedd);
}

function bgcodeddcheck()
{
bgcodedd=localStorage.getItem('bgcodedd');
if(bgcodedd==1)	
{
document.getElementById('game').style.background="url('paper.jpg')";
document.getElementById('game').style.backgroundSize="375px 667px";

document.getElementById('bgpaper').style.border="lime 2px solid";
document.getElementById('bgsky').style.border="black 2px solid";
document.getElementById('bgcomet').style.border="black 2px solid";
document.getElementById('bgcloud').style.border="black 2px solid";
}
else if(bgcodedd==2)	
{
document.getElementById('game').style.background="url('sky3.jpg')";
document.getElementById('game').style.backgroundSize="375px 667px";

document.getElementById('bgpaper').style.border="black 2px solid";
document.getElementById('bgsky').style.border="lime 2px solid";
document.getElementById('bgcomet').style.border="black 2px solid";
document.getElementById('bgcloud').style.border="black 2px solid";
}
else if(bgcodedd==3)	
{
document.getElementById('game').style.background="url('cloud4.gif')";
document.getElementById('game').style.backgroundSize="375px 667px";

document.getElementById('bgpaper').style.border="black 2px solid";
document.getElementById('bgsky').style.border="black 2px solid";
document.getElementById('bgcomet').style.border="black 2px solid";
document.getElementById('bgcloud').style.border="lime 2px solid";
}
else if(bgcodedd==4)	
{
document.getElementById('game').style.background="url('comet2.gif')";
document.getElementById('game').style.backgroundSize="375px 667px";

document.getElementById('bgpaper').style.border="black 2px solid";
document.getElementById('bgsky').style.border="black 2px solid";
document.getElementById('bgcomet').style.border="lime 2px solid";
document.getElementById('bgcloud').style.border="black 2px solid";
}
}

function doodle1()
{
doodlepic100="doodle3.png";

document.getElementById('doodle1').style.border="lime 2px solid";
document.getElementById('doodle2').style.border="black 2px solid";
document.getElementById('jelly').style.border="black 2px solid";
document.getElementById('ball').style.border="black 2px solid";

doodlecode=1;
localStorage.setItem('doodlecode',doodlecode);
}
function doodle2()
{
doodlepic100="doodle2.gif";

document.getElementById('doodle1').style.border="black 2px solid";
document.getElementById('doodle2').style.border="lime 2px solid";
document.getElementById('jelly').style.border="black 2px solid";
document.getElementById('ball').style.border="black 2px solid";

doodlecode=2;
localStorage.setItem('doodlecode',doodlecode);
}
function ball()
{
doodlepic100="ball.png";

document.getElementById('doodle1').style.border="black 2px solid";
document.getElementById('doodle2').style.border="black 2px solid";
document.getElementById('jelly').style.border="black 2px solid";
document.getElementById('ball').style.border="lime 2px solid";

doodlecode=3;
localStorage.setItem('doodlecode',doodlecode);
}
function jelly()
{
doodlepic100="jelly2.gif";

document.getElementById('doodle1').style.border="black 2px solid";
document.getElementById('doodle2').style.border="black 2px solid";
document.getElementById('jelly').style.border="lime 2px solid";
document.getElementById('ball').style.border="black 2px solid";

doodlecode=4;
localStorage.setItem('doodlecode',doodlecode);
}

function doodlecodecheck()
{
doodlecode=localStorage.getItem('doodlecode');
if(doodlecode==1)	
{
doodlepic100="doodle3.png";

document.getElementById('doodle1').style.border="lime 2px solid";
document.getElementById('doodle2').style.border="black 2px solid";
document.getElementById('jelly').style.border="black 2px solid";
document.getElementById('ball').style.border="black 2px solid";
}
else if(doodlecode==2)	
{
doodlepic100="doodle2.gif";

document.getElementById('doodle1').style.border="black 2px solid";
document.getElementById('doodle2').style.border="lime 2px solid";
document.getElementById('jelly').style.border="black 2px solid";
document.getElementById('ball').style.border="black 2px solid";
}
else if(doodlecode==3)	
{
doodlepic100="ball.png";

document.getElementById('doodle1').style.border="black 2px solid";
document.getElementById('doodle2').style.border="black 2px solid";
document.getElementById('jelly').style.border="black 2px solid";
document.getElementById('ball').style.border="lime 2px solid";
}
else if(doodlecode==4)	
{
doodlepic100="jelly2.gif";

document.getElementById('doodle1').style.border="black 2px solid";
document.getElementById('doodle2').style.border="black 2px solid";
document.getElementById('jelly').style.border="lime 2px solid";
document.getElementById('ball').style.border="black 2px solid";
}
}

function blackp()
{
doodlepic1000="black3.jpg";

document.getElementById('blackp').style.border="lime 2px solid";
document.getElementById('groundp').style.border="black 2px solid";
document.getElementById('brickp').style.border="black 2px solid";
document.getElementById('cloudp').style.border="black 2px solid";
document.getElementById('skullp').style.border="black 2px solid";

platformcode=1;
localStorage.setItem('platformcode',platformcode);
}
function groundp()
{
doodlepic1000="ground2.png";

document.getElementById('blackp').style.border="black 2px solid";
document.getElementById('groundp').style.border="lime 2px solid";
document.getElementById('brickp').style.border="black 2px solid";
document.getElementById('cloudp').style.border="black 2px solid";
document.getElementById('skullp').style.border="black 2px solid";

platformcode=2;
localStorage.setItem('platformcode',platformcode);
}
function cloudp()
{
doodlepic1000="cloud3.gif";

document.getElementById('blackp').style.border="black 2px solid";
document.getElementById('groundp').style.border="black 2px solid";
document.getElementById('brickp').style.border="black 2px solid";
document.getElementById('cloudp').style.border="lime 2px solid";
document.getElementById('skullp').style.border="black 2px solid";

platformcode=3;
localStorage.setItem('platformcode',platformcode);
}
function brickp()
{
doodlepic1000="Brick2.jpg";

document.getElementById('blackp').style.border="black 2px solid";
document.getElementById('groundp').style.border="black 2px solid";
document.getElementById('brickp').style.border="lime 2px solid";
document.getElementById('cloudp').style.border="black 2px solid";
document.getElementById('skullp').style.border="black 2px solid";

platformcode=4;
localStorage.setItem('platformcode',platformcode);
}
function skullp()
{
doodlepic1000="skull.png";

document.getElementById('blackp').style.border="black 2px solid";
document.getElementById('groundp').style.border="black 2px solid";
document.getElementById('brickp').style.border="black 2px solid";
document.getElementById('cloudp').style.border="black 2px solid";
document.getElementById('skullp').style.border="lime 2px solid";

platformcode=5;
localStorage.setItem('platformcode',platformcode);
}

function platformcodecheck()
{
platformcode=localStorage.getItem('platformcode');
if(platformcode==1)	
{
doodlepic1000="black3.jpg";

document.getElementById('blackp').style.border="lime 2px solid";
document.getElementById('groundp').style.border="black 2px solid";
document.getElementById('brickp').style.border="black 2px solid";
document.getElementById('cloudp').style.border="black 2px solid";
document.getElementById('skullp').style.border="black 2px solid";
}
else if(platformcode==2)	
{
doodlepic1000="ground2.png";

document.getElementById('blackp').style.border="black 2px solid";
document.getElementById('groundp').style.border="lime 2px solid";
document.getElementById('brickp').style.border="black 2px solid";
document.getElementById('cloudp').style.border="black 2px solid";
document.getElementById('skullp').style.border="black 2px solid";
}
else if(platformcode==3)	
{
doodlepic1000="cloud3.gif";

document.getElementById('blackp').style.border="black 2px solid";
document.getElementById('groundp').style.border="black 2px solid";
document.getElementById('brickp').style.border="black 2px solid";
document.getElementById('cloudp').style.border="lime 2px solid";
document.getElementById('skullp').style.border="black 2px solid";
}
else if(platformcode==4)	
{
doodlepic1000="Brick2.jpg";

document.getElementById('blackp').style.border="black 2px solid";
document.getElementById('groundp').style.border="black 2px solid";
document.getElementById('brickp').style.border="lime 2px solid";
document.getElementById('cloudp').style.border="black 2px solid";
document.getElementById('skullp').style.border="black 2px solid";
}
else if(platformcode==5)	
{
doodlepic1000="skull.png";

document.getElementById('blackp').style.border="black 2px solid";
document.getElementById('groundp').style.border="black 2px solid";
document.getElementById('brickp').style.border="black 2px solid";
document.getElementById('cloudp').style.border="black 2px solid";
document.getElementById('skullp').style.border="lime 2px solid";
}
}













