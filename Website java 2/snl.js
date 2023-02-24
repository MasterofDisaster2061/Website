dicerollsound=new Audio();
dicerollsound.src="diceroll4.mp3";
movesound=new Audio();
movesound.src="movesound.mp3";
snakesound=new Audio();
snakesound.src="snake.wav";
laddersound=new Audio();
laddersound.src="ladder.wav";
victorysound=new Audio();
victorysound.src="victory.mp3";

function rollDice() {
  const dice = [...document.querySelectorAll(".die-list")];
  dice.forEach(die => {
    toggleClasses(die);
	dicevalue = getRandomNumber(1, 6);
    die.dataset.roll = dicevalue;
	document.getElementById('rolld').disabled=true;
	setTimeout(dicefunc,2100);
	dicerollsound.play();
  });
}

function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

posred=1;
posgreen=1;
posblue=1;
posyellow=1;
player=2;
turn=1;

function dicefunc()
{
if(turn==1)
{
posred3=posred+dicevalue;

if(posred3<=100)
{
const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}

const redanimation = async () => {
  for (let i = posred; i < posred3; i++) {
    await sleep(350);
    console.log(i);
document.getElementById('r'+posred).style.display="none";
posred++;
document.getElementById('r'+posred).style.display="block";
movesound.play();
movesound.playbackRate=2;
if(posred==posred3)
{setTimeout(snlfunc,600);
if(dicevalue!=1 && dicevalue!=6)
turn=2;
}

if(posred==100 && posred==posred3)
{
document.getElementById('r'+posred).style.display="block";
document.getElementById('rolld').disabled=true;
setTimeout(function()
{
winfunc();
},600);
}

}
}
redanimation();
}

else if(posred3>100)
{
posred2=posred3-100;

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}

const redanimation = async () => {
  for (let i = posred; i < 100; i++) {
    await sleep(350);
    console.log(i);
document.getElementById('r'+posred).style.display="none";
posred++;
document.getElementById('r'+posred).style.display="block";
movesound.play();
movesound.playbackRate=2;
if(posred==100)
{
const sleep2 = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}

const redanimation2 = async () => {
  for (let ii = posred; ii > 100-posred2; ii--) {
    await sleep2(350);
    console.log(ii);
document.getElementById('r'+posred).style.display="none";
posred--;
document.getElementById('r'+posred).style.display="block";
movesound.play();
movesound.playbackRate=2;
if(posred==100-posred2)
{setTimeout(snlfunc,600);
if(dicevalue!=1 && dicevalue!=6)
turn=2;
}}}
redanimation2();
}}}
redanimation();
}
}

else if(turn==2)
{
posgreen3=posgreen+dicevalue;

if(posgreen3<=100)
{
const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}

const greenanimation = async () => {
  for (let i = posgreen; i < posgreen3; i++) {
    await sleep(350);
    console.log(i);
document.getElementById('g'+posgreen).style.display="none";
posgreen++;
document.getElementById('g'+posgreen).style.display="block";
movesound.play();
movesound.playbackRate=2;
if(posgreen==posgreen3)
{setTimeout(snlfunc,600);
if(dicevalue!=1 && dicevalue!=6)
{if(player==2)
turn=1;
else
turn=3;}
}

if(posgreen==100 && posgreen==posgreen3)
{
document.getElementById('g'+posgreen).style.display="block";
document.getElementById('rolld').disabled=true;
setTimeout(function()
{
winfunc();
},600);
}

}
}
greenanimation();
}

else if(posgreen3>100)
{
posgreen2=posgreen3-100;

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}

const greenanimation = async () => {
  for (let i = posgreen; i < 100; i++) {
    await sleep(350);
    console.log(i);
document.getElementById('g'+posgreen).style.display="none";
posgreen++;
document.getElementById('g'+posgreen).style.display="block";
movesound.play();
movesound.playbackRate=2;
if(posgreen==100)
{
const sleep2 = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}

const greenanimation2 = async () => {
  for (let ii = posgreen; ii > 100-posgreen2; ii--) {
    await sleep2(350);
    console.log(ii);
document.getElementById('g'+posgreen).style.display="none";
posgreen--;
document.getElementById('g'+posgreen).style.display="block";
movesound.play();
movesound.playbackRate=2;
if(posgreen==100-posgreen2)
{setTimeout(snlfunc,600);
if(dicevalue!=1 && dicevalue!=6)
{if(player==2)
turn=1;
else
turn=3;}
}}}
greenanimation2();
}}}
greenanimation();
}
}

