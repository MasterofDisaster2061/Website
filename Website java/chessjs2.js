
var tplace=0;
function tpawn()
{
document.getElementById('tpawn').style.backgroundColor="lime";
document.getElementById('tknight').style.backgroundColor="white";
document.getElementById('trook').style.backgroundColor="white";
document.getElementById('tbishop').style.backgroundColor="white";
document.getElementById('tqueen').style.backgroundColor="white";
document.getElementById('tking').style.backgroundColor="white";
document.getElementById('tclean').style.backgroundColor="white";
tplace=1;
}
function tknight()
{
document.getElementById('tpawn').style.backgroundColor="white";
document.getElementById('tknight').style.backgroundColor="lime";
document.getElementById('trook').style.backgroundColor="white";
document.getElementById('tbishop').style.backgroundColor="white";
document.getElementById('tqueen').style.backgroundColor="white";
document.getElementById('tking').style.backgroundColor="white";
document.getElementById('tclean').style.backgroundColor="white";
tplace=2;
}
function tbishop()
{
document.getElementById('tpawn').style.backgroundColor="white";
document.getElementById('tknight').style.backgroundColor="white";
document.getElementById('trook').style.backgroundColor="white";
document.getElementById('tbishop').style.backgroundColor="lime";
document.getElementById('tqueen').style.backgroundColor="white";
document.getElementById('tking').style.backgroundColor="white";
document.getElementById('tclean').style.backgroundColor="white";
tplace=3;
}
function trook()
{
document.getElementById('tpawn').style.backgroundColor="white";
document.getElementById('tknight').style.backgroundColor="white";
document.getElementById('trook').style.backgroundColor="lime";
document.getElementById('tbishop').style.backgroundColor="white";
document.getElementById('tqueen').style.backgroundColor="white";
document.getElementById('tking').style.backgroundColor="white";
document.getElementById('tclean').style.backgroundColor="white";
tplace=4;
}
function tqueen()
{
document.getElementById('tpawn').style.backgroundColor="white";
document.getElementById('tknight').style.backgroundColor="white";
document.getElementById('trook').style.backgroundColor="white";
document.getElementById('tbishop').style.backgroundColor="white";
document.getElementById('tqueen').style.backgroundColor="lime";
document.getElementById('tking').style.backgroundColor="white";
document.getElementById('tclean').style.backgroundColor="white";
tplace=5;
}
function tking()
{
document.getElementById('tpawn').style.backgroundColor="white";
document.getElementById('tknight').style.backgroundColor="white";
document.getElementById('trook').style.backgroundColor="white";
document.getElementById('tbishop').style.backgroundColor="white";
document.getElementById('tqueen').style.backgroundColor="white";
document.getElementById('tking').style.backgroundColor="lime";
document.getElementById('tclean').style.backgroundColor="white";
tplace=6;
}
function tclean()
{
document.getElementById('tpawn').style.backgroundColor="white";
document.getElementById('tknight').style.backgroundColor="white";
document.getElementById('trook').style.backgroundColor="white";
document.getElementById('tbishop').style.backgroundColor="white";
document.getElementById('tqueen').style.backgroundColor="white";
document.getElementById('tking').style.backgroundColor="white";
document.getElementById('tclean').style.backgroundColor="lime";
tplace=7;
}

function T1()
{
if(tplace==1)
{document.getElementById('T1').value="♟";
t1=0;
t1t=1;
}
if(tplace==2)
{document.getElementById('T1').value="♞";
t1=1;
t1t=1;
}
if(tplace==3)
{document.getElementById('T1').value="♝";
t1=2;
t1t=1;
}
if(tplace==4)
{document.getElementById('T1').value="♜";
t1=3;
t1t=1;
}
if(tplace==5)
{document.getElementById('T1').value="♛";
t1=4;
t1t=1;
}
if(tplace==6)
{document.getElementById('T1').value="♚";
t1=5;
t1t=1;
}
if(tplace==7)
{document.getElementById('T1').value="";
}
}

function T2()
{
if(tplace==1)
{document.getElementById('T2').value="♟";
t2=0;
t2t=1;
}
if(tplace==2)
{document.getElementById('T2').value="♞";
t2=1;
t2t=1;
}
if(tplace==3)
{document.getElementById('T2').value="♝";
t2=2;
t2t=1;
}
if(tplace==4)
{document.getElementById('T2').value="♜";
t2=3;
t2t=1;
}
if(tplace==5)
{document.getElementById('T2').value="♛";
t2=4;
t2t=1;
}
if(tplace==6)
{document.getElementById('T2').value="♚";
t2=5;
t2t=1;
}
if(tplace==7)
{document.getElementById('T2').value="";
}
}

function T3()
{
if(tplace==1)
{document.getElementById('T3').value="♟";
t3=0;
t3t=1;
}
if(tplace==2)
{document.getElementById('T3').value="♞";
t3=1;
t3t=1;
}
if(tplace==3)
{document.getElementById('T3').value="♝";
t3=2;
t3t=1;
}
if(tplace==4)
{document.getElementById('T3').value="♜";
t3=3;
t3t=1;
}
if(tplace==5)
{document.getElementById('T3').value="♛";
t3=4;
t3t=1;
}
if(tplace==6)
{document.getElementById('T3').value="♚";
t3=5;
t3t=1;
}
if(tplace==7)
{document.getElementById('T3').value="";
}
}

function T4()
{
if(tplace==1)
{document.getElementById('T4').value="♟";
t4=0;
t4t=1;
}
if(tplace==2)
{document.getElementById('T4').value="♞";
t4=1;
t4t=1;
}
if(tplace==3)
{document.getElementById('T4').value="♝";
t4=2;
t4t=1;
}
if(tplace==4)
{document.getElementById('T4').value="♜";
t4=3;
t4t=1;
}
if(tplace==5)
{document.getElementById('T4').value="♛";
t4=4;
t4t=1;
}
if(tplace==6)
{document.getElementById('T4').value="♚";
t4=5;
t4t=1;
}
if(tplace==7)
{document.getElementById('T4').value="";
}
}

function T5()
{
if(tplace==1)
{document.getElementById('T5').value="♟";
t5=0;
t5t=1;
}
if(tplace==2)
{document.getElementById('T5').value="♞";
t5=1;
t5t=1;
}
if(tplace==3)
{document.getElementById('T5').value="♝";
t5=2;
t5t=1;
}
if(tplace==4)
{document.getElementById('T5').value="♜";
t5=3;
t5t=1;
}
if(tplace==5)
{document.getElementById('T5').value="♛";
t5=4;
t5t=1;
}
if(tplace==6)
{document.getElementById('T5').value="♚";
t5=5;
t5t=1;
}
if(tplace==7)
{document.getElementById('T5').value="";
}
}

function T6()
{
if(tplace==1)
{document.getElementById('T6').value="♟";
t6=0;
t6t=1;
}
if(tplace==2)
{document.getElementById('T6').value="♞";
t6=1;
t6t=1;
}
if(tplace==3)
{document.getElementById('T6').value="♝";
t6=2;
t6t=1;
}
if(tplace==4)
{document.getElementById('T6').value="♜";
t6=3;
t6t=1;
}
if(tplace==5)
{document.getElementById('T6').value="♛";
t6=4;
t6t=1;
}
if(tplace==6)
{document.getElementById('T6').value="♚";
t6=5;
t6t=1;
}
if(tplace==7)
{document.getElementById('T6').value="";
}
}

function T7()
{
if(tplace==1)
{document.getElementById('T7').value="♟";
t7=0;
t7t=1;
}
if(tplace==2)
{document.getElementById('T7').value="♞";
t7=1;
t7t=1;
}
if(tplace==3)
{document.getElementById('T7').value="♝";
t7=2;
t7t=1;
}
if(tplace==4)
{document.getElementById('T7').value="♜";
t7=3;
t7t=1;
}
if(tplace==5)
{document.getElementById('T7').value="♛";
t7=4;
t7t=1;
}
if(tplace==6)
{document.getElementById('T7').value="♚";
t7=5;
t7t=1;
}
if(tplace==7)
{document.getElementById('T7').value="";
}
}

function T8()
{
if(tplace==1)
{document.getElementById('T8').value="♟";
t8=0;
t8t=1;
}
if(tplace==2)
{document.getElementById('T8').value="♞";
t8=1;
t8t=1;
}
if(tplace==3)
{document.getElementById('T8').value="♝";
t8=2;
t8t=1;
}
if(tplace==4)
{document.getElementById('T8').value="♜";
t8=3;
t8t=1;
}
if(tplace==5)
{document.getElementById('T8').value="♛";
t8=4;
t8t=1;
}
if(tplace==6)
{document.getElementById('T8').value="♚";
t8=5;
t8t=1;
}
if(tplace==7)
{document.getElementById('T8').value="";
}
}

function T9()
{
if(tplace==1)
{document.getElementById('T9').value="♟";
t9=0;
t9t=1;
}
if(tplace==2)
{document.getElementById('T9').value="♞";
t9=1;
t9t=1;
}
if(tplace==3)
{document.getElementById('T9').value="♝";
t9=2;
t9t=1;
}
if(tplace==4)
{document.getElementById('T9').value="♜";
t9=3;
t9t=1;
}
if(tplace==5)
{document.getElementById('T9').value="♛";
t9=4;
t9t=1;
}
if(tplace==6)
{document.getElementById('T9').value="♚";
t9=5;
t9t=1;
}
if(tplace==7)
{document.getElementById('T9').value="";
}
}

function T10()
{
if(tplace==1)
{document.getElementById('T10').value="♟";
t10=0;
t10t=1;
}
if(tplace==2)
{document.getElementById('T10').value="♞";
t10=1;
t10t=1;
}
if(tplace==3)
{document.getElementById('T10').value="♝";
t10=2;
t10t=1;
}
if(tplace==4)
{document.getElementById('T10').value="♜";
t10=3;
t10t=1;
}
if(tplace==5)
{document.getElementById('T10').value="♛";
t10=4;
t10t=1;
}
if(tplace==6)
{document.getElementById('T10').value="♚";
t10=5;
t10t=1;
}
if(tplace==7)
{document.getElementById('T10').value="";
}
}

function T11()
{
if(tplace==1)
{document.getElementById('T11').value="♟";
t11=0;
t11t=1;
}
if(tplace==2)
{document.getElementById('T11').value="♞";
t11=1;
t11t=1;
}
if(tplace==3)
{document.getElementById('T11').value="♝";
t11=2;
t11t=1;
}
if(tplace==4)
{document.getElementById('T11').value="♜";
t11=3;
t11t=1;
}
if(tplace==5)
{document.getElementById('T11').value="♛";
t11=4;
t11t=1;
}
if(tplace==6)
{document.getElementById('T11').value="♚";
t11=5;
t11t=1;
}
if(tplace==7)
{document.getElementById('T11').value="";
}
}

function T12()
{
if(tplace==1)
{document.getElementById('T12').value="♟";
t12=0;
t12t=1;
}
if(tplace==2)
{document.getElementById('T12').value="♞";
t12=1;
t12t=1;
}
if(tplace==3)
{document.getElementById('T12').value="♝";
t12=2;
t12t=1;
}
if(tplace==4)
{document.getElementById('T12').value="♜";
t12=3;
t12t=1;
}
if(tplace==5)
{document.getElementById('T12').value="♛";
t12=4;
t12t=1;
}
if(tplace==6)
{document.getElementById('T12').value="♚";
t12=5;
t12t=1;
}
if(tplace==7)
{document.getElementById('T12').value="";
}
}

function T13()
{
if(tplace==1)
{document.getElementById('T13').value="♟";
t13=0;
t13t=1;
}
if(tplace==2)
{document.getElementById('T13').value="♞";
t13=1;
t13t=1;
}
if(tplace==3)
{document.getElementById('T13').value="♝";
t13=2;
t13t=1;
}
if(tplace==4)
{document.getElementById('T13').value="♜";
t13=3;
t13t=1;
}
if(tplace==5)
{document.getElementById('T13').value="♛";
t13=4;
t13t=1;
}
if(tplace==6)
{document.getElementById('T13').value="♚";
t13=5;
t13t=1;
}
if(tplace==7)
{document.getElementById('T13').value="";
}
}

function T14()
{
if(tplace==1)
{document.getElementById('T14').value="♟";
t14=0;
t14t=1;
}
if(tplace==2)
{document.getElementById('T14').value="♞";
t14=1;
t14t=1;
}
if(tplace==3)
{document.getElementById('T14').value="♝";
t14=2;
t14t=1;
}
if(tplace==4)
{document.getElementById('T14').value="♜";
t14=3;
t14t=1;
}
if(tplace==5)
{document.getElementById('T14').value="♛";
t14=4;
t14t=1;
}
if(tplace==6)
{document.getElementById('T14').value="♚";
t14=5;
t14t=1;
}
if(tplace==7)
{document.getElementById('T14').value="";
}
}

