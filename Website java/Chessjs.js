const BOARD_WIDTH = 8;
const BOARD_HEIGHT = 8;

const TILE_SIZE = 75;
const WHITE_TILE_COLOR = "white";
const BLACK_TILE_COLOR = "#005566";
const HIGHLIGHT_COLOR = "green";
const WHITE = 0;
const BLACK = 1;

const EMPTY = -1;
const PAWN = 0;
const KNIGHT = 1;
const BISHOP = 2;
const ROOK = 3;
const QUEEN = 4;
const KING = 5;

const INVALID = 0;
const VALID = 1;
const VALID_CAPTURE = 2;

ct= localStorage.getItem('ct');
if(ct==undefined)
ct= localStorage.setItem('ct',1);

cgm= localStorage.getItem('cgm');
if(cgm==undefined)
cgm= localStorage.setItem('cgm',1);

cf= localStorage.getItem('cf');
if(cf==undefined)
cf= localStorage.setItem('cf',1);

blitzvalue= localStorage.getItem('blitzvalue');
if(blitzvalue==undefined)
blitzvalue= localStorage.setItem('blitzvalue',30); 

if(localStorage.getItem('caudio')==undefined)
 {
 caudio=localStorage.setItem('caudio',1);
 }
 else
 {
 caudio=localStorage.getItem('caudio');
 }

var chesssound = new Audio('chess.mp3');
var boardsound = new Audio('board.mp3');
var timeup = new Audio('timeup.mp3');

pawnw=new Image();
pawnw.src="pawnw2.png";
bishopw=new Image();
bishopw.src="bishopw2.png";
knightw=new Image();
knightw.src="knightw2.png";
rookiew=new Image();
rookiew.src="rookiew2.png";
queenw=new Image();
queenw.src="queenw2.png";
kingw=new Image();
kingw.src="kingw2.png";

pawnb=new Image();
pawnb.src="pawnb2.png";
bishopb=new Image();
bishopb.src="bishopb2.png";
knightb=new Image();
knightb.src="knightb2.png";
rookieb=new Image();
rookieb.src="rookieb2.png";
queenb=new Image();
queenb.src="queenb2.png";
kingb=new Image();
kingb.src="kingb2.png";

const piecesCharacters = {
    0: '♟',
    1: '♞',
    2: '♝',
    3: '♜',
    4: '♛',
    5: '♚'
};
const piecesCharacters2 = {
    0: pawnw,
    1: knightw,
    2: bishopw,
    3: rookiew,
    4: queenw,
    5: kingw
};
const piecesCharacters3 = {
    0: pawnb,
    1: knightb,
    2: bishopb,
    3: rookieb,
    4: queenb,
    5: kingb
};

let totalgame = 0;
let totalmoves = 1;
let blackmoves = 0;
let whitemoves = 1;
let chessCanvas;
let chessCtx;
let currentTeamText;
let whiteCasualitiesText;
let blackCasualitiesText;
let totalVictoriesText;

let board;
let currentTeam;

let curX;
let curY;

let whiteCasualities;
let blackCasualities;

let whiteVictories;
let blackVictories;

greentileimage= new Image();
greentileimage.src="greentile.png";
greentile= new Image();
greentile.src="greentile2.png";
yellowtile= new Image();
yellowtile.src="yellowtile.png";
bluetile= new Image();
bluetile.src="tile.PNG";
redtile= new Image();
redtile.src="redtile.png";

function startgame()
{
sessionStorage.setItem('chessreload','true');
document.location.reload();
}

window.onload=function()
{
storage=sessionStorage.getItem('chessreload');
if(storage)
{
sessionStorage.removeItem('chessreload');
 
document.getElementById('chessgame').style.display="block";
document.getElementById('chessview').style.display="none";

if(ct==1)
{document.getElementById('chessCanvas').style.display="block";
document.getElementById('chessCanvas2').style.display="none";
document.getElementById('bg2').style.display="block";
document.getElementById('bg1').style.display="none";
}
else if(ct==2)
{document.getElementById('chessCanvas').style.display="none";
document.getElementById('chessCanvas2').style.display="block";
document.getElementById('bg1').style.display="block";
document.getElementById('bg2').style.display="none";
}

onLoad();
}
}

function onLoad() {
	if(ct==1)
    chessCanvas = document.getElementById("chessCanvas");
    else if(ct==2)
	chessCanvas = document.getElementById("chessCanvas2");

     chessCtx = chessCanvas.getContext("2d");
     chessCanvas.addEventListener("click", onClick);
	
    currentTeamText = document.getElementById("currentTeamText");

    whiteCasualitiesText = document.getElementById("whiteCasualities");
    blackCasualitiesText = document.getElementById("blackCasualities");

    totalVictoriesText = document.getElementById("totalVictories");
    whiteVictories = 0;
    blackVictories = 0;
 
    startGame();
}

