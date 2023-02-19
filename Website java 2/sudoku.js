
td11=document.getElementById('td11');
td12=document.getElementById('td12');
td13=document.getElementById('td13');
td14=document.getElementById('td14');
td15=document.getElementById('td15');
td16=document.getElementById('td16');
td17=document.getElementById('td17');
td18=document.getElementById('td18');
td19=document.getElementById('td19');

td21=document.getElementById('td21');
td22=document.getElementById('td22');
td23=document.getElementById('td23');
td24=document.getElementById('td24');
td25=document.getElementById('td25');
td26=document.getElementById('td26');
td27=document.getElementById('td27');
td28=document.getElementById('td28');
td29=document.getElementById('td29');

td31=document.getElementById('td31');
td32=document.getElementById('td32');
td33=document.getElementById('td33');
td34=document.getElementById('td34');
td35=document.getElementById('td35');
td36=document.getElementById('td36');
td37=document.getElementById('td37');
td38=document.getElementById('td38');
td39=document.getElementById('td39');

td41=document.getElementById('td41');
td42=document.getElementById('td42');
td43=document.getElementById('td43');
td44=document.getElementById('td44');
td45=document.getElementById('td45');
td46=document.getElementById('td46');
td47=document.getElementById('td47');
td48=document.getElementById('td48');
td49=document.getElementById('td49');

td51=document.getElementById('td51');
td52=document.getElementById('td52');
td53=document.getElementById('td53');
td54=document.getElementById('td54');
td55=document.getElementById('td55');
td56=document.getElementById('td56');
td57=document.getElementById('td57');
td58=document.getElementById('td58');
td59=document.getElementById('td59');

td61=document.getElementById('td61');
td62=document.getElementById('td62');
td63=document.getElementById('td63');
td64=document.getElementById('td64');
td65=document.getElementById('td65');
td66=document.getElementById('td66');
td67=document.getElementById('td67');
td68=document.getElementById('td68');
td69=document.getElementById('td69');

td71=document.getElementById('td71');
td72=document.getElementById('td72');
td73=document.getElementById('td73');
td74=document.getElementById('td74');
td75=document.getElementById('td75');
td76=document.getElementById('td76');
td77=document.getElementById('td77');
td78=document.getElementById('td78');
td79=document.getElementById('td79');

td81=document.getElementById('td81');
td82=document.getElementById('td82');
td83=document.getElementById('td83');
td84=document.getElementById('td84');
td85=document.getElementById('td85');
td86=document.getElementById('td86');
td87=document.getElementById('td87');
td88=document.getElementById('td88');
td89=document.getElementById('td89');

td91=document.getElementById('td91');
td92=document.getElementById('td92');
td93=document.getElementById('td93');
td94=document.getElementById('td94');
td95=document.getElementById('td95');
td96=document.getElementById('td96');
td97=document.getElementById('td97');
td98=document.getElementById('td98');
td99=document.getElementById('td99');

numbervalue="";

$(".selector").on("click", "td", function() {
    
    $(this).siblings().removeClass("selected");
   
    $(this).addClass("selected");
	numbervalue=$(this).html();
});