function T15()
{
if(tplace==1)
{document.getElementById('T15').value="♟";
t15=0;
t15t=1;
}
if(tplace==2)
{document.getElementById('T15').value="♞";
t15=1;
t15t=1;
}
if(tplace==3)
{document.getElementById('T15').value="♝";
t15=2;
t15t=1;
}
if(tplace==4)
{document.getElementById('T15').value="♜";
t15=3;
t15t=1;
}
if(tplace==5)
{document.getElementById('T15').value="♛";
t15=4;
t15t=1;
}
if(tplace==6)
{document.getElementById('T15').value="♚";
t15=5;
t15t=1;
}
if(tplace==7)
{document.getElementById('T15').value="";
}
}

function T16()
{
if(tplace==1)
{document.getElementById('T16').value="♟";
t16=0;
t16t=1;
}
if(tplace==2)
{document.getElementById('T16').value="♞";
t16=1;
t16t=1;
}
if(tplace==3)
{document.getElementById('T16').value="♝";
t16=2;
t16t=1;
}
if(tplace==4)
{document.getElementById('T16').value="♜";
t16=3;
t16t=1;
}
if(tplace==5)
{document.getElementById('T16').value="♛";
t16=4;
t16t=1;
}
if(tplace==6)
{document.getElementById('T16').value="♚";
t16=5;
t16t=1;
}
if(tplace==7)
{document.getElementById('T16').value="";
}
}

function T17()
{
if(tplace==1)
{document.getElementById('T17').value="♟";
t17=0;
t17t=1;
}
if(tplace==2)
{document.getElementById('T17').value="♞";
t17=1;
t17t=1;
}
if(tplace==3)
{document.getElementById('T17').value="♝";
t17=2;
t17t=1;
}
if(tplace==4)
{document.getElementById('T17').value="♜";
t17=3;
t17t=1;
}
if(tplace==5)
{document.getElementById('T17').value="♛";
t17=4;
t17t=1;
}
if(tplace==6)
{document.getElementById('T17').value="♚";
t17=5;
t17t=1;
}
if(tplace==7)
{document.getElementById('T17').value="";
}
}

function T18()
{
if(tplace==1)
{document.getElementById('T18').value="♟";
t18=0;
t18t=1;
}
if(tplace==2)
{document.getElementById('T18').value="♞";
t18=1;
t18t=1;
}
if(tplace==3)
{document.getElementById('T18').value="♝";
t18=2;
t18t=1;
}
if(tplace==4)
{document.getElementById('T18').value="♜";
t18=3;
t18t=1;
}
if(tplace==5)
{document.getElementById('T18').value="♛";
t18=4;
t18t=1;
}
if(tplace==6)
{document.getElementById('T18').value="♚";
t18=5;
t18t=1;
}
if(tplace==7)
{document.getElementById('T18').value="";
}
}

function T19()
{
if(tplace==1)
{document.getElementById('T19').value="♟";
t19=0;
t19t=1;
}
if(tplace==2)
{document.getElementById('T19').value="♞";
t19=1;
t19t=1;
}
if(tplace==3)
{document.getElementById('T19').value="♝";
t19=2;
t19t=1;
}
if(tplace==4)
{document.getElementById('T19').value="♜";
t19=3;
t19t=1;
}
if(tplace==5)
{document.getElementById('T19').value="♛";
t19=4;
t19t=1;
}
if(tplace==6)
{document.getElementById('T19').value="♚";
t19=5;
t19t=1;
}
if(tplace==7)
{document.getElementById('T19').value="";
}
}

function T20()
{
if(tplace==1)
{document.getElementById('T20').value="♟";
t20=0;
t20t=1;
}
if(tplace==2)
{document.getElementById('T20').value="♞";
t20=1;
t20t=1;
}
if(tplace==3)
{document.getElementById('T20').value="♝";
t20=2;
t20t=1;
}
if(tplace==4)
{document.getElementById('T20').value="♜";
t20=3;
t20t=1;
}
if(tplace==5)
{document.getElementById('T20').value="♛";
t20=4;
t20t=1;
}
if(tplace==6)
{document.getElementById('T20').value="♚";
t20=5;
t20t=1;
}
if(tplace==7)
{document.getElementById('T20').value="";
}
}

function T21()
{
if(tplace==1)
{document.getElementById('T21').value="♟";
t21=0;
t21t=1;
}
if(tplace==2)
{document.getElementById('T21').value="♞";
t21=1;
t21t=1;
}
if(tplace==3)
{document.getElementById('T21').value="♝";
t21=2;
t21t=1;
}
if(tplace==4)
{document.getElementById('T21').value="♜";
t21=3;
t21t=1;
}
if(tplace==5)
{document.getElementById('T21').value="♛";
t21=4;
t21t=1;
}
if(tplace==6)
{document.getElementById('T21').value="♚";
t21=5;
t21t=1;
}
if(tplace==7)
{document.getElementById('T21').value="";
}
}

function T22()
{
if(tplace==1)
{document.getElementById('T22').value="♟";
t22=0;
t22t=1;
}
if(tplace==2)
{document.getElementById('T22').value="♞";
t22=1;
t22t=1;
}
if(tplace==3)
{document.getElementById('T22').value="♝";
t22=2;
t22t=1;
}
if(tplace==4)
{document.getElementById('T22').value="♜";
t22=3;
t22t=1;
}
if(tplace==5)
{document.getElementById('T22').value="♛";
t22=4;
t22t=1;
}
if(tplace==6)
{document.getElementById('T22').value="♚";
t22=5;
t22t=1;
}
if(tplace==7)
{document.getElementById('T22').value="";
}
}

function T23()
{
if(tplace==1)
{document.getElementById('T23').value="♟";
t23=0;
t23t=1;
}
if(tplace==2)
{document.getElementById('T23').value="♞";
t23=1;
t23t=1;
}
if(tplace==3)
{document.getElementById('T23').value="♝";
t23=2;
t23t=1;
}
if(tplace==4)
{document.getElementById('T23').value="♜";
t23=3;
t23t=1;
}
if(tplace==5)
{document.getElementById('T23').value="♛";
t23=4;
t23t=1;
}
if(tplace==6)
{document.getElementById('T23').value="♚";
t23=5;
t23t=1;
}
if(tplace==7)
{document.getElementById('T23').value="";
}
}

function T24()
{
if(tplace==1)
{document.getElementById('T24').value="♟";
t24=0;
t24t=1;
}
if(tplace==2)
{document.getElementById('T24').value="♞";
t24=1;
t24t=1;
}
if(tplace==3)
{document.getElementById('T24').value="♝";
t24=2;
t24t=1;
}
if(tplace==4)
{document.getElementById('T24').value="♜";
t24=3;
t24t=1;
}
if(tplace==5)
{document.getElementById('T24').value="♛";
t24=4;
t24t=1;
}
if(tplace==6)
{document.getElementById('T24').value="♚";
t24=5;
t24t=1;
}
if(tplace==7)
{document.getElementById('T24').value="";
}
}

function T25()
{
if(tplace==1)
{document.getElementById('T25').value="♟";
t25=0;
t25t=1;
}
if(tplace==2)
{document.getElementById('T25').value="♞";
t25=1;
t25t=1;
}
if(tplace==3)
{document.getElementById('T25').value="♝";
t25=2;
t25t=1;
}
if(tplace==4)
{document.getElementById('T25').value="♜";
t25=3;
t25t=1;
}
if(tplace==5)
{document.getElementById('T25').value="♛";
t25=4;
t25t=1;
}
if(tplace==6)
{document.getElementById('T25').value="♚";
t25=5;
t25t=1;
}
if(tplace==7)
{document.getElementById('T25').value="";
}
}

function T26()
{
if(tplace==1)
{document.getElementById('T26').value="♟";
t26=0;
t26t=1;
}
if(tplace==2)
{document.getElementById('T26').value="♞";
t26=1;
t26t=1;
}
if(tplace==3)
{document.getElementById('T26').value="♝";
t26=2;
t26t=1;
}
if(tplace==4)
{document.getElementById('T26').value="♜";
t26=3;
t26t=1;
}
if(tplace==5)
{document.getElementById('T26').value="♛";
t26=4;
t26t=1;
}
if(tplace==6)
{document.getElementById('T26').value="♚";
t26=5;
t26t=1;
}
if(tplace==7)
{document.getElementById('T26').value="";
}
}

function T27()
{
if(tplace==1)
{document.getElementById('T27').value="♟";
t27=0;
t27t=1;
}
if(tplace==2)
{document.getElementById('T27').value="♞";
t27=1;
t27t=1;
}
if(tplace==3)
{document.getElementById('T27').value="♝";
t27=2;
t27t=1;
}
if(tplace==4)
{document.getElementById('T27').value="♜";
t27=3;
t27t=1;
}
if(tplace==5)
{document.getElementById('T27').value="♛";
t27=4;
t27t=1;
}
if(tplace==6)
{document.getElementById('T27').value="♚";
t27=5;
t27t=1;
}
if(tplace==7)
{document.getElementById('T27').value="";
}
}

function T28()
{
if(tplace==1)
{document.getElementById('T28').value="♟";
t28=0;
t28t=1;
}
if(tplace==2)
{document.getElementById('T28').value="♞";
t28=1;
t28t=1;
}
if(tplace==3)
{document.getElementById('T28').value="♝";
t28=2;
t28t=1;
}
if(tplace==4)
{document.getElementById('T28').value="♜";
t28=3;
t28t=1;
}
if(tplace==5)
{document.getElementById('T28').value="♛";
t28=4;
t28t=1;
}
if(tplace==6)
{document.getElementById('T28').value="♚";
t28=5;
t28t=1;
}
if(tplace==7)
{document.getElementById('T28').value="";
}
}

function T29()
{
if(tplace==1)
{document.getElementById('T29').value="♟";
t29=0;
t29t=1;
}
if(tplace==2)
{document.getElementById('T29').value="♞";
t29=1;
t29t=1;
}
if(tplace==3)
{document.getElementById('T29').value="♝";
t29=2;
t29t=1;
}
if(tplace==4)
{document.getElementById('T29').value="♜";
t29=3;
t29t=1;
}
if(tplace==5)
{document.getElementById('T29').value="♛";
t29=4;
t29t=1;
}
if(tplace==6)
{document.getElementById('T29').value="♚";
t29=5;
t29t=1;
}
if(tplace==7)
{document.getElementById('T29').value="";
}
}

function T30()
{
if(tplace==1)
{document.getElementById('T30').value="♟";
t30=0;
t30t=1;
}
if(tplace==2)
{document.getElementById('T30').value="♞";
t30=1;
t30t=1;
}
if(tplace==3)
{document.getElementById('T30').value="♝";
t30=2;
t30t=1;
}
if(tplace==4)
{document.getElementById('T30').value="♜";
t30=3;
t30t=1;
}
if(tplace==5)
{document.getElementById('T30').value="♛";
t30=4;
t30t=1;
}
if(tplace==6)
{document.getElementById('T30').value="♚";
t30=5;
t30t=1;
}
if(tplace==7)
{document.getElementById('T30').value="";
}
}

function T31()
{
if(tplace==1)
{document.getElementById('T31').value="♟";
t31=0;
t31t=1;
}
if(tplace==2)
{document.getElementById('T31').value="♞";
t31=1;
t31t=1;
}
if(tplace==3)
{document.getElementById('T31').value="♝";
t31=2;
t31t=1;
}
if(tplace==4)
{document.getElementById('T31').value="♜";
t31=3;
t31t=1;
}
if(tplace==5)
{document.getElementById('T31').value="♛";
t31=4;
t31t=1;
}
if(tplace==6)
{document.getElementById('T31').value="♚";
t31=5;
t31t=1;
}
if(tplace==7)
{document.getElementById('T31').value="";
}
}

function T32()
{
if(tplace==1)
{document.getElementById('T32').value="♟";
t32=0;
t32t=1;
}
if(tplace==2)
{document.getElementById('T32').value="♞";
t32=1;
t32t=1;
}
if(tplace==3)
{document.getElementById('T32').value="♝";
t32=2;
t32t=1;
}
if(tplace==4)
{document.getElementById('T32').value="♜";
t32=3;
t32t=1;
}
if(tplace==5)
{document.getElementById('T32').value="♛";
t32=4;
t32t=1;
}
if(tplace==6)
{document.getElementById('T32').value="♚";
t32=5;
t32t=1;
}
if(tplace==7)
{document.getElementById('T32').value="";
}
}