else if(turn==3)
{
posblue3=posblue+dicevalue;

if(posblue3<=100)
{
const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}

const blueanimation = async () => {
  for (let i = posblue; i < posblue3; i++) {
    await sleep(350);
    console.log(i);
document.getElementById('b'+posblue).style.display="none";
posblue++;
document.getElementById('b'+posblue).style.display="block";
movesound.play();
movesound.playbackRate=2;
if(posblue==posblue3)
{setTimeout(snlfunc,600);
if(dicevalue!=1 && dicevalue!=6)
{if(player==3)
turn=1;
else
turn=4;}
}

if(posblue==100 && posblue==posblue3)
{
document.getElementById('b'+posblue).style.display="block";
document.getElementById('rolld').disabled=true;
setTimeout(function()
{
winfunc();
},600);
}

}
}
blueanimation();
}

else if(posblue3>100)
{
posblue2=posblue3-100;

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}

const blueanimation = async () => {
  for (let i = posblue; i < 100; i++) {
    await sleep(350);
    console.log(i);
document.getElementById('b'+posblue).style.display="none";
posblue++;
document.getElementById('b'+posblue).style.display="block";
movesound.play();
movesound.playbackRate=2;
if(posblue==100)
{
const sleep2 = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}

const blueanimation2 = async () => {
  for (let ii = posblue; ii > 100-posblue2; ii--) {
    await sleep2(350);
    console.log(ii);
document.getElementById('b'+posblue).style.display="none";
posblue--;
document.getElementById('b'+posblue).style.display="block";
movesound.play();
movesound.playbackRate=2;
if(posblue==100-posblue2)
{setTimeout(snlfunc,600);
if(dicevalue!=1 && dicevalue!=6)
{if(player==3)
turn=1;
else
turn=4;}
}}}
blueanimation2();
}}}
blueanimation();
}
}

else if(turn==4)
{
posyellow3=posyellow+dicevalue;

if(posyellow3<=100)
{
const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}

const yellowanimation = async () => {
  for (let i = posyellow; i < posyellow3; i++) {
    await sleep(350);
    console.log(i);
document.getElementById('y'+posyellow).style.display="none";
posyellow++;
document.getElementById('y'+posyellow).style.display="block";
movesound.play();
movesound.playbackRate=2;
if(posyellow==posyellow3)
{setTimeout(snlfunc,600);
if(dicevalue!=1 && dicevalue!=6)
turn=1;
}

if(posyellow==100 && posyellow==posyellow3)
{
document.getElementById('y'+posyellow).style.display="block";
document.getElementById('rolld').disabled=true;
setTimeout(function()
{
winfunc();
},600);
}

}
}
yellowanimation();
}

else if(posyellow3>100)
{
posyellow2=posyellow3-100;

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}

const yellowanimation = async () => {
  for (let i = posyellow; i < 100; i++) {
    await sleep(350);
    console.log(i);
document.getElementById('y'+posyellow).style.display="none";
posyellow++;
document.getElementById('y'+posyellow).style.display="block";
movesound.play();
movesound.playbackRate=2;
if(posyellow==100)
{
const sleep2 = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}

const yellowanimation2 = async () => {
  for (let ii = posyellow; ii > 100-posyellow2; ii--) {
    await sleep2(350);
    console.log(ii);
document.getElementById('y'+posyellow).style.display="none";
posyellow--;
document.getElementById('y'+posyellow).style.display="block";
movesound.play();
movesound.playbackRate=2;
if(posyellow==100-posyellow2)
{setTimeout(snlfunc,600);
if(dicevalue!=1 && dicevalue!=6)
turn=1;
}}}
yellowanimation2();
}}}
yellowanimation();
}
}
}