$("#table").on("click", "td", function() {
   $(this).html(numbervalue);
   
   $("td").removeClass("selected3");
   
   $(this).addClass("selected3");
   $(this).addClass("selected2");
});

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomgame1()
{
td13.innerHTML='3';
td13.disabled=true;
td14.innerHTML='7';
td14.disabled=true;
td15.innerHTML='2';
td15.disabled=true;
td17.innerHTML='1';
td17.disabled=true;
td23.innerHTML='6';
td23.disabled=true;
td24.innerHTML='9';
td24.disabled=true;
td26.innerHTML='5';
td26.disabled=true;
td27.innerHTML='8';
td27.disabled=true;
td31.innerHTML='4';
td31.disabled=true;
td32.innerHTML='9';
td32.disabled=true;
td35.innerHTML='1';
td35.disabled=true;
td38.innerHTML='5';
td38.disabled=true;
td39.innerHTML='2';
td39.disabled=true;
td42.innerHTML='5';
td42.disabled=true;
td48.innerHTML='6';
td48.disabled=true;
td49.innerHTML='1';
td49.disabled=true;
td51.innerHTML='8';
td51.disabled=true;
td53.innerHTML='4';
td53.disabled=true;
td57.innerHTML='2';
td57.disabled=true;
td59.innerHTML='9';
td59.disabled=true;
td61.innerHTML='7';
td61.disabled=true;
td62.innerHTML='6';
td62.disabled=true;
td68.innerHTML='4';
td68.disabled=true;
td71.innerHTML='2';
td71.disabled=true;
td72.innerHTML='3';
td72.disabled=true;
td75.innerHTML='5';
td75.disabled=true;
td78.innerHTML='1';
td78.disabled=true;
td79.innerHTML='7';
td79.disabled=true;
td83.innerHTML='1';
td83.disabled=true;
td84.innerHTML='2';
td84.disabled=true;
td86.innerHTML='3';
td86.disabled=true;
td87.innerHTML='9';
td87.disabled=true;
td93.innerHTML='5';
td93.disabled=true;
td95.innerHTML='8';
td95.disabled=true;
td96.innerHTML='6';
td96.disabled=true;
td97.innerHTML='4';
td97.disabled=true;
}

function randomgame2()
{
td12.innerHTML='7';
td12.disabled=true;
td15.innerHTML='2';
td15.disabled=true;
td17.innerHTML='9';
td17.disabled=true;
td22.innerHTML='4';
td22.disabled=true;
td24.innerHTML='8';
td24.disabled=true;
td26.innerHTML='6';
td26.disabled=true;
td32.innerHTML='1';
td32.disabled=true;
td33.innerHTML='2';
td33.disabled=true;
td37.innerHTML='3';
td37.disabled=true;
td47.innerHTML='8';
td47.disabled=true;
td48.innerHTML='7';
td48.disabled=true;
td52.innerHTML='6';
td52.disabled=true;
td54.innerHTML='9';
td54.disabled=true;
td55.innerHTML='7';
td55.disabled=true;
td56.innerHTML='2';
td56.disabled=true;
td58.innerHTML='5';
td58.disabled=true;
td62.innerHTML='2';
td62.disabled=true;
td63.innerHTML='5';
td63.disabled=true;
td73.innerHTML='1';
td73.disabled=true;
td77.innerHTML='2';
td77.disabled=true;
td78.innerHTML='9';
td78.disabled=true;
td84.innerHTML='5';
td84.disabled=true;
td86.innerHTML='4';
td86.disabled=true;
td88.innerHTML='3';
td88.disabled=true;
td93.innerHTML='7';
td93.disabled=true;
td95.innerHTML='6';
td95.disabled=true;
td98.innerHTML='1';
td98.disabled=true;
}

