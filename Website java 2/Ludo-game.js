
dicesound=new Audio();
dicesound.src="dicesound.mp3";
movesound=new Audio();
movesound.src="movesound.mp3";
winsound=new Audio();
winsound.src="victory.mp3";
dicehomesound=new Audio();
dicehomesound.src="dicehome.ogg";

player=4;
var currPos = 0;
var step = 49.5;
var currcolor = "";
var NumOfPaw = "";
var num = 0;
var clicked = false;
var currpawn = "";
var allcolor = ["red", "blue", "green", "yellow"];
var pawnOut = {red:0,blue:0,green:0,yellow:0}

function HaveHover() {
    var count = 0;
    var toKill = "";
    for (var i = 0; i < allcolor.length; i++) {
        for (var n = 1; n <= 4; n++) {
            var firstPawn = document.getElementById(allcolor[i] + "pawn" + n);
            var secondPawn=document.getElementById(currpawn);
            if (firstPawn.style.top==secondPawn.style.top&&firstPawn.style.left==secondPawn.style.left&&currcolor!=allcolor[i]&&currPos+num<44) {
                count++;
                toKill = allcolor[i] + "pawn" + n;
                return toKill;
            }
        }
    }
    return false;
}
function Stuck() {
    var text = document.getElementById('player');
    if (onboard[currpawn] == 0||currPos+num>44) {
        if ((DontHaveOtherFree()||currPos+num>44) && (document.getElementById('player').innerText==currcolor)) {
            var badtext = document.getElementById('badtext');
            badtext.innerText = "Unfortunately, you are stucked!";
            var dice = document.getElementById('dice');
            dice.style.backgroundImage = "url(Images/dice.gif)";
            window.setTimeout(changePlayer, 1500);
			clicked = false;
			dice.disabled=true;
        }
    }
}
function changePlayer() {
    if (num != 6 && num !=1){
    var text = document.getElementById('player');
	if(player==4)
    {switch (text.innerText) {
        case "red": text.innerText = text.style.color = "blue"; break;
        case "blue": text.innerText = text.style.color = "yellow"; break;
        case "yellow": text.innerText = text.style.color = "green"; break;
        case "green": text.innerText = text.style.color = "red"; break;
    }}
	
	else if(player==3)
    {switch (text.innerText) {
        case "red": text.innerText = text.style.color = "blue"; break;
        case "blue": text.innerText = text.style.color = "green"; break;
        case "yellow": text.innerText = text.style.color = "green"; break;
        case "green": text.innerText = text.style.color = "red"; break;
    }}
	
	else if(player==2)
    {switch (text.innerText) {
        case "red": text.innerText = text.style.color = "green"; break;
        case "blue": text.innerText = text.style.color = "yellow"; break;
        case "yellow": text.innerText = text.style.color = "red"; break;
        case "green": text.innerText = text.style.color = "red"; break;
    }}
    }
	document.getElementById('dice').disabled=false;
    var badtext = document.getElementById('badtext');
    badtext.innerText = "";
    var dice = document.getElementById('dice');
    dice.style.backgroundImage = "url(Images/dice.gif)";
}
var positions = {
    redpawn1: 0, redpawn2: 0, redpawn3: 0, redpawn4: 0,
    bluepawn1: 0, bluepawn2: 0, bluepawn3: 0, bluepawn4: 0,
    greenpawn1: 0, greenpawn2: 0, greenpawn3: 0, greenpawn4: 0,
    yellowpawn1: 0, yellowpawn2: 0, yellowpawn3: 0, yellowpawn4: 0
};
var onboard = {
    redpawn1: 0, redpawn2: 0, redpawn3: 0, redpawn4: 0,
    bluepawn1: 0, bluepawn2: 0, bluepawn3: 0, bluepawn4: 0,
    greenpawn1: 0, greenpawn2: 0, greenpawn3: 0, greenpawn4: 0,
    yellowpawn1: 0, yellowpawn2: 0, yellowpawn3: 0, yellowpawn4: 0
};
function DontHaveOtherFree() {
    var text = document.getElementById('player');
    for (var i = 1; i <=4; i++) {
        if (onboard[text.innerText + "pawn" + i] == 1 || positions[text.innerText + "pawn" + i]+num>=44) return false;
    }
    return true;
}
function CheckForWinner() {
    if (pawnOut[currcolor] == 4) {
        var dice = document.getElementById("dice");
        var player = document.getElementById("player");
        var uselesstext1 = document.getElementById("uselesstext1");
        var uselesstext2 = document.getElementById("uselesstext2");
        dice.innerText = "";
        dice.style.visibility = "hidden";
        uselesstext1.innerText = "";
        uselesstext2.innerText = "";
        player.innerText = "The Winner is Player "+currcolor+'!';
		clearInterval(timeinterval);
		 
		setTimeout(function()
		{
			alert('Player '+currcolor+' wins! Press "New Game" button to play another Game.');
		},2100);
		
		setTimeout(function()
		{
		winsound.play();
		winsound.playbackRate=1.5;
		},500);
    }
}