function startGame() { 
    datedata=new Date().toString();
	datedata2=datedata.substring(0,datedata.length-22);
	
    if(cgm==1)
	document.getElementById('blitztime').style.display="none";
    else if(cgm==2)
	document.getElementById('blitztime').style.display="block";
    
	if(caudio==1)
    boardsound.play();
	if(ct==2)
    chessCtx.clearRect(0,0,600,50); 

t1= JSON.parse(localStorage.getItem('t1'));
t1t= JSON.parse(localStorage.getItem('t1t'));
t2= JSON.parse(localStorage.getItem('t2'));
t2t= JSON.parse(localStorage.getItem('t2t'));
t3= JSON.parse(localStorage.getItem('t3'));
t3t= JSON.parse(localStorage.getItem('t3t'));
t4= JSON.parse(localStorage.getItem('t4'));
t4t= JSON.parse(localStorage.getItem('t4t'));
t5= JSON.parse(localStorage.getItem('t5'));
t5t= JSON.parse(localStorage.getItem('t5t'));
t6= JSON.parse(localStorage.getItem('t6'));
t6t= JSON.parse(localStorage.getItem('t6t'));
t7= JSON.parse(localStorage.getItem('t7'));
t7t= JSON.parse(localStorage.getItem('t7t'));
t8= JSON.parse(localStorage.getItem('t8'));
t8t= JSON.parse(localStorage.getItem('t8t'));
t9= JSON.parse(localStorage.getItem('t9'));
t9t= JSON.parse(localStorage.getItem('t9t'));
t10= JSON.parse(localStorage.getItem('t10'));
t10t= JSON.parse(localStorage.getItem('t10t'));
t11= JSON.parse(localStorage.getItem('t11'));
t11t= JSON.parse(localStorage.getItem('t11t'));
t12= JSON.parse(localStorage.getItem('t12'));
t12t= JSON.parse(localStorage.getItem('t12t'));
t13= JSON.parse(localStorage.getItem('t13'));
t13t= JSON.parse(localStorage.getItem('t13t'));
t14= JSON.parse(localStorage.getItem('t14'));
t14t= JSON.parse(localStorage.getItem('t14t'));
t15= JSON.parse(localStorage.getItem('t15'));
t15t= JSON.parse(localStorage.getItem('t15t'));
t16= JSON.parse(localStorage.getItem('t16'));
t16t= JSON.parse(localStorage.getItem('t16t'));
t17= JSON.parse(localStorage.getItem('t17'));
t17t= JSON.parse(localStorage.getItem('t17t'));
t18= JSON.parse(localStorage.getItem('t18'));
t18t= JSON.parse(localStorage.getItem('t18t'));
t19= JSON.parse(localStorage.getItem('t19'));
t19t= JSON.parse(localStorage.getItem('t19t'));
t20= JSON.parse(localStorage.getItem('t20'));
t20t= JSON.parse(localStorage.getItem('t20t'));
t21= JSON.parse(localStorage.getItem('t21'));
t21t= JSON.parse(localStorage.getItem('t21t'));
t22= JSON.parse(localStorage.getItem('t22'));
t22t= JSON.parse(localStorage.getItem('t22t'));
t23= JSON.parse(localStorage.getItem('t23'));
t23t= JSON.parse(localStorage.getItem('t23t'));
t24= JSON.parse(localStorage.getItem('t24'));
t24t= JSON.parse(localStorage.getItem('t24t'));
t25= JSON.parse(localStorage.getItem('t25'));
t25t= JSON.parse(localStorage.getItem('t25t'));
t26= JSON.parse(localStorage.getItem('t26'));
t26t= JSON.parse(localStorage.getItem('t26t'));
t27= JSON.parse(localStorage.getItem('t27'));
t27t= JSON.parse(localStorage.getItem('t27t'));
t28= JSON.parse(localStorage.getItem('t28'));
t28t= JSON.parse(localStorage.getItem('t28t'));
t29= JSON.parse(localStorage.getItem('t29'));
t29t= JSON.parse(localStorage.getItem('t29t'));
t30= JSON.parse(localStorage.getItem('t30'));
t30t= JSON.parse(localStorage.getItem('t30t'));
t31= JSON.parse(localStorage.getItem('t31'));
t31t= JSON.parse(localStorage.getItem('t31t'));
t32= JSON.parse(localStorage.getItem('t32'));
t32t= JSON.parse(localStorage.getItem('t32t'));

t33= JSON.parse(localStorage.getItem('t33'));
t33t= JSON.parse(localStorage.getItem('t33t'));
t34= JSON.parse(localStorage.getItem('t34'));
t34t= JSON.parse(localStorage.getItem('t34t'));
t35= JSON.parse(localStorage.getItem('t35'));
t35t= JSON.parse(localStorage.getItem('t35t'));
t36= JSON.parse(localStorage.getItem('t36'));
t36t= JSON.parse(localStorage.getItem('t36t'));
t37= JSON.parse(localStorage.getItem('t37'));
t37t= JSON.parse(localStorage.getItem('t37t'));
t38= JSON.parse(localStorage.getItem('t38'));
t38t= JSON.parse(localStorage.getItem('t38t'));
t39= JSON.parse(localStorage.getItem('t39'));
t39t= JSON.parse(localStorage.getItem('t39t'));
t40= JSON.parse(localStorage.getItem('t40'));
t40t= JSON.parse(localStorage.getItem('t40t'));
t41= JSON.parse(localStorage.getItem('t41'));
t41t= JSON.parse(localStorage.getItem('t41t'));
t42= JSON.parse(localStorage.getItem('t42'));
t42t= JSON.parse(localStorage.getItem('t42t'));
t43= JSON.parse(localStorage.getItem('t43'));
t43t= JSON.parse(localStorage.getItem('t43t'));
t44= JSON.parse(localStorage.getItem('t44'));
t44t= JSON.parse(localStorage.getItem('t44t'));
t45= JSON.parse(localStorage.getItem('t45'));
t45t= JSON.parse(localStorage.getItem('t45t'));
t46= JSON.parse(localStorage.getItem('t46'));
t46t= JSON.parse(localStorage.getItem('t46t'));
t47= JSON.parse(localStorage.getItem('t47'));
t47t= JSON.parse(localStorage.getItem('t47t'));
t48= JSON.parse(localStorage.getItem('t48'));
t48t= JSON.parse(localStorage.getItem('t48t'));
t49= JSON.parse(localStorage.getItem('t49'));
t49t= JSON.parse(localStorage.getItem('t49t'));
t50= JSON.parse(localStorage.getItem('t50'));
t50t= JSON.parse(localStorage.getItem('t50t'));
t51= JSON.parse(localStorage.getItem('t51'));
t51t= JSON.parse(localStorage.getItem('t51t'));
t52= JSON.parse(localStorage.getItem('t52'));
t52t= JSON.parse(localStorage.getItem('t52t'));
t53= JSON.parse(localStorage.getItem('t53'));
t53t= JSON.parse(localStorage.getItem('t53t'));
t54= JSON.parse(localStorage.getItem('t54'));
t54t= JSON.parse(localStorage.getItem('t54t'));
t55= JSON.parse(localStorage.getItem('t55'));
t55t= JSON.parse(localStorage.getItem('t55t'));
t56= JSON.parse(localStorage.getItem('t56'));
t56t= JSON.parse(localStorage.getItem('t56t'));
t57= JSON.parse(localStorage.getItem('t57'));
t57t= JSON.parse(localStorage.getItem('t57t'));
t58= JSON.parse(localStorage.getItem('t58'));
t58t= JSON.parse(localStorage.getItem('t58t'));
t59= JSON.parse(localStorage.getItem('t59'));
t59t= JSON.parse(localStorage.getItem('t59t'));
t60= JSON.parse(localStorage.getItem('t60'));
t60t= JSON.parse(localStorage.getItem('t60t'));
t61= JSON.parse(localStorage.getItem('t61'));
t61t= JSON.parse(localStorage.getItem('t61t'));
t62= JSON.parse(localStorage.getItem('t62'));
t62t= JSON.parse(localStorage.getItem('t62t'));
t63= JSON.parse(localStorage.getItem('t63'));
t63t= JSON.parse(localStorage.getItem('t63t'));
t64= JSON.parse(localStorage.getItem('t64'));
t64t= JSON.parse(localStorage.getItem('t64t'));

    if(cf==1)
    board = new Board();
    else if(cf==2)
    board = new Board2();

    curX = -1;
    curY = -1;

    currentTeam = WHITE;
    currentTeamText.textContent = "White's turn";

    whiteCasualities = [0, 0, 0, 0, 0 ,0];
    blackCasualities = [0, 0, 0, 0, 0 ,0];

    repaintBoard();
    updateWhiteCasualities();
    updateBlackCasualities();
    updateTotalVictories();
	
	totalgame++;
	totalmoves = 1;
    blackmoves = 0;
    whitemoves = 1;
	timecounter=-1;
	timecounterb=0;
	timecounterw=0;
	
	startCount();
	startCountw();
	if(cgm==2)
	blitz();
   
	document.getElementById('timescoreb').innerHTML='Black playtime- 00:00';
	document.getElementById('timescorew').innerHTML='White playtime- 00:00';
	
	document.getElementById('gameoverwhite').style.display="none";
	document.getElementById('gameoverblack').style.display="none";
	document.getElementById('currentTeamText2').style.display="none";
	document.getElementById('currentTeamText').style.display="block";	
	document.getElementById('resetgamedisp').style.display="none";
	document.getElementById('whiteboard').style.border="3px lime solid";
	document.getElementById('blackboard').style.border="3px black solid";
}

