var cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var suits = ["diamonds", "hearts", "spades", "clubs"];
var deck = new Array();
p1balance$=250;
p2balance$=250;
p3balance$=250;
p4balance$=250;

gambleamt=5;
moneywonsound=new Audio();
moneywonsound.src="moneywon.mp3";
moneylostsound=new Audio();
moneylostsound.src="moneylost.mp3";
flipsound=new Audio();
flipsound.src="flipcard.mp3";
flipsound.playbackRate=1.8;
shufflesound=new Audio();
shufflesound.src="shuffle.mp3";
players=2;

function getDeck()
{  
	var deck = new Array();

	for(var i = 0; i < 4; i++)
	{
		for(var x = 0; x < 13; x++)
		{
			var card = {Value: cards[x], Suit: suits[i]};
			deck.push(card);
		}
	}

	return deck;
}

function shuffle()
{ 
   deck = getDeck();
	
	for (var i = 0; i < 1000; i++)
	{
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}

	renderDeck();
	
	document.getElementById('player1').innerHTML = '';
	for(var i = 38; i < 40; i++)
	{
		var card = document.createElement("div");
		var value = document.createElement("div");
		var suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + deck[i].Suit;

		value.innerHTML = deck[i].Value;
		card.appendChild(value);
		card.appendChild(suit);

		document.getElementById("player1").appendChild(card);
	}
	
	document.getElementById('player2').innerHTML = '';
	for(var j = 40; j < 42; j++)
	{
		var card2 = document.createElement("div");
		var value2 = document.createElement("div");
		var suit2 = document.createElement("div");
		card2.className = "card";
		value2.className = "value";
		suit2.className = "suit " + deck[j].Suit;

		value2.innerHTML = deck[j].Value;
		card2.appendChild(value2);
		card2.appendChild(suit2);

		document.getElementById("player2").appendChild(card2);
	}
	
	if(players==3||players==4)
	{document.getElementById('player3').innerHTML = '';
	for(var k = 42; k < 44; k++)
	{
		var card3 = document.createElement("div");
		var value3 = document.createElement("div");
		var suit3 = document.createElement("div");
		card3.className = "card";
		value3.className = "value";
		suit3.className = "suit " + deck[k].Suit;

		value3.innerHTML = deck[k].Value;
		card3.appendChild(value3);
		card3.appendChild(suit3);

		document.getElementById("player3").appendChild(card3);
	}}
	
	if(players==4)
	{document.getElementById('player4').innerHTML = '';
	for(var l = 44; l < 46; l++)
	{
		var card4 = document.createElement("div");
		var value4 = document.createElement("div");
		var suit4 = document.createElement("div");
		card4.className = "card";
		value4.className = "value";
		suit4.className = "suit " + deck[l].Suit;

		value4.innerHTML = deck[l].Value;
		card4.appendChild(value4);
		card4.appendChild(suit4);

		document.getElementById("player4").appendChild(card4);
	}}

for(var x=38;x<46;x++)
{
if(deck[x].Value=="A")
	deck[x].Value=1;
else if(deck[x].Value=="J")
	deck[x].Value=11;
else if(deck[x].Value=="Q")
	deck[x].Value=12;
else if(deck[x].Value=="K")
	deck[x].Value=13;
}
	
mincard1=Number(deck[38].Value);
maxcard1=Number(deck[39].Value);
mincard2=Number(deck[40].Value);
maxcard2=Number(deck[41].Value);

mincard3=Number(deck[42].Value);
maxcard3=Number(deck[43].Value);
mincard4=Number(deck[44].Value);
maxcard4=Number(deck[45].Value);
}

function renderDeck()
{
	document.getElementById('deck').innerHTML = '';
	for(var i = 0; i < deck.length; i++)
	{
		var card = document.createElement("div");
		var value = document.createElement("div");
		var suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + deck[i].Suit;

		value.innerHTML = deck[i].Value;
		card.appendChild(value);
		card.appendChild(suit);

		document.getElementById("deck").appendChild(card);
	}
}

function drawcardinitial()
{
 flipsound.play(); 
        document.getElementById('drawncard').innerHTML = '';
        var card = document.createElement("div");
		var value = document.createElement("div");
		var suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + deck[48].Suit;
		value.innerHTML = deck[48].Value;
		card.appendChild(value);
		card.appendChild(suit);
		
		document.getElementById("drawncard").appendChild(card);

drawncardcompare=deck[48].Value;
if(drawncardcompare=="A")
	drawncardcompare=1;
else if(drawncardcompare=="J")
	drawncardcompare=11;
else if(drawncardcompare=="Q")
	drawncardcompare=12;
else if(drawncardcompare=="K")
	drawncardcompare=13;
drawncardcompare=Number(drawncardcompare);
		
        deck.splice(48, 1);
		document.getElementById('gamblebox').style.display="none";
        document.getElementById('drawcardid').disabled=true;
		document.getElementById('gamble1').disabled=true;
		document.getElementById('gamble2').disabled=true;
		document.getElementById('xchange1').disabled=true;
		document.getElementById('xchange2').disabled=true;
		
		document.getElementById('gamble3').disabled=true;
		document.getElementById('gamble4').disabled=true;
		document.getElementById('xchange3').disabled=true;
		document.getElementById('xchange4').disabled=true;
		
setTimeout(function()
{
	drawcard();
},1000);
}