function stepDown() {
    var doc = document.getElementById(currcolor + "pawn"+NumOfPaw);
    var curr = Number(doc.style.top.replace(/[a-z]/g, ''));
    doc.style.top = (curr+step)+'px';
    currPos++;
}
function stepUp() {
    var doc = document.getElementById(currpawn);
    var curr = Number(doc.style.top.replace(/[a-z]/g, ''));
    doc.style.top = (curr - step) + 'px';
    currPos++;
}
function stepLeft() {
    var doc = document.getElementById(currpawn);
    var curr = Number(doc.style.left.replace(/[a-z]/g, ''));
    doc.style.left = (curr - step) + 'px';
    currPos++;
}
function stepRight() {
    var doc = document.getElementById(currpawn);
    var curr = Number(doc.style.left.replace(/[a-z]/g, ''));
    doc.style.left = (curr + step) + 'px';
    currPos++;
}

var stepsRed = [];
var stepsYellow = [];
var stepsBlue =[];
var stepsGreen =[];
function pushSteps(value, steps, count) {
    for (i = 0; i < count; i++) steps.push(value);
}
//Red pawns path
pushSteps(stepDown,stepsRed,4);
pushSteps(stepRight, stepsRed,4);
pushSteps(stepDown, stepsRed,2);
pushSteps(stepLeft, stepsRed,4);
pushSteps(stepDown, stepsRed,4);
pushSteps(stepLeft, stepsRed,2);
pushSteps(stepUp, stepsRed,4);
pushSteps(stepLeft, stepsRed,4);
pushSteps(stepUp, stepsRed,2);
pushSteps(stepRight, stepsRed,4);
pushSteps(stepUp, stepsRed,4);
pushSteps(stepRight, stepsRed,1);
pushSteps(stepDown, stepsRed,5);
//Yellow pawns path

pushSteps(stepUp, stepsYellow,4);
pushSteps(stepLeft, stepsYellow,4);
pushSteps(stepUp, stepsYellow,2);
pushSteps(stepRight, stepsYellow,4);
pushSteps(stepUp, stepsYellow,4);
pushSteps(stepRight, stepsYellow,2);
pushSteps(stepDown, stepsYellow,4);
pushSteps(stepRight, stepsYellow,4);
pushSteps(stepDown, stepsYellow,2);
pushSteps(stepLeft, stepsYellow,4);
pushSteps(stepDown, stepsYellow,4);
pushSteps(stepLeft, stepsYellow,1);
pushSteps(stepUp, stepsYellow,5);

//Blue pawns path
pushSteps(stepLeft, stepsBlue,4);
pushSteps(stepDown, stepsBlue,4);
pushSteps(stepLeft, stepsBlue,2);
pushSteps(stepUp, stepsBlue,4,2);
pushSteps(stepLeft, stepsBlue,4);
pushSteps(stepUp, stepsBlue,2);
pushSteps(stepRight, stepsBlue,4);
pushSteps(stepUp, stepsBlue,4);
pushSteps(stepRight, stepsBlue,2);
pushSteps(stepDown, stepsBlue,4);
pushSteps(stepRight, stepsBlue,4);
pushSteps(stepDown, stepsBlue,1);
pushSteps(stepLeft, stepsBlue,5);