function onClick(event) {
	if(ct==2)
	{chessCtx.clearRect(0,0,600,50); 
	repaintBoard();}
	
    let chessCanvasX = chessCanvas.getBoundingClientRect().left;
    let chessCanvasY = chessCanvas.getBoundingClientRect().top;
    
	if(ct==1)
    { x = Math.floor((event.clientX-chessCanvasX-6)/TILE_SIZE);
	 y = Math.floor((event.clientY-chessCanvasY)/TILE_SIZE);}
	else if(ct==2)
	{ x = Math.floor((event.clientX-chessCanvasX)/TILE_SIZE);
     y = Math.floor((event.clientY-chessCanvasY-40)/TILE_SIZE);}
	
    if (checkValidMovement(x, y) === true) {
        if (checkValidCapture(x, y) === true) {
			
			 if (currentTeam === WHITE) {
                blackCasualities[board.tiles[y][x].pieceType]++;
                updateBlackCasualities();
            } else {
                whiteCasualities[board.tiles[y][x].pieceType]++;
                updateWhiteCasualities();
            }
			
            if (board.tiles[y][x].pieceType === KING) {
                if (currentTeam === WHITE) 
				{stopCount();
			     stopCountw();
				 stopCountb();
				 if(cgm==2)
				 clearInterval(blitzinterval);
				 timecounterblitz=10*Number(blitzvalue);
				 
				 whiteVictories++;
			     updateWhiteCasualities();
                 updateBlackCasualities();
                 updateTotalVictories();
				 
				 document.getElementById('totalgame').innerHTML='Total games- '+totalgame;
				 if(whiteVictories<2)
				 document.getElementById('whitegame').innerHTML='White wins- '+whiteVictories+' time';
			     else
				 document.getElementById('whitegame').innerHTML='White wins- '+whiteVictories+' times';
			     if(blackVictories<2)
				 document.getElementById('blackgame').innerHTML='Black wins- '+blackVictories+' time';
			     else
				 document.getElementById('blackgame').innerHTML='Black wins- '+blackVictories+' times';
			     
				 document.getElementById('gameovertime').innerHTML='Time played- '+chesstimenetm+':'+chesstimenets;
				 document.getElementById('gameovertimew').innerHTML='White playtime- '+chesstimenetmw+':'+chesstimenetsw+' (Average:'+(timecounterw/10/whitemoves).toFixed(1)+'s)';
				 document.getElementById('gameovertimeb').innerHTML='Black playtime- '+chesstimenetmb+':'+chesstimenetsb+' (Average:'+(timecounterb/10/blackmoves).toFixed(1)+'s)';
				 
				 
				 document.getElementById('gameovermoves').innerHTML='Total moves- '+totalmoves;				 
				 document.getElementById('currentTeamText').style.display="none";
				 document.getElementById('currentTeamText2').style.display="block";
	             document.getElementById('currentTeamText2').innerHTML="Player White wins!";
                 document.getElementById('gameoverwhite').style.display="block";
				 document.getElementById('homegamedisp').style.display="none";
                 document.getElementById('resetgamedisp').style.display="none";
				 
				 gamenumber= Number(localStorage.getItem('gamenumber'));
                 if(gamenumber==undefined)
                 gamenumber= Number(localStorage.setItem('gamenumber',0)); 
				 gamenumber++;
				 localStorage.setItem('gamenumber',gamenumber);
				 
				 chesstatsdata= "#Game "+gamenumber+":<br>"+"Date played- "+datedata2+"<br>"+"Winner- Player White<br>"+
				 "Time played- "+chesstimenetm+':'+chesstimenets+"<br>"+"Total moves- "+totalmoves+"<br>"+
				 "White playtime- "+chesstimenetmw+':'+chesstimenetsw+' (Average- '+(timecounterw/10/whitemoves).toFixed(1)+'s)'+"<br>"+	 
				 "Black playtime- "+chesstimenetmb+':'+chesstimenetsb+' (Average- '+(timecounterb/10/blackmoves).toFixed(1)+'s)'+
				 "<br>"+'White Casualities: '+document.getElementById('whiteCasualities').innerHTML+"<br>"+
				 'Black Casualities: '+document.getElementById('blackCasualities').innerHTML+"<br>"+
				 "<hr color='black' width=492 style='margin-left:-1px;'>";		
				 
				 document.getElementById('chessstatsdata').innerHTML=JSON.parse(localStorage.getItem('statsdata'));
				 document.getElementById('chessstatsdata').innerHTML+=chesstatsdata;
				 localStorage.setItem('statsdata',JSON.stringify(document.getElementById('chessstatsdata').innerHTML));			
				}
                else 
				{stopCount();
			     stopCountw();
				 stopCountb();
				 if(cgm==2)
				 clearInterval(blitzinterval);
				 timecounterblitz=10*Number(blitzvalue);
					
				 blackVictories++;
				 blackmoves++;
				 whitemoves--;
			     updateWhiteCasualities();
                 updateBlackCasualities();
                 updateTotalVictories();
				 
				 document.getElementById('totalgame2').innerHTML='Total games- '+totalgame;
				 if(whiteVictories<2)
				 document.getElementById('whitegame2').innerHTML='White wins- '+whiteVictories+' time';
			     else
				 document.getElementById('whitegame2').innerHTML='White wins- '+whiteVictories+' times';
			     if(blackVictories<2)
				 document.getElementById('blackgame2').innerHTML='Black wins- '+blackVictories+' time';
			     else
				 document.getElementById('blackgame2').innerHTML='Black wins- '+blackVictories+' times';
			     
				 document.getElementById('gameovertime2').innerHTML='Time played- '+chesstimenetm+':'+chesstimenets;
				 document.getElementById('gameovertimew2').innerHTML='White playtime- '+chesstimenetmw+':'+chesstimenetsw+' (Average- '+(timecounterw/10/whitemoves).toFixed(1)+'s)';
				 document.getElementById('gameovertimeb2').innerHTML='Black playtime- '+chesstimenetmb+':'+chesstimenetsb+' (Average- '+(timecounterb/10/blackmoves).toFixed(1)+'s)';
				 
				 document.getElementById('gameovermoves2').innerHTML='Total moves- '+totalmoves;
				 document.getElementById('currentTeamText').style.display="none";
				 document.getElementById('currentTeamText2').style.display="block";
	             document.getElementById('currentTeamText2').innerHTML="Player Black wins!";
			     document.getElementById('gameoverblack').style.display="block";
                 document.getElementById('homegamedisp').style.display="none";
                 document.getElementById('resetgamedisp').style.display="none";
				 
				 gamenumber= Number(localStorage.getItem('gamenumber'));
                 if(gamenumber==undefined)
                 gamenumber= Number(localStorage.setItem('gamenumber',0)); 
				 gamenumber++;
				 localStorage.setItem('gamenumber',gamenumber);
				 
				 chesstatsdata= "#Game "+gamenumber+":<br>"+"Date played- "+datedata2+"<br>"+"Winner- Player Black<br>"+
				 "Time played- "+chesstimenetm+':'+chesstimenets+"<br>"+"Total moves- "+totalmoves+"<br>"+
				 "White playtime- "+chesstimenetmw+':'+chesstimenetsw+' (Average- '+(timecounterw/10/whitemoves).toFixed(1)+'s)'+"<br>"+	 
				 "Black playtime- "+chesstimenetmb+':'+chesstimenetsb+' (Average- '+(timecounterb/10/blackmoves).toFixed(1)+'s)'+
				 "<br>"+'White Casualities: '+document.getElementById('whiteCasualities').innerHTML+"<br>"+
				 'Black Casualities: '+document.getElementById('blackCasualities').innerHTML+"<br>"+
				 "<hr color='black' width=492 style='margin-left:-1px;'>";			

                 document.getElementById('chessstatsdata').innerHTML=JSON.parse(localStorage.getItem('statsdata'));
				 document.getElementById('chessstatsdata').innerHTML+=chesstatsdata;
				 localStorage.setItem('statsdata',JSON.stringify(document.getElementById('chessstatsdata').innerHTML));	
				}
            }
        }

        moveSelectedPiece(x, y);

        changeCurrentTeam();
    } else {
        curX = x;
        curY = y;
    }

    repaintBoard();
}