function drawcard()
{      		
if(document.getElementById('turndisp').innerHTML=="Player 1's Turn")
{
if((mincard1>drawncardcompare && maxcard1<drawncardcompare)||(maxcard1>drawncardcompare && mincard1<drawncardcompare))
{
totalgamblevalue=totalgamblevalue-gambleamt;
p1balance$=Number(p1balance$)+Number(gambleamt);
document.getElementById('totalgamble').innerHTML=totalgamblevalue+"$";
document.getElementById('p1balance').innerHTML=p1balance$+"$";
document.getElementById('turndisp').innerHTML="Player 1 won "+gambleamt+"$";
moneywonsound.play();
}
else if((mincard1>drawncardcompare && maxcard1>drawncardcompare)||(maxcard1<drawncardcompare && mincard1<drawncardcompare)||(mincard1==drawncardcompare)||(maxcard1==drawncardcompare))
{
totalgamblevalue=Number(totalgamblevalue)+Number(gambleamt);
p1balance$=p1balance$-gambleamt;
document.getElementById('totalgamble').innerHTML=totalgamblevalue+"$";
document.getElementById('p1balance').innerHTML=p1balance$+"$";
document.getElementById('turndisp').innerHTML="Player 1 lost "+gambleamt+"$";
moneylostsound.play();
}
setTimeout(function()
{
withdraw1();
},2500);
}

else if(document.getElementById('turndisp').innerHTML=="Player 2's Turn")
{
if((mincard2>drawncardcompare && maxcard2<drawncardcompare)||(maxcard2>drawncardcompare && mincard2<drawncardcompare))
{
totalgamblevalue=totalgamblevalue-gambleamt;
p2balance$=Number(p2balance$)+Number(gambleamt);
document.getElementById('totalgamble').innerHTML=totalgamblevalue+"$";
document.getElementById('p2balance').innerHTML=p2balance$+"$";
document.getElementById('turndisp').innerHTML="Player 2 won "+gambleamt+"$";
moneywonsound.play();
}
else if((mincard2>drawncardcompare && maxcard2>drawncardcompare)||(maxcard2<drawncardcompare && mincard2<drawncardcompare)||(mincard2==drawncardcompare)||(maxcard2==drawncardcompare))
{
totalgamblevalue=Number(totalgamblevalue)+Number(gambleamt);
p2balance$=p2balance$-gambleamt;
document.getElementById('totalgamble').innerHTML=totalgamblevalue+"$";
document.getElementById('p2balance').innerHTML=p2balance$+"$";
document.getElementById('turndisp').innerHTML="Player 2 lost "+gambleamt+"$";
moneylostsound.play();
}
setTimeout(function()
{
withdraw2();
},2500);
}

else if(document.getElementById('turndisp').innerHTML=="Player 3's Turn")
{
if((mincard3>drawncardcompare && maxcard3<drawncardcompare)||(maxcard3>drawncardcompare && mincard3<drawncardcompare))
{
totalgamblevalue=totalgamblevalue-gambleamt;
p3balance$=Number(p3balance$)+Number(gambleamt);
document.getElementById('totalgamble').innerHTML=totalgamblevalue+"$";
document.getElementById('p3balance').innerHTML=p3balance$+"$";
document.getElementById('turndisp').innerHTML="Player 3 won "+gambleamt+"$";
moneywonsound.play();
}
else if((mincard3>drawncardcompare && maxcard3>drawncardcompare)||(maxcard3<drawncardcompare && mincard3<drawncardcompare)||(mincard3==drawncardcompare)||(maxcard3==drawncardcompare))
{
totalgamblevalue=Number(totalgamblevalue)+Number(gambleamt);
p3balance$=p3balance$-gambleamt;
document.getElementById('totalgamble').innerHTML=totalgamblevalue+"$";
document.getElementById('p3balance').innerHTML=p3balance$+"$";
document.getElementById('turndisp').innerHTML="Player 3 lost "+gambleamt+"$";
moneylostsound.play();
}
setTimeout(function()
{
withdraw3();
},2500);
}

else if(document.getElementById('turndisp').innerHTML=="Player 4's Turn")
{
if((mincard4>drawncardcompare && maxcard4<drawncardcompare)||(maxcard4>drawncardcompare && mincard4<drawncardcompare))
{
totalgamblevalue=totalgamblevalue-gambleamt;
p4balance$=Number(p4balance$)+Number(gambleamt);
document.getElementById('totalgamble').innerHTML=totalgamblevalue+"$";
document.getElementById('p4balance').innerHTML=p4balance$+"$";
document.getElementById('turndisp').innerHTML="Player 4 won "+gambleamt+"$";
moneywonsound.play();
}
else if((mincard4>drawncardcompare && maxcard4>drawncardcompare)||(maxcard4<drawncardcompare && mincard4<drawncardcompare)||(mincard4==drawncardcompare)||(maxcard4==drawncardcompare))
{
totalgamblevalue=Number(totalgamblevalue)+Number(gambleamt);
p4balance$=p4balance$-gambleamt;
document.getElementById('totalgamble').innerHTML=totalgamblevalue+"$";
document.getElementById('p4balance').innerHTML=p4balance$+"$";
document.getElementById('turndisp').innerHTML="Player 4 lost "+gambleamt+"$";
moneylostsound.play();
}
setTimeout(function()
{
withdraw4();
},2500);
}
}

