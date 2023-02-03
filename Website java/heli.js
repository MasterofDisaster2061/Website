
hspeedcheck();
bgcodehcheck();
gravcheck();
haudiocheck();
tccheck();
tcocheck();

function initialhelidatafunc()
 {
 if(localStorage.getItem('hspeed')==undefined)
 {
 hspeed=localStorage.setItem('hspeed',7);
 }
 else
 {
 hspeed=localStorage.getItem('hspeed');
 }
 
 if(localStorage.getItem('bgcodeh')==undefined)
 {
 bgcodeh=localStorage.setItem('bgcodeh',1);
 }
 else
 {
 bgcodeh=localStorage.getItem('bgcodeh');
 }
  
 if(localStorage.getItem('grav')==undefined)
 {
 grav=localStorage.setItem('grav',0.2);
 }
 else
 {
 grav=localStorage.getItem('grav');
 }
 
 if(localStorage.getItem('haudio')==undefined)
 {
 haudio=localStorage.setItem('haudio',1);
 }
 else
 {
 haudio=localStorage.getItem('haudio');
 }
 
 if(localStorage.getItem('tccode')==undefined)
 {
 tccode=localStorage.setItem('tccode',1);
 minH=Number(localStorage.setItem('minH',100));
 maxH=Number(localStorage.setItem('maxH',100));
 obsheight=Number(localStorage.setItem('obsheight',100));
 }
 else
 {
 tccode=localStorage.getItem('tccode');
 minH=Number(localStorage.getItem('minH'));
 maxH=Number(localStorage.getItem('maxH'));
 obsheight=Number(localStorage.getItem('obsheight'));
 }
 
 if(localStorage.getItem('tcolor')==undefined)
 {
 tcolor=localStorage.setItem('tcolor','green');
 }
 else
 {
 tcolor=localStorage.getItem('tcolor');
 }
 }
 initialhelidatafunc();
 
var crash= new Audio('crash.wav');
var helisound= new Audio('helisound.mp3');
var scoreh=0;

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

const minTunnelWidth = 200;
const maxTunnelWidth = canvas.width;
const minHeight = minH;
const maxHeight = maxH;

const obstacleWidth = 50;
const obstacleHeight = obsheight;

// how fast the background moves
const moveSpeed = hspeed;

// downward acceleration
const gravity = Number(grav);

// keep track of the spacebar being pressed so we can move the
// helicopter up when pressed and down when not pressed
let spacePressed = false;

// clamp a number between min and max values
function clamp(num, min, max) {
  return Math.min( Math.max(min, num), max);
}

// return a random integer between min (inclusive) and max (inclusive)
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const helicopter = {
  x: 200,
  y: 100,
  width: 100,
  height: 60,
  dy: 0,  // velocity
  ddy: 0  // acceleration
};

// just keep track of a tunnel wall current x position, width, start
// and end height. the top and bottom wall are mirrored, so we only
// need to keep track of one of them
let tunnels = [{
  x: 0,
  width: canvas.width,
  start: 50,
  end: 50
},
{
  x: canvas.width,
  width: randInt(minTunnelWidth, maxTunnelWidth),
  start: 50,
  end: randInt(minHeight, maxHeight)
}];

// for the obstacles in the path just need to keep track of the
// position as they are always the same size
let obstacles = [{
  x: canvas.width,
  y: canvas.height / 2
},
{
  x: canvas.width * 2,
  y: canvas.height / 2
}];
  
// tunnel wall color and rgb value
const wallColor = tcolor;
context.fillStyle = wallColor;
context.fillRect(0, 0, 1, 1);

// getImageData returns a data object which is a flat array of every
// pixel of the canvas in the specified rect (x, y, width, height).
// every 4 indices of the array is a single pixel's r,g,b,a values
const wallData = context.getImageData(0, 0, 1, 1);

// destructure the image data array to get the rgb values of the wall
const [ wallRed, wallGreen, wallBlue ] = wallData.data;

