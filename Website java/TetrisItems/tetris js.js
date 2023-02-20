  
   var downb2 = new Audio('TetrisItems/downb.mp3');
   var audio = new Audio('TetrisItems/tetrissound.ogg');
   var tgover = new Audio('TetrisItems/tgover.mp3');
   var buttons = new Audio('TetrisItems/button.mp3');
   var rotatet = new Audio('TetrisItems/rotate.mp3');
  
function initialtetrisdatafunc()
 {
 if(localStorage.getItem('xz')==undefined)
 {
 xz=localStorage.setItem('xz',50);
 xy=localStorage.setItem('xy','auto2');
 }
 if(localStorage.getItem('ttvalue')==undefined)
 {
 ttvalue=localStorage.setItem('ttvalue',1); 
 }
 
 if(localStorage.getItem('taudio')==undefined)
 {
 taudio=localStorage.setItem('taudio',1);
 }
 else
 {
 taudio=localStorage.getItem('taudio');
 }
 
 if(localStorage.getItem('bgcodet')==undefined)
 {
 bgcodet=localStorage.setItem('bgcodet',2);
 }
 else
 {
 bgcodet=localStorage.getItem('bgcodet');
 }
 }
initialtetrisdatafunc();

function tsauto()
{document.getElementById('tsauto').style.border="white 2px solid";
document.getElementById('tsauto').style.backgroundColor="lime";
document.getElementById('ts1').style.border="black 2px solid";
document.getElementById('ts1').style.backgroundColor="green";
document.getElementById('ts2').style.border="black 2px solid";
document.getElementById('ts2').style.backgroundColor="green";
document.getElementById('ts3').style.border="black 2px solid";
document.getElementById('ts3').style.backgroundColor="green";
document.getElementById('ts4').style.border="black 2px solid";
document.getElementById('ts4').style.backgroundColor="green";
document.getElementById('ts5').style.border="black 2px solid";
document.getElementById('ts5').style.backgroundColor="green";
document.getElementById('ts6').style.border="black 2px solid";
document.getElementById('ts6').style.backgroundColor="green";
document.getElementById('ts7').style.border="black 2px solid";
document.getElementById('ts7').style.backgroundColor="green";
document.getElementById('ts8').style.border="black 2px solid";
document.getElementById('ts8').style.backgroundColor="green";
document.getElementById('ts9').style.border="black 2px solid";
document.getElementById('ts9').style.backgroundColor="green";
document.getElementById('ts10').style.border="black 2px solid";
document.getElementById('ts10').style.backgroundColor="green";
xy='auto';

localStorage.setItem('xy',xy);
}
function ts1()
{document.getElementById('tsauto').style.border="black 2px solid";
document.getElementById('tsauto').style.backgroundColor="green";
document.getElementById('ts1').style.border="white 2px solid";
document.getElementById('ts1').style.backgroundColor="lime";
document.getElementById('ts2').style.border="black 2px solid";
document.getElementById('ts2').style.backgroundColor="green";
document.getElementById('ts3').style.border="black 2px solid";
document.getElementById('ts3').style.backgroundColor="green";
document.getElementById('ts4').style.border="black 2px solid";
document.getElementById('ts4').style.backgroundColor="green";
document.getElementById('ts5').style.border="black 2px solid";
document.getElementById('ts5').style.backgroundColor="green";
document.getElementById('ts6').style.border="black 2px solid";
document.getElementById('ts6').style.backgroundColor="green";
document.getElementById('ts7').style.border="black 2px solid";
document.getElementById('ts7').style.backgroundColor="green";
document.getElementById('ts8').style.border="black 2px solid";
document.getElementById('ts8').style.backgroundColor="green";
document.getElementById('ts9').style.border="black 2px solid";
document.getElementById('ts9').style.backgroundColor="green";
document.getElementById('ts10').style.border="black 2px solid";
document.getElementById('ts10').style.backgroundColor="green";
xz=50;
xy='auto2';

localStorage.setItem('xy',xy);
localStorage.setItem('xz',xz);

document.getElementById('speedscore').innerHTML="1";
document.getElementById('speedscore2').style.display="none";
}
function ts2()
{document.getElementById('tsauto').style.border="black 2px solid";
document.getElementById('tsauto').style.backgroundColor="green";
document.getElementById('ts1').style.border="black 2px solid";
document.getElementById('ts1').style.backgroundColor="green";
document.getElementById('ts2').style.border="white 2px solid";
document.getElementById('ts2').style.backgroundColor="lime";
document.getElementById('ts3').style.border="black 2px solid";
document.getElementById('ts3').style.backgroundColor="green";
document.getElementById('ts4').style.border="black 2px solid";
document.getElementById('ts4').style.backgroundColor="green";
document.getElementById('ts5').style.border="black 2px solid";
document.getElementById('ts5').style.backgroundColor="green";
document.getElementById('ts6').style.border="black 2px solid";
document.getElementById('ts6').style.backgroundColor="green";
document.getElementById('ts7').style.border="black 2px solid";
document.getElementById('ts7').style.backgroundColor="green";
document.getElementById('ts8').style.border="black 2px solid";
document.getElementById('ts8').style.backgroundColor="green";
document.getElementById('ts9').style.border="black 2px solid";
document.getElementById('ts9').style.backgroundColor="green";
document.getElementById('ts10').style.border="black 2px solid";
document.getElementById('ts10').style.backgroundColor="green";
xz=45;
xy='auto2';

localStorage.setItem('xy',xy);
localStorage.setItem('xz',xz);

document.getElementById('speedscore').innerHTML="2";
document.getElementById('speedscore2').style.display="none";
}
function ts3()
{document.getElementById('tsauto').style.border="black 2px solid";
document.getElementById('tsauto').style.backgroundColor="green";
document.getElementById('ts1').style.border="black 2px solid";
document.getElementById('ts1').style.backgroundColor="green";
document.getElementById('ts2').style.border="black 2px solid";
document.getElementById('ts2').style.backgroundColor="green";
document.getElementById('ts3').style.border="white 2px solid";
document.getElementById('ts3').style.backgroundColor="lime";
document.getElementById('ts4').style.border="black 2px solid";
document.getElementById('ts4').style.backgroundColor="green";
document.getElementById('ts5').style.border="black 2px solid";
document.getElementById('ts5').style.backgroundColor="green";
document.getElementById('ts6').style.border="black 2px solid";
document.getElementById('ts6').style.backgroundColor="green";
document.getElementById('ts7').style.border="black 2px solid";
document.getElementById('ts7').style.backgroundColor="green";
document.getElementById('ts8').style.border="black 2px solid";
document.getElementById('ts8').style.backgroundColor="green";
document.getElementById('ts9').style.border="black 2px solid";
document.getElementById('ts9').style.backgroundColor="green";
document.getElementById('ts10').style.border="black 2px solid";
document.getElementById('ts10').style.backgroundColor="green";
xz=40;
xy='auto2';

localStorage.setItem('xy',xy);
localStorage.setItem('xz',xz);

document.getElementById('speedscore').innerHTML="3";
document.getElementById('speedscore2').style.display="none";
}
function ts4()
{document.getElementById('tsauto').style.border="black 2px solid";
document.getElementById('tsauto').style.backgroundColor="green";
document.getElementById('ts1').style.border="black 2px solid";
document.getElementById('ts1').style.backgroundColor="green";
document.getElementById('ts2').style.border="black 2px solid";
document.getElementById('ts2').style.backgroundColor="green";
document.getElementById('ts3').style.border="black 2px solid";
document.getElementById('ts3').style.backgroundColor="green";
document.getElementById('ts4').style.border="white 2px solid";
document.getElementById('ts4').style.backgroundColor="lime";
document.getElementById('ts5').style.border="black 2px solid";
document.getElementById('ts5').style.backgroundColor="green";
document.getElementById('ts6').style.border="black 2px solid";
document.getElementById('ts6').style.backgroundColor="green";
document.getElementById('ts7').style.border="black 2px solid";
document.getElementById('ts7').style.backgroundColor="green";
document.getElementById('ts8').style.border="black 2px solid";
document.getElementById('ts8').style.backgroundColor="green";
document.getElementById('ts9').style.border="black 2px solid";
document.getElementById('ts9').style.backgroundColor="green";
document.getElementById('ts10').style.border="black 2px solid";
document.getElementById('ts10').style.backgroundColor="green";
xz=35;
xy='auto2';

localStorage.setItem('xy',xy);
localStorage.setItem('xz',xz);

document.getElementById('speedscore').innerHTML="4";
document.getElementById('speedscore2').style.display="none";
}
function ts5()
{document.getElementById('tsauto').style.border="black 2px solid";
document.getElementById('tsauto').style.backgroundColor="green";
document.getElementById('ts1').style.border="black 2px solid";
document.getElementById('ts1').style.backgroundColor="green";
document.getElementById('ts2').style.border="black 2px solid";
document.getElementById('ts2').style.backgroundColor="green";
document.getElementById('ts3').style.border="black 2px solid";
document.getElementById('ts3').style.backgroundColor="green";
document.getElementById('ts4').style.border="black 2px solid";
document.getElementById('ts4').style.backgroundColor="green";
document.getElementById('ts5').style.border="white 2px solid";
document.getElementById('ts5').style.backgroundColor="lime";
document.getElementById('ts6').style.border="black 2px solid";
document.getElementById('ts6').style.backgroundColor="green";
document.getElementById('ts7').style.border="black 2px solid";
document.getElementById('ts7').style.backgroundColor="green";
document.getElementById('ts8').style.border="black 2px solid";
document.getElementById('ts8').style.backgroundColor="green";
document.getElementById('ts9').style.border="black 2px solid";
document.getElementById('ts9').style.backgroundColor="green";
document.getElementById('ts10').style.border="black 2px solid";
document.getElementById('ts10').style.backgroundColor="green";
xz=30;
xy='auto2';

localStorage.setItem('xy',xy);
localStorage.setItem('xz',xz);

document.getElementById('speedscore').innerHTML="5";
document.getElementById('speedscore2').style.display="none";
}
function ts6()
{document.getElementById('tsauto').style.border="black 2px solid";
document.getElementById('tsauto').style.backgroundColor="green";
document.getElementById('ts1').style.border="black 2px solid";
document.getElementById('ts1').style.backgroundColor="green";
document.getElementById('ts2').style.border="black 2px solid";
document.getElementById('ts2').style.backgroundColor="green";
document.getElementById('ts3').style.border="black 2px solid";
document.getElementById('ts3').style.backgroundColor="green";
document.getElementById('ts4').style.border="black 2px solid";
document.getElementById('ts4').style.backgroundColor="green";
document.getElementById('ts5').style.border="black 2px solid";
document.getElementById('ts5').style.backgroundColor="green";
document.getElementById('ts6').style.border="white 2px solid";
document.getElementById('ts6').style.backgroundColor="lime";
document.getElementById('ts7').style.border="black 2px solid";
document.getElementById('ts7').style.backgroundColor="green";
document.getElementById('ts8').style.border="black 2px solid";
document.getElementById('ts8').style.backgroundColor="green";
document.getElementById('ts9').style.border="black 2px solid";
document.getElementById('ts9').style.backgroundColor="green";
document.getElementById('ts10').style.border="black 2px solid";
document.getElementById('ts10').style.backgroundColor="green";
xz=25;
xy='auto2';

localStorage.setItem('xy',xy);
localStorage.setItem('xz',xz);

document.getElementById('speedscore').innerHTML="6";
document.getElementById('speedscore2').style.display="none";
}
function ts7()
{document.getElementById('tsauto').style.border="black 2px solid";
document.getElementById('tsauto').style.backgroundColor="green";
document.getElementById('ts1').style.border="black 2px solid";
document.getElementById('ts1').style.backgroundColor="green";
document.getElementById('ts2').style.border="black 2px solid";
document.getElementById('ts2').style.backgroundColor="green";
document.getElementById('ts3').style.border="black 2px solid";
document.getElementById('ts3').style.backgroundColor="green";
document.getElementById('ts4').style.border="black 2px solid";
document.getElementById('ts4').style.backgroundColor="green";
document.getElementById('ts5').style.border="black 2px solid";
document.getElementById('ts5').style.backgroundColor="green";
document.getElementById('ts6').style.border="black 2px solid";
document.getElementById('ts6').style.backgroundColor="green";
document.getElementById('ts7').style.border="white 2px solid";
document.getElementById('ts7').style.backgroundColor="lime";
document.getElementById('ts8').style.border="black 2px solid";
document.getElementById('ts8').style.backgroundColor="green";
document.getElementById('ts9').style.border="black 2px solid";
document.getElementById('ts9').style.backgroundColor="green";
document.getElementById('ts10').style.border="black 2px solid";
document.getElementById('ts10').style.backgroundColor="green";
xz=21;
xy='auto2';

localStorage.setItem('xy',xy);
localStorage.setItem('xz',xz);

document.getElementById('speedscore').innerHTML="7";
document.getElementById('speedscore2').style.display="none";
}
function ts8()
{document.getElementById('tsauto').style.border="black 2px solid";
document.getElementById('tsauto').style.backgroundColor="green";
document.getElementById('ts1').style.border="black 2px solid";
document.getElementById('ts1').style.backgroundColor="green";
document.getElementById('ts2').style.border="black 2px solid";
document.getElementById('ts2').style.backgroundColor="green";
document.getElementById('ts3').style.border="black 2px solid";
document.getElementById('ts3').style.backgroundColor="green";
document.getElementById('ts4').style.border="black 2px solid";
document.getElementById('ts4').style.backgroundColor="green";
document.getElementById('ts5').style.border="black 2px solid";
document.getElementById('ts5').style.backgroundColor="green";
document.getElementById('ts6').style.border="black 2px solid";
document.getElementById('ts6').style.backgroundColor="green";
document.getElementById('ts7').style.border="black 2px solid";
document.getElementById('ts7').style.backgroundColor="green";
document.getElementById('ts8').style.border="white 2px solid";
document.getElementById('ts8').style.backgroundColor="lime";
document.getElementById('ts9').style.border="black 2px solid";
document.getElementById('ts9').style.backgroundColor="green";
document.getElementById('ts10').style.border="black 2px solid";
document.getElementById('ts10').style.backgroundColor="green";
xz=17;
xy='auto2';

localStorage.setItem('xy',xy);
localStorage.setItem('xz',xz);

document.getElementById('speedscore').innerHTML="8";
document.getElementById('speedscore2').style.display="none";
}
function ts9()
{document.getElementById('tsauto').style.border="black 2px solid";
document.getElementById('tsauto').style.backgroundColor="green";
document.getElementById('ts1').style.border="black 2px solid";
document.getElementById('ts1').style.backgroundColor="green";
document.getElementById('ts2').style.border="black 2px solid";
document.getElementById('ts2').style.backgroundColor="green";
document.getElementById('ts3').style.border="black 2px solid";
document.getElementById('ts3').style.backgroundColor="green";
document.getElementById('ts4').style.border="black 2px solid";
document.getElementById('ts4').style.backgroundColor="green";
document.getElementById('ts5').style.border="black 2px solid";
document.getElementById('ts5').style.backgroundColor="green";
document.getElementById('ts6').style.border="black 2px solid";
document.getElementById('ts6').style.backgroundColor="green";
document.getElementById('ts7').style.border="black 2px solid";
document.getElementById('ts7').style.backgroundColor="green";
document.getElementById('ts8').style.border="black 2px solid";
document.getElementById('ts8').style.backgroundColor="green";
document.getElementById('ts9').style.border="white 2px solid";
document.getElementById('ts9').style.backgroundColor="lime";
document.getElementById('ts10').style.border="black 2px solid";
document.getElementById('ts10').style.backgroundColor="green";
xz=13;
xy='auto2';

localStorage.setItem('xy',xy);
localStorage.setItem('xz',xz);

document.getElementById('speedscore').innerHTML="9";
document.getElementById('speedscore2').style.display="none";
}
function ts10()
{
document.getElementById('tsauto').style.border="black 2px solid";
document.getElementById('tsauto').style.backgroundColor="green";
document.getElementById('ts1').style.border="black 2px solid";
document.getElementById('ts1').style.backgroundColor="green";
document.getElementById('ts2').style.border="black 2px solid";
document.getElementById('ts2').style.backgroundColor="green";
document.getElementById('ts3').style.border="black 2px solid";
document.getElementById('ts3').style.backgroundColor="green";
document.getElementById('ts4').style.border="black 2px solid";
document.getElementById('ts4').style.backgroundColor="green";
document.getElementById('ts5').style.border="black 2px solid";
document.getElementById('ts5').style.backgroundColor="green";
document.getElementById('ts6').style.border="black 2px solid";
document.getElementById('ts6').style.backgroundColor="green";
document.getElementById('ts7').style.border="black 2px solid";
document.getElementById('ts7').style.backgroundColor="green";
document.getElementById('ts8').style.border="black 2px solid";
document.getElementById('ts8').style.backgroundColor="green";
document.getElementById('ts9').style.border="black 2px solid";
document.getElementById('ts9').style.backgroundColor="green";
document.getElementById('ts10').style.border="white 2px solid";
document.getElementById('ts10').style.backgroundColor="lime";
xz=10;
xy='auto2'; 

localStorage.setItem('xy',xy);
localStorage.setItem('xz',xz);

document.getElementById('speedscore').innerHTML="10";
document.getElementById('speedscore2').style.display="none";
}
function tsvaluecheck()
{
xy=localStorage.getItem('xy');
xz=localStorage.getItem('xz');
if(xy=="auto")
{
document.getElementById('tsauto').style.border="white 2px solid";
document.getElementById('tsauto').style.backgroundColor="lime";
document.getElementById('ts1').style.border="black 2px solid";
document.getElementById('ts1').style.backgroundColor="green";
document.getElementById('ts2').style.border="black 2px solid";
document.getElementById('ts2').style.backgroundColor="green";
document.getElementById('ts3').style.border="black 2px solid";
document.getElementById('ts3').style.backgroundColor="green";
document.getElementById('ts4').style.border="black 2px solid";
document.getElementById('ts4').style.backgroundColor="green";
document.getElementById('ts5').style.border="black 2px solid";
document.getElementById('ts5').style.backgroundColor="green";
document.getElementById('ts6').style.border="black 2px solid";
document.getElementById('ts6').style.backgroundColor="green";
document.getElementById('ts7').style.border="black 2px solid";
document.getElementById('ts7').style.backgroundColor="green";
document.getElementById('ts8').style.border="black 2px solid";
document.getElementById('ts8').style.backgroundColor="green";
document.getElementById('ts9').style.border="black 2px solid";
document.getElementById('ts9').style.backgroundColor="green";
document.getElementById('ts10').style.border="black 2px solid";
document.getElementById('ts10').style.backgroundColor="green";
}
else if(xz==50 && xy=="auto2")
{
document.getElementById('tsauto').style.border="black 2px solid";
document.getElementById('tsauto').style.backgroundColor="green";
document.getElementById('ts1').style.border="white 2px solid";
document.getElementById('ts1').style.backgroundColor="lime";
document.getElementById('ts2').style.border="black 2px solid";
document.getElementById('ts2').style.backgroundColor="green";
document.getElementById('ts3').style.border="black 2px solid";
document.getElementById('ts3').style.backgroundColor="green";
document.getElementById('ts4').style.border="black 2px solid";
document.getElementById('ts4').style.backgroundColor="green";
document.getElementById('ts5').style.border="black 2px solid";
document.getElementById('ts5').style.backgroundColor="green";
document.getElementById('ts6').style.border="black 2px solid";
document.getElementById('ts6').style.backgroundColor="green";
document.getElementById('ts7').style.border="black 2px solid";
document.getElementById('ts7').style.backgroundColor="green";
document.getElementById('ts8').style.border="black 2px solid";
document.getElementById('ts8').style.backgroundColor="green";
document.getElementById('ts9').style.border="black 2px solid";
document.getElementById('ts9').style.backgroundColor="green";
document.getElementById('ts10').style.border="black 2px solid";
document.getElementById('ts10').style.backgroundColor="green";

document.getElementById('speedscore').innerHTML="1";
document.getElementById('speedscore2').style.display="none";
}
else if(xz==45 && xy=="auto2")
{
document.getElementById('tsauto').style.border="black 2px solid";
document.getElementById('tsauto').style.backgroundColor="green";
document.getElementById('ts1').style.border="black 2px solid";
document.getElementById('ts1').style.backgroundColor="green";
document.getElementById('ts2').style.border="white 2px solid";
document.getElementById('ts2').style.backgroundColor="lime";
document.getElementById('ts3').style.border="black 2px solid";
document.getElementById('ts3').style.backgroundColor="green";
document.getElementById('ts4').style.border="black 2px solid";
document.getElementById('ts4').style.backgroundColor="green";
document.getElementById('ts5').style.border="black 2px solid";
document.getElementById('ts5').style.backgroundColor="green";
document.getElementById('ts6').style.border="black 2px solid";
document.getElementById('ts6').style.backgroundColor="green";
document.getElementById('ts7').style.border="black 2px solid";
document.getElementById('ts7').style.backgroundColor="green";
document.getElementById('ts8').style.border="black 2px solid";
document.getElementById('ts8').style.backgroundColor="green";
document.getElementById('ts9').style.border="black 2px solid";
document.getElementById('ts9').style.backgroundColor="green";
document.getElementById('ts10').style.border="black 2px solid";
document.getElementById('ts10').style.backgroundColor="green";

document.getElementById('speedscore').innerHTML="2";
document.getElementById('speedscore2').style.display="none";
}
else if(xz==40 && xy=="auto2")
{
document.getElementById('tsauto').style.border="black 2px solid";
document.getElementById('tsauto').style.backgroundColor="green";
document.getElementById('ts1').style.border="black 2px solid";
document.getElementById('ts1').style.backgroundColor="green";
document.getElementById('ts2').style.border="black 2px solid";
document.getElementById('ts2').style.backgroundColor="green";
document.getElementById('ts3').style.border="white 2px solid";
document.getElementById('ts3').style.backgroundColor="lime";
document.getElementById('ts4').style.border="black 2px solid";
document.getElementById('ts4').style.backgroundColor="green";
document.getElementById('ts5').style.border="black 2px solid";
document.getElementById('ts5').style.backgroundColor="green";
document.getElementById('ts6').style.border="black 2px solid";
document.getElementById('ts6').style.backgroundColor="green";
document.getElementById('ts7').style.border="black 2px solid";
document.getElementById('ts7').style.backgroundColor="green";
document.getElementById('ts8').style.border="black 2px solid";
document.getElementById('ts8').style.backgroundColor="green";
document.getElementById('ts9').style.border="black 2px solid";
document.getElementById('ts9').style.backgroundColor="green";
document.getElementById('ts10').style.border="black 2px solid";
document.getElementById('ts10').style.backgroundColor="green";

document.getElementById('speedscore').innerHTML="3";
document.getElementById('speedscore2').style.display="none";
}
else if(xz==35 && xy=="auto2")
{
document.getElementById('tsauto').style.border="black 2px solid";
document.getElementById('tsauto').style.backgroundColor="green";
document.getElementById('ts1').style.border="black 2px solid";
document.getElementById('ts1').style.backgroundColor="green";
document.getElementById('ts2').style.border="black 2px solid";
document.getElementById('ts2').style.backgroundColor="green";
document.getElementById('ts3').style.border="black 2px solid";
document.getElementById('ts3').style.backgroundColor="green";
document.getElementById('ts4').style.border="white 2px solid";
document.getElementById('ts4').style.backgroundColor="lime";
document.getElementById('ts5').style.border="black 2px solid";
document.getElementById('ts5').style.backgroundColor="green";
document.getElementById('ts6').style.border="black 2px solid";
document.getElementById('ts6').style.backgroundColor="green";
document.getElementById('ts7').style.border="black 2px solid";
document.getElementById('ts7').style.backgroundColor="green";
document.getElementById('ts8').style.border="black 2px solid";
document.getElementById('ts8').style.backgroundColor="green";
document.getElementById('ts9').style.border="black 2px solid";
document.getElementById('ts9').style.backgroundColor="green";
document.getElementById('ts10').style.border="black 2px solid";
document.getElementById('ts10').style.backgroundColor="green";

document.getElementById('speedscore').innerHTML="4";
document.getElementById('speedscore2').style.display="none";
}
else if(xz==30 && xy=="auto2")
{
document.getElementById('tsauto').style.border="black 2px solid";
document.getElementById('tsauto').style.backgroundColor="green";
document.getElementById('ts1').style.border="black 2px solid";
document.getElementById('ts1').style.backgroundColor="green";
document.getElementById('ts2').style.border="black 2px solid";
document.getElementById('ts2').style.backgroundColor="green";
document.getElementById('ts3').style.border="black 2px solid";
document.getElementById('ts3').style.backgroundColor="green";
document.getElementById('ts4').style.border="black 2px solid";
document.getElementById('ts4').style.backgroundColor="green";
document.getElementById('ts5').style.border="white 2px solid";
document.getElementById('ts5').style.backgroundColor="lime";
document.getElementById('ts6').style.border="black 2px solid";
document.getElementById('ts6').style.backgroundColor="green";
document.getElementById('ts7').style.border="black 2px solid";
document.getElementById('ts7').style.backgroundColor="green";
document.getElementById('ts8').style.border="black 2px solid";
document.getElementById('ts8').style.backgroundColor="green";
document.getElementById('ts9').style.border="black 2px solid";
document.getElementById('ts9').style.backgroundColor="green";
document.getElementById('ts10').style.border="black 2px solid";
document.getElementById('ts10').style.backgroundColor="green";

document.getElementById('speedscore').innerHTML="5";
document.getElementById('speedscore2').style.display="none";
}
else if(xz==25 && xy=="auto2")
{
document.getElementById('tsauto').style.border="black 2px solid";
document.getElementById('tsauto').style.backgroundColor="green";
document.getElementById('ts1').style.border="black 2px solid";
document.getElementById('ts1').style.backgroundColor="green";
document.getElementById('ts2').style.border="black 2px solid";
document.getElementById('ts2').style.backgroundColor="green";
document.getElementById('ts3').style.border="black 2px solid";
document.getElementById('ts3').style.backgroundColor="green";
document.getElementById('ts4').style.border="black 2px solid";
document.getElementById('ts4').style.backgroundColor="green";
document.getElementById('ts5').style.border="black 2px solid";
document.getElementById('ts5').style.backgroundColor="green";
document.getElementById('ts6').style.border="white 2px solid";
document.getElementById('ts6').style.backgroundColor="lime";
document.getElementById('ts7').style.border="black 2px solid";
document.getElementById('ts7').style.backgroundColor="green";
document.getElementById('ts8').style.border="black 2px solid";
document.getElementById('ts8').style.backgroundColor="green";
document.getElementById('ts9').style.border="black 2px solid";
document.getElementById('ts9').style.backgroundColor="green";
document.getElementById('ts10').style.border="black 2px solid";
document.getElementById('ts10').style.backgroundColor="green";

document.getElementById('speedscore').innerHTML="6";
document.getElementById('speedscore2').style.display="none";
}
else if(xz==21 && xy=="auto2")
{
document.getElementById('tsauto').style.border="black 2px solid";
document.getElementById('tsauto').style.backgroundColor="green";
document.getElementById('ts1').style.border="black 2px solid";
document.getElementById('ts1').style.backgroundColor="green";
document.getElementById('ts2').style.border="black 2px solid";
document.getElementById('ts2').style.backgroundColor="green";
document.getElementById('ts3').style.border="black 2px solid";
document.getElementById('ts3').style.backgroundColor="green";
document.getElementById('ts4').style.border="black 2px solid";
document.getElementById('ts4').style.backgroundColor="green";
document.getElementById('ts5').style.border="black 2px solid";
document.getElementById('ts5').style.backgroundColor="green";
document.getElementById('ts6').style.border="black 2px solid";
document.getElementById('ts6').style.backgroundColor="green";
document.getElementById('ts7').style.border="white 2px solid";
document.getElementById('ts7').style.backgroundColor="lime";
document.getElementById('ts8').style.border="black 2px solid";
document.getElementById('ts8').style.backgroundColor="green";
document.getElementById('ts9').style.border="black 2px solid";
document.getElementById('ts9').style.backgroundColor="green";
document.getElementById('ts10').style.border="black 2px solid";
document.getElementById('ts10').style.backgroundColor="green";

document.getElementById('speedscore').innerHTML="7";
document.getElementById('speedscore2').style.display="none";
}
else if(xz==17 && xy=="auto2")
{
document.getElementById('tsauto').style.border="black 2px solid";
document.getElementById('tsauto').style.backgroundColor="green";
document.getElementById('ts1').style.border="black 2px solid";
document.getElementById('ts1').style.backgroundColor="green";
document.getElementById('ts2').style.border="black 2px solid";
document.getElementById('ts2').style.backgroundColor="green";
document.getElementById('ts3').style.border="black 2px solid";
document.getElementById('ts3').style.backgroundColor="green";
document.getElementById('ts4').style.border="black 2px solid";
document.getElementById('ts4').style.backgroundColor="green";
document.getElementById('ts5').style.border="black 2px solid";
document.getElementById('ts5').style.backgroundColor="green";
document.getElementById('ts6').style.border="black 2px solid";
document.getElementById('ts6').style.backgroundColor="green";
document.getElementById('ts7').style.border="black 2px solid";
document.getElementById('ts7').style.backgroundColor="green";
document.getElementById('ts8').style.border="white 2px solid";
document.getElementById('ts8').style.backgroundColor="lime";
document.getElementById('ts9').style.border="black 2px solid";
document.getElementById('ts9').style.backgroundColor="green";
document.getElementById('ts10').style.border="black 2px solid";
document.getElementById('ts10').style.backgroundColor="green";

document.getElementById('speedscore').innerHTML="8";
document.getElementById('speedscore2').style.display="none";
}
else if(xz==13 && xy=="auto2")
{
document.getElementById('tsauto').style.border="black 2px solid";
document.getElementById('tsauto').style.backgroundColor="green";
document.getElementById('ts1').style.border="black 2px solid";
document.getElementById('ts1').style.backgroundColor="green";
document.getElementById('ts2').style.border="black 2px solid";
document.getElementById('ts2').style.backgroundColor="green";
document.getElementById('ts3').style.border="black 2px solid";
document.getElementById('ts3').style.backgroundColor="green";
document.getElementById('ts4').style.border="black 2px solid";
document.getElementById('ts4').style.backgroundColor="green";
document.getElementById('ts5').style.border="black 2px solid";
document.getElementById('ts5').style.backgroundColor="green";
document.getElementById('ts6').style.border="black 2px solid";
document.getElementById('ts6').style.backgroundColor="green";
document.getElementById('ts7').style.border="black 2px solid";
document.getElementById('ts7').style.backgroundColor="green";
document.getElementById('ts8').style.border="black 2px solid";
document.getElementById('ts8').style.backgroundColor="green";
document.getElementById('ts9').style.border="white 2px solid";
document.getElementById('ts9').style.backgroundColor="lime";
document.getElementById('ts10').style.border="black 2px solid";
document.getElementById('ts10').style.backgroundColor="green";

document.getElementById('speedscore').innerHTML="9";
document.getElementById('speedscore2').style.display="none";
}
else if(xz==10 && xy=="auto2")
{
document.getElementById('tsauto').style.border="black 2px solid";
document.getElementById('tsauto').style.backgroundColor="green";
document.getElementById('ts1').style.border="black 2px solid";
document.getElementById('ts1').style.backgroundColor="green";
document.getElementById('ts2').style.border="black 2px solid";
document.getElementById('ts2').style.backgroundColor="green";
document.getElementById('ts3').style.border="black 2px solid";
document.getElementById('ts3').style.backgroundColor="green";
document.getElementById('ts4').style.border="black 2px solid";
document.getElementById('ts4').style.backgroundColor="green";
document.getElementById('ts5').style.border="black 2px solid";
document.getElementById('ts5').style.backgroundColor="green";
document.getElementById('ts6').style.border="black 2px solid";
document.getElementById('ts6').style.backgroundColor="green";
document.getElementById('ts7').style.border="black 2px solid";
document.getElementById('ts7').style.backgroundColor="green";
document.getElementById('ts8').style.border="black 2px solid";
document.getElementById('ts8').style.backgroundColor="green";
document.getElementById('ts9').style.border="black 2px solid";
document.getElementById('ts9').style.backgroundColor="green";
document.getElementById('ts10').style.border="white 2px solid";
document.getElementById('ts10').style.backgroundColor="lime";

document.getElementById('speedscore').innerHTML="10";
document.getElementById('speedscore2').style.display="none";
}
}