function checkPossiblePlays() {
    if (curX < 0 || curY < 0) return;

    let tile = board.tiles[curY][curX];
    if (tile.team === EMPTY || tile.team !== currentTeam) return;

    drawTile2(curX, curY, HIGHLIGHT_COLOR);

    board.resetValidMoves();

    if (tile.pieceType === PAWN) checkPossiblePlaysPawn(curX, curY);
    else if (tile.pieceType === KNIGHT) checkPossiblePlaysKnight(curX, curY);
    else if (tile.pieceType === BISHOP) checkPossiblePlaysBishop(curX, curY);
    else if (tile.pieceType === ROOK) checkPossiblePlaysRook(curX, curY);
    else if (tile.pieceType === QUEEN) checkPossiblePlaysQueen(curX, curY);
    else if (tile.pieceType === KING) checkPossiblePlaysKing(curX, curY);
}

function checkPossiblePlays2() {
    if (curX < 0 || curY < 0) return;

    let tile = board.tiles[curY][curX];
    if (tile.team === EMPTY || tile.team !== currentTeam) return;

    drawTile4(curX, curY, HIGHLIGHT_COLOR);
	if(ct==2)
    chessCtx.clearRect(0,0,600,50);  

    board.resetValidMoves();

    if (tile.pieceType === PAWN) checkPossiblePlaysPawn(curX, curY);
    else if (tile.pieceType === KNIGHT) checkPossiblePlaysKnight(curX, curY);
    else if (tile.pieceType === BISHOP) checkPossiblePlaysBishop(curX, curY);
    else if (tile.pieceType === ROOK) checkPossiblePlaysRook(curX, curY);
    else if (tile.pieceType === QUEEN) checkPossiblePlaysQueen(curX, curY);
    else if (tile.pieceType === KING) checkPossiblePlaysKing(curX, curY);
}

function checkPossiblePlaysPawn(curX, curY) {
    let direction;

    if (currentTeam === WHITE) direction = -1;
    else direction = 1;

    if (curY+direction < 0 || curY+direction > BOARD_HEIGHT-1) return;

    // Advance one tile
    checkPossibleMove(curX, curY+direction);

    // First double move
     if (curY === 1 && currentTeam === BLACK && board.tiles[curY+1][curX].team === EMPTY) {
        checkPossibleMove(curX, curY+2*direction);
    }
	else if (curY === 6 && currentTeam === WHITE && board.tiles[curY-1][curX].team === EMPTY) {
        checkPossibleMove(curX, curY+2*direction);
    }

    // Check diagonal left capture
    if (curX-1 >= 0) checkPossibleCapture(curX-1, curY+direction);

    // Check diagonal right capture
    if (curX+1 <= BOARD_WIDTH-1) checkPossibleCapture(curX+1, curY+direction);
}

function checkPossiblePlaysKnight(curX, curY) {
    // Far left moves
    if (curX-2 >= 0) {
        // Upper move
        if (curY-1 >= 0) checkPossiblePlay(curX-2, curY-1);

        // Lower move
        if (curY+1 <= BOARD_HEIGHT-1) checkPossiblePlay(curX-2, curY+1);
    }

    // Near left moves
    if (curX-1 >= 0) {
        // Upper move
        if (curY-2 >= 0) checkPossiblePlay(curX-1, curY-2);

        // Lower move
        if (curY+2 <= BOARD_HEIGHT-1) checkPossiblePlay(curX-1, curY+2);
    }

    // Near right moves
    if (curX+1 <= BOARD_WIDTH-1) {
        // Upper move
        if (curY-2 >= 0) checkPossiblePlay(curX+1, curY-2);

        // Lower move
        if (curY+2 <= BOARD_HEIGHT-1) checkPossiblePlay(curX+1, curY+2);
    }

    // Far right moves
    if (curX+2 <= BOARD_WIDTH-1) {
        // Upper move
        if (curY-1 >= 0) checkPossiblePlay(curX+2, curY-1);

        // Lower move
        if (curY+1 <= BOARD_HEIGHT-1) checkPossiblePlay(curX+2, curY+1);
    }
}

function checkPossiblePlaysRook(curX, curY) {
    // Upper move
    for (let i = 1; curY-i >= 0; i++) {
        if (checkPossiblePlay(curX, curY-i)) break;
    }

    // Right move
    for (let i = 1; curX+i <= BOARD_WIDTH-1; i++) {
        if (checkPossiblePlay(curX+i, curY)) break;
    }

    // Lower move
    for (let i = 1; curY+i <= BOARD_HEIGHT-1; i++) {
        if (checkPossiblePlay(curX, curY+i)) break;
    }

    // Left move
    for (let i = 1; curX-i >= 0; i++) {
        if (checkPossiblePlay(curX-i, curY)) break;
    }
}

