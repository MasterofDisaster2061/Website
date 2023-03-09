
var coinflipsound= new Audio();
coinflipsound.src= "coinflip.mp3";
coinflipsound.playbackRate=0.43;
var dicerollsound= new Audio();
dicerollsound.src= "diceroll4.mp3";
var flipsound=new Audio();
flipsound.src="flipcard.mp3";
flipsound.playbackRate=1.8;

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

jQuery(document).ready(function($){

  $('#cointoss').on('click', function(){
	setTimeout(coindelay,3000);
	document.getElementById('cointoss').disabled=true;
	coinflipsound.play();
	
    var flipResult = Math.random();
    $('#coin').removeClass();
    setTimeout(function(){
      if(flipResult <= 0.5){
        $('#coin').addClass('heads');
        console.log('it is head');
      }
      else{
        $('#coin').addClass('tails');
        console.log('it is tails');
      }
    }, 100);
  });
});

function coindelay()
{
document.getElementById('cointoss').disabled=false;
}

function rollDice() {
  const dice = [...document.querySelectorAll(".die-list")];
  dice.forEach(die => {
    toggleClasses(die);
	dicevalue = getRandomNumber(1, 6);
	dicerollsound.play();
	dicerollsound.playbackRate=1.2;
    die.dataset.roll = dicevalue;
	document.getElementById('rolld').disabled=true;
	setTimeout(dicefunc,2500);
  });
}

function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}

function dicefunc()
{
document.getElementById('rolld').disabled=false;
}

var cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var suits = ["diamonds", "hearts", "spades", "clubs"];
var deck = new Array();

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
}

function renderDeck()
{
	document.getElementById('drawncard').innerHTML = '';
	
		var card = document.createElement("div");
		var value = document.createElement("div");
		var suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + deck[0].Suit;

		value.innerHTML = deck[0].Value;
		card.appendChild(value);
		card.appendChild(suit);

		document.getElementById("drawncard").appendChild(card);
		flipsound.play();
		document.getElementById('drawcard').disabled=true;
		setTimeout(carddelay,800);
}

function carddelay()
{
document.getElementById('drawcard').disabled=false;
}

function generateint()
{
minval=parseInt(document.getElementById('minvalue').value);
maxval=parseInt(document.getElementById('maxvalue').value);
	
document.getElementById('randomint').value=getRandomNumber(minval, maxval);
}