// game loop
let rAF;
function loop() {
	
if(haudio==1)
{helisound.play();
helisound.loop=true;}

  rAF = requestAnimationFrame(loop);
  context.clearRect(0,0,canvas.width,canvas.height);

  if (spacePressed) {
    helicopter.ddy = -0.7;
  }
  else {
    helicopter.ddy = 0;
  }

  // update position based on acceleration and velocity
  helicopter.dy += helicopter.ddy + gravity;
  // clamp velocity
  helicopter.dy = clamp(helicopter.dy, -8, 8);
  helicopter.y += helicopter.dy;

  // draw the helicopter  
context.fillStyle = 'transparent';
context.fillRect(helicopter.x+38, helicopter.y+11, helicopter.width-55, helicopter.height-20 );

setInterval(function()
{
document.getElementById('helicop').style.top=helicopter.y+2;
document.getElementById('helicop2').style.top=helicopter.y+2;
},10)

helitimeout=setTimeout(scoreheli,1)
function scoreheli()
{
scoreh++;
score2=parseInt(scoreh/10);
document.getElementById('Score').innerHTML='Score:'+score2;
}

 // draw the tunnel walls over the helicopter
  context.fillStyle = tcolor;
  tunnels.forEach((tunnel, index) => {
    tunnel.x -= moveSpeed;

    // if the last tunnel is fully on screen, we need to spawn a new
    // tunnel segment off screen
    if (
      index === tunnels.length - 1 &&
      tunnel.x + tunnel.width <= canvas.width	 
    ) {
      tunnels.push({
        x: tunnel.x + tunnel.width,
        width: randInt(minTunnelWidth, maxTunnelWidth),
        start: tunnel.end,
        end: randInt(minHeight, maxHeight)
      });
    }

    // top tunnel wall
    context.beginPath();
    context.moveTo(tunnel.x, 0);
    context.lineTo(tunnel.x, tunnel.start);
    context.lineTo(tunnel.x + tunnel.width, tunnel.end);
    context.lineTo(tunnel.x + tunnel.width, 0);
    context.closePath();
    context.fill();

    // bottom tunnel wall
    context.beginPath();
    context.moveTo(tunnel.x, canvas.height);
    context.lineTo(tunnel.x, tunnel.start + 450);
    context.lineTo(tunnel.x + tunnel.width, tunnel.end + 450);
    context.lineTo(tunnel.x + tunnel.width, canvas.height);
    context.closePath();
    context.fill();
  });

  // draw obstacles
  obstacles.forEach((obstacle, index) => {
    obstacle.x -= moveSpeed;
    context.fillRect(obstacle.x, obstacle.y, obstacleWidth, obstacleHeight);

    // if the last obstacle is fully on screen, we need to spawn a new
    // one off screen
    if (
      index === obstacles.length - 1 &&
      obstacle.x + obstacleWidth <= canvas.width
    ) {
      obstacles.push({
        x: canvas.width * 2,
        y: randInt(maxHeight + 50, canvas.height - obstacleHeight - maxHeight - 50)
      });
    }
  });

  // remove any tunnel segments or obstacles that are off screen
  tunnels = tunnels.filter(tunnel => tunnel.x + tunnel.width > 0);
  obstacles = obstacles.filter(obstacle => obstacle.x + obstacleWidth > 0);

  // pixel perfect collision detection
  // get the pixels of the canvas at the helicopter rect and look for
  // any pixels that match the wall color. the wall has to be drawn
  // above the helicopter in order for this to work
  const { data } = context.getImageData(helicopter.x+38, helicopter.y+11, helicopter.width-55, helicopter.height-20);

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // if we match the tunnel wall color we have a collision
    if (r === wallRed && g === wallGreen && b === wallBlue) {
      // crashes  	 
      cancelAnimationFrame(rAF);	
      clearTimeout(helitimeout);
	  
	  
	  document.getElementById('helicop2').style.display="block";
	  document.getElementById('helicop').style.display="none";	 
	  document.getElementById('Score').style.display="none";
	  document.getElementById('div').style.display="none";
	  
	  helisound.pause();
	  if(haudio==1)
	  {crash.play();
	  crash.playbackRate=1.2;}
	  
	  gameovertimeout=setTimeout(function()
	  {
	  checkHighScore(score2);
	  document.getElementById('gameoverscore').innerHTML='Score: '+score2;
	  document.getElementById('highscore').innerHTML='Highest Score: '+localStorage.getItem('highscoreheli');
	  document.getElementById('gameoveralert').style.display="block";
	  clearTimeout(gameovertimeout);
	  },200);   
    }
  }
}

// listen to keyboard events to move the helicopter
document.addEventListener('keydown', function(e) {
  // spacebar
  if (e.code === 'Space') {
    spacePressed = true;
  }
});
document.addEventListener('keyup', function(e) {
  // spacebar
  if (e.code === 'Space') {
    spacePressed = false;
  }
});