function checkPossiblePlaysBishop(curX, curY) {
    // Upper-right move
    for (let i = 1; curX+i <= BOARD_WIDTH-1 && curY-i >= 0; i++) {
        if (checkPossiblePlay(curX+i, curY-i)) break;
    }

    // Lower-right move
    for (let i = 1; curX+i <= BOARD_WIDTH-1 && curY+i <= BOARD_HEIGHT-1; i++) {
        if (checkPossiblePlay(curX+i, curY+i)) break;
    }

    // Lower-left move
    for (let i = 1; curX-i >= 0 && curY+i <= BOARD_HEIGHT-1; i++) {
        if (checkPossiblePlay(curX-i, curY+i)) break;
    }

    // Upper-left move
    for (let i = 1; curX-i >= 0 && curY-i >= 0; i++) {
        if (checkPossiblePlay(curX-i, curY-i)) break;
    }
}

function checkPossiblePlaysQueen(curX, curY) {
    checkPossiblePlaysBishop(curX, curY);
    checkPossiblePlaysRook(curX, curY);
}

function checkPossiblePlaysKing(curX, curY) {
    for (let i = -1; i <= 1; i++) {
        if (curY+i < 0 || curY+i > BOARD_HEIGHT-1) continue;

        for (let j = -1; j <= 1; j++) {
            if (curX+j < 0 || curX+j > BOARD_WIDTH-1) continue;
            if (i == 0 && j == 0) continue;

            checkPossiblePlay(curX+j, curY+i);
        }
    }
}

function checkPossiblePlay(x, y) {
    if (checkPossibleCapture(x, y)) return true;

    return !checkPossibleMove(x, y);
}

function checkPossibleMove(x, y) {
    if (board.tiles[y][x].team !== EMPTY) return false;
	
    board.validMoves[y][x] = VALID;
	
	if(ct==1)
    drawCircle(x, y, HIGHLIGHT_COLOR);
    else if(ct==2)
	drawCircle2(x, y, HIGHLIGHT_COLOR);

    return true;
}

function checkPossibleCapture(x, y) {
    if (board.tiles[y][x].team !== getOppositeTeam(currentTeam)) return false;
    
    board.validMoves[y][x] = VALID_CAPTURE;
	
	if(ct==1)
    drawCorners(x, y, HIGHLIGHT_COLOR);
    else if(ct==2)
	drawCorners2(x, y, HIGHLIGHT_COLOR);	
	
    return true;
}

function checkValidMovement(x, y) {
    if (board.validMoves[y][x] === VALID || board.validMoves[y][x] === VALID_CAPTURE) return true;
    else 
	{if(ct==2)
   	 chessCtx.clearRect(0,0,600,50);
     return false;}
}

function checkValidCapture(x, y) {
    if (board.validMoves[y][x] === VALID_CAPTURE) return true;
    else return false;
}

function moveSelectedPiece(x, y) { 
    board.tiles[y][x].pieceType = board.tiles[curY][curX].pieceType;
    board.tiles[y][x].team = board.tiles[curY][curX].team;

    board.tiles[curY][curX].pieceType = EMPTY;
    board.tiles[curY][curX].team = EMPTY;

    curX = -1;
    curY = -1;
    board.resetValidMoves();
}

function changeCurrentTeam() {
    if (currentTeam === WHITE) {
        currentTeamText.textContent = "Black's turn";
        currentTeam = BLACK;
		totalmoves++;
		whitemoves++;
		stopCountw();
		startCountb();
		repaintBoard();
		if(ct==2)
        chessCtx.clearRect(0,0,600,50);  
		board.resetValidMoves();
		if(timecounterblitz!=0 && caudio==1)
		chesssound.play();
		timecounterblitz=10*Number(blitzvalue);
		document.getElementById('blackboard').style.border="3px lime solid";
		document.getElementById('whiteboard').style.border="3px black solid";
    } else {
        currentTeamText.textContent = "White's turn";
        currentTeam = WHITE;
		totalmoves++;
		blackmoves++;
		startCountw();
		stopCountb();
		repaintBoard();
		if(ct==2)
        chessCtx.clearRect(0,0,600,50);        
		board.resetValidMoves();
		if(timecounterblitz!=0 && caudio==1)
		chesssound.play();
		timecounterblitz=10*Number(blitzvalue);
		document.getElementById('whiteboard').style.border="3px lime solid";
		document.getElementById('blackboard').style.border="3px black solid";
    }
	if(document.getElementById('gameoverblack').style.display=='block' || document.getElementById('gameoverwhite').style.display=='block')
	{
	stopCountb();
	stopCountw();
	document.getElementById('whiteboard').style.border="3px black solid";
	document.getElementById('blackboard').style.border="3px black solid";
	}
}

function repaintBoard() {
	if(ct==1)
    {drawBoard();
     checkPossiblePlays();   
     drawPieces();}
	 
	else if(ct==2)
    {drawBoard2();
     checkPossiblePlays2();   
     drawPieces2();}
}

function drawBoard() {
    chessCtx.fillStyle = WHITE_TILE_COLOR;
    chessCtx.fillRect(0, 0, BOARD_WIDTH*TILE_SIZE, BOARD_HEIGHT*TILE_SIZE);
    
    for (let i = 0; i < BOARD_HEIGHT; i++) {
        for (let j = 0; j < BOARD_WIDTH; j++) {
            if ((i+j)%2 === 1) {
                drawTile(j, i, BLACK_TILE_COLOR);
            }
        }
    }
}

function drawBoard2() {
    chessCtx.fillStyle = WHITE_TILE_COLOR;
    chessCtx.fillRect(0, 50, BOARD_WIDTH*TILE_SIZE, BOARD_HEIGHT*TILE_SIZE);
    
    for (let i = 0; i < BOARD_HEIGHT; i++) {
        for (let j = 0; j < BOARD_WIDTH; j++) {
            if ((i+j)%2 === 1) {
                drawTile3(j, i, BLACK_TILE_COLOR);
            }
        }
    }
}

function drawTile(x, y, fillStyle) {
    chessCtx.fillStyle = fillStyle;
    chessCtx.fillRect(TILE_SIZE*x, TILE_SIZE*y, TILE_SIZE, TILE_SIZE);
}
function drawTile2(x, y, fillStyle) {
	chessCtx.fillStyle = 'lime';
    chessCtx.fillRect(TILE_SIZE*x, TILE_SIZE*y, TILE_SIZE, TILE_SIZE);
}

function drawTile3(x, y, fillStyle) {
    chessCtx.drawImage(greentile,TILE_SIZE*x, TILE_SIZE*y+50, TILE_SIZE, TILE_SIZE);
}
function drawTile4(x, y, fillStyle) {
    chessCtx.drawImage(yellowtile,TILE_SIZE*x, TILE_SIZE*y+50, TILE_SIZE, TILE_SIZE);
}