var gameoverinterval;
function newgame()
{
if(gameoverinterval!=undefined)
	clearInterval(gameoverinterval);
gameoverinterval=setInterval(gameoverdisp,100);

if(players==2)
{
totalgamblevalue=10;
document.getElementById('players3').style.display="none";
document.getElementById('players4').style.display="none";
}
if(players==3)
{
totalgamblevalue=15;
document.getElementById('players3').style.display="block";
document.getElementById('players4').style.display="none";
}
if(players==4)
{
totalgamblevalue=20;
document.getElementById('players3').style.display="block";
document.getElementById('players4').style.display="block";
}
roundcode=1;
p1balance$=250;
p2balance$=250;
p3balance$=250;
p4balance$=250;

shufflesound.play();
document.getElementById('player1').innerHTML="<div class='cardback'></div><div class='cardback'></div>";
document.getElementById('player2').innerHTML="<div class='cardback'></div><div class='cardback'></div>";
document.getElementById('player3').innerHTML="<div class='cardback'></div><div class='cardback'></div>";
document.getElementById('player4').innerHTML="<div class='cardback'></div><div class='cardback'></div>";
document.getElementById('p1balance').innerHTML="250$";
document.getElementById('p2balance').innerHTML="250$";
document.getElementById('p3balance').innerHTML="250$";
document.getElementById('p4balance').innerHTML="250$";
document.getElementById('totalgamble').innerHTML="0$";

document.getElementById('p1').innerHTML="Player 1";
document.getElementById('p2').innerHTML="Player 2";
document.getElementById('p3').innerHTML="Player 3";
document.getElementById('p4').innerHTML="Player 4";

setTimeout(function()
{
if(players==2)
{
shuffle();
flipsound.play();
document.getElementById('turndisp').innerHTML="Player 1's Turn";
document.getElementById('rounddisp').innerHTML="Round 1";
document.getElementById('gamble1').disabled=false;
document.getElementById('withdraw1').disabled=false;
document.getElementById('xchange1').disabled=false;
document.getElementById('gamble2').disabled=true;
document.getElementById('withdraw2').disabled=true;
document.getElementById('xchange2').disabled=true;
document.getElementById('totalgamble').innerHTML="10$";
p1balance$=p1balance$-5;
p2balance$=p2balance$-5;
document.getElementById('p1balance').innerHTML=p1balance$+"$";
document.getElementById('p2balance').innerHTML=p2balance$+"$";
}

else if(players==3)
{
shuffle();
flipsound.play();
document.getElementById('turndisp').innerHTML="Player 1's Turn";
document.getElementById('rounddisp').innerHTML="Round 1";
document.getElementById('gamble1').disabled=false;
document.getElementById('withdraw1').disabled=false;
document.getElementById('xchange1').disabled=false;
document.getElementById('gamble2').disabled=true;
document.getElementById('withdraw2').disabled=true;
document.getElementById('xchange2').disabled=true;
document.getElementById('gamble3').disabled=true;
document.getElementById('withdraw3').disabled=true;
document.getElementById('xchange3').disabled=true;
document.getElementById('totalgamble').innerHTML="15$";
p1balance$=p1balance$-5;
p2balance$=p2balance$-5;
p3balance$=p3balance$-5;
document.getElementById('p1balance').innerHTML=p1balance$+"$";
document.getElementById('p2balance').innerHTML=p2balance$+"$";
document.getElementById('p3balance').innerHTML=p3balance$+"$";	
}

else if(players==4)
{
shuffle();
flipsound.play();
document.getElementById('turndisp').innerHTML="Player 1's Turn";
document.getElementById('rounddisp').innerHTML="Round 1";
document.getElementById('gamble1').disabled=false;
document.getElementById('withdraw1').disabled=false;
document.getElementById('xchange1').disabled=false;
document.getElementById('gamble2').disabled=true;
document.getElementById('withdraw2').disabled=true;
document.getElementById('xchange2').disabled=true;
document.getElementById('gamble3').disabled=true;
document.getElementById('withdraw3').disabled=true;
document.getElementById('xchange3').disabled=true;
document.getElementById('gamble4').disabled=true;
document.getElementById('withdraw4').disabled=true;
document.getElementById('xchange4').disabled=true;
document.getElementById('totalgamble').innerHTML="20$";
p1balance$=p1balance$-5;
p2balance$=p2balance$-5;
p3balance$=p3balance$-5;
p4balance$=p4balance$-5;
document.getElementById('p1balance').innerHTML=p1balance$+"$";
document.getElementById('p2balance').innerHTML=p2balance$+"$";
document.getElementById('p3balance').innerHTML=p3balance$+"$";	
document.getElementById('p4balance').innerHTML=p4balance$+"$";	
}

},1000);
}

roundcode=1;
function withdraw1()
{
document.getElementById('drawncard').innerHTML="<div class='cardback'></div>";
document.getElementById('turndisp').innerHTML="Player 2's Turn";
document.getElementById('rounddisp').innerHTML="Round "+roundcode;
document.getElementById('gamble2').disabled=false;
document.getElementById('withdraw2').disabled=false;
document.getElementById('xchange2').disabled=false;
document.getElementById('gamble1').disabled=true;
document.getElementById('withdraw1').disabled=true;
document.getElementById('xchange1').disabled=true;
document.getElementById('player1').innerHTML="<div class='cardback'></div><div class='cardback'></div>";
flipsound.play();
gambleamt=5;

if(totalgamblevalue==0 || p2balance$<=0)
{
document.getElementById('turndisp').innerHTML="Nothing to Gamble!";
setTimeout(function()
{
withdraw2();
},2000);
}

if(gameoverinterval!=undefined)
	clearInterval(gameoverinterval);
gameoverinterval=setInterval(gameoverdisp,100);
}

function withdraw2()
{
if(players==2)
{
document.getElementById('drawncard').innerHTML="<div class='cardback'></div>";	
roundcode++;
document.getElementById('gamble2').disabled=true;
document.getElementById('withdraw2').disabled=true;
document.getElementById('xchange2').disabled=true;
document.getElementById('player2').innerHTML="<div class='cardback'></div><div class='cardback'></div>";
document.getElementById('turndisp').innerHTML="Shuffling...";
flipsound.play();
gambleamt=5;

setTimeout(function()
{
shufflesound.play();
},1000);

setTimeout(function()
{
document.getElementById('turndisp').innerHTML="Player 1's Turn";
document.getElementById('rounddisp').innerHTML="Round "+roundcode;
document.getElementById('gamble1').disabled=false;
document.getElementById('withdraw1').disabled=false;
document.getElementById('xchange1').disabled=false;
totalgamblevalue=totalgamblevalue+10;
p1balance$=p1balance$-5;
p2balance$=p2balance$-5;
document.getElementById('totalgamble').innerHTML=totalgamblevalue+"$";
document.getElementById('p1balance').innerHTML=p1balance$+"$";
document.getElementById('p2balance').innerHTML=p2balance$+"$";
shuffle();
flipsound.play();
},2000);
}

else if(players==3 || players==4)
{
document.getElementById('drawncard').innerHTML="<div class='cardback'></div>";
document.getElementById('turndisp').innerHTML="Player 3's Turn";
document.getElementById('rounddisp').innerHTML="Round "+roundcode;
document.getElementById('gamble3').disabled=false;
document.getElementById('withdraw3').disabled=false;
document.getElementById('xchange3').disabled=false;
document.getElementById('gamble2').disabled=true;
document.getElementById('withdraw2').disabled=true;
document.getElementById('xchange2').disabled=true;
document.getElementById('player2').innerHTML="<div class='cardback'></div><div class='cardback'></div>";
flipsound.play();
gambleamt=5;

if(totalgamblevalue==0 || p3balance$<=0)
{
document.getElementById('turndisp').innerHTML="Nothing to Gamble!";
setTimeout(function()
{
withdraw3();
},2000);
}
}

if(gameoverinterval!=undefined)
	clearInterval(gameoverinterval);
gameoverinterval=setInterval(gameoverdisp,100);
}