document.addEventListener('mousedown', function() {
    spacePressed = true;
});
document.addEventListener('mouseup', function() {
    spacePressed = false;
});


function startgame()
{
sessionStorage.setItem('helidata','true');
document.location.reload();
}

function restartgame()
{
sessionStorage.setItem('helidata','true');
document.location.reload();
}

function helihome()
{
window.location.reload();
}

window.onload=function()
{
var helidata=sessionStorage.getItem('helidata');
if(helidata)
{
sessionStorage.removeItem('helidata');
requestAnimationFrame(loop);

document.getElementById('heliview').style.display="none";
document.getElementById('game').style.display="block";
document.getElementById('helicop').style.display="block";
document.getElementById('helicop2').style.display="none";
document.getElementById('div').style.display="block";
document.getElementById('Score').style.display="block";
document.getElementById('div2').style.display="block";
document.getElementById('div3').style.display="none";
document.getElementById('speedscore').style.display="block";
document.getElementById('gravscore').style.display="block";
document.getElementById('tcscore').style.display="block";
document.getElementById('tapfly').style.display="block";
setTimeout(tapfly,1500);

hspeedcheck();
bgcodehcheck();
gravcheck();
haudiocheck();
tccheck();
tcocheck();
}
}

function checkHighScore(score) 
{
highscoreheli= localStorage.getItem('highscoreheli');
  if (score > highscoreheli) 
  { 
    highscoreheli=localStorage.setItem('highscoreheli',score);	
  }
  if(localStorage.getItem('highscoreheli')==undefined)
  highscoreheli= localStorage.setItem('highscoreheli',0);
}

function disphelisettings()
{
document.getElementById('heliview').style.display="none";
document.getElementById('disphelisetting').style.display="block";
}
function dispsettingsback()
{
document.getElementById('heliview').style.display="block";
document.getElementById('disphelisetting').style.display="none";
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

hspeed=7;
localStorage.setItem('hspeed',hspeed);
document.getElementById('speedscore').innerHTML="Speed: 1";
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
hspeed=8;
localStorage.setItem('hspeed',hspeed);
document.getElementById('speedscore').innerHTML="Speed: 2";
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
hspeed=9;
localStorage.setItem('hspeed',hspeed);
document.getElementById('speedscore').innerHTML="Speed: 3";
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
hspeed=10;
localStorage.setItem('hspeed',hspeed);
document.getElementById('speedscore').innerHTML="Speed: 4";
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
hspeed=11;
localStorage.setItem('hspeed',hspeed);
document.getElementById('speedscore').innerHTML="Speed: 5";
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
hspeed=12;
localStorage.setItem('hspeed',hspeed);
document.getElementById('speedscore').innerHTML="Speed: 6";
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
hspeed=13;
localStorage.setItem('hspeed',hspeed);
document.getElementById('speedscore').innerHTML="Speed: 7";
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
hspeed=14;
localStorage.setItem('hspeed',hspeed);
document.getElementById('speedscore').innerHTML="Speed: 8";
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
hspeed=15;
localStorage.setItem('hspeed',hspeed);
document.getElementById('speedscore').innerHTML="Speed: 9";
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
hspeed=16;
localStorage.setItem('hspeed',hspeed);
document.getElementById('speedscore').innerHTML="Speed:10";
}
function hspeedcheck()
{
hspeed=localStorage.getItem('hspeed');
if(hspeed==7)
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

document.getElementById('speedscore').innerHTML="Speed: 1";
}
else if(hspeed==8)
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

document.getElementById('speedscore').innerHTML="Speed: 2";
}
else if(hspeed==9)
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

document.getElementById('speedscore').innerHTML="Speed: 3";
}
else if(hspeed==10)
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

document.getElementById('speedscore').innerHTML="Speed: 4";
}
else if(hspeed==11)
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

document.getElementById('speedscore').innerHTML="Speed: 5";
}
else if(hspeed==12)
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

document.getElementById('speedscore').innerHTML="Speed: 6";
}
else if(hspeed==13)
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

document.getElementById('speedscore').innerHTML="Speed: 7";
}
else if(hspeed==14)
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

document.getElementById('speedscore').innerHTML="Speed: 8";
}
else if(hspeed==15)
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