function T33()
{
if(tplace==1)
{document.getElementById('T33').value="♟";
t33=0;
t33t=0;
}
if(tplace==2)
{document.getElementById('T33').value="♞";
t33=1;
t33t=0;
}
if(tplace==3)
{document.getElementById('T33').value="♝";
t33=2;
t33t=0;
}
if(tplace==4)
{document.getElementById('T33').value="♜";
t33=3;
t33t=0;
}
if(tplace==5)
{document.getElementById('T33').value="♛";
t33=4;
t33t=0;
}
if(tplace==6)
{document.getElementById('T33').value="♚";
t33=5;
t33t=0;
}
if(tplace==7)
{document.getElementById('T33').value="";
}
}

function T34()
{
if(tplace==1)
{document.getElementById('T34').value="♟";
t34=0;
t34t=0;
}
if(tplace==2)
{document.getElementById('T34').value="♞";
t34=1;
t34t=0;
}
if(tplace==3)
{document.getElementById('T34').value="♝";
t34=2;
t34t=0;
}
if(tplace==4)
{document.getElementById('T34').value="♜";
t34=3;
t34t=0;
}
if(tplace==5)
{document.getElementById('T34').value="♛";
t34=4;
t34t=0;
}
if(tplace==6)
{document.getElementById('T34').value="♚";
t34=5;
t34t=0;
}
if(tplace==7)
{document.getElementById('T34').value="";
}
}

function T35()
{
if(tplace==1)
{document.getElementById('T35').value="♟";
t35=0;
t35t=0;
}
if(tplace==2)
{document.getElementById('T35').value="♞";
t35=1;
t35t=0;
}
if(tplace==3)
{document.getElementById('T35').value="♝";
t35=2;
t35t=0;
}
if(tplace==4)
{document.getElementById('T35').value="♜";
t35=3;
t35t=0;
}
if(tplace==5)
{document.getElementById('T35').value="♛";
t35=4;
t35t=0;
}
if(tplace==6)
{document.getElementById('T35').value="♚";
t35=5;
t35t=0;
}
if(tplace==7)
{document.getElementById('T35').value="";
}
}

function T36()
{
if(tplace==1)
{document.getElementById('T36').value="♟";
t36=0;
t36t=0;
}
if(tplace==2)
{document.getElementById('T36').value="♞";
t36=1;
t36t=0;
}
if(tplace==3)
{document.getElementById('T36').value="♝";
t36=2;
t36t=0;
}
if(tplace==4)
{document.getElementById('T36').value="♜";
t36=3;
t36t=0;
}
if(tplace==5)
{document.getElementById('T36').value="♛";
t36=4;
t36t=0;
}
if(tplace==6)
{document.getElementById('T36').value="♚";
t36=5;
t36t=0;
}
if(tplace==7)
{document.getElementById('T36').value="";
}
}

function T37()
{
if(tplace==1)
{document.getElementById('T37').value="♟";
t37=0;
t37t=0;
}
if(tplace==2)
{document.getElementById('T37').value="♞";
t37=1;
t37t=0;
}
if(tplace==3)
{document.getElementById('T37').value="♝";
t37=2;
t37t=0;
}
if(tplace==4)
{document.getElementById('T37').value="♜";
t37=3;
t37t=0;
}
if(tplace==5)
{document.getElementById('T37').value="♛";
t37=4;
t37t=0;
}
if(tplace==6)
{document.getElementById('T37').value="♚";
t37=5;
t37t=0;
}
if(tplace==7)
{document.getElementById('T37').value="";
}
}

function T38()
{
if(tplace==1)
{document.getElementById('T38').value="♟";
t38=0;
t38t=0;
}
if(tplace==2)
{document.getElementById('T38').value="♞";
t38=1;
t38t=0;
}
if(tplace==3)
{document.getElementById('T38').value="♝";
t38=2;
t38t=0;
}
if(tplace==4)
{document.getElementById('T38').value="♜";
t38=3;
t38t=0;
}
if(tplace==5)
{document.getElementById('T38').value="♛";
t38=4;
t38t=0;
}
if(tplace==6)
{document.getElementById('T38').value="♚";
t38=5;
t38t=0;
}
if(tplace==7)
{document.getElementById('T38').value="";
}
}

function T39()
{
if(tplace==1)
{document.getElementById('T39').value="♟";
t39=0;
t39t=0;
}
if(tplace==2)
{document.getElementById('T39').value="♞";
t39=1;
t39t=0;
}
if(tplace==3)
{document.getElementById('T39').value="♝";
t39=2;
t39t=0;
}
if(tplace==4)
{document.getElementById('T39').value="♜";
t39=3;
t39t=0;
}
if(tplace==5)
{document.getElementById('T39').value="♛";
t39=4;
t39t=0;
}
if(tplace==6)
{document.getElementById('T39').value="♚";
t39=5;
t39t=0;
}
if(tplace==7)
{document.getElementById('T39').value="";
}
}

function T40()
{
if(tplace==1)
{document.getElementById('T40').value="♟";
t40=0;
t40t=0;
}
if(tplace==2)
{document.getElementById('T40').value="♞";
t40=1;
t40t=0;
}
if(tplace==3)
{document.getElementById('T40').value="♝";
t40=2;
t40t=0;
}
if(tplace==4)
{document.getElementById('T40').value="♜";
t40=3;
t40t=0;
}
if(tplace==5)
{document.getElementById('T40').value="♛";
t40=4;
t40t=0;
}
if(tplace==6)
{document.getElementById('T40').value="♚";
t40=5;
t40t=0;
}
if(tplace==7)
{document.getElementById('T40').value="";
}
}

function T41()
{
if(tplace==1)
{document.getElementById('T41').value="♟";
t41=0;
t41t=0;
}
if(tplace==2)
{document.getElementById('T41').value="♞";
t41=1;
t41t=0;
}
if(tplace==3)
{document.getElementById('T41').value="♝";
t41=2;
t41t=0;
}
if(tplace==4)
{document.getElementById('T41').value="♜";
t41=3;
t41t=0;
}
if(tplace==5)
{document.getElementById('T41').value="♛";
t41=4;
t41t=0;
}
if(tplace==6)
{document.getElementById('T41').value="♚";
t41=5;
t41t=0;
}
if(tplace==7)
{document.getElementById('T41').value="";
}
}

function T42()
{
if(tplace==1)
{document.getElementById('T42').value="♟";
t42=0;
t42t=0;
}
if(tplace==2)
{document.getElementById('T42').value="♞";
t42=1;
t42t=0;
}
if(tplace==3)
{document.getElementById('T42').value="♝";
t42=2;
t42t=0;
}
if(tplace==4)
{document.getElementById('T42').value="♜";
t42=3;
t42t=0;
}
if(tplace==5)
{document.getElementById('T42').value="♛";
t42=4;
t42t=0;
}
if(tplace==6)
{document.getElementById('T42').value="♚";
t42=5;
t42t=0;
}
if(tplace==7)
{document.getElementById('T42').value="";
}
}

function T43()
{
if(tplace==1)
{document.getElementById('T43').value="♟";
t43=0;
t43t=0;
}
if(tplace==2)
{document.getElementById('T43').value="♞";
t43=1;
t43t=0;
}
if(tplace==3)
{document.getElementById('T43').value="♝";
t43=2;
t43t=0;
}
if(tplace==4)
{document.getElementById('T43').value="♜";
t43=3;
t43t=0;
}
if(tplace==5)
{document.getElementById('T43').value="♛";
t43=4;
t43t=0;
}
if(tplace==6)
{document.getElementById('T43').value="♚";
t43=5;
t43t=0;
}
if(tplace==7)
{document.getElementById('T43').value="";
}
}

function T44()
{
if(tplace==1)
{document.getElementById('T44').value="♟";
t44=0;
t44t=0;
}
if(tplace==2)
{document.getElementById('T44').value="♞";
t44=1;
t44t=0;
}
if(tplace==3)
{document.getElementById('T44').value="♝";
t44=2;
t44t=0;
}
if(tplace==4)
{document.getElementById('T44').value="♜";
t44=3;
t44t=0;
}
if(tplace==5)
{document.getElementById('T44').value="♛";
t44=4;
t44t=0;
}
if(tplace==6)
{document.getElementById('T44').value="♚";
t44=5;
t44t=0;
}
if(tplace==7)
{document.getElementById('T44').value="";
}
}

function T45()
{
if(tplace==1)
{document.getElementById('T45').value="♟";
t45=0;
t45t=0;
}
if(tplace==2)
{document.getElementById('T45').value="♞";
t45=1;
t45t=0;
}
if(tplace==3)
{document.getElementById('T45').value="♝";
t45=2;
t45t=0;
}
if(tplace==4)
{document.getElementById('T45').value="♜";
t45=3;
t45t=0;
}
if(tplace==5)
{document.getElementById('T45').value="♛";
t45=4;
t45t=0;
}
if(tplace==6)
{document.getElementById('T45').value="♚";
t45=5;
t45t=0;
}
if(tplace==7)
{document.getElementById('T45').value="";
}
}

function T46()
{
if(tplace==1)
{document.getElementById('T46').value="♟";
t46=0;
t46t=0;
}
if(tplace==2)
{document.getElementById('T46').value="♞";
t46=1;
t46t=0;
}
if(tplace==3)
{document.getElementById('T46').value="♝";
t46=2;
t46t=0;
}
if(tplace==4)
{document.getElementById('T46').value="♜";
t46=3;
t46t=0;
}
if(tplace==5)
{document.getElementById('T46').value="♛";
t46=4;
t46t=0;
}
if(tplace==6)
{document.getElementById('T46').value="♚";
t46=5;
t46t=0;
}
if(tplace==7)
{document.getElementById('T46').value="";
}
}

function T47()
{
if(tplace==1)
{document.getElementById('T47').value="♟";
t47=0;
t47t=0;
}
if(tplace==2)
{document.getElementById('T47').value="♞";
t47=1;
t47t=0;
}
if(tplace==3)
{document.getElementById('T47').value="♝";
t47=2;
t47t=0;
}
if(tplace==4)
{document.getElementById('T47').value="♜";
t47=3;
t47t=0;
}
if(tplace==5)
{document.getElementById('T47').value="♛";
t47=4;
t47t=0;
}
if(tplace==6)
{document.getElementById('T47').value="♚";
t47=5;
t47t=0;
}
if(tplace==7)
{document.getElementById('T47').value="";
}
}

function T48()
{
if(tplace==1)
{document.getElementById('T48').value="♟";
t48=0;
t48t=0;
}
if(tplace==2)
{document.getElementById('T48').value="♞";
t48=1;
t48t=0;
}
if(tplace==3)
{document.getElementById('T48').value="♝";
t48=2;
t48t=0;
}
if(tplace==4)
{document.getElementById('T48').value="♜";
t48=3;
t48t=0;
}
if(tplace==5)
{document.getElementById('T48').value="♛";
t48=4;
t48t=0;
}
if(tplace==6)
{document.getElementById('T48').value="♚";
t48=5;
t48t=0;
}
if(tplace==7)
{document.getElementById('T48').value="";
}
}

function T49()
{
if(tplace==1)
{document.getElementById('T49').value="♟";
t49=0;
t49t=0;
}
if(tplace==2)
{document.getElementById('T49').value="♞";
t49=1;
t49t=0;
}
if(tplace==3)
{document.getElementById('T49').value="♝";
t49=2;
t49t=0;
}
if(tplace==4)
{document.getElementById('T49').value="♜";
t49=3;
t49t=0;
}
if(tplace==5)
{document.getElementById('T49').value="♛";
t49=4;
t49t=0;
}
if(tplace==6)
{document.getElementById('T49').value="♚";
t49=5;
t49t=0;
}
if(tplace==7)
{document.getElementById('T49').value="";
}
}

function T50()
{
if(tplace==1)
{document.getElementById('T50').value="♟";
t50=0;
t50t=0;
}
if(tplace==2)
{document.getElementById('T50').value="♞";
t50=1;
t50t=0;
}
if(tplace==3)
{document.getElementById('T50').value="♝";
t50=2;
t50t=0;
}
if(tplace==4)
{document.getElementById('T50').value="♜";
t50=3;
t50t=0;
}
if(tplace==5)
{document.getElementById('T50').value="♛";
t50=4;
t50t=0;
}
if(tplace==6)
{document.getElementById('T50').value="♚";
t50=5;
t50t=0;
}
if(tplace==7)
{document.getElementById('T50').value="";
}
}