function withdraw3()
{
if(players==3)
{
document.getElementById('drawncard').innerHTML="<div class='cardback'></div>";	
roundcode++;
document.getElementById('gamble3').disabled=true;
document.getElementById('withdraw3').disabled=true;
document.getElementById('xchange3').disabled=true;
document.getElementById('player3').innerHTML="<div class='cardback'></div><div class='cardback'></div>";
document.getElementById('turndisp').innerHTML="Shuffling...";
flipsound.play();
gambleamt=5;

setTimeout(function()
{
shufflesound.play();
},1000);

setTimeout(function()
{
document.getElementById('turndisp').innerHTML="Player 1's Turn";
document.getElementById('rounddisp').innerHTML="Round "+roundcode;
document.getElementById('gamble1').disabled=false;
document.getElementById('withdraw1').disabled=false;
document.getElementById('xchange1').disabled=false;
totalgamblevalue=totalgamblevalue+15;
p1balance$=p1balance$-5;
p2balance$=p2balance$-5;
p3balance$=p3balance$-5;
document.getElementById('totalgamble').innerHTML=totalgamblevalue+"$";
document.getElementById('p1balance').innerHTML=p1balance$+"$";
document.getElementById('p2balance').innerHTML=p2balance$+"$";
document.getElementById('p3balance').innerHTML=p3balance$+"$";
shuffle();
flipsound.play();
},2000);
}

else if(players==4)
{
document.getElementById('drawncard').innerHTML="<div class='cardback'></div>";
document.getElementById('turndisp').innerHTML="Player 4's Turn";
document.getElementById('rounddisp').innerHTML="Round "+roundcode;
document.getElementById('gamble4').disabled=false;
document.getElementById('withdraw4').disabled=false;
document.getElementById('xchange4').disabled=false;
document.getElementById('gamble3').disabled=true;
document.getElementById('withdraw3').disabled=true;
document.getElementById('xchange3').disabled=true;
document.getElementById('player3').innerHTML="<div class='cardback'></div><div class='cardback'></div>";
flipsound.play();
gambleamt=5;

if(totalgamblevalue==0 || p4balance$<=0)
{
document.getElementById('turndisp').innerHTML="Nothing to Gamble!";
setTimeout(function()
{
withdraw4();
},2000);
}
}

if(gameoverinterval!=undefined)
	clearInterval(gameoverinterval);
gameoverinterval=setInterval(gameoverdisp,100);
}

function withdraw4()
{
document.getElementById('drawncard').innerHTML="<div class='cardback'></div>";	
roundcode++;
document.getElementById('gamble4').disabled=true;
document.getElementById('withdraw4').disabled=true;
document.getElementById('xchange4').disabled=true;
document.getElementById('player4').innerHTML="<div class='cardback'></div><div class='cardback'></div>";
document.getElementById('turndisp').innerHTML="Shuffling...";
flipsound.play();
gambleamt=5;

setTimeout(function()
{
shufflesound.play();
},1000);

setTimeout(function()
{
document.getElementById('turndisp').innerHTML="Player 1's Turn";
document.getElementById('rounddisp').innerHTML="Round "+roundcode;
document.getElementById('gamble1').disabled=false;
document.getElementById('withdraw1').disabled=false;
document.getElementById('xchange1').disabled=false;
totalgamblevalue=totalgamblevalue+20;
p1balance$=p1balance$-5;
p2balance$=p2balance$-5;
p3balance$=p3balance$-5;
p4balance$=p4balance$-5;
document.getElementById('totalgamble').innerHTML=totalgamblevalue+"$";
document.getElementById('p1balance').innerHTML=p1balance$+"$";
document.getElementById('p2balance').innerHTML=p2balance$+"$";
document.getElementById('p3balance').innerHTML=p3balance$+"$";
document.getElementById('p4balance').innerHTML=p4balance$+"$";
shuffle();
flipsound.play();
},2000);

if(gameoverinterval!=undefined)
	clearInterval(gameoverinterval);
gameoverinterval=setInterval(gameoverdisp,100);
}

function gamble1()
{
document.getElementById('gamblename').innerHTML="Player 1's Gamble";
document.getElementById('gamblebox').style.display="block";
document.getElementById('gambleamount').value=gambleamt;
document.getElementById('gambleamountdisp').innerHTML=gambleamt+"$";
if(totalgamblevalue>p1balance$)
document.getElementById('gambleamount').setAttribute('max',p1balance$);
else if(totalgamblevalue<=p1balance$)
document.getElementById('gambleamount').setAttribute('max',totalgamblevalue);
}

function gamble2()
{
document.getElementById('gamblename').innerHTML="Player 2's Gamble";
document.getElementById('gamblebox').style.display="block";
document.getElementById('gambleamount').value=gambleamt;
document.getElementById('gambleamountdisp').innerHTML=gambleamt+"$";
if(totalgamblevalue>p2balance$)
document.getElementById('gambleamount').setAttribute('max',p2balance$);
else if(totalgamblevalue<=p2balance$)
document.getElementById('gambleamount').setAttribute('max',totalgamblevalue);
}