function randomgame3()
{
td11.innerHTML='3';
td11.disabled=true;
td13.innerHTML='5';
td13.disabled=true;
td14.innerHTML='4';
td14.disabled=true;
td16.innerHTML='2';
td16.disabled=true;
td18.innerHTML='6';
td18.disabled=true;
td21.innerHTML='4';
td21.disabled=true;
td22.innerHTML='9';
td22.disabled=true;
td24.innerHTML='7';
td24.disabled=true;
td25.innerHTML='6';
td25.disabled=true;
td27.innerHTML='1';
td27.disabled=true;
td29.innerHTML='8';
td29.disabled=true;
td31.innerHTML='6';
td31.disabled=true;
td34.innerHTML='1';
td34.disabled=true;
td36.innerHTML='3';
td36.disabled=true;
td37.innerHTML='2';
td37.disabled=true;
td38.innerHTML='4';
td38.disabled=true;
td39.innerHTML='5';
td39.disabled=true;
td43.innerHTML='3';
td43.disabled=true;
td44.innerHTML='9';
td44.disabled=true;
td47.innerHTML='5';
td47.disabled=true;
td48.innerHTML='8';
td48.disabled=true;
td51.innerHTML='9';
td51.disabled=true;
td52.innerHTML='6';
td52.disabled=true;
td55.innerHTML='5';
td55.disabled=true;
td56.innerHTML='8';
td56.disabled=true;
td57.innerHTML='7';
td57.disabled=true;
td59.innerHTML='3';
td59.disabled=true;
td62.innerHTML='8';
td62.disabled=true;
td63.innerHTML='1';
td63.disabled=true;
td64.innerHTML='3';
td64.disabled=true;
td66.innerHTML='4';
td66.disabled=true;
td68.innerHTML='9';
td68.disabled=true;
td69.innerHTML='2';
td69.disabled=true;
td72.innerHTML='5';
td72.disabled=true;
td74.innerHTML='6';
td74.disabled=true;
td76.innerHTML='1';
td76.disabled=true;
td77.innerHTML='4';
td77.disabled=true;
td81.innerHTML='2';
td81.disabled=true;
td84.innerHTML='5';
td84.disabled=true;
td85.innerHTML='4';
td85.disabled=true;
td86.innerHTML='9';
td86.disabled=true;
td88.innerHTML='7';
td88.disabled=true;
td91.innerHTML='1';
td91.disabled=true;
td92.innerHTML='4';
td92.disabled=true;
td93.innerHTML='9';
td93.disabled=true;
td96.innerHTML='7';
td96.disabled=true;
td97.innerHTML='3';
td97.disabled=true;
td99.innerHTML='6';
td99.disabled=true;
}