function ttA()
{document.getElementById('ttA').style.border="white 2px solid";
document.getElementById('ttA').style.backgroundColor="lime";
document.getElementById('ttB').style.border="black 2px solid";
document.getElementById('ttB').style.backgroundColor="green";
document.getElementById('ttct').style.border="black 2px solid";
document.getElementById('ttct').style.backgroundColor="green";
ttvalue=1;
localStorage.setItem('ttvalue','1');
}
function ttB()
{document.getElementById('ttA').style.border="black 2px solid";
document.getElementById('ttA').style.backgroundColor="green";
document.getElementById('ttB').style.border="white 2px solid";
document.getElementById('ttB').style.backgroundColor="lime";
document.getElementById('ttct').style.border="black 2px solid";
document.getElementById('ttct').style.backgroundColor="green";
ttvalue=2;
localStorage.setItem('ttvalue','2');
}
function ttct()
{document.getElementById('ttA').style.border="black 2px solid";
document.getElementById('ttA').style.backgroundColor="green";
document.getElementById('ttB').style.border="black 2px solid";
document.getElementById('ttB').style.backgroundColor="green";
document.getElementById('ttct').style.border="white 2px solid";
document.getElementById('ttct').style.backgroundColor="lime";

document.getElementById('customtypeview').style.display="block";
document.getElementById('disptetrissetting').style.display="none";

ttvalue=3;
localStorage.setItem('ttvalue','3');
}