function gamble3()
{
document.getElementById('gamblename').innerHTML="Player 3's Gamble";
document.getElementById('gamblebox').style.display="block";
document.getElementById('gambleamount').value=gambleamt;
document.getElementById('gambleamountdisp').innerHTML=gambleamt+"$";
if(totalgamblevalue>p3balance$)
document.getElementById('gambleamount').setAttribute('max',p3balance$);
else if(totalgamblevalue<=p3balance$)
document.getElementById('gambleamount').setAttribute('max',totalgamblevalue);
}

function gamble4()
{
document.getElementById('gamblename').innerHTML="Player 4's Gamble";
document.getElementById('gamblebox').style.display="block";
document.getElementById('gambleamount').value=gambleamt;
document.getElementById('gambleamountdisp').innerHTML=gambleamt+"$";
if(totalgamblevalue>p4balance$)
document.getElementById('gambleamount').setAttribute('max',p4balance$);
else if(totalgamblevalue<=p4balance$)
document.getElementById('gambleamount').setAttribute('max',totalgamblevalue);
}

function gambleback()
{
document.getElementById('gamblebox').style.display="none";
}
     
function gambleamtfunc()
{
document.getElementById('gambleamountdisp').innerHTML=document.getElementById('gambleamount').value+"$";
}	 
        
function gambleconfirm()
{
gambleamt=document.getElementById('gambleamount').value;

document.getElementById('drawcardid').disabled=false;
document.getElementById('gamblebox').style.display="none";

document.getElementById('withdraw1').disabled=true;
document.getElementById('withdraw2').disabled=true;
document.getElementById('withdraw3').disabled=true;
document.getElementById('withdraw4').disabled=true;
document.getElementById('xchange1').disabled=true;
document.getElementById('xchange2').disabled=true;
document.getElementById('xchange3').disabled=true;
document.getElementById('xchange4').disabled=true;

alert('Draw Card to continue');
}

function maxgamble()
{
document.getElementById('gambleamount').value=document.getElementById('gambleamount').max;
document.getElementById('gambleamountdisp').innerHTML=document.getElementById('gambleamount').max+"$";
}

function xchange()
{
document.getElementById('xchangebox').style.display="block";
}

function xchangeback()
{
document.getElementById('xchangebox').style.display="none";
}