document.getElementById('speedscore').innerHTML="Speed: 9";
}
else if(hspeed==16)
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

document.getElementById('speedscore').innerHTML="Speed:10";
}
}

function bgblue()
{
document.getElementById('body').style.background="url('dd.png')";
document.getElementById('body').style.backgroundSize="1366px 795px";

document.getElementById('bgblue').style.border="lime 2px solid";
document.getElementById('bgblack').style.border="black 2px solid";
document.getElementById('bgcloud2').style.border="black 2px solid";
document.getElementById('bgwhite').style.border="black 2px solid";
document.getElementById('bgcomet').style.border="black 2px solid";
document.getElementById('bgcloud').style.border="black 2px solid";

bgcodeh=1;
localStorage.setItem('bgcodeh',bgcodeh);
}
function bgwhite()
{
document.getElementById('body').style.background="url('white.jpg')";
document.getElementById('body').style.backgroundSize="1366px 795px";

document.getElementById('bgblue').style.border="black 2px solid";
document.getElementById('bgblack').style.border="black 2px solid";
document.getElementById('bgcloud2').style.border="black 2px solid";
document.getElementById('bgwhite').style.border="lime 2px solid";
document.getElementById('bgcomet').style.border="black 2px solid";
document.getElementById('bgcloud').style.border="black 2px solid";

bgcodeh=2;
localStorage.setItem('bgcodeh',bgcodeh);
}
function bgblack()
{
document.getElementById('body').style.background="url('black2.jpg')";
document.getElementById('body').style.backgroundSize="1366px 795px";

document.getElementById('bgblue').style.border="black 2px solid";
document.getElementById('bgblack').style.border="lime 2px solid";
document.getElementById('bgcloud2').style.border="black 2px solid";
document.getElementById('bgwhite').style.border="black 2px solid";
document.getElementById('bgcomet').style.border="black 2px solid";
document.getElementById('bgcloud').style.border="black 2px solid";

bgcodeh=3;
localStorage.setItem('bgcodeh',bgcodeh);
}
function bgcloud()
{
document.getElementById('body').style.background="url('cloud.gif')";
document.getElementById('body').style.backgroundSize="1366px 795px";

document.getElementById('bgblue').style.border="black 2px solid";
document.getElementById('bgblack').style.border="black 2px solid";
document.getElementById('bgcloud2').style.border="black 2px solid";
document.getElementById('bgwhite').style.border="black 2px solid";
document.getElementById('bgcomet').style.border="black 2px solid";
document.getElementById('bgcloud').style.border="lime 2px solid";

bgcodeh=4;
localStorage.setItem('bgcodeh',bgcodeh);
}
function bgcloud2()
{
document.getElementById('body').style.background="url('cloud2.gif')";
document.getElementById('body').style.backgroundSize="1366px 795px";

document.getElementById('bgblue').style.border="black 2px solid";
document.getElementById('bgblack').style.border="black 2px solid";
document.getElementById('bgcloud2').style.border="lime 2px solid";
document.getElementById('bgwhite').style.border="black 2px solid";
document.getElementById('bgcomet').style.border="black 2px solid";
document.getElementById('bgcloud').style.border="black 2px solid";

bgcodeh=5;
localStorage.setItem('bgcodeh',bgcodeh);
}
function bgcomet()
{
document.getElementById('body').style.background="url('comet.gif')";
document.getElementById('body').style.backgroundSize="1366px 795px";

document.getElementById('bgblue').style.border="black 2px solid";
document.getElementById('bgblack').style.border="black 2px solid";
document.getElementById('bgcloud2').style.border="black 2px solid";
document.getElementById('bgwhite').style.border="black 2px solid";
document.getElementById('bgcomet').style.border="lime 2px solid";
document.getElementById('bgcloud').style.border="black 2px solid";

bgcodeh=6;
localStorage.setItem('bgcodeh',bgcodeh);
}