var xyz=0;
function customtypeviewback()
{
customtetrominoselect=new Array();
xyzsquare=0;
xyzi=0;
xyzii=0;
xyziii=0;
xyzcc=0;
xyzc=0;
xyzs=0;
xyzz=0;
xyzll=0;
xyzrl=0;
xyzt=0;
xyztt=0;
xyzdot=0;
xyzplus=0;
xyzminus=0;
if(document.getElementById('tetrissquarecheck').checked==true)
{xyz++;
customtetrominoselect.push('O');
xyzsquare=1;
}
if(document.getElementById('tetrisiicheck').checked==true)
{xyz++;
customtetrominoselect.push('H');
xyzii=1;
}
if(document.getElementById('tetriscccheck').checked==true)
{xyz++;
customtetrominoselect.push('A');
xyzcc=1;
}
if(document.getElementById('tetrisCcheck').checked==true)
{xyz++;
customtetrominoselect.push('G');
xyzc=1;
}
if(document.getElementById('tetrisllcheck').checked==true)
{xyz++;
customtetrominoselect.push('F');
xyzll=1;
}
if(document.getElementById('tetrisrlcheck').checked==true)
{xyz++;
customtetrominoselect.push('L');
xyzrl=1;
}
if(document.getElementById('tetristtcheck').checked==true)
{xyz++;
customtetrominoselect.push('J');
xyztt=1;
}
if(document.getElementById('tetristcheck').checked==true)
{xyz++;
customtetrominoselect.push('T');
xyzt=1;
}
if(document.getElementById('tetrisdotcheck').checked==true)
{xyz++;
customtetrominoselect.push('D');
xyzdot=1;
}
if(document.getElementById('tetrispluscheck').checked==true)
{xyz++;
customtetrominoselect.push('B');
xyzplus=1;
}
if(document.getElementById('tetris-check').checked==true)
{xyz++;
customtetrominoselect.push('I');
xyzminus=1;
}
if(document.getElementById('tetrisiiicheck').checked==true)
{xyz++;
customtetrominoselect.push('C');
xyziii=1;
}
if(document.getElementById('tetrisicheck').checked==true)
{xyz++;
customtetrominoselect.push('E');
xyzi=1;
}
if(document.getElementById('tetriszzcheck').checked==true)
{xyz++;
customtetrominoselect.push('Z');
xyzz=1;
}
if(document.getElementById('tetrisscheck').checked==true)
{xyz++;
customtetrominoselect.push('S');
xyzs=1;
}
if(xyz<1)
{alert('You must select at least one tetromino!');
xyz=0;
}
else if(xyz>=1)
{document.getElementById('customtypeview').style.display="none";
document.getElementById('disptetrissetting').style.display="block";
xyz=0;
}
localStorage.setItem('customtetrominoselect',JSON.stringify(customtetrominoselect));
localStorage.setItem('xyzsquare',xyzsquare);
localStorage.setItem('xyzi',xyzi);
localStorage.setItem('xyzcc',xyzcc);
localStorage.setItem('xyzc',xyzc);
localStorage.setItem('xyzrl',xyzrl);
localStorage.setItem('xyzll',xyzll);
localStorage.setItem('xyztt',xyztt);
localStorage.setItem('xyzt',xyzt);
localStorage.setItem('xyzdot',xyzdot);
localStorage.setItem('xyzplus',xyzplus);
localStorage.setItem('xyzminus',xyzminus);
localStorage.setItem('xyzz',xyzz);
localStorage.setItem('xyzs',xyzs);
localStorage.setItem('xyziii',xyziii);
localStorage.setItem('xyzii',xyzii);
}