function T51()
{
if(tplace==1)
{document.getElementById('T51').value="♟";
t51=0;
t51t=0;
}
if(tplace==2)
{document.getElementById('T51').value="♞";
t51=1;
t51t=0;
}
if(tplace==3)
{document.getElementById('T51').value="♝";
t51=2;
t51t=0;
}
if(tplace==4)
{document.getElementById('T51').value="♜";
t51=3;
t51t=0;
}
if(tplace==5)
{document.getElementById('T51').value="♛";
t51=4;
t51t=0;
}
if(tplace==6)
{document.getElementById('T51').value="♚";
t51=5;
t51t=0;
}
if(tplace==7)
{document.getElementById('T51').value="";
}
}

function T52()
{
if(tplace==1)
{document.getElementById('T52').value="♟";
t52=0;
t52t=0;
}
if(tplace==2)
{document.getElementById('T52').value="♞";
t52=1;
t52t=0;
}
if(tplace==3)
{document.getElementById('T52').value="♝";
t52=2;
t52t=0;
}
if(tplace==4)
{document.getElementById('T52').value="♜";
t52=3;
t52t=0;
}
if(tplace==5)
{document.getElementById('T52').value="♛";
t52=4;
t52t=0;
}
if(tplace==6)
{document.getElementById('T52').value="♚";
t52=5;
t52t=0;
}
if(tplace==7)
{document.getElementById('T52').value="";
}
}

function T53()
{
if(tplace==1)
{document.getElementById('T53').value="♟";
t53=0;
t53t=0;
}
if(tplace==2)
{document.getElementById('T53').value="♞";
t53=1;
t53t=0;
}
if(tplace==3)
{document.getElementById('T53').value="♝";
t53=2;
t53t=0;
}
if(tplace==4)
{document.getElementById('T53').value="♜";
t53=3;
t53t=0;
}
if(tplace==5)
{document.getElementById('T53').value="♛";
t53=4;
t53t=0;
}
if(tplace==6)
{document.getElementById('T53').value="♚";
t53=5;
t53t=0;
}
if(tplace==7)
{document.getElementById('T53').value="";
}
}

function T54()
{
if(tplace==1)
{document.getElementById('T54').value="♟";
t54=0;
t54t=0;
}
if(tplace==2)
{document.getElementById('T54').value="♞";
t54=1;
t54t=0;
}
if(tplace==3)
{document.getElementById('T54').value="♝";
t54=2;
t54t=0;
}
if(tplace==4)
{document.getElementById('T54').value="♜";
t54=3;
t54t=0;
}
if(tplace==5)
{document.getElementById('T54').value="♛";
t54=4;
t54t=0;
}
if(tplace==6)
{document.getElementById('T54').value="♚";
t54=5;
t54t=0;
}
if(tplace==7)
{document.getElementById('T54').value="";
}
}

function T55()
{
if(tplace==1)
{document.getElementById('T55').value="♟";
t55=0;
t55t=0;
}
if(tplace==2)
{document.getElementById('T55').value="♞";
t55=1;
t55t=0;
}
if(tplace==3)
{document.getElementById('T55').value="♝";
t55=2;
t55t=0;
}
if(tplace==4)
{document.getElementById('T55').value="♜";
t55=3;
t55t=0;
}
if(tplace==5)
{document.getElementById('T55').value="♛";
t55=4;
t55t=0;
}
if(tplace==6)
{document.getElementById('T55').value="♚";
t55=5;
t55t=0;
}
if(tplace==7)
{document.getElementById('T55').value="";
}
}

function T56()
{
if(tplace==1)
{document.getElementById('T56').value="♟";
t56=0;
t56t=0;
}
if(tplace==2)
{document.getElementById('T56').value="♞";
t56=1;
t56t=0;
}
if(tplace==3)
{document.getElementById('T56').value="♝";
t56=2;
t56t=0;
}
if(tplace==4)
{document.getElementById('T56').value="♜";
t56=3;
t56t=0;
}
if(tplace==5)
{document.getElementById('T56').value="♛";
t56=4;
t56t=0;
}
if(tplace==6)
{document.getElementById('T56').value="♚";
t56=5;
t56t=0;
}
if(tplace==7)
{document.getElementById('T56').value="";
}
}

function T57()
{
if(tplace==1)
{document.getElementById('T57').value="♟";
t57=0;
t57t=0;
}
if(tplace==2)
{document.getElementById('T57').value="♞";
t57=1;
t57t=0;
}
if(tplace==3)
{document.getElementById('T57').value="♝";
t57=2;
t57t=0;
}
if(tplace==4)
{document.getElementById('T57').value="♜";
t57=3;
t57t=0;
}
if(tplace==5)
{document.getElementById('T57').value="♛";
t57=4;
t57t=0;
}
if(tplace==6)
{document.getElementById('T57').value="♚";
t57=5;
t57t=0;
}
if(tplace==7)
{document.getElementById('T57').value="";
}
}

function T58()
{
if(tplace==1)
{document.getElementById('T58').value="♟";
t58=0;
t58t=0;
}
if(tplace==2)
{document.getElementById('T58').value="♞";
t58=1;
t58t=0;
}
if(tplace==3)
{document.getElementById('T58').value="♝";
t58=2;
t58t=0;
}
if(tplace==4)
{document.getElementById('T58').value="♜";
t58=3;
t58t=0;
}
if(tplace==5)
{document.getElementById('T58').value="♛";
t58=4;
t58t=0;
}
if(tplace==6)
{document.getElementById('T58').value="♚";
t58=5;
t58t=0;
}
if(tplace==7)
{document.getElementById('T58').value="";
}
}

function T59()
{
if(tplace==1)
{document.getElementById('T59').value="♟";
t59=0;
t59t=0;
}
if(tplace==2)
{document.getElementById('T59').value="♞";
t59=1;
t59t=0;
}
if(tplace==3)
{document.getElementById('T59').value="♝";
t59=2;
t59t=0;
}
if(tplace==4)
{document.getElementById('T59').value="♜";
t59=3;
t59t=0;
}
if(tplace==5)
{document.getElementById('T59').value="♛";
t59=4;
t59t=0;
}
if(tplace==6)
{document.getElementById('T59').value="♚";
t59=5;
t59t=0;
}
if(tplace==7)
{document.getElementById('T59').value="";
}
}

function T60()
{
if(tplace==1)
{document.getElementById('T60').value="♟";
t60=0;
t60t=0;
}
if(tplace==2)
{document.getElementById('T60').value="♞";
t60=1;
t60t=0;
}
if(tplace==3)
{document.getElementById('T60').value="♝";
t60=2;
t60t=0;
}
if(tplace==4)
{document.getElementById('T60').value="♜";
t60=3;
t60t=0;
}
if(tplace==5)
{document.getElementById('T60').value="♛";
t60=4;
t60t=0;
}
if(tplace==6)
{document.getElementById('T60').value="♚";
t60=5;
t60t=0;
}
if(tplace==7)
{document.getElementById('T60').value="";
}
}

function T61()
{
if(tplace==1)
{document.getElementById('T61').value="♟";
t61=0;
t61t=0;
}
if(tplace==2)
{document.getElementById('T61').value="♞";
t61=1;
t61t=0;
}
if(tplace==3)
{document.getElementById('T61').value="♝";
t61=2;
t61t=0;
}
if(tplace==4)
{document.getElementById('T61').value="♜";
t61=3;
t61t=0;
}
if(tplace==5)
{document.getElementById('T61').value="♛";
t61=4;
t61t=0;
}
if(tplace==6)
{document.getElementById('T61').value="♚";
t61=5;
t61t=0;
}
if(tplace==7)
{document.getElementById('T61').value="";
}
}

function T62()
{
if(tplace==1)
{document.getElementById('T62').value="♟";
t62=0;
t62t=0;
}
if(tplace==2)
{document.getElementById('T62').value="♞";
t62=1;
t62t=0;
}
if(tplace==3)
{document.getElementById('T62').value="♝";
t62=2;
t62t=0;
}
if(tplace==4)
{document.getElementById('T62').value="♜";
t62=3;
t62t=0;
}
if(tplace==5)
{document.getElementById('T62').value="♛";
t62=4;
t62t=0;
}
if(tplace==6)
{document.getElementById('T62').value="♚";
t62=5;
t62t=0;
}
if(tplace==7)
{document.getElementById('T62').value="";
}
}

function T63()
{
if(tplace==1)
{document.getElementById('T63').value="♟";
t63=0;
t63t=0;
}
if(tplace==2)
{document.getElementById('T63').value="♞";
t63=1;
t63t=0;
}
if(tplace==3)
{document.getElementById('T63').value="♝";
t63=2;
t63t=0;
}
if(tplace==4)
{document.getElementById('T63').value="♜";
t63=3;
t63t=0;
}
if(tplace==5)
{document.getElementById('T63').value="♛";
t63=4;
t63t=0;
}
if(tplace==6)
{document.getElementById('T63').value="♚";
t63=5;
t63t=0;
}
if(tplace==7)
{document.getElementById('T63').value="";
}
}

function T64()
{
if(tplace==1)
{document.getElementById('T64').value="♟";
t64=0;
t64t=0;
}
if(tplace==2)
{document.getElementById('T64').value="♞";
t64=1;
t64t=0;
}
if(tplace==3)
{document.getElementById('T64').value="♝";
t64=2;
t64t=0;
}
if(tplace==4)
{document.getElementById('T64').value="♜";
t64=3;
t64t=0;
}
if(tplace==5)
{document.getElementById('T64').value="♛";
t64=4;
t64t=0;
}
if(tplace==6)
{document.getElementById('T64').value="♚";
t64=5;
t64t=0;
}
if(tplace==7)
{document.getElementById('T64').value="";
}
}