function bgcodehcheck()
{
bgcodeh=localStorage.getItem('bgcodeh');
if(bgcodeh==1)	
{
document.getElementById('body').style.background="url('dd.png')";
document.getElementById('body').style.backgroundSize="1366px 795px";

document.getElementById('bgblue').style.border="lime 2px solid";
document.getElementById('bgblack').style.border="black 2px solid";
document.getElementById('bgcloud2').style.border="black 2px solid";
document.getElementById('bgwhite').style.border="black 2px solid";
document.getElementById('bgcomet').style.border="black 2px solid";
document.getElementById('bgcloud').style.border="black 2px solid";
}
else if(bgcodeh==2)	
{
document.getElementById('body').style.background="url('white.jpg')";
document.getElementById('body').style.backgroundSize="1366px 795px";

document.getElementById('bgblue').style.border="black 2px solid";
document.getElementById('bgblack').style.border="black 2px solid";
document.getElementById('bgcloud2').style.border="black 2px solid";
document.getElementById('bgwhite').style.border="lime 2px solid";
document.getElementById('bgcomet').style.border="black 2px solid";
document.getElementById('bgcloud').style.border="black 2px solid";
}
else if(bgcodeh==3)	
{
document.getElementById('body').style.background="url('black2.jpg')";
document.getElementById('body').style.backgroundSize="1366px 795px";

document.getElementById('bgblue').style.border="black 2px solid";
document.getElementById('bgblack').style.border="lime 2px solid";
document.getElementById('bgcloud2').style.border="black 2px solid";
document.getElementById('bgwhite').style.border="black 2px solid";
document.getElementById('bgcomet').style.border="black 2px solid";
document.getElementById('bgcloud').style.border="black 2px solid";
}
else if(bgcodeh==4)	
{
document.getElementById('body').style.background="url('cloud.gif')";
document.getElementById('body').style.backgroundSize="1366px 795px";

document.getElementById('bgblue').style.border="black 2px solid";
document.getElementById('bgblack').style.border="black 2px solid";
document.getElementById('bgcloud2').style.border="black 2px solid";
document.getElementById('bgwhite').style.border="black 2px solid";
document.getElementById('bgcomet').style.border="black 2px solid";
document.getElementById('bgcloud').style.border="lime 2px solid";
}
else if(bgcodeh==5)	
{
document.getElementById('body').style.background="url('cloud2.gif')";
document.getElementById('body').style.backgroundSize="1366px 795px";

document.getElementById('bgblue').style.border="black 2px solid";
document.getElementById('bgblack').style.border="black 2px solid";
document.getElementById('bgcloud2').style.border="lime 2px solid";
document.getElementById('bgwhite').style.border="black 2px solid";
document.getElementById('bgcomet').style.border="black 2px solid";
document.getElementById('bgcloud').style.border="black 2px solid";
}
else if(bgcodeh==6)	
{
document.getElementById('body').style.background="url('comet.gif')";
document.getElementById('body').style.backgroundSize="1366px 795px";

document.getElementById('bgblue').style.border="black 2px solid";
document.getElementById('bgblack').style.border="black 2px solid";
document.getElementById('bgcloud2').style.border="black 2px solid";
document.getElementById('bgwhite').style.border="black 2px solid";
document.getElementById('bgcomet').style.border="lime 2px solid";
document.getElementById('bgcloud').style.border="black 2px solid";
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

grav=0.2;
localStorage.setItem('grav',grav);
document.getElementById('gravscore').innerHTML="Gravity Intensity:1";
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

grav=0.25;
localStorage.setItem('grav',grav);
document.getElementById('gravscore').innerHTML="Gravity Intensity:2";
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

grav=0.3;
localStorage.setItem('grav',grav);
document.getElementById('gravscore').innerHTML="Gravity Intensity:3";
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

grav=0.35;
localStorage.setItem('grav',grav);
document.getElementById('gravscore').innerHTML="Gravity Intensity:4";
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

grav=0.4;
localStorage.setItem('grav',grav);
document.getElementById('gravscore').innerHTML="Gravity Intensity:5";
}

function gravcheck()
{
grav=localStorage.getItem('grav');
if(grav==0.2)
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

document.getElementById('gravscore').innerHTML="Gravity Intensity:1";
}
else if(grav==0.25)
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

document.getElementById('gravscore').innerHTML="Gravity Intensity:2";
}
else if(grav==0.3)
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

document.getElementById('gravscore').innerHTML="Gravity Intensity:3";
}
else if(grav==0.35)
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

document.getElementById('gravscore').innerHTML="Gravity Intensity:4";
}
else if(grav==0.4)
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

document.getElementById('gravscore').innerHTML="Gravity Intensity:5";
}
}

function soundon()
{
haudio=1;
localStorage.setItem('haudio',haudio);
}
function soundoff()
{
haudio=0;
localStorage.setItem('haudio',haudio);
}