function ttvaluecheck()
{ttvalue=Number(localStorage.getItem('ttvalue'));
if(ttvalue==1)
{document.getElementById('ttA').style.border="white 2px solid";
document.getElementById('ttA').style.backgroundColor="lime";
document.getElementById('ttB').style.border="black 2px solid";
document.getElementById('ttB').style.backgroundColor="green";
document.getElementById('ttct').style.border="black 2px solid";
document.getElementById('ttct').style.backgroundColor="green";
}
else if(ttvalue==2)
{document.getElementById('ttA').style.border="black 2px solid";
document.getElementById('ttA').style.backgroundColor="green";
document.getElementById('ttB').style.border="white 2px solid";
document.getElementById('ttB').style.backgroundColor="lime";
document.getElementById('ttct').style.border="black 2px solid";
document.getElementById('ttct').style.backgroundColor="green";
}
else if(ttvalue==3)
{document.getElementById('ttA').style.border="black 2px solid";
document.getElementById('ttA').style.backgroundColor="green";
document.getElementById('ttB').style.border="black 2px solid";
document.getElementById('ttB').style.backgroundColor="green";
document.getElementById('ttct').style.border="white 2px solid";
document.getElementById('ttct').style.backgroundColor="lime";

if(localStorage.getItem('xyzsquare')=='1')
{document.getElementById('tetrissquarecheck').checked=true;}
if(localStorage.getItem('xyzi')=='1')
{document.getElementById('tetrisicheck').checked=true;}
if(localStorage.getItem('xyzii')=='1')
{document.getElementById('tetrisiicheck').checked=true;}
if(localStorage.getItem('xyziii')=='1')
{document.getElementById('tetrisiiicheck').checked=true;}
if(localStorage.getItem('xyzc')=='1')
{document.getElementById('tetrisCcheck').checked=true;}
if(localStorage.getItem('xyzs')=='1')
{document.getElementById('tetrisscheck').checked=true;}
if(localStorage.getItem('xyzz')=='1')
{document.getElementById('tetriszzcheck').checked=true;}
if(localStorage.getItem('xyzcc')=='1')
{document.getElementById('tetriscccheck').checked=true;}
if(localStorage.getItem('xyzrl')=='1')
{document.getElementById('tetrisrlcheck').checked=true;}
if(localStorage.getItem('xyzll')=='1')
{document.getElementById('tetrisllcheck').checked=true;}
if(localStorage.getItem('xyzdot')=='1')
{document.getElementById('tetrisdotcheck').checked=true;}
if(localStorage.getItem('xyzplus')=='1')
{document.getElementById('tetrispluscheck').checked=true;}
if(localStorage.getItem('xyzminus')=='1')
{document.getElementById('tetris-check').checked=true;}
if(localStorage.getItem('xyzt')=='1')
{document.getElementById('tetristcheck').checked=true;}
if(localStorage.getItem('xyztt')=='1')
{document.getElementById('tetristtcheck').checked=true;}

}
}