function xchangeconfirml()
{
xchangeback();
setTimeout(function()
{
flipsound.play();
if(document.getElementById('turndisp').innerHTML=="Player 1's Turn")
{document.getElementById("player1").innerHTML="";
        var card = document.createElement("div");
		var value = document.createElement("div");
		var suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + deck[20].Suit;

if(deck[20].Value==1)
	deck[20].Value="A";
else if(deck[20].Value==11)
	deck[20].Value="J";
else if(deck[20].Value==12)
	deck[20].Value="Q";
else if(deck[20].Value==13)
	deck[20].Value="K";	
		value.innerHTML = deck[20].Value;
		card.appendChild(value);
		card.appendChild(suit);
		document.getElementById("player1").appendChild(card);
		
		var card2 = document.createElement("div");
		var value2 = document.createElement("div");
		var suit2 = document.createElement("div");
		card2.className = "card";
		value2.className = "value";
		suit2.className = "suit " + deck[39].Suit;
        
if(deck[39].Value==1)
	deck[39].Value="A";
else if(deck[39].Value==11)
	deck[39].Value="J";
else if(deck[39].Value==12)
	deck[39].Value="Q";
else if(deck[39].Value==13)
	deck[39].Value="K";	
		value2.innerHTML = deck[39].Value;
		card2.appendChild(value2);
		card2.appendChild(suit2);
		document.getElementById("player1").appendChild(card2);
		
if(deck[20].Value=="A")
	deck[20].Value=1;
else if(deck[20].Value=="J")
	deck[20].Value=11;
else if(deck[20].Value=="Q")
	deck[20].Value=12;
else if(deck[20].Value=="K")
	deck[20].Value=13;	
mincard1=Number(deck[20].Value);   

document.getElementById('xchange1').disabled=true;  
totalgamblevalue=totalgamblevalue+5;
p1balance$=p1balance$-5;
document.getElementById('totalgamble').innerHTML=totalgamblevalue+"$";
document.getElementById('p1balance').innerHTML=p1balance$+"$";
}

else if(document.getElementById('turndisp').innerHTML=="Player 2's Turn")
{document.getElementById("player2").innerHTML="";
        var card3 = document.createElement("div");
		var value3 = document.createElement("div");
		var suit3 = document.createElement("div");
		card3.className = "card";
		value3.className = "value";
		suit3.className = "suit " + deck[21].Suit;
		
if(deck[21].Value==1)
	deck[21].Value="A";
else if(deck[21].Value==11)
	deck[21].Value="J";
else if(deck[21].Value==12)
	deck[21].Value="Q";
else if(deck[21].Value==13)
	deck[21].Value="K";	
		value3.innerHTML = deck[21].Value;
		card3.appendChild(value3);
		card3.appendChild(suit3);
		document.getElementById("player2").appendChild(card3);
		
		var card4 = document.createElement("div");
		var value4 = document.createElement("div");
		var suit4 = document.createElement("div");
		card4.className = "card";
		value4.className = "value";
		suit4.className = "suit " + deck[41].Suit;
        
if(deck[41].Value==1)
	deck[41].Value="A";
else if(deck[41].Value==11)
	deck[41].Value="J";
else if(deck[41].Value==12)
	deck[41].Value="Q";
else if(deck[41].Value==13)
	deck[41].Value="K";	
		value4.innerHTML = deck[41].Value;
		card4.appendChild(value4);
		card4.appendChild(suit4);
		document.getElementById("player2").appendChild(card4);
		
if(deck[21].Value=="A")
	deck[21].Value=1;
else if(deck[21].Value=="J")
	deck[21].Value=11;
else if(deck[21].Value=="Q")
	deck[21].Value=12;
else if(deck[21].Value=="K")
	deck[21].Value=13;	
mincard2=Number(deck[21].Value);   

document.getElementById('xchange2').disabled=true;  
totalgamblevalue=totalgamblevalue+5;
p2balance$=p2balance$-5;
document.getElementById('totalgamble').innerHTML=totalgamblevalue+"$";
document.getElementById('p2balance').innerHTML=p2balance$+"$";
}

else if(document.getElementById('turndisp').innerHTML=="Player 3's Turn")
{document.getElementById("player3").innerHTML="";
        var card5 = document.createElement("div");
		var value5 = document.createElement("div");
		var suit5 = document.createElement("div");
		card5.className = "card";
		value5.className = "value";
		suit5.className = "suit " + deck[22].Suit;

if(deck[22].Value==1)
	deck[22].Value="A";
else if(deck[22].Value==11)
	deck[22].Value="J";
else if(deck[22].Value==12)
	deck[22].Value="Q";
else if(deck[22].Value==13)
	deck[22].Value="K";	
		value5.innerHTML = deck[22].Value;
		card5.appendChild(value5);
		card5.appendChild(suit5);
		document.getElementById("player3").appendChild(card5);
		
		var card6 = document.createElement("div");
		var value6 = document.createElement("div");
		var suit6 = document.createElement("div");
		card6.className = "card";
		value6.className = "value";
		suit6.className = "suit " + deck[43].Suit;
        
if(deck[43].Value==1)
	deck[43].Value="A";
else if(deck[43].Value==11)
	deck[43].Value="J";
else if(deck[43].Value==12)
	deck[43].Value="Q";
else if(deck[43].Value==13)
	deck[43].Value="K";	
		value6.innerHTML = deck[43].Value;
		card6.appendChild(value6);
		card6.appendChild(suit6);
		document.getElementById("player3").appendChild(card6);
		
if(deck[22].Value=="A")
	deck[22].Value=1;
else if(deck[22].Value=="J")
	deck[22].Value=11;
else if(deck[22].Value=="Q")
	deck[22].Value=12;
else if(deck[22].Value=="K")
	deck[22].Value=13;	
mincard3=Number(deck[22].Value);   

document.getElementById('xchange3').disabled=true;  
totalgamblevalue=totalgamblevalue+5;
p3balance$=p3balance$-5;
document.getElementById('totalgamble').innerHTML=totalgamblevalue+"$";
document.getElementById('p3balance').innerHTML=p3balance$+"$";
}

else if(document.getElementById('turndisp').innerHTML=="Player 4's Turn")
{document.getElementById("player4").innerHTML="";
        var card7 = document.createElement("div");
		var value7 = document.createElement("div");
		var suit7 = document.createElement("div");
		card7.className = "card";
		value7.className = "value";
		suit7.className = "suit " + deck[23].Suit;

if(deck[23].Value==1)
	deck[23].Value="A";
else if(deck[23].Value==11)
	deck[23].Value="J";
else if(deck[23].Value==12)
	deck[23].Value="Q";
else if(deck[23].Value==13)
	deck[23].Value="K";	
		value7.innerHTML = deck[23].Value;
		card7.appendChild(value7);
		card7.appendChild(suit7);
		document.getElementById("player4").appendChild(card7);
		
		var card8 = document.createElement("div");
		var value8 = document.createElement("div");
		var suit8 = document.createElement("div");
		card8.className = "card";
		value8.className = "value";
		suit8.className = "suit " + deck[45].Suit;
        
if(deck[45].Value==1)
	deck[45].Value="A";
else if(deck[45].Value==11)
	deck[45].Value="J";
else if(deck[45].Value==12)
	deck[45].Value="Q";
else if(deck[45].Value==13)
	deck[45].Value="K";	
		value8.innerHTML = deck[45].Value;
		card8.appendChild(value8);
		card8.appendChild(suit8);
		document.getElementById("player4").appendChild(card8);
		
if(deck[23].Value=="A")
	deck[23].Value=1;
else if(deck[23].Value=="J")
	deck[23].Value=11;
else if(deck[23].Value=="Q")
	deck[23].Value=12;
else if(deck[23].Value=="K")
	deck[23].Value=13;	
mincard4=Number(deck[23].Value);   

document.getElementById('xchange4').disabled=true;  
totalgamblevalue=totalgamblevalue+5;
p4balance$=p4balance$-5;
document.getElementById('totalgamble').innerHTML=totalgamblevalue+"$";
document.getElementById('p4balance').innerHTML=p4balance$+"$";
}
},500);
}