function nullvaluecheck()
{
if(document.getElementById('T1').value=='')
{
t1=-1;
t1t=-1;
}
if(document.getElementById('T2').value=='')
{
t2=-1;
t2t=-1;
}
if(document.getElementById('T3').value=='')
{
t3=-1;
t3t=-1;
}
if(document.getElementById('T4').value=='')
{
t4=-1;
t4t=-1;
}
if(document.getElementById('T5').value=='')
{
t5=-1;
t5t=-1;
}
if(document.getElementById('T6').value=='')
{
t6=-1;
t6t=-1;
}
if(document.getElementById('T7').value=='')
{
t7=-1;
t7t=-1;
}
if(document.getElementById('T8').value=='')
{
t8=-1;
t8t=-1;
}
if(document.getElementById('T9').value=='')
{
t9=-1;
t9t=-1;
}
if(document.getElementById('T10').value=='')
{
t10=-1;
t10t=-1;
}
if(document.getElementById('T11').value=='')
{
t11=-1;
t11t=-1;
}
if(document.getElementById('T12').value=='')
{
t12=-1;
t12t=-1;
}
if(document.getElementById('T13').value=='')
{
t13=-1;
t13t=-1;
}
if(document.getElementById('T14').value=='')
{
t14=-1;
t14t=-1;
}
if(document.getElementById('T15').value=='')
{
t15=-1;
t15t=-1;
}
if(document.getElementById('T16').value=='')
{
t16=-1;
t16t=-1;
}
if(document.getElementById('T17').value=='')
{
t17=-1;
t17t=-1;
}
if(document.getElementById('T18').value=='')
{
t18=-1;
t18t=-1;
}
if(document.getElementById('T19').value=='')
{
t19=-1;
t19t=-1;
}
if(document.getElementById('T20').value=='')
{
t20=-1;
t20t=-1;
}
if(document.getElementById('T21').value=='')
{
t21=-1;
t21t=-1;
}
if(document.getElementById('T22').value=='')
{
t22=-1;
t22t=-1;
}
if(document.getElementById('T23').value=='')
{
t23=-1;
t23t=-1;
}
if(document.getElementById('T24').value=='')
{
t24=-1;
t24t=-1;
}
if(document.getElementById('T25').value=='')
{
t25=-1;
t25t=-1;
}
if(document.getElementById('T26').value=='')
{
t26=-1;
t26t=-1;
}
if(document.getElementById('T27').value=='')
{
t27=-1;
t27t=-1;
}
if(document.getElementById('T28').value=='')
{
t28=-1;
t28t=-1;
}
if(document.getElementById('T29').value=='')
{
t29=-1;
t29t=-1;
}
if(document.getElementById('T30').value=='')
{
t30=-1;
t30t=-1;
}
if(document.getElementById('T31').value=='')
{
t31=-1;
t31t=-1;
}
if(document.getElementById('T32').value=='')
{
t32=-1;
t32t=-1;
}

if(document.getElementById('T33').value=='')
{
t33=-1;
t33t=-1;
}
if(document.getElementById('T34').value=='')
{
t34=-1;
t34t=-1;
}
if(document.getElementById('T35').value=='')
{
t35=-1;
t35t=-1;
}
if(document.getElementById('T36').value=='')
{
t36=-1;
t36t=-1;
}
if(document.getElementById('T37').value=='')
{
t37=-1;
t37t=-1;
}
if(document.getElementById('T38').value=='')
{
t38=-1;
t38t=-1;
}
if(document.getElementById('T39').value=='')
{
t39=-1;
t39t=-1;
}
if(document.getElementById('T40').value=='')
{
t40=-1;
t40t=-1;
}
if(document.getElementById('T41').value=='')
{
t41=-1;
t41t=-1;
}
if(document.getElementById('T42').value=='')
{
t42=-1;
t42t=-1;
}
if(document.getElementById('T43').value=='')
{
t43=-1;
t43t=-1;
}
if(document.getElementById('T44').value=='')
{
t44=-1;
t44t=-1;
}
if(document.getElementById('T45').value=='')
{
t45=-1;
t45t=-1;
}
if(document.getElementById('T46').value=='')
{
t46=-1;
t46t=-1;
}
if(document.getElementById('T47').value=='')
{
t47=-1;
t47t=-1;
}
if(document.getElementById('T48').value=='')
{
t48=-1;
t48t=-1;
}
if(document.getElementById('T49').value=='')
{
t49=-1;
t49t=-1;
}
if(document.getElementById('T50').value=='')
{
t50=-1;
t50t=-1;
}
if(document.getElementById('T51').value=='')
{
t51=-1;
t51t=-1;
}
if(document.getElementById('T52').value=='')
{
t52=-1;
t52t=-1;
}
if(document.getElementById('T53').value=='')
{
t53=-1;
t53t=-1;
}
if(document.getElementById('T54').value=='')
{
t54=-1;
t54t=-1;
}
if(document.getElementById('T55').value=='')
{
t55=-1;
t55t=-1;
}
if(document.getElementById('T56').value=='')
{
t56=-1;
t56t=-1;
}
if(document.getElementById('T57').value=='')
{
t57=-1;
t57t=-1;
}
if(document.getElementById('T58').value=='')
{
t58=-1;
t58t=-1;
}
if(document.getElementById('T59').value=='')
{
t59=-1;
t59t=-1;
}
if(document.getElementById('T60').value=='')
{
t60=-1;
t60t=-1;
}
if(document.getElementById('T61').value=='')
{
t61=-1;
t61t=-1;
}
if(document.getElementById('T62').value=='')
{
t62=-1;
t62t=-1;
}
if(document.getElementById('T63').value=='')
{
t63=-1;
t63t=-1;
}
if(document.getElementById('T64').value=='')
{
t64=-1;
t64t=-1;
}

if(kingnumber1==1 && kingnumber2==1 && chessnumber==1)
{
localStorage.setItem('t1',JSON.stringify(t1));
localStorage.setItem('t1t',JSON.stringify(t1t));
localStorage.setItem('t2',JSON.stringify(t2));
localStorage.setItem('t2t',JSON.stringify(t2t));
localStorage.setItem('t3',JSON.stringify(t3));
localStorage.setItem('t3t',JSON.stringify(t3t));
localStorage.setItem('t4',JSON.stringify(t4));
localStorage.setItem('t4t',JSON.stringify(t4t));
localStorage.setItem('t5',JSON.stringify(t5));
localStorage.setItem('t5t',JSON.stringify(t5t));
localStorage.setItem('t6',JSON.stringify(t6));
localStorage.setItem('t6t',JSON.stringify(t6t));
localStorage.setItem('t7',JSON.stringify(t7));
localStorage.setItem('t7t',JSON.stringify(t7t));
localStorage.setItem('t8',JSON.stringify(t8));
localStorage.setItem('t8t',JSON.stringify(t8t));
localStorage.setItem('t9',JSON.stringify(t9));
localStorage.setItem('t9t',JSON.stringify(t9t));
localStorage.setItem('t10',JSON.stringify(t10));
localStorage.setItem('t10t',JSON.stringify(t10t));
localStorage.setItem('t11',JSON.stringify(t11));
localStorage.setItem('t11t',JSON.stringify(t11t));
localStorage.setItem('t12',JSON.stringify(t12));
localStorage.setItem('t12t',JSON.stringify(t12t));
localStorage.setItem('t13',JSON.stringify(t13));
localStorage.setItem('t13t',JSON.stringify(t13t));
localStorage.setItem('t14',JSON.stringify(t14));
localStorage.setItem('t14t',JSON.stringify(t14t));
localStorage.setItem('t15',JSON.stringify(t15));
localStorage.setItem('t15t',JSON.stringify(t15t));
localStorage.setItem('t16',JSON.stringify(t16));
localStorage.setItem('t16t',JSON.stringify(t16t));
localStorage.setItem('t17',JSON.stringify(t17));
localStorage.setItem('t17t',JSON.stringify(t17t));
localStorage.setItem('t18',JSON.stringify(t18));
localStorage.setItem('t18t',JSON.stringify(t18t));
localStorage.setItem('t19',JSON.stringify(t19));
localStorage.setItem('t19t',JSON.stringify(t19t));
localStorage.setItem('t20',JSON.stringify(t20));
localStorage.setItem('t20t',JSON.stringify(t20t));
localStorage.setItem('t21',JSON.stringify(t21));
localStorage.setItem('t21t',JSON.stringify(t21t));
localStorage.setItem('t22',JSON.stringify(t22));
localStorage.setItem('t22t',JSON.stringify(t22t));
localStorage.setItem('t23',JSON.stringify(t23));
localStorage.setItem('t23t',JSON.stringify(t23t));
localStorage.setItem('t24',JSON.stringify(t24));
localStorage.setItem('t24t',JSON.stringify(t24t));
localStorage.setItem('t25',JSON.stringify(t25));
localStorage.setItem('t25t',JSON.stringify(t25t));
localStorage.setItem('t26',JSON.stringify(t26));
localStorage.setItem('t26t',JSON.stringify(t26t));
localStorage.setItem('t27',JSON.stringify(t27));
localStorage.setItem('t27t',JSON.stringify(t27t));
localStorage.setItem('t28',JSON.stringify(t28));
localStorage.setItem('t28t',JSON.stringify(t28t));
localStorage.setItem('t29',JSON.stringify(t29));
localStorage.setItem('t29t',JSON.stringify(t29t));
localStorage.setItem('t30',JSON.stringify(t30));
localStorage.setItem('t30t',JSON.stringify(t30t));
localStorage.setItem('t31',JSON.stringify(t31));
localStorage.setItem('t31t',JSON.stringify(t31t));
localStorage.setItem('t32',JSON.stringify(t32));
localStorage.setItem('t32t',JSON.stringify(t32t));

localStorage.setItem('t33',JSON.stringify(t33));
localStorage.setItem('t33t',JSON.stringify(t33t));
localStorage.setItem('t34',JSON.stringify(t34));
localStorage.setItem('t34t',JSON.stringify(t34t));
localStorage.setItem('t35',JSON.stringify(t35));
localStorage.setItem('t35t',JSON.stringify(t35t));
localStorage.setItem('t36',JSON.stringify(t36));
localStorage.setItem('t36t',JSON.stringify(t36t));
localStorage.setItem('t37',JSON.stringify(t37));
localStorage.setItem('t37t',JSON.stringify(t37t));
localStorage.setItem('t38',JSON.stringify(t38));
localStorage.setItem('t38t',JSON.stringify(t38t));
localStorage.setItem('t39',JSON.stringify(t39));
localStorage.setItem('t39t',JSON.stringify(t39t));
localStorage.setItem('t40',JSON.stringify(t40));
localStorage.setItem('t40t',JSON.stringify(t40t));
localStorage.setItem('t41',JSON.stringify(t41));
localStorage.setItem('t41t',JSON.stringify(t41t));
localStorage.setItem('t42',JSON.stringify(t42));
localStorage.setItem('t42t',JSON.stringify(t42t));
localStorage.setItem('t43',JSON.stringify(t43));
localStorage.setItem('t43t',JSON.stringify(t43t));
localStorage.setItem('t44',JSON.stringify(t44));
localStorage.setItem('t44t',JSON.stringify(t44t));
localStorage.setItem('t45',JSON.stringify(t45));
localStorage.setItem('t45t',JSON.stringify(t45t));
localStorage.setItem('t46',JSON.stringify(t46));
localStorage.setItem('t46t',JSON.stringify(t46t));
localStorage.setItem('t47',JSON.stringify(t47));
localStorage.setItem('t47t',JSON.stringify(t47t));
localStorage.setItem('t48',JSON.stringify(t48));
localStorage.setItem('t48t',JSON.stringify(t48t));
localStorage.setItem('t49',JSON.stringify(t49));
localStorage.setItem('t49t',JSON.stringify(t49t));
localStorage.setItem('t50',JSON.stringify(t50));
localStorage.setItem('t50t',JSON.stringify(t50t));
localStorage.setItem('t51',JSON.stringify(t51));
localStorage.setItem('t51t',JSON.stringify(t51t));
localStorage.setItem('t52',JSON.stringify(t52));
localStorage.setItem('t52t',JSON.stringify(t52t));
localStorage.setItem('t53',JSON.stringify(t53));
localStorage.setItem('t53t',JSON.stringify(t53t));
localStorage.setItem('t54',JSON.stringify(t54));
localStorage.setItem('t54t',JSON.stringify(t54t));
localStorage.setItem('t55',JSON.stringify(t55));
localStorage.setItem('t55t',JSON.stringify(t55t));
localStorage.setItem('t56',JSON.stringify(t56));
localStorage.setItem('t56t',JSON.stringify(t56t));
localStorage.setItem('t57',JSON.stringify(t57));
localStorage.setItem('t57t',JSON.stringify(t57t));
localStorage.setItem('t58',JSON.stringify(t58));
localStorage.setItem('t58t',JSON.stringify(t58t));
localStorage.setItem('t59',JSON.stringify(t59));
localStorage.setItem('t59t',JSON.stringify(t59t));
localStorage.setItem('t60',JSON.stringify(t60));
localStorage.setItem('t60t',JSON.stringify(t60t));
localStorage.setItem('t61',JSON.stringify(t61));
localStorage.setItem('t61t',JSON.stringify(t61t));
localStorage.setItem('t62',JSON.stringify(t62));
localStorage.setItem('t62t',JSON.stringify(t62t));
localStorage.setItem('t63',JSON.stringify(t63));
localStorage.setItem('t63t',JSON.stringify(t63t));
localStorage.setItem('t64',JSON.stringify(t64));
localStorage.setItem('t64t',JSON.stringify(t64t));

customgameback();
}
}