function disptetrisstatsback()
{document.getElementById('tetrisview').style.display="block";
document.getElementById('disptetrisstat').style.display="none";
}
function disptetrisstats()
{
document.getElementById('tetrisview').style.display="none";
document.getElementById('disptetrisstat').style.display="block";
}
function disptetrissettingsback()
{document.getElementById('tetrisview').style.display="block";
document.getElementById('disptetrissetting').style.display="none";
}
function disptetrissettings()
{
document.getElementById('tetrisview').style.display="none";
document.getElementById('disptetrissetting').style.display="block";
}
function replaygamedisp()
{
document.getElementById('replaygame2').style.display="block";
document.getElementById('rotategame').disabled=true;
document.getElementById('leftgame').disabled=true;
document.getElementById('rightgame').disabled=true;
document.getElementById('downgame').disabled=true;
document.getElementById('pausegame').disabled=true;
document.getElementById('resumegame').disabled=true;
document.getElementById('quithome').style.display="none";
}
function pausegame()
{
xxz=xz;
xz=Math.INFINITE;
document.getElementById('rotategame').disabled=true;
document.getElementById('leftgame').disabled=true;
document.getElementById('rightgame').disabled=true;
document.getElementById('downgame').disabled=true;
document.getElementById('resumegame').style.display="block";
document.getElementById('pausegame').style.display="none";
document.getElementById('gamepaused').style.display="block";
}
function resumegame()
{
xz=xxz;
document.getElementById('rotategame').disabled=false;
document.getElementById('leftgame').disabled=false;
document.getElementById('rightgame').disabled=false;
document.getElementById('downgame').disabled=false;
document.getElementById('resumegame').style.display="none";
document.getElementById('pausegame').style.display="block";
document.getElementById('gamepaused').style.display="none";
}
function quithomee()
{
document.getElementById('quithome').style.display='block';
document.getElementById('rotategame').disabled=true;
document.getElementById('leftgame').disabled=true;
document.getElementById('rightgame').disabled=true;
document.getElementById('downgame').disabled=true;
document.getElementById('pausegame').disabled=true;
document.getElementById('resumegame').disabled=true;
document.getElementById('replaygame2').style.display="none";
}
function tetrishome()
{
sessionStorage.setItem("reloading2", "true");
document.location.reload();
}
function tetrishome2()
{
document.getElementById('quithome').style.display='none';
document.getElementById('tetrisgameview').style.display='none';
document.getElementById('tetrisview').style.display='block';
}
function tetrisgameback()
{
document.getElementById('quithome').style.display='none';
document.getElementById('rotategame').disabled=false;
document.getElementById('leftgame').disabled=false;
document.getElementById('rightgame').disabled=false;
document.getElementById('downgame').disabled=false;
document.getElementById('pausegame').disabled=false;
document.getElementById('resumegame').disabled=false;
}
function tetrisgameback2()
{
document.getElementById('replaygame2').style.display='none';
document.getElementById('rotategame').disabled=false;
document.getElementById('leftgame').disabled=false;
document.getElementById('rightgame').disabled=false;
document.getElementById('downgame').disabled=false;
document.getElementById('pausegame').disabled=false;
document.getElementById('resumegame').disabled=false;
}
function startgame()
{
requestAnimationFrame(loop);
document.getElementById('tetrisview').style.display="none";
document.getElementById('tetrisgameview').style.display="block";
checkHighScore();
}
var timecounter=-1;
var timer_on=0;
function tetristimefunc()
{
timecounter++;
tetristimeout=setTimeout(tetristimefunc,1000);
tetristimenet=timecounter;
tetristimenets=tetristimenet%60;
if(tetristimenets<10)
tetristimenets='0'+tetristimenets;
tetristimenetm=parseInt(tetristimenet/60);
if(tetristimenetm<10)
tetristimenetm='0'+tetristimenetm;
timetetrisshow=document.getElementById('timescore').innerHTML=tetristimenetm+':'+tetristimenets;
if(xy=='auto')
{tsfunc();}
}
function startCount() 
{
if (!timer_on) 
{
timer_on=1;
tetristimefunc();
}
}
function stopCount() 
{
clearTimeout(tetristimeout);
timer_on=0;
}
function startgame2() 
{   
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}