function drawCircle(x, y, fillStyle) {
    chessCtx.fillStyle = 'lime';
    chessCtx.beginPath();
    chessCtx.arc(TILE_SIZE*(x+0.5), TILE_SIZE*(y+0.5), TILE_SIZE/5, 0, 2*Math.PI);
    chessCtx.fill();
}

function drawCorners(x, y, fillStyle) {
    chessCtx.fillStyle = 'red';

    chessCtx.beginPath();
    chessCtx.moveTo(TILE_SIZE*x, TILE_SIZE*y);
    chessCtx.lineTo(TILE_SIZE*x+15, TILE_SIZE*y);
    chessCtx.lineTo(TILE_SIZE*x, TILE_SIZE*y+15);
    chessCtx.fill();

    chessCtx.beginPath();
    chessCtx.moveTo(TILE_SIZE*(x+1), TILE_SIZE*y);
    chessCtx.lineTo(TILE_SIZE*(x+1)-15, TILE_SIZE*y);
    chessCtx.lineTo(TILE_SIZE*(x+1), TILE_SIZE*y+15);
    chessCtx.fill();

    chessCtx.beginPath();
    chessCtx.moveTo(TILE_SIZE*x, TILE_SIZE*(y+1));
    chessCtx.lineTo(TILE_SIZE*x+15, TILE_SIZE*(y+1));
    chessCtx.lineTo(TILE_SIZE*x, TILE_SIZE*(y+1)-15);
    chessCtx.fill();

    chessCtx.beginPath();
    chessCtx.moveTo(TILE_SIZE*(x+1), TILE_SIZE*(y+1));
    chessCtx.lineTo(TILE_SIZE*(x+1)-15, TILE_SIZE*(y+1));
    chessCtx.lineTo(TILE_SIZE*(x+1), TILE_SIZE*(y+1)-15);
    chessCtx.fill();
}

function drawCircle2(x, y, fillStyle) {
   chessCtx.beginPath();
   chessCtx.drawImage(bluetile,TILE_SIZE*x, TILE_SIZE*y+50, TILE_SIZE, TILE_SIZE);
}

function drawCorners2(x, y, fillStyle) {
    chessCtx.beginPath();
	chessCtx.drawImage(redtile,TILE_SIZE*x, TILE_SIZE*y+50, TILE_SIZE, TILE_SIZE);
}


function drawPieces() {
    for (let i = 0; i < BOARD_HEIGHT; i++) {
        for (let j = 0; j < BOARD_WIDTH; j++) {
            if (board.tiles[i][j].team === EMPTY) continue;
            
            if (board.tiles[i][j].team === WHITE) {
                chessCtx.fillStyle = "gray";
            } else {
                chessCtx.fillStyle = "black";
            }
            
            chessCtx.font = "65px Arial";
            let pieceType = board.tiles[i][j].pieceType;
            chessCtx.fillText(piecesCharacters[pieceType], TILE_SIZE*(j+0.5/8), TILE_SIZE*(i+4/5));
        }
    }
}

function drawPieces2() {
    for (let i = 0; i < BOARD_HEIGHT; i++) {
        for (let j = 0; j < BOARD_WIDTH; j++) {
            if (board.tiles[i][j].team === EMPTY) continue;
            
            if (board.tiles[i][j].team === WHITE) {
            let pieceType = board.tiles[i][j].pieceType;
            chessCtx.drawImage(piecesCharacters2[pieceType], TILE_SIZE*(j+1.9/8), TILE_SIZE*(i+0.1/5),40,100);
            } else {
            let pieceType = board.tiles[i][j].pieceType;
            chessCtx.drawImage(piecesCharacters3[pieceType], TILE_SIZE*(j+1.9/8), TILE_SIZE*(i+0.1/5),40,100);
            }       
        }
    }
}


function updateWhiteCasualities() {
    updateCasualities(whiteCasualities, whiteCasualitiesText);
}

function updateBlackCasualities() {
    updateCasualities(blackCasualities, blackCasualitiesText);
}

function updateCasualities(casualities, text) {
    let none = true;

    for (let i = KING; i >= PAWN; i--) {
        if (casualities[i] === 0) continue;

        if (none) {
            text.textContent = casualities[i] + " " + piecesCharacters[i];
            none = false;
        } else {
            text.textContent += " - " + casualities[i] + " " + piecesCharacters[i];
        }
    }

    if (none) text.textContent = "None";
}

function updateTotalVictories() {
    totalVictoriesText.textContent = "white " + whiteVictories + " - black " + blackVictories;
}

function getOppositeTeam(team) {
    if (team === WHITE) return BLACK;
    else if (team === BLACK) return WHITE;
    else return EMPTY;
}

class Board {
    constructor() {
        this.tiles = [];

        this.tiles.push([
            new Tile(ROOK, BLACK),
            new Tile(KNIGHT, BLACK),
            new Tile(BISHOP, BLACK),
            new Tile(QUEEN, BLACK),
            new Tile(KING, BLACK),
            new Tile(BISHOP, BLACK),
            new Tile(KNIGHT, BLACK),
            new Tile(ROOK, BLACK)
        ]);

        this.tiles.push([
            new Tile(PAWN, BLACK),
            new Tile(PAWN, BLACK),
            new Tile(PAWN, BLACK),
            new Tile(PAWN, BLACK),
            new Tile(PAWN, BLACK),
            new Tile(PAWN, BLACK),
            new Tile(PAWN, BLACK),
            new Tile(PAWN, BLACK)
        ]);

        for (let i = 0; i < 4; i++) {
            this.tiles.push([
                new Tile(EMPTY, EMPTY),
                new Tile(EMPTY, EMPTY),
                new Tile(EMPTY, EMPTY),
                new Tile(EMPTY, EMPTY),
                new Tile(EMPTY, EMPTY),
                new Tile(EMPTY, EMPTY),
                new Tile(EMPTY, EMPTY),
                new Tile(EMPTY, EMPTY),
            ]);
        }

        this.tiles.push([
            new Tile(PAWN, WHITE),
            new Tile(PAWN, WHITE),
            new Tile(PAWN, WHITE),
            new Tile(PAWN, WHITE),
            new Tile(PAWN, WHITE),
            new Tile(PAWN, WHITE),
            new Tile(PAWN, WHITE),
            new Tile(PAWN, WHITE)
        ]);

        this.tiles.push([
            new Tile(ROOK, WHITE),
            new Tile(KNIGHT, WHITE),
            new Tile(BISHOP, WHITE),
            new Tile(QUEEN, WHITE),
            new Tile(KING, WHITE),
            new Tile(BISHOP, WHITE),
            new Tile(KNIGHT, WHITE),
            new Tile(ROOK, WHITE)
        ]);

        this.validMoves = [];
        for (let i = 0; i < BOARD_HEIGHT; i++) {
            this.validMoves.push([
                INVALID,
                INVALID,
                INVALID,
                INVALID,
                INVALID,
                INVALID,
                INVALID,
                INVALID
            ]);
        }
    }