alertcode=0;
document.getElementById('table').addEventListener('click',function()
{
if(alertcode==0 && randomnumber==1 && td11.innerHTML==5 && td12.innerHTML==8 && td16.innerHTML==4 && td18.innerHTML==9 && td19.innerHTML==6 && td21.innerHTML==1 && td22.innerHTML==2 && td25.innerHTML==3 && td28.innerHTML==7 && td29.innerHTML==4
&& td33.innerHTML==7 && td34.innerHTML==6 && td36.innerHTML==8 && td37.innerHTML==3 && td41.innerHTML==3 && td43.innerHTML==9 && td44.innerHTML==8 && td45.innerHTML==4 && td46.innerHTML==2 && td47.innerHTML==7 && td52.innerHTML==1 && td54.innerHTML==5
&& td55.innerHTML==6 && td56.innerHTML==7 && td58.innerHTML==3 && td63.innerHTML==2 && td64.innerHTML==3 && td65.innerHTML==9 && td66.innerHTML==1 && td67.innerHTML==5 && td69.innerHTML==8 && td73.innerHTML==8 && td74.innerHTML==4 && td76.innerHTML==9
&& td77.innerHTML==6 && td81.innerHTML==6 && td82.innerHTML==4 && td85.innerHTML==7 && td88.innerHTML==8 && td89.innerHTML==5 && td91.innerHTML==9 && td92.innerHTML==7 && td94.innerHTML==1 && td98.innerHTML==2 && td99.innerHTML==3)
{setTimeout(alertgameover,500);
alertcode=1;
clearInterval(timeinterval);
document.getElementById('resetgame').disabled=true;
}

else if(alertcode==0 && randomnumber==2 && td11.innerHTML==8 && td13.innerHTML==6 && td16.innerHTML==3 && td14.innerHTML==1 && td18.innerHTML==4 && td19.innerHTML==5 && td21.innerHTML==5 && td23.innerHTML==3 && td25.innerHTML==9 && td27.innerHTML==7
&& td28.innerHTML==2 && td29.innerHTML==1 && td31.innerHTML==9 && td34.innerHTML==7 && td35.innerHTML==4 && td36.innerHTML==5 && td38.innerHTML==8 && td39.innerHTML==6 && td41.innerHTML==3 && td42.innerHTML==9 && td43.innerHTML==4 && td44.innerHTML==6
&& td45.innerHTML==5 && td46.innerHTML==1 && td49.innerHTML==2 && td51.innerHTML==1 && td53.innerHTML==8 && td57.innerHTML==4 && td59.innerHTML==3 && td61.innerHTML==7 && td64.innerHTML==4 && td65.innerHTML==3 && td66.innerHTML==8 && td67.innerHTML==1
&& td68.innerHTML==6 && td69.innerHTML==9 && td71.innerHTML==6 && td72.innerHTML==5 && td74.innerHTML==3 && td75.innerHTML==8 && td76.innerHTML==7 && td79.innerHTML==4 && td81.innerHTML==2 && td82.innerHTML==8 && td83.innerHTML==9
&& td85.innerHTML==1 && td87.innerHTML==6 && td89.innerHTML==7 && td91.innerHTML==4 && td92.innerHTML==3 && td94.innerHTML==2 && td96.innerHTML==9 && td97.innerHTML==5 && td99.innerHTML==8)
{setTimeout(alertgameover,500);
alertcode=1;
clearInterval(timeinterval);
document.getElementById('resetgame').disabled=true;
}

else if(alertcode==0 && randomnumber==3 && td12.innerHTML==1 && td15.innerHTML==8 && td17.innerHTML==9 && td19.innerHTML==7 && td23.innerHTML==2 && td26.innerHTML==5 && td28.innerHTML==3 && td32.innerHTML==7 && td33.innerHTML==8 && td35.innerHTML==9
&& td41.innerHTML==7 && td42.innerHTML==2 && td45.innerHTML==1 && td46.innerHTML==6 && td49.innerHTML==4 && td53.innerHTML==4 && td54.innerHTML==2 && td58.innerHTML==1 && td61.innerHTML==5 && td65.innerHTML==7 && td67.innerHTML==6 && td71.innerHTML==8
&& td73.innerHTML==7 && td75.innerHTML==3 && td78.innerHTML==2 && td79.innerHTML==9 && td82.innerHTML==3 && td83.innerHTML==6 && td87.innerHTML==8 && td89.innerHTML==1 && td94.innerHTML==8 && td95.innerHTML==2 && td98.innerHTML==5)
{setTimeout(alertgameover,500);
alertcode=1;
clearInterval(timeinterval);
document.getElementById('resetgame').disabled=true;
}
});

function alertgameover()
{
alert('Congratulations! You have completed the Game! Press "New Game" button to Start another Game.');
$("td").prop('disabled', true);
}