function haudiocheck()
{
haudio=localStorage.getItem('haudio');
if(haudio==1)
{
document.getElementById('soundon').checked=true;
document.getElementById('soundoff').checked=false;
}
else if(haudio==0)
{
document.getElementById('soundon').checked=false;
document.getElementById('soundoff').checked=true;
}
}

function tc1()
{
document.getElementById('tc1').style.border="white 2px solid";
document.getElementById('tc1').style.backgroundColor="lime";
document.getElementById('tc2').style.border="black 2px solid";
document.getElementById('tc2').style.backgroundColor="green";
document.getElementById('tc3').style.border="black 2px solid";
document.getElementById('tc3').style.backgroundColor="green";
document.getElementById('tc4').style.border="black 2px solid";
document.getElementById('tc4').style.backgroundColor="green";
document.getElementById('tc5').style.border="black 2px solid";
document.getElementById('tc5').style.backgroundColor="green";

tccode=1;
localStorage.setItem('tccode',tccode);
minH=localStorage.setItem('minH',100);
maxH=localStorage.setItem('maxH',100);
obsheight=Number(localStorage.setItem('obsheight',100));

document.getElementById('tcscore').innerHTML="Tunnel Complexity:1";
}
function tc2()
{
document.getElementById('tc1').style.border="black 2px solid";
document.getElementById('tc1').style.backgroundColor="green";
document.getElementById('tc2').style.border="white 2px solid";
document.getElementById('tc2').style.backgroundColor="lime";
document.getElementById('tc3').style.border="black 2px solid";
document.getElementById('tc3').style.backgroundColor="green";
document.getElementById('tc4').style.border="black 2px solid";
document.getElementById('tc4').style.backgroundColor="green";
document.getElementById('tc5').style.border="black 2px solid";
document.getElementById('tc5').style.backgroundColor="green";

tccode=2;
localStorage.setItem('tccode',tccode);
minH=localStorage.setItem('minH',75);
maxH=localStorage.setItem('maxH',125);
obsheight=Number(localStorage.setItem('obsheight',150));

document.getElementById('tcscore').innerHTML="Tunnel Complexity:2";
}
function tc3()
{
document.getElementById('tc1').style.border="black 2px solid";
document.getElementById('tc1').style.backgroundColor="green";
document.getElementById('tc2').style.border="black 2px solid";
document.getElementById('tc2').style.backgroundColor="green";
document.getElementById('tc3').style.border="white 2px solid";
document.getElementById('tc3').style.backgroundColor="lime";
document.getElementById('tc4').style.border="black 2px solid";
document.getElementById('tc4').style.backgroundColor="green";
document.getElementById('tc5').style.border="black 2px solid";
document.getElementById('tc5').style.backgroundColor="green";

tccode=3;
localStorage.setItem('tccode',tccode);
minH=localStorage.setItem('minH',50);
maxH=localStorage.setItem('maxH',175);
obsheight=Number(localStorage.setItem('obsheight',165));

document.getElementById('tcscore').innerHTML="Tunnel Complexity:3";
}
function tc4()
{
document.getElementById('tc1').style.border="black 2px solid";
document.getElementById('tc1').style.backgroundColor="green";
document.getElementById('tc2').style.border="black 2px solid";
document.getElementById('tc2').style.backgroundColor="green";
document.getElementById('tc3').style.border="black 2px solid";
document.getElementById('tc3').style.backgroundColor="green";
document.getElementById('tc4').style.border="white 2px solid";
document.getElementById('tc4').style.backgroundColor="lime";
document.getElementById('tc5').style.border="black 2px solid";
document.getElementById('tc5').style.backgroundColor="green";

tccode=4;
localStorage.setItem('tccode',tccode);
minH=localStorage.setItem('minH',25);
maxH=localStorage.setItem('maxH',210);
obsheight=Number(localStorage.setItem('obsheight',200));

document.getElementById('tcscore').innerHTML="Tunnel Complexity:4";
}
function tc5()
{
document.getElementById('tc1').style.border="black 2px solid";
document.getElementById('tc1').style.backgroundColor="green";
document.getElementById('tc2').style.border="black 2px solid";
document.getElementById('tc2').style.backgroundColor="green";
document.getElementById('tc3').style.border="black 2px solid";
document.getElementById('tc3').style.backgroundColor="green";
document.getElementById('tc4').style.border="black 2px solid";
document.getElementById('tc4').style.backgroundColor="green";
document.getElementById('tc5').style.border="white 2px solid";
document.getElementById('tc5').style.backgroundColor="lime";

tccode=5;
localStorage.setItem('tccode',tccode);
minH=localStorage.setItem('minH',0);
maxH=localStorage.setItem('maxH',250);
obsheight=Number(localStorage.setItem('obsheight',220));

document.getElementById('tcscore').innerHTML="Tunnel Complexity:5";
}

