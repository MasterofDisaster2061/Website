const containerElement=document.getElementById("container");
const btnAdd=document.getElementsByClassName("btn-add")[0];

passwordtext=JSON.parse(localStorage.getItem('passwordtext'));
if(passwordtext==undefined)
document.getElementById('passdiv').style.display="none";
else
document.getElementById('passdiv').style.display="block";

window.onload=function()
{
var reloading = sessionStorage.getItem('reloading');
if(reloading)
{
sessionStorage.removeItem('reloading');
document.getElementById('passdiv').style.display="none";
}
}

function getAppStorage(){
  return JSON.parse(localStorage.getItem("joes-app") || "[]");
}

getAppStorage().forEach(element => {
  const textElement=createTextElement(element.id,element.content);
  containerElement.insertBefore(textElement,btnAdd);
});

fontcolor=JSON.parse(localStorage.getItem('fontcolorn'));
if(fontcolor==undefined)
	fontcolor="black";
notebg=JSON.parse(localStorage.getItem('backgroundn'));
if(notebg==undefined)
	notebg="white";
notebg2=localStorage.getItem('backgroundn2');
if(notebg2==undefined)
	notebg2=0;
fontstyle=JSON.parse(localStorage.getItem('fontfamilyn'));
if(fontstyle==undefined)
	fontstyle="Arial";
fontsize=localStorage.getItem('fontsizen');
if(fontsize==undefined)
	fontsize="18";

document.getElementById('fontsizevalue').value=fontsize;

if(fontstyle=="Arial")
document.getElementById('fontstylevalue').selectedIndex=0;
else if(fontstyle=="Times New Roman")
document.getElementById('fontstylevalue').selectedIndex=1;
else if(fontstyle=="Monospace")
document.getElementById('fontstylevalue').selectedIndex=2;
else if(fontstyle=="Cursive")
document.getElementById('fontstylevalue').selectedIndex=3;
else if(fontstyle=="Fantasy")
document.getElementById('fontstylevalue').selectedIndex=4;

if(fontcolor=="rgb(0, 0, 0)")
	$('#fblack').addClass('selected');
else if(fontcolor=="rgb(255, 255, 255)")
	$('#fwhite').addClass('selected');
else if(fontcolor=="rgb(255, 0, 0)")
	$('#fred').addClass('selected');
else if(fontcolor=="rgb(0, 128, 0)")
	$('#fgreen').addClass('selected');
else if(fontcolor=="rgb(0, 0, 255)")
	$('#fblue').addClass('selected');
else if(fontcolor=="rgb(255, 102, 0)")
	$('#forange').addClass('selected');
else if(fontcolor=="rgb(128, 128, 128)")
	$('#fgray').addClass('selected');
else if(fontcolor=="rgb(255, 255, 0)")
	$('#fyellow').addClass('selected');
else if(fontcolor=="rgb(128, 0, 128)")
	$('#fpurple').addClass('selected');
else if(fontcolor=="rgb(165, 42, 42)")
	$('#fbrown').addClass('selected');

if(notebg=="rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box")
	$('#bgblack').addClass('selected');
else if(notebg=="rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box")
	$('#bgwhite').addClass('selected');
else if(notebg=="rgb(255, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box")
	$('#bgred').addClass('selected');
else if(notebg=="rgb(0, 128, 0) none repeat scroll 0% 0% / auto padding-box border-box")
	$('#bggreen').addClass('selected');
else if(notebg=="rgb(0, 0, 255) none repeat scroll 0% 0% / auto padding-box border-box")
	$('#bgblue').addClass('selected');
else if(notebg=="rgb(255, 102, 0) none repeat scroll 0% 0% / auto padding-box border-box")
	$('#bgorange').addClass('selected');
else if(notebg=="rgb(128, 128, 128) none repeat scroll 0% 0% / auto padding-box border-box")
	$('#bggray').addClass('selected');
else if(notebg=="rgb(255, 255, 0) none repeat scroll 0% 0% / auto padding-box border-box")
	$('#bgyellow').addClass('selected');
else if(notebg=="rgb(128, 0, 128) none repeat scroll 0% 0% / auto padding-box border-box")
	$('#bgpurple').addClass('selected');
else if(notebg=="rgb(165, 42, 42) none repeat scroll 0% 0% / auto padding-box border-box")
	$('#bgbrown').addClass('selected');

if(notebg2==1)
	$('#bgold').addClass('selected');
else if(notebg2==2)
	$('#bgpaper').addClass('selected');
else if(notebg2==3)
	$('#bgv').addClass('selected');
else if(notebg2==4)
	$('#bgstone').addClass('selected');
else if(notebg2==5)
	$('#bggrass').addClass('selected');