function tilevaluecheck()
{
chessnumber=1;
if(
(document.getElementById('T1').value=='' &&
document.getElementById('T2').value=='' &&
document.getElementById('T3').value=='' &&
document.getElementById('T4').value=='' &&
document.getElementById('T5').value=='' &&
document.getElementById('T6').value=='' &&
document.getElementById('T7').value=='' &&
document.getElementById('T8').value=='' &&
document.getElementById('T9').value=='' &&
document.getElementById('T10').value=='' &&
document.getElementById('T11').value=='' &&
document.getElementById('T12').value=='' &&
document.getElementById('T13').value=='' &&
document.getElementById('T14').value=='' &&
document.getElementById('T15').value=='' &&
document.getElementById('T16').value=='' &&
document.getElementById('T17').value=='' &&
document.getElementById('T18').value=='' &&
document.getElementById('T19').value=='' &&
document.getElementById('T20').value=='' &&
document.getElementById('T21').value=='' &&
document.getElementById('T22').value=='' &&
document.getElementById('T23').value=='' &&
document.getElementById('T24').value=='' &&
document.getElementById('T25').value=='' &&
document.getElementById('T26').value=='' &&
document.getElementById('T27').value=='' &&
document.getElementById('T28').value=='' &&
document.getElementById('T29').value=='' &&
document.getElementById('T30').value=='' &&
document.getElementById('T31').value=='' &&
document.getElementById('T32').value=='') ||
(document.getElementById('T33').value=='' &&
document.getElementById('T34').value=='' &&
document.getElementById('T35').value=='' &&
document.getElementById('T36').value=='' &&
document.getElementById('T37').value=='' &&
document.getElementById('T38').value=='' &&
document.getElementById('T39').value=='' &&
document.getElementById('T40').value=='' &&
document.getElementById('T41').value=='' &&
document.getElementById('T42').value=='' &&
document.getElementById('T43').value=='' &&
document.getElementById('T44').value=='' &&
document.getElementById('T45').value=='' &&
document.getElementById('T46').value=='' &&
document.getElementById('T47').value=='' &&
document.getElementById('T48').value=='' &&
document.getElementById('T49').value=='' &&
document.getElementById('T50').value=='' &&
document.getElementById('T51').value=='' &&
document.getElementById('T52').value=='' &&
document.getElementById('T53').value=='' &&
document.getElementById('T54').value=='' &&
document.getElementById('T55').value=='' &&
document.getElementById('T56').value=='' &&
document.getElementById('T57').value=='' &&
document.getElementById('T58').value=='' &&
document.getElementById('T59').value=='' &&
document.getElementById('T60').value=='' &&
document.getElementById('T61').value=='' &&
document.getElementById('T62').value=='' &&
document.getElementById('T63').value=='' &&
document.getElementById('T64').value=='')
)
{alert('You must deploy atleast one chess piece in each team including the king!');
chessnumber=0;
}
else
chessnumber=1;

if(
(document.getElementById('T1').value!='♚' &&
document.getElementById('T2').value!='♚' &&
document.getElementById('T3').value!='♚' &&
document.getElementById('T4').value!='♚' &&
document.getElementById('T5').value!='♚' &&
document.getElementById('T6').value!='♚' &&
document.getElementById('T7').value!='♚' &&
document.getElementById('T8').value!='♚' &&
document.getElementById('T9').value!='♚' &&
document.getElementById('T10').value!='♚' &&
document.getElementById('T11').value!='♚' &&
document.getElementById('T12').value!='♚' &&
document.getElementById('T13').value!='♚' &&
document.getElementById('T14').value!='♚' &&
document.getElementById('T15').value!='♚' &&
document.getElementById('T16').value!='♚' &&
document.getElementById('T17').value!='♚' &&
document.getElementById('T18').value!='♚' &&
document.getElementById('T19').value!='♚' &&
document.getElementById('T20').value!='♚' &&
document.getElementById('T21').value!='♚' &&
document.getElementById('T22').value!='♚' &&
document.getElementById('T23').value!='♚' &&
document.getElementById('T24').value!='♚' &&
document.getElementById('T25').value!='♚' &&
document.getElementById('T26').value!='♚' &&
document.getElementById('T27').value!='♚' &&
document.getElementById('T28').value!='♚' &&
document.getElementById('T29').value!='♚' &&
document.getElementById('T30').value!='♚' &&
document.getElementById('T31').value!='♚' &&
document.getElementById('T32').value!='♚' && chessnumber==1) ||
(document.getElementById('T33').value!='♚' &&
document.getElementById('T34').value!='♚' &&
document.getElementById('T35').value!='♚' &&
document.getElementById('T36').value!='♚' &&
document.getElementById('T37').value!='♚' &&
document.getElementById('T38').value!='♚' &&
document.getElementById('T39').value!='♚' &&
document.getElementById('T40').value!='♚' &&
document.getElementById('T41').value!='♚' &&
document.getElementById('T42').value!='♚' &&
document.getElementById('T43').value!='♚' &&
document.getElementById('T44').value!='♚' &&
document.getElementById('T45').value!='♚' &&
document.getElementById('T46').value!='♚' &&
document.getElementById('T47').value!='♚' &&
document.getElementById('T48').value!='♚' &&
document.getElementById('T49').value!='♚' &&
document.getElementById('T50').value!='♚' &&
document.getElementById('T51').value!='♚' &&
document.getElementById('T52').value!='♚' &&
document.getElementById('T53').value!='♚' &&
document.getElementById('T54').value!='♚' &&
document.getElementById('T55').value!='♚' &&
document.getElementById('T56').value!='♚' &&
document.getElementById('T57').value!='♚' &&
document.getElementById('T58').value!='♚' &&
document.getElementById('T59').value!='♚' &&
document.getElementById('T60').value!='♚' &&
document.getElementById('T61').value!='♚' &&
document.getElementById('T62').value!='♚' &&
document.getElementById('T63').value!='♚' &&
document.getElementById('T64').value!='♚' && chessnumber==1)
)
alert('You must deploy King in each team!');

kingnumber1=0;
kingnumber2=0;

if(document.getElementById('T1').value=='♚') kingnumber1++;
if(document.getElementById('T2').value=='♚') kingnumber1++;
if(document.getElementById('T3').value=='♚') kingnumber1++;
if(document.getElementById('T4').value=='♚') kingnumber1++;
if(document.getElementById('T5').value=='♚') kingnumber1++;
if(document.getElementById('T6').value=='♚') kingnumber1++;
if(document.getElementById('T7').value=='♚') kingnumber1++;
if(document.getElementById('T8').value=='♚') kingnumber1++;
if(document.getElementById('T9').value=='♚') kingnumber1++;
if(document.getElementById('T10').value=='♚') kingnumber1++;
if(document.getElementById('T11').value=='♚') kingnumber1++;
if(document.getElementById('T12').value=='♚') kingnumber1++;
if(document.getElementById('T13').value=='♚') kingnumber1++;
if(document.getElementById('T14').value=='♚') kingnumber1++;
if(document.getElementById('T15').value=='♚') kingnumber1++;
if(document.getElementById('T16').value=='♚') kingnumber1++;
if(document.getElementById('T17').value=='♚') kingnumber1++;
if(document.getElementById('T18').value=='♚') kingnumber1++;
if(document.getElementById('T19').value=='♚') kingnumber1++;
if(document.getElementById('T20').value=='♚') kingnumber1++;
if(document.getElementById('T21').value=='♚') kingnumber1++;
if(document.getElementById('T22').value=='♚') kingnumber1++;
if(document.getElementById('T23').value=='♚') kingnumber1++;
if(document.getElementById('T24').value=='♚') kingnumber1++;
if(document.getElementById('T25').value=='♚') kingnumber1++;
if(document.getElementById('T26').value=='♚') kingnumber1++;
if(document.getElementById('T27').value=='♚') kingnumber1++;
if(document.getElementById('T28').value=='♚') kingnumber1++;
if(document.getElementById('T29').value=='♚') kingnumber1++;
if(document.getElementById('T30').value=='♚') kingnumber1++;
if(document.getElementById('T31').value=='♚') kingnumber1++;
if(document.getElementById('T32').value=='♚') kingnumber1++;

if(document.getElementById('T33').value=='♚') kingnumber2++;
if(document.getElementById('T34').value=='♚') kingnumber2++;
if(document.getElementById('T35').value=='♚') kingnumber2++;
if(document.getElementById('T36').value=='♚') kingnumber2++;
if(document.getElementById('T37').value=='♚') kingnumber2++;
if(document.getElementById('T38').value=='♚') kingnumber2++;
if(document.getElementById('T39').value=='♚') kingnumber2++;
if(document.getElementById('T40').value=='♚') kingnumber2++;
if(document.getElementById('T41').value=='♚') kingnumber2++;
if(document.getElementById('T42').value=='♚') kingnumber2++;
if(document.getElementById('T43').value=='♚') kingnumber2++;
if(document.getElementById('T44').value=='♚') kingnumber2++;
if(document.getElementById('T45').value=='♚') kingnumber2++;
if(document.getElementById('T46').value=='♚') kingnumber2++;
if(document.getElementById('T47').value=='♚') kingnumber2++;
if(document.getElementById('T48').value=='♚') kingnumber2++;
if(document.getElementById('T49').value=='♚') kingnumber2++;
if(document.getElementById('T50').value=='♚') kingnumber2++;
if(document.getElementById('T51').value=='♚') kingnumber2++;
if(document.getElementById('T52').value=='♚') kingnumber2++;
if(document.getElementById('T53').value=='♚') kingnumber2++;
if(document.getElementById('T54').value=='♚') kingnumber2++;
if(document.getElementById('T55').value=='♚') kingnumber2++;
if(document.getElementById('T56').value=='♚') kingnumber2++;
if(document.getElementById('T57').value=='♚') kingnumber2++;
if(document.getElementById('T58').value=='♚') kingnumber2++;
if(document.getElementById('T59').value=='♚') kingnumber2++;
if(document.getElementById('T60').value=='♚') kingnumber2++;
if(document.getElementById('T61').value=='♚') kingnumber2++;
if(document.getElementById('T62').value=='♚') kingnumber2++;
if(document.getElementById('T63').value=='♚') kingnumber2++;
if(document.getElementById('T64').value=='♚') kingnumber2++;

if(kingnumber1>1 || kingnumber2>1)
alert('Please deploy only one king in each team!');
}

function resetcustom()
{
document.getElementById('T1').value='';
document.getElementById('T2').value='';
document.getElementById('T3').value='';
document.getElementById('T4').value='';
document.getElementById('T5').value='';
document.getElementById('T6').value='';
document.getElementById('T7').value='';
document.getElementById('T8').value='';
document.getElementById('T9').value='';
document.getElementById('T10').value='';
document.getElementById('T11').value='';
document.getElementById('T12').value='';
document.getElementById('T13').value='';
document.getElementById('T14').value='';
document.getElementById('T15').value='';
document.getElementById('T16').value='';
document.getElementById('T17').value='';
document.getElementById('T18').value='';
document.getElementById('T19').value='';
document.getElementById('T20').value='';
document.getElementById('T21').value='';
document.getElementById('T22').value='';
document.getElementById('T23').value='';
document.getElementById('T24').value='';
document.getElementById('T25').value='';
document.getElementById('T26').value='';
document.getElementById('T27').value='';
document.getElementById('T28').value='';
document.getElementById('T29').value='';
document.getElementById('T30').value='';
document.getElementById('T31').value='';
document.getElementById('T32').value='';
document.getElementById('T33').value='';
document.getElementById('T34').value='';
document.getElementById('T35').value='';
document.getElementById('T36').value='';
document.getElementById('T37').value='';
document.getElementById('T38').value='';
document.getElementById('T39').value='';
document.getElementById('T40').value='';
document.getElementById('T41').value='';
document.getElementById('T42').value='';
document.getElementById('T43').value='';
document.getElementById('T44').value='';
document.getElementById('T45').value='';
document.getElementById('T46').value='';
document.getElementById('T47').value='';
document.getElementById('T48').value='';
document.getElementById('T49').value='';
document.getElementById('T50').value='';
document.getElementById('T51').value='';
document.getElementById('T52').value='';
document.getElementById('T53').value='';
document.getElementById('T54').value='';
document.getElementById('T55').value='';
document.getElementById('T56').value='';
document.getElementById('T57').value='';
document.getElementById('T58').value='';
document.getElementById('T59').value='';
document.getElementById('T60').value='';
document.getElementById('T61').value='';
document.getElementById('T62').value='';
document.getElementById('T63').value='';
document.getElementById('T64').value='';
}

