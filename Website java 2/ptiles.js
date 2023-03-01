const start = document.querySelector(".start");
const game = document.querySelector("#game");
const sco   = document.getElementById("score");
const ply = document.getElementById("play");
const out = document.getElementById("out");
const results = document.getElementById("result");
const result_box = document.querySelector(".result_box");
const restart = result_box.querySelector(".restart");
const text = result_box.querySelector(".score_text");
let a;
let tos = 2400;
let bool1 = bool2 = bool3 = bool4 = true;
var count=1;
var score = 0;
var step = 0;
var mar=randomMargin(), mar2;

initialset();
function initialset()
{
tos = 2400;
bool1 = bool2 = bool3 = bool4 = true;
step = 0;

audio = new Audio();
randnum = generateRandomNumber(1, 8);
if(randnum == 1)
audio.src="https://drive.google.com/uc?id=1vCDIoUu4NIjBlMOee-wTDsHBMc1bxzES";
else if(randnum == 2)
audio.src="jingle.mp3";
else if(randnum == 3)
audio.src="lbridge.mp3";
else if(randnum == 4)
audio.src="nutcracker.mp3";
else if(randnum == 5)
audio.src="nutcracker2.mp3";
else if(randnum == 6)
audio.src="nutcracker3.mp3";
else if(randnum == 7)
audio.src="carol.mp3";
else if(randnum == 8)
audio.src="elise.mp3";
}

highscore=localStorage.getItem('hscoretiles');
if(highscore==undefined)
	highscore=0;

function viewResult(){
  game.style.display = "none";
  results.play();
  result_box.classList.add("activeResult"); 
  if(score>highscore)
  {
   highscore = score;
   localStorage.setItem('hscoretiles',score);
  }
  text.innerHTML = "<br>Your Score: " + score + " points<br><br>Highest Score: "+highscore+" points";
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

restartcode=1;
restart.onclick = ()=>{
 if(restartcode==1)
 {
  if(audiotype==1)
  {setTimeout(function()
  {start.querySelector("button").click();
  },500);}
  
  else if(audiotype==2)
  {setTimeout(function()
  {
  initialset();
  over=0;
  restartcode=1;
  result_box.classList.remove("activeResult");
  sco.innerText = 0;
  audio2.currentTime = 0;
  
  ply.play();
  game.style.display = "block";
  start.style.display = "none";
  score = 0;
  speed(400);
  setTimeout(function()
  {
	  audio2.play();
	  audio2.loop = true;
  }, 1000);
  },500);
  }
  
  restartcode=0;
 }
}

function startAudio(){
  audio.play();
  audio.loop=true;
}

function speed(e){
  a = setInterval(appendDiv, e);
}
function reset(){
  bool1 = bool2 = bool3 = bool4 = true;
}

var over=0;
function outs(){
if(over==0)
{
if(audiotype==1)	
audio.pause();
if(audiotype==2)
audio2.pause();

 out.play();
 setTimeout(viewResult, 1000);
 over=1;
}
}

function appendDiv(){
  var ob = document.createElement("div");

  do{mar2 = randomMargin()}
  while(mar == mar2){mar = mar2}

  ob.style.marginLeft = mar2+"%";
  setTimeout(moveDown, 100, ob);
  ob.onclick = () =>{
    ob.style.background = "rgba(0,0,0,0.2)"
    updateScore();
  }
  ob.onmouseover = () =>{
    ob.style.background = "rgba(0,0,0,0.2)"
    updateScore();
  }
  if(score >= 70 && score < 150) step = 1;
  else if(score >= 150 && score < 400) step = 2;
  else if(score >= 400 && score < 800) step = 3;
  else if(score >= 800) step = 4;
  document.getElementById("tiles").prepend(ob);
}

function randomMargin(){return 25*Math.floor(Math.random()*4)}

function moveDown(e){
  e.classList.add("move");
  if(step == 1){
    e.classList.add("speedX1");
    if(bool1 == true){
      clearInterval(a);
      speed(300);
      reset();
      bool1 = false;
      tos = 1600;
    }
  } 
  else if(step == 2){
    e.classList.add("speedX2");
    if(bool2 == true){
      clearInterval(a);
      speed(250);
      reset();
      bool2 = false;
      tos = 1600;
    }
  }
  else if(step == 3){
    e.classList.add("speedX3");
    if(bool3 == true){
      clearInterval(a);
      speed(200);
      reset();
      bool3 = false;
      tos = 1200;
    }
  } else if(step == 4){
    e.classList.add("speedX4");
    if(bool4 == true){
      clearInterval(a);
      speed(160);
      reset();
      bool4 = false;
      tos = 1000;
    }
  }
  setTimeout(removeDiv, tos, e)
}

function updateScore(){
  score++;
  sco.innerText = score;
}

function removeDiv(e){
  var bg = e.style.background;
  if(bg == ""){
    clearInterval(a);
    outs();
  }
  e.remove()
}

start.querySelector("button").onclick = ()=>{
  initialset();
  over=0;
  restartcode=1;
  result_box.classList.remove("activeResult");
  sco.innerText = 0;
  audio.currentTime = 0;
  
  ply.play();
  game.style.display = "block";
  start.style.display = "none";
  score = 0;
  speed(400);
  setTimeout(startAudio, 1000);
  audiotype=1;
}

function home()
{
  start.style.display = "block";
  result_box.classList.remove("activeResult");
  ply.play();
}

huevalue=0;
setInterval(function()
{
document.getElementById('image').style.filter="hue-rotate("+huevalue+"deg)";
huevalue=huevalue+45;
},5000);

function custommusic()
{
ply.play();
document.getElementById('inputmusic').click();
}

document.getElementById("inputmusic").addEventListener("change", changeHandler);

function changeHandler({target}) 
{
  ply.play();

  if (!target.files.length) return;

  const urlObj = URL.createObjectURL(target.files[0]);

  audio2 = document.createElement("audio");

  audio2.addEventListener("load", () => {
    URL.revokeObjectURL(urlObj);
  });
  
  document.body.appendChild(audio);
  
  audio2.controls = false;
  
  audio2.src = urlObj;
  
  initialset();
  over=0;
  restartcode=1;
  result_box.classList.remove("activeResult");
  sco.innerText = 0;
  audio2.currentTime = 0;
  
  ply.play();
  game.style.display = "block";
  start.style.display = "none";
  score = 0;
  speed(400);
  setTimeout(function()
  {
	  audio2.play();
	  audio2.loop = true;
  }, 1000);
  
  audiotype=2;
}