    resetValidMoves() {
        for (let i = 0; i < BOARD_HEIGHT; i++) {
            for (let j = 0; j < BOARD_WIDTH; j++) {
                this.validMoves[i][j] = INVALID;
            }
        }
    }
}

class Board2 {
    constructor() {	
        this.tiles = [];	

        this.tiles.push([
            new Tile(t1, t1t),
            new Tile(t2, t2t),
            new Tile(t3, t3t),
            new Tile(t4, t4t),
            new Tile(t5, t5t),
            new Tile(t6, t6t),
            new Tile(t7, t7t),
            new Tile(t8, t8t)
        ]);

        this.tiles.push([
            new Tile(t9, t9t),
            new Tile(t10, t10t),
            new Tile(t11, t11t),
            new Tile(t12, t12t),
            new Tile(t13, t13t),
            new Tile(t14, t14t),
            new Tile(t15, t15t),
            new Tile(t16, t16t)
        ]);

            this.tiles.push([
                new Tile(t17, t17t),
                new Tile(t18, t18t),
                new Tile(t19, t19t),
                new Tile(t20, t20t),
                new Tile(t21, t21t),
                new Tile(t22, t22t),
                new Tile(t23, t23t),
                new Tile(t24, t24t)
            ]);
			
			this.tiles.push([
                new Tile(t25, t25t),
                new Tile(t26, t26t),
                new Tile(t27, t27t),
                new Tile(t28, t28t),
                new Tile(t29, t29t),
                new Tile(t30, t30t),
                new Tile(t31, t31t),
                new Tile(t32, t32t)
            ]);
			
			this.tiles.push([
                new Tile(t33, t33t),
                new Tile(t34, t34t),
                new Tile(t35, t35t),
                new Tile(t36, t36t),
                new Tile(t37, t37t),
                new Tile(t38, t38t),
                new Tile(t39, t39t),
                new Tile(t40, t40t)
            ]);
			
			this.tiles.push([
                new Tile(t41, t41t),
                new Tile(t42, t42t),
                new Tile(t43, t43t),
                new Tile(t44, t44t),
                new Tile(t45, t45t),
                new Tile(t46, t46t),
                new Tile(t47, t47t),
                new Tile(t48, t48t)
            ]);

        this.tiles.push([
            new Tile(t49, t49t),
            new Tile(t50, t50t),
            new Tile(t51, t51t),
            new Tile(t52, t52t),
            new Tile(t53, t53t),
            new Tile(t54, t54t),
            new Tile(t55, t55t),
            new Tile(t56, t56t)
        ]);

        this.tiles.push([
            new Tile(t57, t57t),
            new Tile(t58, t58t),
            new Tile(t59, t59t),
            new Tile(t60, t60t),
            new Tile(t61, t61t),
            new Tile(t62, t62t),
            new Tile(t63, t63t),
            new Tile(t64, t64t)
        ]);

        this.validMoves = [];
        for (let i = 0; i < BOARD_HEIGHT; i++) {
            this.validMoves.push([
                INVALID,
                INVALID,
                INVALID,
                INVALID,
                INVALID,
                INVALID,
                INVALID,
                INVALID
            ]);
        }
    }

    resetValidMoves() {
        for (let i = 0; i < BOARD_HEIGHT; i++) {
            for (let j = 0; j < BOARD_WIDTH; j++) {
                this.validMoves[i][j] = INVALID;
            }
        }
    }
}

class Tile {
    constructor(pieceType, team) {
        this.pieceType = pieceType;
        this.team = team;
    }
}

var timecounter=-1;
var timer_on=0;
function chesstimefunc()
{
timecounter++;
chesstimenet=timecounter/10;
chesstimenets=(chesstimenet%60).toFixed(0);
if(chesstimenets==60)
chesstimenets=0;	
if(chesstimenets<10)
chesstimenets='0'+chesstimenets;
chesstimenetm=parseInt(chesstimenet.toFixed(0)/60);
if(chesstimenetm<10)
chesstimenetm='0'+chesstimenetm;
document.getElementById('timescore').innerHTML='Time- '+chesstimenetm+':'+chesstimenets;
}

function startCount() 
{
if (!timer_on) 
{
timer_on=1;
chesstimeout=setInterval(chesstimefunc,100);
}
}
function stopCount() 
{
clearTimeout(chesstimeout);
timer_on=0;
}

var timecounterw=0;
var timer_onw=0;
function chesstimefuncw()
{
timecounterw++;
chesstimenetw=timecounterw/10;
chesstimenetsw=(chesstimenetw%60).toFixed(0);
if(chesstimenetsw==60)
chesstimenetsw=0;	
if(chesstimenetsw<10)
chesstimenetsw='0'+chesstimenetsw;
chesstimenetmw=parseInt(chesstimenetw.toFixed(0)/60);
if(chesstimenetmw<10)
chesstimenetmw='0'+chesstimenetmw;
document.getElementById('timescorew').innerHTML='White playtime- '+chesstimenetmw+':'+chesstimenetsw;
}

function startCountw() 
{
if (!timer_onw) 
{
timer_onw=1;
chesstimeoutw=setInterval(chesstimefuncw,100);
}
}
function stopCountw() 
{
clearInterval(chesstimeoutw);
timer_onw=0;
}

var timecounterb=0;
var timer_onb=0;
function chesstimefuncb()
{
timecounterb++;
chesstimenetb=timecounterb/10;
chesstimenetsb=(chesstimenetb%60).toFixed(0);
if(chesstimenetsb==60)
chesstimenetsb=0;	
if(chesstimenetsb<10)
chesstimenetsb='0'+chesstimenetsb;
chesstimenetmb=parseInt(chesstimenetb.toFixed(0)/60);
if(chesstimenetmb<10)
chesstimenetmb='0'+chesstimenetmb;
document.getElementById('timescoreb').innerHTML='Black playtime- '+chesstimenetmb+':'+chesstimenetsb;
}

function startCountb() 
{
if (!timer_onb) 
{
timer_onb=1;
chesstimeoutb=setInterval(chesstimefuncb,100);
}
}
function stopCountb() 
{
clearInterval(chesstimeoutb);
timer_onb=0;
}

var timecounterblitz=10*Number(blitzvalue);
function blitz()
{
if(cgm==2)
blitzinterval=setInterval(startCountblitz,100);	
}

function startCountblitz()
{
if(cgm==2)
{
timecounterblitz--;
timecounterblitz2=(timecounterblitz/10).toFixed(1);
if(timecounterblitz2<10)
timecounterblitz2='0'+timecounterblitz2;
document.getElementById('blitztime2').innerHTML= "Blitz time: "+timecounterblitz2+"s";
if(timecounterblitz==0)
{
changeCurrentTeam();
repaintBoard();
timecounterblitz=10*Number(blitzvalue);
if(caudio==1)
timeup.play();
}
}
}

