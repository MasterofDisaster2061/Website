
crashsound=new Audio();
crashsound.src="snake.wav";
jumpsound=new Audio();
jumpsound.src="jump.mp3";
jumpsound.volume=0.2;

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

// Variables
let score;
let scoreText;
let highscoredino;
let highscoreText;
let player;
let gravity;
let obstacles = [];
let gameSpeed;
let keys = {};
groundcode=1;
slidecode=0;
keycode=1;

// Event Listeners
document.addEventListener('keydown', function (evt) {
  keys[evt.code] = true;
});
document.addEventListener('keyup', function (evt) {
  keys[evt.code] = false;
});

class Player {
  constructor (x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;

    this.dy = 0;
    this.jumpForce = 20;
    this.originalHeight = h;
    this.grounded = false;
    this.jumpTimer = 0;
  }

  Animate () {
    
	if(keycode==1)
	{
    if (keys['Space'] || keys['ArrowUp']) {
      this.Jump();
	  if(groundcode==0)
	  {document.getElementById('dinojump').style.display="block";
	  document.getElementById('dino').style.display="none";
	  document.getElementById('dinoslide').style.display="none";}
	  else if(groundcode==1 && this.jumpTimer > 0 && this.jumpTimer < 15)
	  jumpsound.play();
    } else {
      this.jumpTimer = 0;
    }
	
    if (keys['ShiftLeft'] || keys['ArrowDown']) {
      this.h = this.originalHeight / 1.7;
	  document.getElementById('dinojump').style.display="none";
	  document.getElementById('dino').style.display="none";
	  document.getElementById('dinoslide').style.display="block";
    } else {
      this.h = this.originalHeight;
    }
	}

    this.y += this.dy;

    // Gravity
    if (this.y + this.h < canvas.height) {
      this.dy += gravity;
      this.grounded = false;
	  groundcode=0;
    } else {
      this.dy = 0;
      this.grounded = true;
      this.y = canvas.height - this.h;
	  groundcode=1;
    }

    this.Draw();
  }

  Jump () {
    if (this.grounded && this.jumpTimer == 0) {
      this.jumpTimer = 1;
      this.dy = -this.jumpForce;
    } else if (this.jumpTimer > 0 && this.jumpTimer < 15) {
      this.jumpTimer++;
      this.dy = -this.jumpForce - (this.jumpTimer / 50);
    }
  }

  Draw () {
    ctx.beginPath();
    ctx.fillStyle = this.c;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.closePath();
  }
}

class Obstacle {
  constructor (x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;

    this.dx = -gameSpeed;
  }

  Update () {
    this.x += this.dx;
    this.Draw();
    this.dx = -gameSpeed;
  }

  Draw () {
    ctx.beginPath();
    ctx.fillStyle = this.c;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.closePath();
  }
}

class Text {
  constructor (t, x, y, a, c, s) {
    this.t = t;
    this.x = x;
    this.y = y;
    this.a = a;
    this.c = c;
    this.s = s;
  }

  Draw () {
    ctx.beginPath();
    ctx.fillStyle = this.c;
    ctx.font = this.s + "px sans-serif";
    ctx.textAlign = this.a;
    ctx.fillText(this.t, this.x, this.y);
    ctx.closePath();
  }
}

// Game Functions
function SpawnObstacle () {
  let size = RandomIntInRange(100, 300);
  let type = RandomIntInRange(0, 1);
  let obstacle = new Obstacle(canvas.width, canvas.height - size, size/3, size, '#333333');

  if (type == 1) {
    obstacle.y -= player.originalHeight - 14;
  }
  obstacles.push(obstacle);
}


function RandomIntInRange (min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function Start () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.font = "20px sans-serif";

  gameSpeed = 3;
  gravity = 1;

  score = 0;
  highscoredino = 0;
  if (localStorage.getItem('highscoredino')) {
    highscoredino = localStorage.getItem('highscoredino');
  }

  player = new Player(100, 0, 50, 65, 'transparent');

  scoreText = new Text("Score: " + score, 40, 70, "left", "#212121", "50");
  highscoreText = new Text("Highscore: " + highscoredino, canvas.width - 40, 65, "right", "#212121", "40");

  requestAnimationFrame(Update);
}

let initialSpawnTimer = 200;
let spawnTimer = initialSpawnTimer;
function Update () {
  requestAnimationFrame(Update);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  spawnTimer--;
  if (spawnTimer <= 0) {
    SpawnObstacle();
    console.log(obstacles);
    spawnTimer = initialSpawnTimer - gameSpeed * 8;
    
    if (spawnTimer < 60) {
      spawnTimer = 60;
    }
  }

  // Spawn Enemies
  for (let i = 0; i < obstacles.length; i++) {
    let o = obstacles[i];

    if (o.x + o.w < 0) {
      obstacles.splice(i, 1);
    }

    if (
      player.x < o.x + o.w &&
      player.x + player.w > o.x &&
      player.y < o.y + o.h &&
      player.y + player.h > o.y
    ) {
	  keycode=0;
      gameSpeed = 0;
	  document.getElementById('dinocrash').style.display="block";
	  document.getElementById('dino').style.display="none";
	  document.getElementById('dinoslide').style.display="none";
	  document.getElementById('dinojump').style.display="none";
      window.localStorage.setItem('highscoredino', highscoredino);
	  player.h=500;
    }

    o.Update();
  }

  player.Animate();
  
  if(keycode==1)
  score++;
  scoreText.t = "Score: " + score;
  scoreText.Draw();

  if (score > highscoredino) {
    highscoredino = score;
    highscoreText.t = "Highscore: " + highscoredino;
  }
  
  highscoreText.Draw();

  gameSpeed += 0.003;
}

Start();

setInterval(function()
	{
	document.getElementById('dinojump').style.top=player.y;
	document.getElementById('dino').style.top=player.y-12;
	document.getElementById('dinoslide').style.top=player.y-12;
	
	if(groundcode==1)
       {
	  document.getElementById('dinojump').style.display="none";
	  document.getElementById('dino').style.display="block";
	  document.getElementById('dinoslide').style.display="none";
	}
	},1);
	
	crashinterval=setInterval(function()
	{
if(keycode==0)
{crashsound.play();
document.getElementById('gameoverbox').style.display="block";
clearInterval(crashinterval);
}
	},1);
	
function restartgame()
{
window.location.reload();
}

setTimeout(function()
{
document.getElementById('demo').style.display="none";
},4000);