function tccheck()
{
tccode=localStorage.getItem('tccode');
if(tccode==1)
{
document.getElementById('tc1').style.border="white 2px solid";
document.getElementById('tc1').style.backgroundColor="lime";
document.getElementById('tc2').style.border="black 2px solid";
document.getElementById('tc2').style.backgroundColor="green";
document.getElementById('tc3').style.border="black 2px solid";
document.getElementById('tc3').style.backgroundColor="green";
document.getElementById('tc4').style.border="black 2px solid";
document.getElementById('tc4').style.backgroundColor="green";
document.getElementById('tc5').style.border="black 2px solid";
document.getElementById('tc5').style.backgroundColor="green";

document.getElementById('tcscore').innerHTML="Tunnel Complexity:1";
minH=localStorage.getItem('minH');
maxH=localStorage.getItem('maxH');
obsheight=Number(localStorage.getItem('obsheight'));
}
else if(tccode==2)
{
document.getElementById('tc1').style.border="black 2px solid";
document.getElementById('tc1').style.backgroundColor="green";
document.getElementById('tc2').style.border="white 2px solid";
document.getElementById('tc2').style.backgroundColor="lime";
document.getElementById('tc3').style.border="black 2px solid";
document.getElementById('tc3').style.backgroundColor="green";
document.getElementById('tc4').style.border="black 2px solid";
document.getElementById('tc4').style.backgroundColor="green";
document.getElementById('tc5').style.border="black 2px solid";
document.getElementById('tc5').style.backgroundColor="green";

document.getElementById('tcscore').innerHTML="Tunnel Complexity:2";
minH=localStorage.getItem('minH');
maxH=localStorage.getItem('maxH');
obsheight=Number(localStorage.getItem('obsheight'));
}
else if(tccode==3)
{
document.getElementById('tc1').style.border="black 2px solid";
document.getElementById('tc1').style.backgroundColor="green";
document.getElementById('tc2').style.border="black 2px solid";
document.getElementById('tc2').style.backgroundColor="green";
document.getElementById('tc3').style.border="white 2px solid";
document.getElementById('tc3').style.backgroundColor="lime";
document.getElementById('tc4').style.border="black 2px solid";
document.getElementById('tc4').style.backgroundColor="green";
document.getElementById('tc5').style.border="black 2px solid";
document.getElementById('tc5').style.backgroundColor="green";

document.getElementById('tcscore').innerHTML="Tunnel Complexity:3";
minH=localStorage.getItem('minH');
maxH=localStorage.getItem('maxH');
obsheight=Number(localStorage.getItem('obsheight'));
}
else if(tccode==4)
{
document.getElementById('tc1').style.border="black 2px solid";
document.getElementById('tc1').style.backgroundColor="green";
document.getElementById('tc2').style.border="black 2px solid";
document.getElementById('tc2').style.backgroundColor="green";
document.getElementById('tc3').style.border="black 2px solid";
document.getElementById('tc3').style.backgroundColor="green";
document.getElementById('tc4').style.border="white 2px solid";
document.getElementById('tc4').style.backgroundColor="lime";
document.getElementById('tc5').style.border="black 2px solid";
document.getElementById('tc5').style.backgroundColor="green";

document.getElementById('tcscore').innerHTML="Tunnel Complexity:4";
minH=localStorage.getItem('minH');
maxH=localStorage.getItem('maxH');
obsheight=Number(localStorage.getItem('obsheight'));
}
else if(tccode==5)
{
document.getElementById('tc1').style.border="black 2px solid";
document.getElementById('tc1').style.backgroundColor="green";
document.getElementById('tc2').style.border="black 2px solid";
document.getElementById('tc2').style.backgroundColor="green";
document.getElementById('tc3').style.border="black 2px solid";
document.getElementById('tc3').style.backgroundColor="green";
document.getElementById('tc4').style.border="black 2px solid";
document.getElementById('tc4').style.backgroundColor="green";
document.getElementById('tc5').style.border="white 2px solid";
document.getElementById('tc5').style.backgroundColor="lime";

document.getElementById('tcscore').innerHTML="Tunnel Complexity:5";
minH=localStorage.getItem('minH');
maxH=localStorage.getItem('maxH');
obsheight=Number(localStorage.getItem('obsheight'));
}
}