function createTextElement(id,content){
const textElement=document.createElement('textarea');
textElement.classList.add('sticky');
textElement.value=content;
textElement.placeholder='Enter Your Notes';

setInterval(function()
{
  updateNote(id,textElement.value);
  document.getElementById('fontvaluedisp').innerHTML=document.getElementById('fontsizevalue').value;
  
$("textarea").css("background",notebg);
$("textarea").css("background-size","333px 200px");
$("textarea").css("color",fontcolor);
$("textarea").css("font-size",fontsize);
$("textarea").css("font-family",fontstyle);

localStorage.setItem('backgroundn',JSON.stringify(notebg));
localStorage.setItem('backgroundn2',notebg2);
localStorage.setItem('fontsizen',fontsize);
localStorage.setItem('fontcolorn',JSON.stringify(fontcolor));
localStorage.setItem('fontfamilyn',JSON.stringify(fontstyle));

document.getElementById('fontstylevalue').style.fontFamily=fontstyle;
},1);

textElement.addEventListener("dblclick",()=>{
  const check=confirm("Are you sure to Delete this Note?");
  if(check){
    deleteNotes(id,textElement);
  }
});

return textElement;
}

//Add New Sticky Note
function addSticky(){
  const notes=getAppStorage();
  const noteObject={
    id:Math.floor(Math.random()*100000),
    content:""
  }
  const textElement= createTextElement(noteObject.id,noteObject.content);
  containerElement.insertBefore(textElement,btnAdd);
  notes.push(noteObject);
  saveNotes(notes);
}

btnAdd.addEventListener('click',()=>addSticky());

function saveNotes(notes){
  localStorage.setItem("joes-app",JSON.stringify(notes));
}

//Update Sticky Note
function updateNote(id,content){
  const notes=getAppStorage();
  const updateElement=notes.filter((note)=>note.id==id)[0];
  updateElement.content=content;
  saveNotes(notes);
}

function deleteNotes(id,textElement){
  const notes=getAppStorage().filter((note)=>note.id!=id);
  saveNotes(notes);
  containerElement.removeChild(textElement);
}

function deleteboxdisp()
{
if(document.getElementById('deletebox').style.display=="none")
{document.getElementById('deletebox').style.display="block";
document.getElementById('passwordbox').style.display="none";
document.getElementById('fontbox').style.display="none";
document.getElementById('backgroundbox').style.display="none";
}
else
deleteboxback();
}

function deleteboxback()
{
document.getElementById('deletebox').style.display="none";
}

function enternotes()
{
var password=document.getElementById('passwordtype').value;
if(password==passwordtext)
	document.getElementById('passdiv').style.display="none";
else if(password!=passwordtext)
	alert('You entered incorrect Password!');
}

function setnewpassdisp()
{
document.getElementById('pass1').style.display="none";
document.getElementById('pass2').style.display="block";
}

function setnewpassback()
{
document.getElementById('pass1').style.display="block";
document.getElementById('pass2').style.display="none";
}

function passwordboxdisp()
{
if(document.getElementById('passwordbox').style.display=="none")
{document.getElementById('passwordbox').style.display="block";
setnewpassback();
document.getElementById('deletebox').style.display="none";
document.getElementById('fontbox').style.display="none";
document.getElementById('backgroundbox').style.display="none";
}
else
passwordboxback();
}

function passwordboxback()
{
document.getElementById('passwordbox').style.display="none";
}

function setnewpass()
{
var newpassword=document.getElementById('passwordtypenew').value;
if(newpassword=='')
	alert('New Password can\'t be Empty!');
else
{passconfirm= prompt('Type your New Password to Confirm');
if(passconfirm==newpassword)
{localStorage.setItem('passwordtext',JSON.stringify(newpassword));
setnewpassback();
passwordboxback();
}
}
}

function removepass()
{
var removepass=confirm('Are you sure to Remove the Password?');
if(removepass)
{localStorage.removeItem('passwordtext');
setnewpassback();
passwordboxback();
}
}

function deleteall()
{
var deleteconfirm = confirm('Are you sure to Delete All Notes?');
if(deleteconfirm)
{localStorage.removeItem("joes-app");
sessionStorage.setItem('reloading','true');
window.location.reload();
}
}

function fontsetdisp()
{
if(document.getElementById('fontbox').style.display=="none")
{document.getElementById('fontbox').style.display="block";
document.getElementById('deletebox').style.display="none";
document.getElementById('passwordbox').style.display="none";
document.getElementById('backgroundbox').style.display="none";
}
else
fontboxback();
}

function fontstylechoose()
{
var selectf=document.getElementById('fontstylevalue');
var optionf=selectf.options[selectf.selectedIndex];
fontstyle=optionf.text;
}

$("#fcolor").on("click", "button", function() {
    $(this).siblings().removeClass("selected");
    $(this).addClass("selected");
	fontcolor=$(this).css("background-color");
});

function fontsizechange()
{
fontsize=document.getElementById('fontsizevalue').value;
}

function fontboxback()
{
document.getElementById('fontbox').style.display="none";
}

function backgroundboxdisp()
{
if(document.getElementById('backgroundbox').style.display=="none")
{document.getElementById('backgroundbox').style.display="block";
document.getElementById('passwordbox').style.display="none";
document.getElementById('fontbox').style.display="none";
document.getElementById('deletebox').style.display="none";
}
else
backgroundboxback();
}

function backgroundboxback()
{
document.getElementById('backgroundbox').style.display="none";
}

$("#bgcolor").on("click", "button", function() {
    $(this).siblings().removeClass("selected");
    $(this).addClass("selected");
	notebg=$(this).css("background");
	notebg2=$(this).html();
});