function tilevaluedisp()
{
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

if(t1==-1)
document.getElementById('T1').value="";
else if(t1==0)
document.getElementById('T1').value="♟";
else if(t1==1)
document.getElementById('T1').value="♞";
else if(t1==2)
document.getElementById('T1').value="♝";
else if(t1==3)
document.getElementById('T1').value="♜";
else if(t1==4)
document.getElementById('T1').value="♛";
else if(t1==5)
document.getElementById('T1').value="♚";

if(t2==-1)
document.getElementById('T2').value="";
else if(t2==0)
document.getElementById('T2').value="♟";
else if(t2==1)
document.getElementById('T2').value="♞";
else if(t2==2)
document.getElementById('T2').value="♝";
else if(t2==3)
document.getElementById('T2').value="♜";
else if(t2==4)
document.getElementById('T2').value="♛";
else if(t2==5)
document.getElementById('T2').value="♚";

if(t3==-1)
document.getElementById('T3').value="";
else if(t3==0)
document.getElementById('T3').value="♟";
else if(t3==1)
document.getElementById('T3').value="♞";
else if(t3==2)
document.getElementById('T3').value="♝";
else if(t3==3)
document.getElementById('T3').value="♜";
else if(t3==4)
document.getElementById('T3').value="♛";
else if(t3==5)
document.getElementById('T3').value="♚";

if(t4==-1)
document.getElementById('T4').value="";
else if(t4==0)
document.getElementById('T4').value="♟";
else if(t4==1)
document.getElementById('T4').value="♞";
else if(t4==2)
document.getElementById('T4').value="♝";
else if(t4==3)
document.getElementById('T4').value="♜";
else if(t4==4)
document.getElementById('T4').value="♛";
else if(t4==5)
document.getElementById('T4').value="♚";

if(t5==-1)
document.getElementById('T5').value="";
else if(t5==0)
document.getElementById('T5').value="♟";
else if(t5==1)
document.getElementById('T5').value="♞";
else if(t5==2)
document.getElementById('T5').value="♝";
else if(t5==3)
document.getElementById('T5').value="♜";
else if(t5==4)
document.getElementById('T5').value="♛";
else if(t5==5)
document.getElementById('T5').value="♚";

if(t6==-1)
document.getElementById('T6').value="";
else if(t6==0)
document.getElementById('T6').value="♟";
else if(t6==1)
document.getElementById('T6').value="♞";
else if(t6==2)
document.getElementById('T6').value="♝";
else if(t6==3)
document.getElementById('T6').value="♜";
else if(t6==4)
document.getElementById('T6').value="♛";
else if(t6==5)
document.getElementById('T6').value="♚";

if(t7==-1)
document.getElementById('T7').value="";
else if(t7==0)
document.getElementById('T7').value="♟";
else if(t7==1)
document.getElementById('T7').value="♞";
else if(t7==2)
document.getElementById('T7').value="♝";
else if(t7==3)
document.getElementById('T7').value="♜";
else if(t7==4)
document.getElementById('T7').value="♛";
else if(t7==5)
document.getElementById('T7').value="♚";

if(t8==-1)
document.getElementById('T8').value="";
else if(t8==0)
document.getElementById('T8').value="♟";
else if(t8==1)
document.getElementById('T8').value="♞";
else if(t8==2)
document.getElementById('T8').value="♝";
else if(t8==3)
document.getElementById('T8').value="♜";
else if(t8==4)
document.getElementById('T8').value="♛";
else if(t8==5)
document.getElementById('T8').value="♚";

if(t9==-1)
document.getElementById('T9').value="";
else if(t9==0)
document.getElementById('T9').value="♟";
else if(t9==1)
document.getElementById('T9').value="♞";
else if(t9==2)
document.getElementById('T9').value="♝";
else if(t9==3)
document.getElementById('T9').value="♜";
else if(t9==4)
document.getElementById('T9').value="♛";
else if(t9==5)
document.getElementById('T9').value="♚";

if(t10==-1)
document.getElementById('T10').value="";
else if(t10==0)
document.getElementById('T10').value="♟";
else if(t10==1)
document.getElementById('T10').value="♞";
else if(t10==2)
document.getElementById('T10').value="♝";
else if(t10==3)
document.getElementById('T10').value="♜";
else if(t10==4)
document.getElementById('T10').value="♛";
else if(t10==5)
document.getElementById('T10').value="♚";

if(t11==-1)
document.getElementById('T11').value="";
else if(t11==0)
document.getElementById('T11').value="♟";
else if(t11==1)
document.getElementById('T11').value="♞";
else if(t11==2)
document.getElementById('T11').value="♝";
else if(t11==3)
document.getElementById('T11').value="♜";
else if(t11==4)
document.getElementById('T11').value="♛";
else if(t11==5)
document.getElementById('T11').value="♚";

if(t12==-1)
document.getElementById('T12').value="";
else if(t12==0)
document.getElementById('T12').value="♟";
else if(t12==1)
document.getElementById('T12').value="♞";
else if(t12==2)
document.getElementById('T12').value="♝";
else if(t12==3)
document.getElementById('T12').value="♜";
else if(t12==4)
document.getElementById('T12').value="♛";
else if(t12==5)
document.getElementById('T12').value="♚";

if(t13==-1)
document.getElementById('T13').value="";
else if(t13==0)
document.getElementById('T13').value="♟";
else if(t13==1)
document.getElementById('T13').value="♞";
else if(t13==2)
document.getElementById('T13').value="♝";
else if(t13==3)
document.getElementById('T13').value="♜";
else if(t13==4)
document.getElementById('T13').value="♛";
else if(t13==5)
document.getElementById('T13').value="♚";

if(t14==-1)
document.getElementById('T14').value="";
else if(t14==0)
document.getElementById('T14').value="♟";
else if(t14==1)
document.getElementById('T14').value="♞";
else if(t14==2)
document.getElementById('T14').value="♝";
else if(t14==3)
document.getElementById('T14').value="♜";
else if(t14==4)
document.getElementById('T14').value="♛";
else if(t14==5)
document.getElementById('T14').value="♚";

if(t15==-1)
document.getElementById('T15').value="";
else if(t15==0)
document.getElementById('T15').value="♟";
else if(t15==1)
document.getElementById('T15').value="♞";
else if(t15==2)
document.getElementById('T15').value="♝";
else if(t15==3)
document.getElementById('T15').value="♜";
else if(t15==4)
document.getElementById('T15').value="♛";
else if(t15==5)
document.getElementById('T15').value="♚";

if(t16==-1)
document.getElementById('T16').value="";
else if(t16==0)
document.getElementById('T16').value="♟";
else if(t16==1)
document.getElementById('T16').value="♞";
else if(t16==2)
document.getElementById('T16').value="♝";
else if(t16==3)
document.getElementById('T16').value="♜";
else if(t16==4)
document.getElementById('T16').value="♛";
else if(t16==5)
document.getElementById('T16').value="♚";

if(t17==-1)
document.getElementById('T17').value="";
else if(t17==0)
document.getElementById('T17').value="♟";
else if(t17==1)
document.getElementById('T17').value="♞";
else if(t17==2)
document.getElementById('T17').value="♝";
else if(t17==3)
document.getElementById('T17').value="♜";
else if(t17==4)
document.getElementById('T17').value="♛";
else if(t17==5)
document.getElementById('T17').value="♚";

if(t18==-1)
document.getElementById('T18').value="";
else if(t18==0)
document.getElementById('T18').value="♟";
else if(t18==1)
document.getElementById('T18').value="♞";
else if(t18==2)
document.getElementById('T18').value="♝";
else if(t18==3)
document.getElementById('T18').value="♜";
else if(t18==4)
document.getElementById('T18').value="♛";
else if(t18==5)
document.getElementById('T18').value="♚";

if(t19==-1)
document.getElementById('T19').value="";
else if(t19==0)
document.getElementById('T19').value="♟";
else if(t19==1)
document.getElementById('T19').value="♞";
else if(t19==2)
document.getElementById('T19').value="♝";
else if(t19==3)
document.getElementById('T19').value="♜";
else if(t19==4)
document.getElementById('T19').value="♛";
else if(t19==5)
document.getElementById('T19').value="♚";

if(t20==-1)
document.getElementById('T20').value="";
else if(t20==0)
document.getElementById('T20').value="♟";
else if(t20==1)
document.getElementById('T20').value="♞";
else if(t20==2)
document.getElementById('T20').value="♝";
else if(t20==3)
document.getElementById('T20').value="♜";
else if(t20==4)
document.getElementById('T20').value="♛";
else if(t20==5)
document.getElementById('T20').value="♚";

if(t21==-1)
document.getElementById('T21').value="";
else if(t21==0)
document.getElementById('T21').value="♟";
else if(t21==1)
document.getElementById('T21').value="♞";
else if(t21==2)
document.getElementById('T21').value="♝";
else if(t21==3)
document.getElementById('T21').value="♜";
else if(t21==4)
document.getElementById('T21').value="♛";
else if(t21==5)
document.getElementById('T21').value="♚";

if(t22==-1)
document.getElementById('T22').value="";
else if(t22==0)
document.getElementById('T22').value="♟";
else if(t22==1)
document.getElementById('T22').value="♞";
else if(t22==2)
document.getElementById('T22').value="♝";
else if(t22==3)
document.getElementById('T22').value="♜";
else if(t22==4)
document.getElementById('T22').value="♛";
else if(t22==5)
document.getElementById('T22').value="♚";

if(t23==-1)
document.getElementById('T23').value="";
else if(t23==0)
document.getElementById('T23').value="♟";
else if(t23==1)
document.getElementById('T23').value="♞";
else if(t23==2)
document.getElementById('T23').value="♝";
else if(t23==3)
document.getElementById('T23').value="♜";
else if(t23==4)
document.getElementById('T23').value="♛";
else if(t23==5)
document.getElementById('T23').value="♚";

if(t24==-1)
document.getElementById('T24').value="";
else if(t24==0)
document.getElementById('T24').value="♟";
else if(t24==1)
document.getElementById('T24').value="♞";
else if(t24==2)
document.getElementById('T24').value="♝";
else if(t24==3)
document.getElementById('T24').value="♜";
else if(t24==4)
document.getElementById('T24').value="♛";
else if(t24==5)
document.getElementById('T24').value="♚";

if(t25==-1)
document.getElementById('T25').value="";
else if(t25==0)
document.getElementById('T25').value="♟";
else if(t25==1)
document.getElementById('T25').value="♞";
else if(t25==2)
document.getElementById('T25').value="♝";
else if(t25==3)
document.getElementById('T25').value="♜";
else if(t25==4)
document.getElementById('T25').value="♛";
else if(t25==5)
document.getElementById('T25').value="♚";

if(t26==-1)
document.getElementById('T26').value="";
else if(t26==0)
document.getElementById('T26').value="♟";
else if(t26==1)
document.getElementById('T26').value="♞";
else if(t26==2)
document.getElementById('T26').value="♝";
else if(t26==3)
document.getElementById('T26').value="♜";
else if(t26==4)
document.getElementById('T26').value="♛";
else if(t26==5)
document.getElementById('T26').value="♚";

if(t27==-1)
document.getElementById('T27').value="";
else if(t27==0)
document.getElementById('T27').value="♟";
else if(t27==1)
document.getElementById('T27').value="♞";
else if(t27==2)
document.getElementById('T27').value="♝";
else if(t27==3)
document.getElementById('T27').value="♜";
else if(t27==4)
document.getElementById('T27').value="♛";
else if(t27==5)
document.getElementById('T27').value="♚";

if(t28==-1)
document.getElementById('T28').value="";
else if(t28==0)
document.getElementById('T28').value="♟";
else if(t28==1)
document.getElementById('T28').value="♞";
else if(t28==2)
document.getElementById('T28').value="♝";
else if(t28==3)
document.getElementById('T28').value="♜";
else if(t28==4)
document.getElementById('T28').value="♛";
else if(t28==5)
document.getElementById('T28').value="♚";

if(t29==-1)
document.getElementById('T29').value="";
else if(t29==0)
document.getElementById('T29').value="♟";
else if(t29==1)
document.getElementById('T29').value="♞";
else if(t29==2)
document.getElementById('T29').value="♝";
else if(t29==3)
document.getElementById('T29').value="♜";
else if(t29==4)
document.getElementById('T29').value="♛";
else if(t29==5)
document.getElementById('T29').value="♚";

if(t30==-1)
document.getElementById('T30').value="";
else if(t30==0)
document.getElementById('T30').value="♟";
else if(t30==1)
document.getElementById('T30').value="♞";
else if(t30==2)
document.getElementById('T30').value="♝";
else if(t30==3)
document.getElementById('T30').value="♜";
else if(t30==4)
document.getElementById('T30').value="♛";
else if(t30==5)
document.getElementById('T30').value="♚";

if(t31==-1)
document.getElementById('T31').value="";
else if(t31==0)
document.getElementById('T31').value="♟";
else if(t31==1)
document.getElementById('T31').value="♞";
else if(t31==2)
document.getElementById('T31').value="♝";
else if(t31==3)
document.getElementById('T31').value="♜";
else if(t31==4)
document.getElementById('T31').value="♛";
else if(t31==5)
document.getElementById('T31').value="♚";

if(t32==-1)
document.getElementById('T32').value="";
else if(t32==0)
document.getElementById('T32').value="♟";
else if(t32==1)
document.getElementById('T32').value="♞";
else if(t32==2)
document.getElementById('T32').value="♝";
else if(t32==3)
document.getElementById('T32').value="♜";
else if(t32==4)
document.getElementById('T32').value="♛";
else if(t32==5)
document.getElementById('T32').value="♚";

if(t33==-1)
document.getElementById('T33').value="";
else if(t33==0)
document.getElementById('T33').value="♟";
else if(t33==1)
document.getElementById('T33').value="♞";
else if(t33==2)
document.getElementById('T33').value="♝";
else if(t33==3)
document.getElementById('T33').value="♜";
else if(t33==4)
document.getElementById('T33').value="♛";
else if(t33==5)
document.getElementById('T33').value="♚";

if(t34==-1)
document.getElementById('T34').value="";
else if(t34==0)
document.getElementById('T34').value="♟";
else if(t34==1)
document.getElementById('T34').value="♞";
else if(t34==2)
document.getElementById('T34').value="♝";
else if(t34==3)
document.getElementById('T34').value="♜";
else if(t34==4)
document.getElementById('T34').value="♛";
else if(t34==5)
document.getElementById('T34').value="♚";

if(t35==-1)
document.getElementById('T35').value="";
else if(t35==0)
document.getElementById('T35').value="♟";
else if(t35==1)
document.getElementById('T35').value="♞";
else if(t35==2)
document.getElementById('T35').value="♝";
else if(t35==3)
document.getElementById('T35').value="♜";
else if(t35==4)
document.getElementById('T35').value="♛";
else if(t35==5)
document.getElementById('T35').value="♚";

if(t36==-1)
document.getElementById('T36').value="";
else if(t36==0)
document.getElementById('T36').value="♟";
else if(t36==1)
document.getElementById('T36').value="♞";
else if(t36==2)
document.getElementById('T36').value="♝";
else if(t36==3)
document.getElementById('T36').value="♜";
else if(t36==4)
document.getElementById('T36').value="♛";
else if(t36==5)
document.getElementById('T36').value="♚";

if(t37==-1)
document.getElementById('T37').value="";
else if(t37==0)
document.getElementById('T37').value="♟";
else if(t37==1)
document.getElementById('T37').value="♞";
else if(t37==2)
document.getElementById('T37').value="♝";
else if(t37==3)
document.getElementById('T37').value="♜";
else if(t37==4)
document.getElementById('T37').value="♛";
else if(t37==5)
document.getElementById('T37').value="♚";

if(t38==-1)
document.getElementById('T38').value="";
else if(t38==0)
document.getElementById('T38').value="♟";
else if(t38==1)
document.getElementById('T38').value="♞";
else if(t38==2)
document.getElementById('T38').value="♝";
else if(t38==3)
document.getElementById('T38').value="♜";
else if(t38==4)
document.getElementById('T38').value="♛";
else if(t38==5)
document.getElementById('T38').value="♚";

if(t39==-1)
document.getElementById('T39').value="";
else if(t39==0)
document.getElementById('T39').value="♟";
else if(t39==1)
document.getElementById('T39').value="♞";
else if(t39==2)
document.getElementById('T39').value="♝";
else if(t39==3)
document.getElementById('T39').value="♜";
else if(t39==4)
document.getElementById('T39').value="♛";
else if(t39==5)
document.getElementById('T39').value="♚";

if(t40==-1)
document.getElementById('T40').value="";
else if(t40==0)
document.getElementById('T40').value="♟";
else if(t40==1)
document.getElementById('T40').value="♞";
else if(t40==2)
document.getElementById('T40').value="♝";
else if(t40==3)
document.getElementById('T40').value="♜";
else if(t40==4)
document.getElementById('T40').value="♛";
else if(t40==5)
document.getElementById('T40').value="♚";

if(t41==-1)
document.getElementById('T41').value="";
else if(t41==0)
document.getElementById('T41').value="♟";
else if(t41==1)
document.getElementById('T41').value="♞";
else if(t41==2)
document.getElementById('T41').value="♝";
else if(t41==3)
document.getElementById('T41').value="♜";
else if(t41==4)
document.getElementById('T41').value="♛";
else if(t41==5)
document.getElementById('T41').value="♚";

if(t42==-1)
document.getElementById('T42').value="";
else if(t42==0)
document.getElementById('T42').value="♟";
else if(t42==1)
document.getElementById('T42').value="♞";
else if(t42==2)
document.getElementById('T42').value="♝";
else if(t42==3)
document.getElementById('T42').value="♜";
else if(t42==4)
document.getElementById('T42').value="♛";
else if(t42==5)
document.getElementById('T42').value="♚";

if(t43==-1)
document.getElementById('T43').value="";
else if(t43==0)
document.getElementById('T43').value="♟";
else if(t43==1)
document.getElementById('T43').value="♞";
else if(t43==2)
document.getElementById('T43').value="♝";
else if(t43==3)
document.getElementById('T43').value="♜";
else if(t43==4)
document.getElementById('T43').value="♛";
else if(t43==5)
document.getElementById('T43').value="♚";

if(t44==-1)
document.getElementById('T44').value="";
else if(t44==0)
document.getElementById('T44').value="♟";
else if(t44==1)
document.getElementById('T44').value="♞";
else if(t44==2)
document.getElementById('T44').value="♝";
else if(t44==3)
document.getElementById('T44').value="♜";
else if(t44==4)
document.getElementById('T44').value="♛";
else if(t44==5)
document.getElementById('T44').value="♚";

if(t45==-1)
document.getElementById('T45').value="";
else if(t45==0)
document.getElementById('T45').value="♟";
else if(t45==1)
document.getElementById('T45').value="♞";
else if(t45==2)
document.getElementById('T45').value="♝";
else if(t45==3)
document.getElementById('T45').value="♜";
else if(t45==4)
document.getElementById('T45').value="♛";
else if(t45==5)
document.getElementById('T45').value="♚";

if(t46==-1)
document.getElementById('T46').value="";
else if(t46==0)
document.getElementById('T46').value="♟";
else if(t46==1)
document.getElementById('T46').value="♞";
else if(t46==2)
document.getElementById('T46').value="♝";
else if(t46==3)
document.getElementById('T46').value="♜";
else if(t46==4)
document.getElementById('T46').value="♛";
else if(t46==5)
document.getElementById('T46').value="♚";

if(t47==-1)
document.getElementById('T47').value="";
else if(t47==0)
document.getElementById('T47').value="♟";
else if(t47==1)
document.getElementById('T47').value="♞";
else if(t47==2)
document.getElementById('T47').value="♝";
else if(t47==3)
document.getElementById('T47').value="♜";
else if(t47==4)
document.getElementById('T47').value="♛";
else if(t47==5)
document.getElementById('T47').value="♚";

if(t48==-1)
document.getElementById('T48').value="";
else if(t48==0)
document.getElementById('T48').value="♟";
else if(t48==1)
document.getElementById('T48').value="♞";
else if(t48==2)
document.getElementById('T48').value="♝";
else if(t48==3)
document.getElementById('T48').value="♜";
else if(t48==4)
document.getElementById('T48').value="♛";
else if(t48==5)
document.getElementById('T48').value="♚";

if(t49==-1)
document.getElementById('T49').value="";
else if(t49==0)
document.getElementById('T49').value="♟";
else if(t49==1)
document.getElementById('T49').value="♞";
else if(t49==2)
document.getElementById('T49').value="♝";
else if(t49==3)
document.getElementById('T49').value="♜";
else if(t49==4)
document.getElementById('T49').value="♛";
else if(t49==5)
document.getElementById('T49').value="♚";

if(t50==-1)
document.getElementById('T50').value="";
else if(t50==0)
document.getElementById('T50').value="♟";
else if(t50==1)
document.getElementById('T50').value="♞";
else if(t50==2)
document.getElementById('T50').value="♝";
else if(t50==3)
document.getElementById('T50').value="♜";
else if(t50==4)
document.getElementById('T50').value="♛";
else if(t50==5)
document.getElementById('T50').value="♚";

if(t51==-1)
document.getElementById('T51').value="";
else if(t51==0)
document.getElementById('T51').value="♟";
else if(t51==1)
document.getElementById('T51').value="♞";
else if(t51==2)
document.getElementById('T51').value="♝";
else if(t51==3)
document.getElementById('T51').value="♜";
else if(t51==4)
document.getElementById('T51').value="♛";
else if(t51==5)
document.getElementById('T51').value="♚";

if(t52==-1)
document.getElementById('T52').value="";
else if(t52==0)
document.getElementById('T52').value="♟";
else if(t52==1)
document.getElementById('T52').value="♞";
else if(t52==2)
document.getElementById('T52').value="♝";
else if(t52==3)
document.getElementById('T52').value="♜";
else if(t52==4)
document.getElementById('T52').value="♛";
else if(t52==5)
document.getElementById('T52').value="♚";

if(t53==-1)
document.getElementById('T53').value="";
else if(t53==0)
document.getElementById('T53').value="♟";
else if(t53==1)
document.getElementById('T53').value="♞";
else if(t53==2)
document.getElementById('T53').value="♝";
else if(t53==3)
document.getElementById('T53').value="♜";
else if(t53==4)
document.getElementById('T53').value="♛";
else if(t53==5)
document.getElementById('T53').value="♚";

if(t54==-1)
document.getElementById('T54').value="";
else if(t54==0)
document.getElementById('T54').value="♟";
else if(t54==1)
document.getElementById('T54').value="♞";
else if(t54==2)
document.getElementById('T54').value="♝";
else if(t54==3)
document.getElementById('T54').value="♜";
else if(t54==4)
document.getElementById('T54').value="♛";
else if(t54==5)
document.getElementById('T54').value="♚";

if(t55==-1)
document.getElementById('T55').value="";
else if(t55==0)
document.getElementById('T55').value="♟";
else if(t55==1)
document.getElementById('T55').value="♞";
else if(t55==2)
document.getElementById('T55').value="♝";
else if(t55==3)
document.getElementById('T55').value="♜";
else if(t55==4)
document.getElementById('T55').value="♛";
else if(t55==5)
document.getElementById('T55').value="♚";

if(t56==-1)
document.getElementById('T56').value="";
else if(t56==0)
document.getElementById('T56').value="♟";
else if(t56==1)
document.getElementById('T56').value="♞";
else if(t56==2)
document.getElementById('T56').value="♝";
else if(t56==3)
document.getElementById('T56').value="♜";
else if(t56==4)
document.getElementById('T56').value="♛";
else if(t56==5)
document.getElementById('T56').value="♚";

if(t57==-1)
document.getElementById('T57').value="";
else if(t57==0)
document.getElementById('T57').value="♟";
else if(t57==1)
document.getElementById('T57').value="♞";
else if(t57==2)
document.getElementById('T57').value="♝";
else if(t57==3)
document.getElementById('T57').value="♜";
else if(t57==4)
document.getElementById('T57').value="♛";
else if(t57==5)
document.getElementById('T57').value="♚";

if(t58==-1)
document.getElementById('T58').value="";
else if(t58==0)
document.getElementById('T58').value="♟";
else if(t58==1)
document.getElementById('T58').value="♞";
else if(t58==2)
document.getElementById('T58').value="♝";
else if(t58==3)
document.getElementById('T58').value="♜";
else if(t58==4)
document.getElementById('T58').value="♛";
else if(t58==5)
document.getElementById('T58').value="♚";

if(t59==-1)
document.getElementById('T59').value="";
else if(t59==0)
document.getElementById('T59').value="♟";
else if(t59==1)
document.getElementById('T59').value="♞";
else if(t59==2)
document.getElementById('T59').value="♝";
else if(t59==3)
document.getElementById('T59').value="♜";
else if(t59==4)
document.getElementById('T59').value="♛";
else if(t59==5)
document.getElementById('T59').value="♚";

if(t60==-1)
document.getElementById('T60').value="";
else if(t60==0)
document.getElementById('T60').value="♟";
else if(t60==1)
document.getElementById('T60').value="♞";
else if(t60==2)
document.getElementById('T60').value="♝";
else if(t60==3)
document.getElementById('T60').value="♜";
else if(t60==4)
document.getElementById('T60').value="♛";
else if(t60==5)
document.getElementById('T60').value="♚";

if(t61==-1)
document.getElementById('T61').value="";
else if(t61==0)
document.getElementById('T61').value="♟";
else if(t61==1)
document.getElementById('T61').value="♞";
else if(t61==2)
document.getElementById('T61').value="♝";
else if(t61==3)
document.getElementById('T61').value="♜";
else if(t61==4)
document.getElementById('T61').value="♛";
else if(t61==5)
document.getElementById('T61').value="♚";

if(t62==-1)
document.getElementById('T62').value="";
else if(t62==0)
document.getElementById('T62').value="♟";
else if(t62==1)
document.getElementById('T62').value="♞";
else if(t62==2)
document.getElementById('T62').value="♝";
else if(t62==3)
document.getElementById('T62').value="♜";
else if(t62==4)
document.getElementById('T62').value="♛";
else if(t62==5)
document.getElementById('T62').value="♚";

if(t63==-1)
document.getElementById('T63').value="";
else if(t63==0)
document.getElementById('T63').value="♟";
else if(t63==1)
document.getElementById('T63').value="♞";
else if(t63==2)
document.getElementById('T63').value="♝";
else if(t63==3)
document.getElementById('T63').value="♜";
else if(t63==4)
document.getElementById('T63').value="♛";
else if(t63==5)
document.getElementById('T63').value="♚";

if(t64==-1)
document.getElementById('T64').value="";
else if(t64==0)
document.getElementById('T64').value="♟";
else if(t64==1)
document.getElementById('T64').value="♞";
else if(t64==2)
document.getElementById('T64').value="♝";
else if(t64==3)
document.getElementById('T64').value="♜";
else if(t64==4)
document.getElementById('T64').value="♛";
else if(t64==5)
document.getElementById('T64').value="♚";
}