function tco1()
{
document.getElementById('tco1').style.border="white 2px solid";
document.getElementById('tco2').style.border="black 2px solid";
document.getElementById('tco3').style.border="black 2px solid";
document.getElementById('tco4').style.border="black 2px solid";
document.getElementById('tco5').style.border="black 2px solid";

tcolor=localStorage.setItem('tcolor','green');
}
function tco2()
{
document.getElementById('tco1').style.border="black 2px solid";
document.getElementById('tco2').style.border="white 2px solid";
document.getElementById('tco3').style.border="black 2px solid";
document.getElementById('tco4').style.border="black 2px solid";
document.getElementById('tco5').style.border="black 2px solid";

tcolor=localStorage.setItem('tcolor','orange');
}
function tco3()
{
document.getElementById('tco1').style.border="black 2px solid";
document.getElementById('tco2').style.border="black 2px solid";
document.getElementById('tco3').style.border="white 2px solid";
document.getElementById('tco4').style.border="black 2px solid";
document.getElementById('tco5').style.border="black 2px solid";

tcolor=localStorage.setItem('tcolor','brown');
}
function tco4()
{
document.getElementById('tco1').style.border="black 2px solid";
document.getElementById('tco2').style.border="black 2px solid";
document.getElementById('tco3').style.border="black 2px solid";
document.getElementById('tco4').style.border="white 2px solid";
document.getElementById('tco5').style.border="black 2px solid";

tcolor=localStorage.setItem('tcolor','#222021');
}
function tco5()
{
document.getElementById('tco1').style.border="black 2px solid";
document.getElementById('tco2').style.border="black 2px solid";
document.getElementById('tco3').style.border="black 2px solid";
document.getElementById('tco4').style.border="black 2px solid";
document.getElementById('tco5').style.border="white 2px solid";

tcolor=localStorage.setItem('tcolor','lime');
}

function tcocheck()
{
tcolor=localStorage.getItem('tcolor');
if(tcolor=='green')
{
document.getElementById('tco1').style.border="white 2px solid";
document.getElementById('tco2').style.border="black 2px solid";
document.getElementById('tco3').style.border="black 2px solid";
document.getElementById('tco4').style.border="black 2px solid";
document.getElementById('tco5').style.border="black 2px solid";
tcolor=localStorage.getItem('tcolor');
}
else if(tcolor=='orange')
{
document.getElementById('tco1').style.border="black 2px solid";
document.getElementById('tco2').style.border="white 2px solid";
document.getElementById('tco3').style.border="black 2px solid";
document.getElementById('tco4').style.border="black 2px solid";
document.getElementById('tco5').style.border="black 2px solid";
tcolor=localStorage.getItem('tcolor');
}
else if(tcolor=='brown')
{
document.getElementById('tco1').style.border="black 2px solid";
document.getElementById('tco2').style.border="black 2px solid";
document.getElementById('tco3').style.border="white 2px solid";
document.getElementById('tco4').style.border="black 2px solid";
document.getElementById('tco5').style.border="black 2px solid";
tcolor=localStorage.getItem('tcolor');
}
else if(tcolor=='#222021')
{
document.getElementById('tco1').style.border="black 2px solid";
document.getElementById('tco2').style.border="black 2px solid";
document.getElementById('tco3').style.border="black 2px solid";
document.getElementById('tco4').style.border="white 2px solid";
document.getElementById('tco5').style.border="black 2px solid";
tcolor=localStorage.getItem('tcolor');
}
else if(tcolor=='lime')
{
document.getElementById('tco1').style.border="black 2px solid";
document.getElementById('tco2').style.border="black 2px solid";
document.getElementById('tco3').style.border="black 2px solid";
document.getElementById('tco4').style.border="black 2px solid";
document.getElementById('tco5').style.border="white 2px solid";
tcolor=localStorage.getItem('tcolor');
}
}

function tapfly()
{
document.getElementById('tapfly').style.display="none";
}