function xchangeconfirmr()
{
xchangeback();
setTimeout(function()
{
flipsound.play();
if(document.getElementById('turndisp').innerHTML=="Player 1's Turn")
{document.getElementById("player1").innerHTML="";
        var card2 = document.createElement("div");
		var value2 = document.createElement("div");
		var suit2 = document.createElement("div");
		card2.className = "card";
		value2.className = "value";
		suit2.className = "suit " + deck[38].Suit;
        
if(deck[38].Value==1)
	deck[38].Value="A";
else if(deck[38].Value==11)
	deck[38].Value="J";
else if(deck[38].Value==12)
	deck[38].Value="Q";
else if(deck[38].Value==13)
	deck[38].Value="K";	
		value2.innerHTML = deck[38].Value;
		card2.appendChild(value2);
		card2.appendChild(suit2);
		document.getElementById("player1").appendChild(card2);
		
		var card = document.createElement("div");
		var value = document.createElement("div");
		var suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + deck[20].Suit;

if(deck[20].Value==1)
	deck[20].Value="A";
else if(deck[20].Value==11)
	deck[20].Value="J";
else if(deck[20].Value==12)
	deck[20].Value="Q";
else if(deck[20].Value==13)
	deck[20].Value="K";	
		value.innerHTML = deck[20].Value;
		card.appendChild(value);
		card.appendChild(suit);
		document.getElementById("player1").appendChild(card);
		
if(deck[20].Value=="A")
	deck[20].Value=1;
else if(deck[20].Value=="J")
	deck[20].Value=11;
else if(deck[20].Value=="Q")
	deck[20].Value=12;
else if(deck[20].Value=="K")
	deck[20].Value=13;	
maxcard1=Number(deck[20].Value);   

document.getElementById('xchange1').disabled=true;  
totalgamblevalue=totalgamblevalue+5;
p1balance$=p1balance$-5;
document.getElementById('totalgamble').innerHTML=totalgamblevalue+"$";
document.getElementById('p1balance').innerHTML=p1balance$+"$";
}

else if(document.getElementById('turndisp').innerHTML=="Player 2's Turn")
{document.getElementById("player2").innerHTML="";
		var card4 = document.createElement("div");
		var value4 = document.createElement("div");
		var suit4 = document.createElement("div");
		card4.className = "card";
		value4.className = "value";
		suit4.className = "suit " + deck[40].Suit;
        
if(deck[40].Value==1)
	deck[40].Value="A";
else if(deck[40].Value==11)
	deck[40].Value="J";
else if(deck[40].Value==12)
	deck[40].Value="Q";
else if(deck[40].Value==13)
	deck[40].Value="K";	
		value4.innerHTML = deck[40].Value;
		card4.appendChild(value4);
		card4.appendChild(suit4);
		document.getElementById("player2").appendChild(card4);
		
		var card3 = document.createElement("div");
		var value3 = document.createElement("div");
		var suit3 = document.createElement("div");
		card3.className = "card";
		value3.className = "value";
		suit3.className = "suit " + deck[21].Suit;
		
if(deck[21].Value==1)
	deck[21].Value="A";
else if(deck[21].Value==11)
	deck[21].Value="J";
else if(deck[21].Value==12)
	deck[21].Value="Q";
else if(deck[21].Value==13)
	deck[21].Value="K";	
		value3.innerHTML = deck[21].Value;
		card3.appendChild(value3);
		card3.appendChild(suit3);
		document.getElementById("player2").appendChild(card3);
		
if(deck[21].Value=="A")
	deck[21].Value=1;
else if(deck[21].Value=="J")
	deck[21].Value=11;
else if(deck[21].Value=="Q")
	deck[21].Value=12;
else if(deck[21].Value=="K")
	deck[21].Value=13;	
maxcard2=Number(deck[21].Value);   

document.getElementById('xchange2').disabled=true;  
totalgamblevalue=totalgamblevalue+5;
p2balance$=p2balance$-5;
document.getElementById('totalgamble').innerHTML=totalgamblevalue+"$";
document.getElementById('p2balance').innerHTML=p2balance$+"$";
}

else if(document.getElementById('turndisp').innerHTML=="Player 3's Turn")
{document.getElementById("player3").innerHTML="";
        var card6 = document.createElement("div");
		var value6 = document.createElement("div");
		var suit6 = document.createElement("div");
		card6.className = "card";
		value6.className = "value";
		suit6.className = "suit " + deck[42].Suit;
        
if(deck[42].Value==1)
	deck[42].Value="A";
else if(deck[42].Value==11)
	deck[42].Value="J";
else if(deck[42].Value==12)
	deck[42].Value="Q";
else if(deck[42].Value==13)
	deck[42].Value="K";	
		value6.innerHTML = deck[42].Value;
		card6.appendChild(value6);
		card6.appendChild(suit6);
		document.getElementById("player3").appendChild(card6);
		
if(deck[22].Value=="A")
	deck[22].Value=1;
else if(deck[22].Value=="J")
	deck[22].Value=11;
else if(deck[22].Value=="Q")
	deck[22].Value=12;
else if(deck[22].Value=="K")
	deck[22].Value=13;	
maxcard3=Number(deck[22].Value);   

        var card5 = document.createElement("div");
		var value5 = document.createElement("div");
		var suit5 = document.createElement("div");
		card5.className = "card";
		value5.className = "value";
		suit5.className = "suit " + deck[22].Suit;

if(deck[22].Value==1)
	deck[22].Value="A";
else if(deck[22].Value==11)
	deck[22].Value="J";
else if(deck[22].Value==12)
	deck[22].Value="Q";
else if(deck[22].Value==13)
	deck[22].Value="K";	
		value5.innerHTML = deck[22].Value;
		card5.appendChild(value5);
		card5.appendChild(suit5);
		document.getElementById("player3").appendChild(card5);

document.getElementById('xchange3').disabled=true;  
totalgamblevalue=totalgamblevalue+5;
p3balance$=p3balance$-5;
document.getElementById('totalgamble').innerHTML=totalgamblevalue+"$";
document.getElementById('p3balance').innerHTML=p3balance$+"$";
}

else if(document.getElementById('turndisp').innerHTML=="Player 4's Turn")
{document.getElementById("player4").innerHTML="";
        var card8 = document.createElement("div");
		var value8 = document.createElement("div");
		var suit8 = document.createElement("div");
		card8.className = "card";
		value8.className = "value";
		suit8.className = "suit " + deck[44].Suit;
        
if(deck[44].Value==1)
	deck[44].Value="A";
else if(deck[44].Value==11)
	deck[44].Value="J";
else if(deck[44].Value==12)
	deck[44].Value="Q";
else if(deck[44].Value==13)
	deck[44].Value="K";	
		value8.innerHTML = deck[44].Value;
		card8.appendChild(value8);
		card8.appendChild(suit8);
		document.getElementById("player4").appendChild(card8);
		
if(deck[23].Value=="A")
	deck[23].Value=1;
else if(deck[23].Value=="J")
	deck[23].Value=11;
else if(deck[23].Value=="Q")
	deck[23].Value=12;
else if(deck[23].Value=="K")
	deck[23].Value=13;	
mincard2=Number(deck[23].Value);  

        var card7 = document.createElement("div");
		var value7 = document.createElement("div");
		var suit7 = document.createElement("div");
		card7.className = "card";
		value7.className = "value";
		suit7.className = "suit " + deck[23].Suit;

if(deck[23].Value==1)
	deck[23].Value="A";
else if(deck[23].Value==11)
	deck[23].Value="J";
else if(deck[23].Value==12)
	deck[23].Value="Q";
else if(deck[23].Value==13)
	deck[23].Value="K";	
		value7.innerHTML = deck[23].Value;
		card7.appendChild(value7);
		card7.appendChild(suit7);
		document.getElementById("player4").appendChild(card7); 

document.getElementById('xchange4').disabled=true;  
totalgamblevalue=totalgamblevalue+5;
p4balance$=p4balance$-5;
document.getElementById('totalgamble').innerHTML=totalgamblevalue+"$";
document.getElementById('p4balance').innerHTML=p4balance$+"$";
}
},500);
}