const NO_OF_HIGH_SCORES = 10;
const HIGH_SCORES = 'highScores';
function checkHighScore(score) {
  const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
  const lowestScore = highScores[NO_OF_HIGH_SCORES - 1]?.score ?? 0;
  
  if (score > lowestScore) {
    saveHighScore(score, highScores); 
    showHighScores(); 
  }
}
function saveHighScore(score, highScores) {
  if (localStorage.getItem('name2')==undefined)
  localStorage.setItem('name2','Type here');
  const name = prompt('You secured top 10 spot in game stats, please enter your name:',localStorage.getItem('name2'));
  const newScore = { name, score };
  name2=name;
  localStorage.setItem('name2',name2);
  highScores.push(newScore);
  highScores.sort((a, b) => b.score-a.score);
  highScores.splice(NO_OF_HIGH_SCORES);
  localStorage.setItem(HIGH_SCORES, JSON.stringify(highScores));
}
function showHighScores() {
  const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
  const highScoreList = document.getElementById(HIGH_SCORES);
  document.getElementById('highscore').innerHTML='Highest Score- '+highScores[0].score;
  highScoreList.innerHTML = highScores
    .map((score) => `<li>${score.name}- ${score.score} points`)
    .join('');
}

window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        startgame();
		checkHighScore();
		tetristimefunc();
		tsvaluecheck();
		ttvaluecheck();
		taudiocheck();
		bgcodecheck();
    }
	var reloading2 = sessionStorage.getItem("reloading2");
    if (reloading2) {
        sessionStorage.removeItem("reloading2");
        tetrishome2();
		tsvaluecheck();
		ttvaluecheck();
		taudiocheck();
		bgcodecheck();
    }
}
function downgame()
{ 
for(var i=1;i<=10;i++)
{ const row = tetromino.row + 1;
	
    if (!isValidMove(tetromino.matrix, row, tetromino.col)) {
      tetromino.row = row - 1;
	  
      placeTetromino();
      return;
    }
tetromino.row = row;}
}
function rotategame()
{ 
    const matrix = rotate(tetromino.matrix);
    if (isValidMove(matrix, tetromino.row, tetromino.col)) {
      tetromino.matrix = matrix;
	  if(taudio==1)
	 {rotatet.play();}
    }
}
function leftgame()
{ 
   const col = tetromino.col - 1;
   if(taudio==1)
   {buttons.play();
    buttons.playbackRate=1.2;
   }
    if (isValidMove(tetromino.matrix, tetromino.row, col)) {
      tetromino.col = col;
    }
}
function rightgame()
{ 
const col = tetromino.col + 1;
    if(taudio==1)
	{buttons.play();
     buttons.playbackRate=1.2;
    }
    if (isValidMove(tetromino.matrix, tetromino.row, col)) {
      tetromino.col = col;
    }
}
 