function snlfunc()
{
if(posred==9)
{
document.getElementById('r'+posred).style.display="none";
posred=28;
document.getElementById('r'+posred).style.display="block";
laddersound.play();}
if(posgreen==9)
{
document.getElementById('g'+posgreen).style.display="none";
posgreen=28;
document.getElementById('g'+posgreen).style.display="block";
laddersound.play();}
if(posblue==9)
{
document.getElementById('b'+posblue).style.display="none";
posblue=28;
document.getElementById('b'+posblue).style.display="block";
laddersound.play();}
if(posyellow==9)
{
document.getElementById('y'+posyellow).style.display="none";
posyellow=28;
document.getElementById('y'+posyellow).style.display="block";
laddersound.play();}

if(posred==17)
{
document.getElementById('r'+posred).style.display="none";
posred=37;
document.getElementById('r'+posred).style.display="block";
laddersound.play();}
if(posgreen==17)
{
document.getElementById('g'+posgreen).style.display="none";
posgreen=37;
document.getElementById('g'+posgreen).style.display="block";
laddersound.play();}
if(posblue==17)
{
document.getElementById('b'+posblue).style.display="none";
posblue=37;
document.getElementById('b'+posblue).style.display="block";
laddersound.play();}
if(posyellow==17)
{
document.getElementById('y'+posyellow).style.display="none";
posyellow=37;
document.getElementById('y'+posyellow).style.display="block";
laddersound.play();}

if(posred==22)
{
document.getElementById('r'+posred).style.display="none";
posred=43;
document.getElementById('r'+posred).style.display="block";
laddersound.play();}
if(posgreen==22)
{
document.getElementById('g'+posgreen).style.display="none";
posgreen=43;
document.getElementById('g'+posgreen).style.display="block";
laddersound.play();}
if(posblue==22)
{
document.getElementById('b'+posblue).style.display="none";
posblue=43;
document.getElementById('b'+posblue).style.display="block";
laddersound.play();}
if(posyellow==22)
{
document.getElementById('y'+posyellow).style.display="none";
posyellow=43;
document.getElementById('y'+posyellow).style.display="block";
laddersound.play();}

if(posred==35)
{
document.getElementById('r'+posred).style.display="none";
posred=75;
document.getElementById('r'+posred).style.display="block";
laddersound.play();}
if(posgreen==35)
{
document.getElementById('g'+posgreen).style.display="none";
posgreen=75;
document.getElementById('g'+posgreen).style.display="block";
laddersound.play();}
if(posblue==35)
{
document.getElementById('b'+posblue).style.display="none";
posblue=75;
document.getElementById('b'+posblue).style.display="block";
laddersound.play();}
if(posyellow==35)
{
document.getElementById('y'+posyellow).style.display="none";
posyellow=75;
document.getElementById('y'+posyellow).style.display="block";
laddersound.play();}

if(posred==33)
{
document.getElementById('r'+posred).style.display="none";
posred=52;
document.getElementById('r'+posred).style.display="block";
laddersound.play();}
if(posgreen==33)
{
document.getElementById('g'+posgreen).style.display="none";
posgreen=52;
document.getElementById('g'+posgreen).style.display="block";
laddersound.play();}
if(posblue==33)
{
document.getElementById('b'+posblue).style.display="none";
posblue=52;
document.getElementById('b'+posblue).style.display="block";
laddersound.play();}
if(posyellow==33)
{
document.getElementById('y'+posyellow).style.display="none";
posyellow=52;
document.getElementById('y'+posyellow).style.display="block";
laddersound.play();}

if(posred==63)
{
document.getElementById('r'+posred).style.display="none";
posred=82;
document.getElementById('r'+posred).style.display="block";
laddersound.play();}
if(posgreen==63)
{
document.getElementById('g'+posgreen).style.display="none";
posgreen=82;
document.getElementById('g'+posgreen).style.display="block";
laddersound.play();}
if(posblue==63)
{
document.getElementById('b'+posblue).style.display="none";
posblue=82;
document.getElementById('b'+posblue).style.display="block";
laddersound.play();}
if(posyellow==63)
{
document.getElementById('y'+posyellow).style.display="none";
posyellow=82;
document.getElementById('y'+posyellow).style.display="block";
laddersound.play();}

if(posred==88)
{
document.getElementById('r'+posred).style.display="none";
posred=94;
document.getElementById('r'+posred).style.display="block";
laddersound.play();}
if(posgreen==88)
{
document.getElementById('g'+posgreen).style.display="none";
posgreen=94;
document.getElementById('g'+posgreen).style.display="block";
laddersound.play();}
if(posblue==88)
{
document.getElementById('b'+posblue).style.display="none";
posblue=94;
document.getElementById('b'+posblue).style.display="block";
laddersound.play();}
if(posyellow==88)
{
document.getElementById('y'+posyellow).style.display="none";
posyellow=94;
document.getElementById('y'+posyellow).style.display="block";
laddersound.play();}

if(posred==70)
{
document.getElementById('r'+posred).style.display="none";
posred=91;
document.getElementById('r'+posred).style.display="block";
laddersound.play();}
if(posgreen==70)
{
document.getElementById('g'+posgreen).style.display="none";
posgreen=91;
document.getElementById('g'+posgreen).style.display="block";
laddersound.play();}
if(posblue==70)
{
document.getElementById('b'+posblue).style.display="none";
posblue=91;
document.getElementById('b'+posblue).style.display="block";
laddersound.play();}
if(posyellow==70)
{
document.getElementById('y'+posyellow).style.display="none";
posyellow=91;
document.getElementById('y'+posyellow).style.display="block";
laddersound.play();}


if(posred==99)
{
document.getElementById('r'+posred).style.display="none";
posred=26;
document.getElementById('r'+posred).style.display="block";
snakesound.play();}
if(posgreen==99)
{
document.getElementById('g'+posgreen).style.display="none";
posgreen=26;
document.getElementById('g'+posgreen).style.display="block";
snakesound.play();}
if(posblue==99)
{
document.getElementById('b'+posblue).style.display="none";
posblue=26;
document.getElementById('b'+posblue).style.display="block";
snakesound.play();}
if(posyellow==99)
{
document.getElementById('y'+posyellow).style.display="none";
posyellow=26;
document.getElementById('y'+posyellow).style.display="block";
snakesound.play();}

if(posred==95)
{
document.getElementById('r'+posred).style.display="none";
posred=65;
document.getElementById('r'+posred).style.display="block";
snakesound.play();}
if(posgreen==95)
{
document.getElementById('g'+posgreen).style.display="none";
posgreen=65;
document.getElementById('g'+posgreen).style.display="block";
snakesound.play();}
if(posblue==95)
{
document.getElementById('b'+posblue).style.display="none";
posblue=65;
document.getElementById('b'+posblue).style.display="block";
snakesound.play();}
if(posyellow==95)
{
document.getElementById('y'+posyellow).style.display="none";
posyellow=65;
document.getElementById('y'+posyellow).style.display="block";
snakesound.play();}

if(posred==86)
{
document.getElementById('r'+posred).style.display="none";
posred=53;
document.getElementById('r'+posred).style.display="block";
snakesound.play();}
if(posgreen==86)
{
document.getElementById('g'+posgreen).style.display="none";
posgreen=53;
document.getElementById('g'+posgreen).style.display="block";
snakesound.play();}
if(posblue==86)
{
document.getElementById('b'+posblue).style.display="none";
posblue=53;
document.getElementById('b'+posblue).style.display="block";
snakesound.play();}
if(posyellow==86)
{
document.getElementById('y'+posyellow).style.display="none";
posyellow=53;
document.getElementById('y'+posyellow).style.display="block";
snakesound.play();}

if(posred==72)
{
document.getElementById('r'+posred).style.display="none";
posred=50;
document.getElementById('r'+posred).style.display="block";
snakesound.play();}
if(posgreen==72)
{
document.getElementById('g'+posgreen).style.display="none";
posgreen=50;
document.getElementById('g'+posgreen).style.display="block";
snakesound.play();}
if(posblue==72)
{
document.getElementById('b'+posblue).style.display="none";
posblue=50;
document.getElementById('b'+posblue).style.display="block";
snakesound.play();}
if(posyellow==72)
{
document.getElementById('y'+posyellow).style.display="none";
posyellow=50;
document.getElementById('y'+posyellow).style.display="block";
snakesound.play();}

if(posred==62)
{
document.getElementById('r'+posred).style.display="none";
posred=41;
document.getElementById('r'+posred).style.display="block";
snakesound.play();}
if(posgreen==62)
{
document.getElementById('g'+posgreen).style.display="none";
posgreen=41;
document.getElementById('g'+posgreen).style.display="block";
snakesound.play();}
if(posblue==62)
{
document.getElementById('b'+posblue).style.display="none";
posblue=41;
document.getElementById('b'+posblue).style.display="block";
snakesound.play();}
if(posyellow==62)
{
document.getElementById('y'+posyellow).style.display="none";
posyellow=41;
document.getElementById('y'+posyellow).style.display="block";
snakesound.play();}

if(posred==23)
{
document.getElementById('r'+posred).style.display="none";
posred=5;
document.getElementById('r'+posred).style.display="block";
snakesound.play();}
if(posgreen==23)
{
document.getElementById('g'+posgreen).style.display="none";
posgreen=5;
document.getElementById('g'+posgreen).style.display="block";
snakesound.play();}
if(posblue==23)
{
document.getElementById('b'+posblue).style.display="none";
posblue=5;
document.getElementById('b'+posblue).style.display="block";
snakesound.play();}
if(posyellow==23)
{
document.getElementById('y'+posyellow).style.display="none";
posyellow=5;
document.getElementById('y'+posyellow).style.display="block";
snakesound.play();}

if(posred==47)
{
document.getElementById('r'+posred).style.display="none";
posred=2;
document.getElementById('r'+posred).style.display="block";
snakesound.play();}
if(posgreen==47)
{
document.getElementById('g'+posgreen).style.display="none";
posgreen=2;
document.getElementById('g'+posgreen).style.display="block";
snakesound.play();}
if(posblue==47)
{
document.getElementById('b'+posblue).style.display="none";
posblue=2;
document.getElementById('b'+posblue).style.display="block";
snakesound.play();}
if(posyellow==47)
{
document.getElementById('y'+posyellow).style.display="none";
posyellow=2;
document.getElementById('y'+posyellow).style.display="block";
snakesound.play();}

if(posred==32)
{
document.getElementById('r'+posred).style.display="none";
posred=10;
document.getElementById('r'+posred).style.display="block";
snakesound.play();}
if(posgreen==32)
{
document.getElementById('g'+posgreen).style.display="none";
posgreen=10;
document.getElementById('g'+posgreen).style.display="block";
snakesound.play();}
if(posblue==32)
{
document.getElementById('b'+posblue).style.display="none";
posblue=10;
document.getElementById('b'+posblue).style.display="block";
snakesound.play();}
if(posyellow==32)
{
document.getElementById('y'+posyellow).style.display="none";
posyellow=10;
document.getElementById('y'+posyellow).style.display="block";
snakesound.play();}

if((posred==100 && posred==posred3)||(posgreen==100 && posgreen==posgreen3)||(posblue==100 && posblue==posblue3)||(posyellow==100 && posyellow==posyellow3))
document.getElementById('rolld').disabled=true;
else
document.getElementById('rolld').disabled=false;
}