function newgamedisp()
{
document.getElementById('newgamebox').style.display="block";
document.getElementById('xchangebox').style.display="none";
document.getElementById('gamblebox').style.display="none";
}

function newgameback()
{
document.getElementById('newgamebox').style.display="none";
}

function ngplayer2()
{
document.getElementById('ngplayer2').style.border="black 4px solid";
document.getElementById('ngplayer3').style.border="none";
document.getElementById('ngplayer4').style.border="none";
players=2;
}

function ngplayer3()
{
document.getElementById('ngplayer2').style.border="none";
document.getElementById('ngplayer3').style.border="black 4px solid";
document.getElementById('ngplayer4').style.border="none";
players=3;
}

function ngplayer4()
{
document.getElementById('ngplayer2').style.border="none";
document.getElementById('ngplayer3').style.border="none";
document.getElementById('ngplayer4').style.border="black 4px solid";
players=4;
}

function gameoverdisp()
{
if(players==2 && p1balance$<=0)
{
setTimeout(function(){alert('Player 2 wins!');},1000);
gameoverfunc();
clearInterval(gameoverinterval);
}

if(players==2 && p2balance$<=0)
{
setTimeout(function(){alert('Player 1 wins!');},1000);
gameoverfunc();
clearInterval(gameoverinterval);
}

if(players==3 && p2balance$<=0 && p3balance$<=0)
{
setTimeout(function(){alert('Player 1 wins!');},1000);
gameoverfunc();
clearInterval(gameoverinterval);
}

if(players==3 && p1balance$<=0 && p3balance$<=0)
{
setTimeout(function(){alert('Player 2 wins!');},1000);
gameoverfunc();
clearInterval(gameoverinterval);
}

if(players==3 && p1balance$<=0 && p2balance$<=0)
{
setTimeout(function(){alert('Player 3 wins!');},1000);
gameoverfunc();
clearInterval(gameoverinterval);
}

if(players==4 && p1balance$<=0 && p2balance$<=0 && p3balance$<=0)
{
setTimeout(function(){alert('Player 4 wins!');},1000);
gameoverfunc();
clearInterval(gameoverinterval);
}

if(players==4 && p1balance$<=0 && p2balance$<=0 && p4balance$<=0)
{
setTimeout(function(){alert('Player 3 wins!');},1000);
gameoverfunc();
clearInterval(gameoverinterval);
}

if(players==4 && p1balance$<=0 && p4balance$<=0 && p3balance$<=0)
{
setTimeout(function(){alert('Player 2 wins!');},1000);
gameoverfunc();
clearInterval(gameoverinterval);
}

if(players==4 && p4balance$<=0 && p2balance$<=0 && p3balance$<=0)
{
setTimeout(function(){alert('Player 1 wins!');},1000);
gameoverfunc();
clearInterval(gameoverinterval);
}
}

function gameoverfunc()
{
document.getElementById('turndisp').innerHTML='Press "New Game" to';
document.getElementById('rounddisp').innerHTML='Play Again';

document.getElementById('withdraw1').disabled=true;
document.getElementById('withdraw2').disabled=true;
document.getElementById('withdraw3').disabled=true;
document.getElementById('withdraw4').disabled=true;
document.getElementById('xchange1').disabled=true;
document.getElementById('xchange2').disabled=true;
document.getElementById('xchange3').disabled=true;
document.getElementById('xchange4').disabled=true;
document.getElementById('gamble1').disabled=true;
document.getElementById('gamble2').disabled=true;
document.getElementById('gamble3').disabled=true;
document.getElementById('gamble4').disabled=true;
}

setInterval(function()
{
if(p1balance$<=0)
{
document.getElementById('p1').innerHTML="Player 1 Eliminated";
document.getElementById('xchange1').disabled=true;
document.getElementById('gamble1').disabled=true;
document.getElementById('p1balance').innerHTML="0$";
}

if(p2balance$<=0)
{
document.getElementById('p2').innerHTML="Player 2 Eliminated";
document.getElementById('xchange2').disabled=true;
document.getElementById('gamble2').disabled=true;
document.getElementById('p2balance').innerHTML="0$";
}

if(p3balance$<=0)
{
document.getElementById('p3').innerHTML="Player 3 Eliminated";
document.getElementById('xchange3').disabled=true;
document.getElementById('gamble3').disabled=true;
document.getElementById('p3balance').innerHTML="0$";
}

if(p4balance$<=0)
{
document.getElementById('p4').innerHTML="Player 4 Eliminated";
document.getElementById('xchange4').disabled=true;
document.getElementById('gamble4').disabled=true;
document.getElementById('p4balance').innerHTML="0$";
}
},1);

function guidedisp()
{
if(document.getElementById('guidebox').style.display=="block")
document.getElementById('guidebox').style.display="none";
else
document.getElementById('guidebox').style.display="block";
}

function guideback()
{
document.getElementById('guidebox').style.display="none";
}