function tsfunc()
{
if(tetristimenet<=60)
{xz=50;
document.getElementById('speedscore').innerHTML='1';
document.getElementById('speedscore2').style.marginLeft="48px";
}
else if(tetristimenet<=120 && tetristimenet>60)
{xz=45;
document.getElementById('speedscore').innerHTML='2';
document.getElementById('speedscore2').style.marginLeft="48px";
}
else if(tetristimenet<=180 && tetristimenet>120)
{xz=40;
document.getElementById('speedscore').innerHTML='3';
document.getElementById('speedscore2').style.marginLeft="48px";
}
else if(tetristimenet<=240 && tetristimenet>180)
{xz=35;
document.getElementById('speedscore').innerHTML='4';
document.getElementById('speedscore2').style.marginLeft="48px";
}
else if(tetristimenet<=300 && tetristimenet>240)
{xz=30;
document.getElementById('speedscore').innerHTML='5';
document.getElementById('speedscore2').style.marginLeft="48px";
}
else if(tetristimenet<=360 && tetristimenet>300)
{xz=25;
document.getElementById('speedscore').innerHTML='6';
document.getElementById('speedscore2').style.marginLeft="48px";
}
else if(tetristimenet<=420 && tetristimenet>360)
{xz=21;
document.getElementById('speedscore').innerHTML='7';
document.getElementById('speedscore2').style.marginLeft="48px";
}
else if(tetristimenet<=480 && tetristimenet>420)
{xz=17;
document.getElementById('speedscore').innerHTML='8';
document.getElementById('speedscore2').style.marginLeft="48px";
}
else if(tetristimenet<=540 && tetristimenet>480)
{xz=13;
document.getElementById('speedscore').innerHTML='9';
document.getElementById('speedscore2').style.marginLeft="48px";
}
else if(tetristimenet>540)
{xz=10;
document.getElementById('speedscore').innerHTML='10';
document.getElementById('speedscore2').style.marginLeft="60px";
}
document.getElementById('speedscore2').style.display="block";
}

ww=0;tt=0;oo=0;

xy=localStorage.getItem('xy');
xz=localStorage.getItem('xz');
ttvalue=localStorage.getItem('ttvalue');
tsvaluecheck();
ttvaluecheck();
taudiocheck();
bgcodecheck();

document.getElementById('score').innerHTML=ww;
document.getElementById('linescore').innerHTML=oo;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// generate a new tetromino sequence
function generateSequence() {
  if(ttvalue==1)
  {sequence = ['I', 'L', 'O', 'S', 'T', 'Z', 'E', 'F'];}
  else if(ttvalue==2)
  {sequence = ['I', 'J', 'L', 'O', 'S', 'T', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];}
  else if(ttvalue==3)
  {sequence = JSON.parse(localStorage.getItem('customtetrominoselect'));}
  
  while (sequence.length) {
    const rand = getRandomInt(0, sequence.length - 1);
    const name = sequence.splice(rand, 1)[0];
    tetrominoSequence.push(name);
  }
}

// get the next tetromino in the sequence
function getNextTetromino() {
  if (tetrominoSequence.length === 0) {
    generateSequence();
  }
  const name = tetrominoSequence.pop();
  const matrix = tetrominos[name];
  
  // I and O start centered, all others start in left-middle
  const col = playfield[0].length / 2 - Math.ceil(matrix[0].length / 2);

  // I starts on row 21 (-1), all others start on row 22 (-2)
  const row = name === 'E' ? -3 : -2;

  return {
    name: name,      // name of the piece (L, O, etc.)
    matrix: matrix,  // the current rotation matrix
    row: row,        // current row (starts offscreen)
    col: col         // current col
  };
}
 
// rotate an NxN matrix 90deg
function rotate(matrix) {
  const N = matrix.length - 1;
  const result = matrix.map((row, i) =>
    row.map((val, j) => matrix[N - j][i])
  );
 return result;
}
// check to see if the new matrix/row/col is valid
function isValidMove(matrix, cellRow, cellCol) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] && (
          // outside the game bounds
          cellCol + col < 0 ||
          cellCol + col >= playfield[0].length ||
          cellRow + row >= playfield.length ||
          // collides with another piece
          playfield[cellRow + row][cellCol + col])
        ) {
        return false;
      }
    }
  }
  return true;
}
// place the tetromino on the playfield
function placeTetromino() {
  for (let row = 0; row < tetromino.matrix.length; row++) {
    for (let col = 0; col < tetromino.matrix[row].length; col++) {
      if (tetromino.matrix[row][col]) {
		 
		 if(taudio==1)
		 {downb2.play();}
		 
        // game over if piece has any part offscreen
        if (tetromino.row + row < 0) {
          return showGameOver();
        }
        playfield[tetromino.row + row][tetromino.col + col] = tetromino.name;
      }
    }
  }
 
  // check for line clears starting from the bottom and working our way up
  for (let row = playfield.length - 1; row >= 0; ) {
    if (playfield[row].every(cell => !!cell)) {
		
	  if(taudio==1)
      {audio.play();}
	  
	  tt++;
	  oo++;
	  document.getElementById('linescore').innerHTML=oo;
      // drop every row above this one
      for (let r = row; r >= 0; r--) {
        for (let c = 0; c < playfield[r].length; c++) {
          playfield[r][c] = playfield[r-1][c];
        }
      }
    }
    else {
      row--;	 
    }  
  }
  if(tt==1)
      {ww=ww+100;
	  tt=0;
	  document.getElementById('score').innerHTML=ww;}
	  else if (tt==2)
	  {ww=ww+300;
	  tt=0;
	  document.getElementById('score').innerHTML=ww;}
	  else if (tt==3)
	  {ww=ww+700;
	  tt=0;
	  document.getElementById('score').innerHTML=ww;}
      else if (tt==4)
	  {ww=ww+1500;
	  tt=0;
	  document.getElementById('score').innerHTML=ww;}
  tetromino = getNextTetromino();
}
// show the game over screen
function showGameOver() {
  if(taudio==1)
  {tgover.play();}
  cancelAnimationFrame(rAF);
  gameOver = true; 
  document.getElementById('tetrishome100').disabled=true;
  document.getElementById('replaygame').disabled=true;
  document.getElementById('replaygame2').style.display="none";
  document.getElementById('quithome').style.display="none";
  document.getElementById('pausegame').disabled=true;
  document.getElementById('resumegame').disabled=true;
  document.getElementById('restartgame').style.display="block";
  document.getElementById('gameoverscore').innerHTML="Score- "+ww;
  document.getElementById('gameoverline').innerHTML="Lines- "+oo;
  document.getElementById('gameovertime').innerHTML="Play Time- "+timetetrisshow;
  stopCount();
  checkHighScore(ww);
}
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const grid = 32;
const tetrominoSequence = [];

// keep track of what is in every cell of the game using a 2d array
// tetris playfield is 10x20, with a few rows offscreen
const playfield = [];