function timefunc()
{
timecount++;
timemin=Math.floor(timecount/60);
timesec=timecount%60;
if(timesec<10)
	timesec='0'+timesec;
if(timemin<10)
	timemin='0'+timemin;
document.getElementById('time').innerHTML=timemin+":"+timesec;
}

document.getElementById('restartgame').disabled=true;
document.getElementById('rolld').disabled=true;
var timeinterval;
var gameinfointerval;

function newgame()
{
document.getElementById('newgamebox').style.display="none";
document.getElementById('restartgame').disabled=false;
document.getElementById('rolld').disabled=false;
document.getElementById('time').innerHTML="00:00";
timecount=0;
if(timeinterval!=undefined)
clearInterval(timeinterval);
timeinterval=setInterval(timefunc,1000);

document.getElementById('r'+posred).style.display="none";
document.getElementById('g'+posgreen).style.display="none";
document.getElementById('b'+posblue).style.display="none";
document.getElementById('y'+posyellow).style.display="none";

if(player==2)
{
document.getElementById('r1').style.display="block";
document.getElementById('g1').style.display="block";
document.getElementById('b1').style.display="none";
document.getElementById('y1').style.display="none";
}
else if(player==3)
{
document.getElementById('r1').style.display="block";
document.getElementById('g1').style.display="block";
document.getElementById('b1').style.display="block";
document.getElementById('y1').style.display="none";
}
else if(player==4)
{
document.getElementById('r1').style.display="block";
document.getElementById('g1').style.display="block";
document.getElementById('b1').style.display="block";
document.getElementById('y1').style.display="block";
}

posred=1;
posgreen=1;
posblue=1;
posyellow=1;
turn=1;
movesound.play();
document.getElementById('gameinfo').innerHTML="Red's turn";

if(gameinfointerval!=undefined)
clearInterval(gameinfointerval);
gameinfointerval=setInterval(function()
{
if(turn==1)
document.getElementById('gameinfo').innerHTML="Red's turn";
else if(turn==2)
document.getElementById('gameinfo').innerHTML="Green's turn";
else if(turn==3)
document.getElementById('gameinfo').innerHTML="Blue's turn";
else if(turn==4)
document.getElementById('gameinfo').innerHTML="Yellow's turn";

},500);
}