//Green pawns path
pushSteps(stepRight, stepsGreen,4);
pushSteps(stepUp, stepsGreen,4);
pushSteps(stepRight, stepsGreen,2);
pushSteps(stepDown, stepsGreen,4);
pushSteps(stepRight, stepsGreen,4);
pushSteps(stepDown, stepsGreen,2);
pushSteps(stepLeft, stepsGreen,4);
pushSteps(stepDown, stepsGreen,4);
pushSteps(stepLeft, stepsGreen,2);
pushSteps(stepUp, stepsGreen,4);
pushSteps(stepLeft, stepsGreen,4);
pushSteps(stepUp, stepsGreen,1);
pushSteps(stepRight, stepsGreen, 5);

function ResetPawn(victim) {
    onboard[victim] = 0;
    positions[victim] = 0;
    var pawnToMove = document.getElementById(victim);
    switch (victim) {
        case "redpawn1": pawnToMove.style.top = 50+149 + "px"; pawnToMove.style.left = 390+442 + "px"; break;
        case "redpawn2": pawnToMove.style.top = 50+102 + "px"; pawnToMove.style.left = 390+395 + "px"; break;
        case "redpawn3": pawnToMove.style.top = 50+55 + "px"; pawnToMove.style.left = 390+442 + "px"; break;
        case "redpawn4": pawnToMove.style.top = 50+102 + "px"; pawnToMove.style.left = 390+490 + "px"; break;
        case "bluepawn1": pawnToMove.style.top = 50+451 + "px"; pawnToMove.style.left = 390+490 + "px"; break;
        case "bluepawn2": pawnToMove.style.top = 50+451 + "px"; pawnToMove.style.left = 390+395 + "px"; break;
        case "bluepawn3": pawnToMove.style.top = 50+404 + "px"; pawnToMove.style.left = 390+442 + "px"; break;
        case "bluepawn4": pawnToMove.style.top = 50+498 + "px"; pawnToMove.style.left = 390+442 + "px"; break;
        case "greenpawn1": pawnToMove.style.top = 50+149 + "px"; pawnToMove.style.left = 390+93 + "px"; break;
        case "greenpawn2": pawnToMove.style.top = 50+102 + "px"; pawnToMove.style.left = 390+140 + "px"; break;
        case "greenpawn3": pawnToMove.style.top = 50+55 + "px"; pawnToMove.style.left = 390+93 + "px"; break;
        case "greenpawn4": pawnToMove.style.top = 50+102 + "px"; pawnToMove.style.left = 390+47 + "px"; break;
        case "yellowpawn1": pawnToMove.style.top = 50+451 + "px"; pawnToMove.style.left = 390+47 + "px"; break;
        case "yellowpawn2": pawnToMove.style.top = 50+451 + "px"; pawnToMove.style.left = 390+140 + "px"; break;
        case "yellowpawn3": pawnToMove.style.top = 50+404 + "px"; pawnToMove.style.left = 390+93 + "px"; break;
        case "yellowpawn4": pawnToMove.style.top = 50+498 + "px"; pawnToMove.style.left = 390+93 + "px"; break;

    }
}
function randomNum() {
    if (!clicked) {
        num = Math.floor((Math.random() * 6) + 1);;
        var dice = document.getElementById('dice');
        dice.style.backgroundImage = "url(Images/" + num + ".jpg)";
        clicked = true;
		dicesound.play();
		dicesound.playbackRate=2;
    }
    if (num != 1 && DontHaveOtherFree()) {
        var bad = document.getElementById('badtext');
        bad.innerText = "Unfortunately, you are stucked!";
        window.setTimeout(changePlayer, 1500);
        clicked = false;
		document.getElementById('dice').disabled=true;
		dicesound.play();
		dicesound.playbackRate=2;
    }
}
function randomMove(Color, paw) {
    var text = document.getElementById('player');
    NumOfPaw = paw;
    currcolor = Color;
    currpawn = currcolor + "pawn" + NumOfPaw;
    currPos = positions[currpawn];
    if (num + currPos > 44) {
        Stuck();
    }
    else {
        if (clicked) {
            var position = currPos;
            if (text.innerText == currcolor) {
                if (onboard[currpawn] === 1 || num === 1) {
					movesound.play();
                    if (onboard[currpawn] === 0) {
                        var doc = document.getElementById(currpawn);
                        var curr = Number(doc.style.left.replace(/[a-z]/g, ''));
                        switch (Color) {
                            case "red":
                                doc.style.left = 390+318 + 'px';
                                doc.style.top = 50+28 + "px";
                                break;

                            case "yellow":
                                doc.style.left = 390+219 + 'px';
                                doc.style.top = 50+523 + "px";
                                break;

                            case "blue":
                                doc.style.left = 390+516 + 'px';
                                doc.style.top = 50+325 + "px";
                                break;

                            case "green":
                                doc.style.left = 390+21 + 'px';
                                doc.style.top = 50+226 + "px";
                                break;
                        }
                        onboard[currpawn] = 1;
                    }
                    else {
                        switch (Color) {
                            case "red":
                                for (i = currPos; i < position + num; i++) {
                                    stepsRed[i]();
									movesound.play();
                                }
                                break;

                            case "yellow":
                                for (i = currPos; i < position + num; i++) {
                                    stepsYellow[i]();
									movesound.play();
                                }
                                break;

                            case "blue":
                                for (i = currPos; i < position + num; i++) {
                                    stepsBlue[i]();
									movesound.play();
                                }
                                break;

                            case "green":
                                for (i = currPos; i < position + num; i++) {
                                    stepsGreen[i]();
									movesound.play();
                                }
                                break;
                        }
                        positions[currpawn] = currPos;
                        var victim = HaveHover();
                        if (victim != false) {
                            ResetPawn(victim);
                        }
                        if (currPos == 44) 
						{ pawnOut[currcolor]++; onboard[currpawn] = 0; positions[currpawn] = 0; 
					      document.getElementById(currpawn).style.visibility = "hidden"; 
						  document.getElementById(currcolor+'home').innerHTML=pawnOut[currcolor];
						  dicehomesound.play();
						};
                        CheckForWinner();
                        changePlayer();
                    }
                    num = 0;
                    clicked = false;
                    var dice = document.getElementById('dice');
                    dice.style.backgroundImage = "url(Images/dice.gif)";
                }
                else Stuck();
            }
        }
    }
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
var timeinterval;

function newgame()
{      
        var dice = document.getElementById("dice");
        var uselesstext1 = document.getElementById("uselesstext1");
        var uselesstext2 = document.getElementById("uselesstext2");
        dice.style.visibility = "visible";
        uselesstext1.innerText = "Player ";
        uselesstext2.innerText = "'s turn";
		dice.style.backgroundImage = "url(Images/dice.gif)";
		
positions = {
    redpawn1: 0, redpawn2: 0, redpawn3: 0, redpawn4: 0,
    bluepawn1: 0, bluepawn2: 0, bluepawn3: 0, bluepawn4: 0,
    greenpawn1: 0, greenpawn2: 0, greenpawn3: 0, greenpawn4: 0,
    yellowpawn1: 0, yellowpawn2: 0, yellowpawn3: 0, yellowpawn4: 0
};
onboard = {
    redpawn1: 0, redpawn2: 0, redpawn3: 0, redpawn4: 0,
    bluepawn1: 0, bluepawn2: 0, bluepawn3: 0, bluepawn4: 0,
    greenpawn1: 0, greenpawn2: 0, greenpawn3: 0, greenpawn4: 0,
    yellowpawn1: 0, yellowpawn2: 0, yellowpawn3: 0, yellowpawn4: 0
};
currPos = 0;
num = 0;
clicked = false;
pawnOut = {red:0,blue:0,green:0,yellow:0};

document.getElementById('demobox').style.display="none";
document.getElementById('newgamebox').style.display="none";
document.getElementById('restartgame').disabled=false;
document.getElementById('dicebox').style.display="block";
document.getElementById('time').innerHTML="00:00";
timecount=0;
if(timeinterval!=undefined)
clearInterval(timeinterval);
timeinterval=setInterval(timefunc,1000);

document.getElementById('redhome').innerHTML="0";
document.getElementById('yellowhome').innerHTML="0";
document.getElementById('bluehome').innerHTML="0";
document.getElementById('greenhome').innerHTML="0";

if(player==2)
{
rearrange();
document.getElementById('redpawn1').style.display="block";
document.getElementById('redpawn2').style.display="block";
document.getElementById('redpawn3').style.display="block";
document.getElementById('redpawn4').style.display="block";

document.getElementById('yellowpawn1').style.display="none";
document.getElementById('yellowpawn2').style.display="none";
document.getElementById('yellowpawn3').style.display="none";
document.getElementById('yellowpawn4').style.display="none";

document.getElementById('bluepawn1').style.display="none";
document.getElementById('bluepawn2').style.display="none";
document.getElementById('bluepawn3').style.display="none";
document.getElementById('bluepawn4').style.display="none";

document.getElementById('greenpawn1').style.display="block";
document.getElementById('greenpawn2').style.display="block";
document.getElementById('greenpawn3').style.display="block";
document.getElementById('greenpawn4').style.display="block";

document.getElementById('redhome2').style.display="block";
document.getElementById('yellowhome2').style.display="none";
document.getElementById('bluehome2').style.display="none";
document.getElementById('greenhome2').style.display="block";
}
else if(player==3)
{
rearrange();
document.getElementById('redpawn1').style.display="block";
document.getElementById('redpawn2').style.display="block";
document.getElementById('redpawn3').style.display="block";
document.getElementById('redpawn4').style.display="block";

document.getElementById('yellowpawn1').style.display="none";
document.getElementById('yellowpawn2').style.display="none";
document.getElementById('yellowpawn3').style.display="none";
document.getElementById('yellowpawn4').style.display="none";

document.getElementById('bluepawn1').style.display="block";
document.getElementById('bluepawn2').style.display="block";
document.getElementById('bluepawn3').style.display="block";
document.getElementById('bluepawn4').style.display="block";

document.getElementById('greenpawn1').style.display="block";
document.getElementById('greenpawn2').style.display="block";
document.getElementById('greenpawn3').style.display="block";
document.getElementById('greenpawn4').style.display="block";

document.getElementById('redhome2').style.display="block";
document.getElementById('yellowhome2').style.display="none";
document.getElementById('bluehome2').style.display="block";
document.getElementById('greenhome2').style.display="block";
}
else if(player==4)
{
rearrange();
document.getElementById('redpawn1').style.display="block";
document.getElementById('redpawn2').style.display="block";
document.getElementById('redpawn3').style.display="block";
document.getElementById('redpawn4').style.display="block";

document.getElementById('yellowpawn1').style.display="block";
document.getElementById('yellowpawn2').style.display="block";
document.getElementById('yellowpawn3').style.display="block";
document.getElementById('yellowpawn4').style.display="block";

document.getElementById('bluepawn1').style.display="block";
document.getElementById('bluepawn2').style.display="block";
document.getElementById('bluepawn3').style.display="block";
document.getElementById('bluepawn4').style.display="block";

document.getElementById('greenpawn1').style.display="block";
document.getElementById('greenpawn2').style.display="block";
document.getElementById('greenpawn3').style.display="block";
document.getElementById('greenpawn4').style.display="block";

document.getElementById('redhome2').style.display="block";
document.getElementById('yellowhome2').style.display="block";
document.getElementById('bluehome2').style.display="block";
document.getElementById('greenhome2').style.display="block";
}

movesound.play();
document.getElementById('player').innerHTML="red";
document.getElementById('player').style.color="red";
}

function newgamedisp()
{
if(document.getElementById('newgamebox').style.display=="block")
document.getElementById('newgamebox').style.display="none";
else
document.getElementById('newgamebox').style.display="block";
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

function restartgame()
{
	    var dice = document.getElementById("dice");
        var uselesstext1 = document.getElementById("uselesstext1");
        var uselesstext2 = document.getElementById("uselesstext2");
        dice.style.visibility = "visible";
        uselesstext1.innerText = "Player ";
        uselesstext2.innerText = "'s turn";
		dice.style.backgroundImage = "url(Images/dice.gif)";
		
positions = {
    redpawn1: 0, redpawn2: 0, redpawn3: 0, redpawn4: 0,
    bluepawn1: 0, bluepawn2: 0, bluepawn3: 0, bluepawn4: 0,
    greenpawn1: 0, greenpawn2: 0, greenpawn3: 0, greenpawn4: 0,
    yellowpawn1: 0, yellowpawn2: 0, yellowpawn3: 0, yellowpawn4: 0
};
onboard = {
    redpawn1: 0, redpawn2: 0, redpawn3: 0, redpawn4: 0,
    bluepawn1: 0, bluepawn2: 0, bluepawn3: 0, bluepawn4: 0,
    greenpawn1: 0, greenpawn2: 0, greenpawn3: 0, greenpawn4: 0,
    yellowpawn1: 0, yellowpawn2: 0, yellowpawn3: 0, yellowpawn4: 0
};
currPos = 0;
num = 0;
clicked = false;
pawnOut = {red:0,blue:0,green:0,yellow:0};

document.getElementById('newgamebox').style.display="none";
document.getElementById('time').innerHTML="00:00";
timecount=0;
if(timeinterval!=undefined)
clearInterval(timeinterval);
timeinterval=setInterval(timefunc,1000);

document.getElementById('redhome').innerHTML="0";
document.getElementById('yellowhome').innerHTML="0";
document.getElementById('bluehome').innerHTML="0";
document.getElementById('greenhome').innerHTML="0";

if(player==2)
{
rearrange();
document.getElementById('redpawn1').style.display="block";
document.getElementById('redpawn2').style.display="block";
document.getElementById('redpawn3').style.display="block";
document.getElementById('redpawn4').style.display="block";

document.getElementById('yellowpawn1').style.display="none";
document.getElementById('yellowpawn2').style.display="none";
document.getElementById('yellowpawn3').style.display="none";
document.getElementById('yellowpawn4').style.display="none";

document.getElementById('bluepawn1').style.display="none";
document.getElementById('bluepawn2').style.display="none";
document.getElementById('bluepawn3').style.display="none";
document.getElementById('bluepawn4').style.display="none";

document.getElementById('greenpawn1').style.display="block";
document.getElementById('greenpawn2').style.display="block";
document.getElementById('greenpawn3').style.display="block";
document.getElementById('greenpawn4').style.display="block";

document.getElementById('redhome2').style.display="block";
document.getElementById('yellowhome2').style.display="none";
document.getElementById('bluehome2').style.display="none";
document.getElementById('greenhome2').style.display="block";
}
else if(player==3)
{
rearrange();
document.getElementById('redpawn1').style.display="block";
document.getElementById('redpawn2').style.display="block";
document.getElementById('redpawn3').style.display="block";
document.getElementById('redpawn4').style.display="block";

document.getElementById('yellowpawn1').style.display="none";
document.getElementById('yellowpawn2').style.display="none";
document.getElementById('yellowpawn3').style.display="none";
document.getElementById('yellowpawn4').style.display="none";

document.getElementById('bluepawn1').style.display="block";
document.getElementById('bluepawn2').style.display="block";
document.getElementById('bluepawn3').style.display="block";
document.getElementById('bluepawn4').style.display="block";

document.getElementById('greenpawn1').style.display="block";
document.getElementById('greenpawn2').style.display="block";
document.getElementById('greenpawn3').style.display="block";
document.getElementById('greenpawn4').style.display="block";

document.getElementById('redhome2').style.display="block";
document.getElementById('yellowhome2').style.display="none";
document.getElementById('bluehome2').style.display="block";
document.getElementById('greenhome2').style.display="block";
}
else if(player==4)
{
rearrange();
document.getElementById('redpawn1').style.display="block";
document.getElementById('redpawn2').style.display="block";
document.getElementById('redpawn3').style.display="block";
document.getElementById('redpawn4').style.display="block";

document.getElementById('yellowpawn1').style.display="block";
document.getElementById('yellowpawn2').style.display="block";
document.getElementById('yellowpawn3').style.display="block";
document.getElementById('yellowpawn4').style.display="block";

document.getElementById('bluepawn1').style.display="block";
document.getElementById('bluepawn2').style.display="block";
document.getElementById('bluepawn3').style.display="block";
document.getElementById('bluepawn4').style.display="block";

document.getElementById('greenpawn1').style.display="block";
document.getElementById('greenpawn2').style.display="block";
document.getElementById('greenpawn3').style.display="block";
document.getElementById('greenpawn4').style.display="block";

document.getElementById('redhome2').style.display="block";
document.getElementById('yellowhome2').style.display="block";
document.getElementById('bluehome2').style.display="block";
document.getElementById('greenhome2').style.display="block";
}

movesound.play();
document.getElementById('player').innerHTML="red";
document.getElementById('player').style.color="red";
}

function rearrange()
{
document.getElementById('redpawn1').style.top = 50+149 + "px";
document.getElementById('redpawn2').style.top = 50+102 + "px";
document.getElementById('redpawn3').style.top = 50+55 + "px"; 
document.getElementById('redpawn4').style.top = 50+102 + "px";

document.getElementById('yellowpawn1').style.top = 50+451 + "px";
document.getElementById('yellowpawn2').style.top = 50+451 + "px";
document.getElementById('yellowpawn3').style.top = 50+404 + "px";
document.getElementById('yellowpawn4').style.top = 50+498 + "px";

document.getElementById('bluepawn1').style.top = 50+451 + "px";
document.getElementById('bluepawn2').style.top = 50+451 + "px";
document.getElementById('bluepawn3').style.top = 50+404 + "px";
document.getElementById('bluepawn4').style.top = 50+498 + "px";

document.getElementById('greenpawn1').style.top = 50+149 + "px";
document.getElementById('greenpawn2').style.top = 50+102 + "px";
document.getElementById('greenpawn3').style.top = 50+55 + "px";
document.getElementById('greenpawn4').style.top = 50+102 + "px";


document.getElementById('redpawn1').style.left = 390+442 + "px";
document.getElementById('redpawn2').style.left = 390+395 + "px";
document.getElementById('redpawn3').style.left = 390+442 + "px";
document.getElementById('redpawn4').style.left = 390+490 + "px";

document.getElementById('yellowpawn1').style.left = 390+47 + "px";
document.getElementById('yellowpawn2').style.left = 390+140 + "px";
document.getElementById('yellowpawn3').style.left = 390+93 + "px";
document.getElementById('yellowpawn4').style.left = 390+93 + "px";

document.getElementById('bluepawn1').style.left = 390+490 + "px";
document.getElementById('bluepawn2').style.left = 390+395 + "px";
document.getElementById('bluepawn3').style.left = 390+442 + "px";
document.getElementById('bluepawn4').style.left = 390+442 + "px";

document.getElementById('greenpawn1').style.left = 390+93 + "px";
document.getElementById('greenpawn2').style.left = 390+140 + "px";
document.getElementById('greenpawn3').style.left = 390+93 + "px";
document.getElementById('greenpawn4').style.left = 390+47 + "px";

document.getElementById('redpawn1').style.visibility="visible";
document.getElementById('redpawn2').style.visibility="visible";
document.getElementById('redpawn3').style.visibility="visible";
document.getElementById('redpawn4').style.visibility="visible";

document.getElementById('yellowpawn1').style.visibility="visible";
document.getElementById('yellowpawn2').style.visibility="visible";
document.getElementById('yellowpawn3').style.visibility="visible";
document.getElementById('yellowpawn4').style.visibility="visible";

document.getElementById('bluepawn1').style.visibility="visible";
document.getElementById('bluepawn2').style.visibility="visible";
document.getElementById('bluepawn3').style.visibility="visible";
document.getElementById('bluepawn4').style.visibility="visible";

document.getElementById('greenpawn1').style.visibility="visible";
document.getElementById('greenpawn2').style.visibility="visible";
document.getElementById('greenpawn3').style.visibility="visible";
document.getElementById('greenpawn4').style.visibility="visible";
}