// populate the empty state
for (let row = -2; row < 20; row++) {
  playfield[row] = [];

  for (let col = 0; col < 10; col++) {
    playfield[row][col] = 0;
  }
}
// how to draw each tetromino
const tetrominos = {
  'I': [
    [0,0,0,0],
    [1,1,1,1],
    [0,0,0,0],
    [0,0,0,0],
  ],
  'E': [
    [0,1,0,0],
    [0,1,0,0],
    [0,1,0,0],
    [0,1,0,0],
  ],
  'J': [
    [0,1,0],
    [0,1,0],
    [1,1,1]
  ],
  'L': [
    [0,0,1],
    [1,1,1],
    [0,0,0]
  ],
  'O': [
    [1,1],
    [1,1]
  ],
  'S': [
    [0,1,1],
    [1,1,0],
    [0,0,0]
  ],
  'Z': [
    [1,1,0],
    [0,1,1],
    [0,0,0]
  ],
  'T': [
    [0,1,0],
    [1,1,1],
    [0,0,0]
  ],
  'A': [
    [0,1],
    [1,1]
  ],
  'B': [
    [0,1,0],
    [1,1,1],
    [0,1,0]
  ],
  'C': [
    [0,1,0],
    [0,1,0],
    [0,1,0]
  ],
  'D': [
    [0,0,0],
    [0,1,0],
    [0,0,0]
  ],
  'F': [
    [1,0,0],
    [1,1,1],
    [0,0,0]
  ],
  'G': [
    [1,0,1],
    [1,1,1],
    [0,0,0]
  ],
  'H': [
    [0,0,0],
    [0,1,0],
    [0,1,0]
  ]
};
// color of each tetromino
const colors = {
  'I': 'cyan',
  'O': 'yellow',
  'T': 'purple',
  'S': 'red',
  'Z': 'red',
  'J': 'blue',
  'L': '#ff7811',
  'A': '#298d98',
  'B': '#949494',
  'C': 'crimson',
  'D': 'white',
  'E': 'cyan',
  'F': '#ff7811',
  'G': 'green',
  'H': 'lime'
};
let count = 0;
let tetromino = getNextTetromino();
let rAF = null;  // keep track of the animation frame so we can cancel it
let gameOver = false;
// game loop
function loop() {
  rAF = requestAnimationFrame(loop);
  context.clearRect(0,0,canvas.width,canvas.height);

  // draw the playfield
  for (let row = 0; row < 20; row++) {
    for (let col = 0; col < 10; col++) {
      if (playfield[row][col]) {
        const name = playfield[row][col];
        context.fillStyle = colors[name];

        // drawing 1 px smaller than the grid creates a grid effect
        context.fillRect(col * grid, row * grid, grid-1, grid-1);
      }
    }
  }
  // draw the active tetromino
  if (tetromino) {

    // tetromino falls every 35 frames
    if (++count > xz) {
      tetromino.row++;
      count = 0;
      // place piece if it runs into anything
      if (!isValidMove(tetromino.matrix, tetromino.row, tetromino.col)) {
        tetromino.row--;
        placeTetromino();
      }
    }
    context.fillStyle = colors[tetromino.name];
    for (let row = 0; row < tetromino.matrix.length; row++) {
      for (let col = 0; col < tetromino.matrix[row].length; col++) {
        if (tetromino.matrix[row][col]) {
          // drawing 1 px smaller than the grid creates a grid effect
          context.fillRect((tetromino.col + col) * grid, (tetromino.row + row) * grid, grid-1, grid-1);
		  }
      }
    }
  }
}
// listen to keyboard events to move the active tetromino
document.addEventListener('keydown', function(e) {
  if (gameOver) return;
  // left and right arrow keys (move)
  if (e.which === 37 || e.which === 39) {
    const col = e.which === 37
      ? tetromino.col - 1
      : tetromino.col + 1;
	  
	   if(taudio==1)
	   {buttons.play();
        buttons.playbackRate=1.2;
       }
   
    if (isValidMove(tetromino.matrix, tetromino.row, col)) {
      tetromino.col = col;  
    }
  }
  // up arrow key (rotate)
  if (e.which === 38) {
    const matrix = rotate(tetromino.matrix);
	
    if (isValidMove(matrix, tetromino.row, tetromino.col)) {
      tetromino.matrix = matrix;
	  
	  if(taudio==1)
	  {rotatet.play();}
  
    }
  }
  // down arrow key (drop)
  if(e.which === 40) {
    const row = tetromino.row + 1;
	
    if (!isValidMove(tetromino.matrix, row, tetromino.col)) {
      tetromino.row = row - 1;
	  
      placeTetromino();
      return;
    }
    tetromino.row = row;
  }
});
	
function soundon()
{
taudio=1;
localStorage.setItem('taudio',taudio);
}
function soundoff()
{
taudio=0;
localStorage.setItem('taudio',taudio);
}
function taudiocheck()
{
taudio=localStorage.getItem('taudio');
if(taudio==1)
{
document.getElementById('soundon').checked=true;
document.getElementById('soundoff').checked=false;
}
else if(taudio==0)
{
document.getElementById('soundon').checked=false;
document.getElementById('soundoff').checked=true;
}
}

function bgcool()
{
document.getElementById('game').style.background="url('TetrisItems/cool.jpg')";
document.getElementById('game').style.backgroundSize="320px 640px";

document.getElementById('bgcool').style.border="lime 2px solid";
document.getElementById('bgblack').style.border="white 2px solid";
document.getElementById('bgstar').style.border="white 2px solid";
document.getElementById('bgbrick').style.border="white 2px solid";
document.getElementById('bgwoody').style.border="white 2px solid";

bgcodet=1;
localStorage.setItem('bgcodet',bgcodet);
}
function bgblack()
{
document.getElementById('game').style.backgroundColor="black";

document.getElementById('bgcool').style.border="white 2px solid";
document.getElementById('bgstar').style.border="white 2px solid";
document.getElementById('bgblack').style.border="lime 2px solid";
document.getElementById('bgbrick').style.border="white 2px solid";
document.getElementById('bgwoody').style.border="white 2px solid";

bgcodet=2;
localStorage.setItem('bgcodet',bgcodet);
}
function bgstar()
{
document.getElementById('game').style.background="url('TetrisItems/star.gif')";
document.getElementById('game').style.backgroundSize="320px 680px";

document.getElementById('bgcool').style.border="white 2px solid";
document.getElementById('bgstar').style.border="lime 2px solid";
document.getElementById('bgblack').style.border="white 2px solid";
document.getElementById('bgbrick').style.border="white 2px solid";
document.getElementById('bgwoody').style.border="white 2px solid";

bgcodet=3;
localStorage.setItem('bgcodet',bgcodet);
}
function bgwoody()
{
document.getElementById('game').style.background="url('TetrisItems/woody.gif')";
document.getElementById('game').style.backgroundSize="320px 640px";

document.getElementById('bgcool').style.border="white 2px solid";
document.getElementById('bgstar').style.border="white 2px solid";
document.getElementById('bgblack').style.border="white 2px solid";
document.getElementById('bgbrick').style.border="white 2px solid";
document.getElementById('bgwoody').style.border="lime 2px solid";

bgcodet=4;
localStorage.setItem('bgcodet',bgcodet);
}
function bgbrick()
{
document.getElementById('game').style.background="url('TetrisItems/Brick.jpg')";
document.getElementById('game').style.backgroundSize="320px 640px";

document.getElementById('bgcool').style.border="white 2px solid";
document.getElementById('bgstar').style.border="white 2px solid";
document.getElementById('bgblack').style.border="white 2px solid";
document.getElementById('bgbrick').style.border="lime 2px solid";
document.getElementById('bgwoody').style.border="white 2px solid";

bgcodet=5;
localStorage.setItem('bgcodet',bgcodet);
}

function bgcodecheck()
{
bgcodet=localStorage.getItem('bgcodet');
if(bgcodet==1)	
{
document.getElementById('game').style.background="url('TetrisItems/cool.jpg')";
document.getElementById('game').style.backgroundSize="320px 640px";

document.getElementById('bgcool').style.border="lime 2px solid";
document.getElementById('bgstar').style.border="white 2px solid";
document.getElementById('bgblack').style.border="white 2px solid";
document.getElementById('bgbrick').style.border="white 2px solid";
document.getElementById('bgwoody').style.border="white 2px solid";
}
else if(bgcodet==2)	
{
document.getElementById('game').style.backgroundColor="black";

document.getElementById('bgcool').style.border="white 2px solid";
document.getElementById('bgstar').style.border="white 2px solid";
document.getElementById('bgblack').style.border="lime 2px solid";
document.getElementById('bgbrick').style.border="white 2px solid";
document.getElementById('bgwoody').style.border="white 2px solid";
}
else if(bgcodet==3)	
{
document.getElementById('game').style.background="url('TetrisItems/star.gif')";
document.getElementById('game').style.backgroundSize="320px 680px";

document.getElementById('bgcool').style.border="white 2px solid";
document.getElementById('bgstar').style.border="lime 2px solid";
document.getElementById('bgblack').style.border="white 2px solid";
document.getElementById('bgbrick').style.border="white 2px solid";
document.getElementById('bgwoody').style.border="white 2px solid";
}
else if(bgcodet==4)	
{
document.getElementById('game').style.background="url('TetrisItems/woody.gif')";
document.getElementById('game').style.backgroundSize="320px 640px";

document.getElementById('bgcool').style.border="white 2px solid";
document.getElementById('bgstar').style.border="white 2px solid";
document.getElementById('bgblack').style.border="white 2px solid";
document.getElementById('bgbrick').style.border="white 2px solid";
document.getElementById('bgwoody').style.border="lime 2px solid";
}
else if(bgcodet==5)	
{
document.getElementById('game').style.background="url('TetrisItems/Brick.jpg')";
document.getElementById('game').style.backgroundSize="320px 640px";

document.getElementById('bgcool').style.border="white 2px solid";
document.getElementById('bgstar').style.border="white 2px solid";
document.getElementById('bgblack').style.border="white 2px solid";
document.getElementById('bgbrick').style.border="lime 2px solid";
document.getElementById('bgwoody').style.border="white 2px solid";
}
}

 
   
    