function homegamedisp()
{
document.getElementById('homegamedisp').style.display="block";
document.getElementById('resetgamedisp').style.display="none";
}
function gameback()
{
document.getElementById('homegamedisp').style.display="none";
document.getElementById('resetgamedisp').style.display="none";
}
function chesshome()
{
document.getElementById('chessview').style.display="block";
document.getElementById('chessgame').style.display="none";
if(cgm==2)
clearInterval(blitzinterval);
}
function replaygamedisp()
{
document.getElementById('resetgamedisp').style.display="block";
document.getElementById('homegamedisp').style.display="none";
}
function resetvalue()
{
if (currentTeam === BLACK) 
stopCountb();
if (cgm==2)
clearInterval(blitzinterval);
timecounterblitz=10*Number(blitzvalue);
}

function dispchesssettings()
{
gamemodecheck();
gameformatcheck();
caudiocheck();
chessthemecheck();
document.getElementById('chessview').style.display="none";
document.getElementById('dispchesssettings').style.display="block";
}
function settingsback()
{
document.getElementById('chessview').style.display="block";
document.getElementById('dispchesssettings').style.display="none";
document.getElementById('blitztimeset').style.display="none";
}

function dispchessstats()
{	
if(localStorage.getItem('statsdata')==undefined)
document.getElementById('empty').style.display='block';
else
document.getElementById('empty').style.display='none';

document.getElementById('chessview').style.display="none";
document.getElementById('dispchessstats').style.display="block";	
document.getElementById('chessstatsdata').innerHTML=JSON.parse(localStorage.getItem('statsdata'));
document.getElementById('chessstatsdata').style.lineHeight="35px";	
var scroll=document.getElementById('scroll');
scroll.scrollTop = scroll.scrollHeight;
}
function statsback()
{
document.getElementById('chessview').style.display="block";
document.getElementById('dispchessstats').style.display="none";
}

function blitzgame()
{
document.getElementById('blitztimeinput').value= localStorage.getItem('blitzvalue');
document.getElementById('blitztimeset').style.display="block";
}
function blitztimesetback()
{
blitzvalueinput= Number(document.getElementById('blitztimeinput').value);
if(blitzvalueinput<10)
alert('Blitz time shouldn\'t be less than 10 seconds!');
else if(blitzvalueinput>1000)
alert('Blitz time shouldn\'t be greater than 1000 seconds!');
else
{
cgm=2;
localStorage.setItem('cgm',cgm);
blitzvalue= localStorage.setItem('blitzvalue',blitzvalueinput);
document.getElementById('blitztimeset').style.display="none";
document.getElementById('classicgame').style.border="black 2px solid";
document.getElementById('blitzgame').style.border="white 2px solid";
document.getElementById('classicgame').style.backgroundColor="green";
document.getElementById('blitzgame').style.backgroundColor="lime";
}
}

function classicgame()
{
cgm=1;
localStorage.setItem('cgm',cgm);
document.getElementById('blitztimeset').style.display="none";
document.getElementById('blitzgame').style.border="black 2px solid";
document.getElementById('classicgame').style.border="white 2px solid";
document.getElementById('blitzgame').style.backgroundColor="green";
document.getElementById('classicgame').style.backgroundColor="lime";
}

function gamemodecheck()
{
cgm=localStorage.getItem('cgm');
if(cgm==1)
{
document.getElementById('blitzgame').style.border="black 2px solid";
document.getElementById('classicgame').style.border="white 2px solid";
document.getElementById('blitzgame').style.backgroundColor="green";
document.getElementById('classicgame').style.backgroundColor="lime";
}
else if(cgm==2)
{
document.getElementById('classicgame').style.border="black 2px solid";
document.getElementById('blitzgame').style.border="white 2px solid";
document.getElementById('classicgame').style.backgroundColor="green";
document.getElementById('blitzgame').style.backgroundColor="lime";
}
}
function gameformatcheck()
{
cf=localStorage.getItem('cf');
if(cf==1)
{
document.getElementById('customgame').style.border="black 2px solid";
document.getElementById('standardgame').style.border="white 2px solid";
document.getElementById('customgame').style.backgroundColor="green";
document.getElementById('standardgame').style.backgroundColor="lime";
}
else if(cf==2)
{
document.getElementById('standardgame').style.border="black 2px solid";
document.getElementById('customgame').style.border="white 2px solid";
document.getElementById('standardgame').style.backgroundColor="green";
document.getElementById('customgame').style.backgroundColor="lime";
}
}
function chessthemecheck()
{
ct=localStorage.getItem('ct');
if(ct==1)
{
document.getElementById('ctheme1').style.border="lime 3px solid";
document.getElementById('ctheme2').style.border="black 3px solid";
}
else if(ct==2)
{
document.getElementById('ctheme1').style.border="black 3px solid";
document.getElementById('ctheme2').style.border="lime 3px solid";
}
}

function statsclear()
{
localStorage.removeItem('statsdata');
localStorage.removeItem('gamenumber');
statsback();
dispchessstats();
}

function customgame()
{
document.getElementById('customformat').style.display="block";
tilevaluedisp();
}
function customgameback()
{
document.getElementById('customformat').style.display="none";
document.getElementById('customgame').style.border="2px white solid";
document.getElementById('customgame').style.backgroundColor="lime";
document.getElementById('standardgame').style.border="2px black solid";
document.getElementById('standardgame').style.backgroundColor="green";
cf=2;
localStorage.setItem('cf',cf);
}

function standardgame()
{
document.getElementById('customgame').style.border="2px black solid";
document.getElementById('customgame').style.backgroundColor="green";
document.getElementById('standardgame').style.border="2px white solid";
document.getElementById('standardgame').style.backgroundColor="lime";
cf=1;
localStorage.setItem('cf',cf);
}

function soundon()
{
caudio=1;
localStorage.setItem('caudio',caudio);
}
function soundoff()
{
caudio=0;
localStorage.setItem('caudio',caudio);
}
function caudiocheck()
{
caudio=localStorage.getItem('caudio');
if(caudio==1)
{
document.getElementById('soundon').checked=true;
document.getElementById('soundoff').checked=false;
}
else if(caudio==0)
{
document.getElementById('soundon').checked=false;
document.getElementById('soundoff').checked=true;
}
}

function ctheme1()
{
document.getElementById('ctheme1').style.border="lime 3px solid";
document.getElementById('ctheme2').style.border="black 3px solid";
ct=1;
localStorage.setItem('ct',ct);
}
function ctheme2()
{
document.getElementById('ctheme1').style.border="black 3px solid";
document.getElementById('ctheme2').style.border="lime 3px solid";
ct=2;
localStorage.setItem('ct',ct);
}