function resetgame()
{
if(randomnumber==1)
{
td11.innerHTML=''; td12.innerHTML=''; td16.innerHTML=''; td18.innerHTML=''; td19.innerHTML=''; td21.innerHTML=''; td22.innerHTML=''; td25.innerHTML=''; td28.innerHTML=''; td29.innerHTML='';
td33.innerHTML=''; td34.innerHTML=''; td36.innerHTML=''; td37.innerHTML=''; td41.innerHTML=''; td43.innerHTML=''; td44.innerHTML=''; td45.innerHTML=''; td46.innerHTML=''; td47.innerHTML=''; td52.innerHTML=''; td54.innerHTML='';
td55.innerHTML=''; td56.innerHTML=''; td58.innerHTML=''; td63.innerHTML=''; td64.innerHTML=''; td65.innerHTML=''; td66.innerHTML=''; td67.innerHTML=''; td69.innerHTML=''; td73.innerHTML=''; td74.innerHTML=''; td76.innerHTML='';
td77.innerHTML=''; td81.innerHTML=''; td82.innerHTML=''; td85.innerHTML=''; td88.innerHTML=''; td89.innerHTML=''; td91.innerHTML=''; td92.innerHTML=''; td94.innerHTML=''; td98.innerHTML=''; td99.innerHTML='';
$("td").removeClass("selected3");
}

else if(randomnumber==2)
{
td11.innerHTML=''; td13.innerHTML=''; td16.innerHTML=''; td14.innerHTML=''; td18.innerHTML=''; td19.innerHTML=''; td21.innerHTML=''; td23.innerHTML=''; td25.innerHTML=''; td27.innerHTML='';
td28.innerHTML=''; td29.innerHTML=''; td31.innerHTML=''; td34.innerHTML=''; td35.innerHTML=''; td36.innerHTML=''; td38.innerHTML=''; td39.innerHTML=''; td41.innerHTML=''; td42.innerHTML=''; td43.innerHTML=''; td44.innerHTML='';
td45.innerHTML=''; td46.innerHTML=''; td49.innerHTML=''; td51.innerHTML=''; td53.innerHTML=''; td57.innerHTML=''; td59.innerHTML=''; td61.innerHTML=''; td64.innerHTML=''; td65.innerHTML=''; td66.innerHTML=''; td67.innerHTML='';
td68.innerHTML=''; td69.innerHTML=''; td71.innerHTML=''; td72.innerHTML=''; td74.innerHTML=''; td75.innerHTML=''; td76.innerHTML=''; td79.innerHTML=''; td81.innerHTML=''; td82.innerHTML=''; td83.innerHTML='';
td85.innerHTML=''; td87.innerHTML=''; td89.innerHTML=''; td91.innerHTML=''; td92.innerHTML=''; td94.innerHTML=''; td96.innerHTML=''; td97.innerHTML=''; td99.innerHTML='';
$("td").removeClass("selected3");
}

else if(randomnumber==3)
{
td12.innerHTML=''; td15.innerHTML=''; td17.innerHTML=''; td19.innerHTML=''; td23.innerHTML=''; td26.innerHTML=''; td28.innerHTML=''; td32.innerHTML=''; td33.innerHTML=''; td35.innerHTML='';
td41.innerHTML=''; td42.innerHTML=''; td45.innerHTML=''; td46.innerHTML=''; td49.innerHTML=''; td53.innerHTML=''; td54.innerHTML=''; td58.innerHTML=''; td61.innerHTML=''; td65.innerHTML=''; td67.innerHTML=''; td71.innerHTML='';
td73.innerHTML=''; td75.innerHTML=''; td78.innerHTML=''; td79.innerHTML=''; td82.innerHTML=''; td83.innerHTML=''; td87.innerHTML=''; td89.innerHTML=''; td94.innerHTML=''; td95.innerHTML=''; td98.innerHTML='';
$("td").removeClass("selected3");
}
}

var timeinterval;
function newgame()
{
document.getElementById('demo').style.display="none";
document.getElementById('solutionbutton').style.display="block";
document.getElementById('resetgame').disabled=false;
document.getElementById('timedisplay').innerHTML="00:00";
timecount=0;
alertcode=0;
if(timeinterval!=undefined)
clearInterval(timeinterval);
timeinterval=setInterval(sudokutime,1000);

$("#table td").html('');
numbervalue="";
$("td").prop('disabled', false);
$("td").removeClass("selected");
$("td").removeClass("selected2");
$("td").removeClass("selected3");

randomnumber=generateRandomNumber(1, 3);
if(randomnumber==1)
	randomgame1();
else if(randomnumber==2)
	randomgame2();
else if(randomnumber==3)
	randomgame3();
}

function sudokutime()
{
timecount++;
timemin=Math.floor(timecount/60);
timesec=timecount%60;
if(timesec<10)
	timesec='0'+timesec;
if(timemin<10)
	timemin='0'+timemin;
document.getElementById('timedisplay').innerHTML=timemin+":"+timesec;
}

function dispsolution()
{
document.getElementById('solution').style.display="block";
}
function solutionback()
{
document.getElementById('solution').style.display="none";
}