function newgamedisp()
{
document.getElementById('demo').style.display="none";
if(document.getElementById('newgamebox').style.display=="block")
document.getElementById('newgamebox').style.display="none";
else
document.getElementById('newgamebox').style.display="block";

document.getElementById('gamewinbox').style.display="none";
document.getElementById('newgame').style.display="block";
document.getElementById('restartgame').style.display="block";
}

function twop()
{
player=2;
document.getElementById('twop').style.border="2px solid black";
document.getElementById('threep').style.border="none";
document.getElementById('fourp').style.border="none";
}

function threep()
{
player=3;
document.getElementById('twop').style.border="none";
document.getElementById('threep').style.border="2px solid black";
document.getElementById('fourp').style.border="none";
}

function fourp()
{
player=4;
document.getElementById('twop').style.border="none";
document.getElementById('threep').style.border="none";
document.getElementById('fourp').style.border="2px solid black";
}

function newgameback()
{
document.getElementById('newgamebox').style.display="none";
}

document.getElementById('restartgame').onclick=function()
{
document.getElementById('newgamebox').style.display="none";
document.getElementById('rolld').disabled=false;
document.getElementById('time').innerHTML="00:00";
timecount=0;
if(timeinterval!=undefined)
clearInterval(timeinterval);
timeinterval=setInterval(timefunc,1000);

document.getElementById('r'+posred).style.display="none";
document.getElementById('g'+posgreen).style.display="none";
document.getElementById('b'+posblue).style.display="none";
document.getElementById('y'+posyellow).style.display="none";

if(player==2)
{
document.getElementById('r1').style.display="block";
document.getElementById('g1').style.display="block";
document.getElementById('b1').style.display="none";
document.getElementById('y1').style.display="none";
}
else if(player==3)
{
document.getElementById('r1').style.display="block";
document.getElementById('g1').style.display="block";
document.getElementById('b1').style.display="block";
document.getElementById('y1').style.display="none";
}
else if(player==4)
{
document.getElementById('r1').style.display="block";
document.getElementById('g1').style.display="block";
document.getElementById('b1').style.display="block";
document.getElementById('y1').style.display="block";
}

posred=1;
posgreen=1;
posblue=1;
posyellow=1;
turn=1;
movesound.play();
document.getElementById('gameinfo').innerHTML="Red's turn";

if(gameinfointerval!=undefined)
clearInterval(gameinfointerval);
gameinfointerval=setInterval(function()
{
if(turn==1)
document.getElementById('gameinfo').innerHTML="Red's turn";
else if(turn==2)
document.getElementById('gameinfo').innerHTML="Green's turn";
else if(turn==3)
document.getElementById('gameinfo').innerHTML="Blue's turn";
else if(turn==4)
document.getElementById('gameinfo').innerHTML="Yellow's turn";

},500);
}

function winfunc()
{
victorysound.play();
clearInterval(timeinterval);
clearInterval(gameinfointerval);

if(posred==100 && posred==posred3)
{document.getElementById('windisp').innerHTML="Player Red wins!";
document.getElementById('gameinfo').innerHTML="Player Red wins!";
}
else if(posgreen==100 && posgreen==posgreen3)
{document.getElementById('windisp').innerHTML="Player Green wins!";
document.getElementById('gameinfo').innerHTML="Player Green wins!";
}
else if(posblue==100 && posblue==posblue3)
{document.getElementById('windisp').innerHTML="Player Blue wins!";
document.getElementById('gameinfo').innerHTML="Player Blue wins!";
}
else if(posyellow==100 && posyellow==posyellow3)
{document.getElementById('windisp').innerHTML="Player Yellow wins!";
document.getElementById('gameinfo').innerHTML="Player Yellow wins!";
}

document.getElementById('gamewinbox').style.display="block";
document.getElementById('newgame').style.display="none";
document.getElementById('restartgame').style.display="none";
}