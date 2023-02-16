var colour = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var canvas2 = document.getElementById('canvas2');
var context2 = canvas2.getContext("2d");
var canvas3 = document.getElementById('canvas3');
var context3 = canvas3.getContext("2d");
var canvas4 = document.getElementById('canvas4');
var context4 = canvas4.getContext("2d");
var lastEvent;
var mouseDown = false;

canvas2.style.background="white";
bgcode=1;
paintcode=1;
brushtype="round";
emojiselect="😂";

// When clicking on colours items
$(".controls").on("click", "li", function () {
    //  Deselect aibling elements
    $(this).siblings().removeClass("selected");
    //  Select clicked element
    $(this).addClass("selected");

    // Cache current colour
    colour = $(this).css("background-color");
    document.getElementById('paintb').click();
});

$(".controls2").on("click", "li", function () {
    //  Deselect aibling elements
    $(this).siblings().removeClass("selected2");
    //  Select clicked element
    $(this).addClass("selected2");
	emojiselect=$(this).html();
	document.getElementById('emojiselecticon').innerHTML=emojiselect;
});

// When New colour is pressed by user
$("#revealColorSelect").click(function () {
    // Show colour select or hide the color select
    changeColor();
    $("#colorSelect").toggle();
});

// Update the new colour span
function changeColor() {
    $("#newColor").css("background-color", document.getElementById('coloradd').value);
}

// When new colour sliders change
$("input[type=color]").change(changeColor);


// When add colour is pressed
$("#addNewColor").click(function () {
    // Append the colours to the controls
    var $newColor = $("<li></li>");
    $newColor.css("background-color", $("#newColor").css("background-color"));
    $(".controls ul").append($newColor);
    // Select the new added colour
    $newColor.click();
});

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

setInterval(function()
{
numcolor1=generateRandomNumber(0, 255);
numcolor2=generateRandomNumber(0, 255);
numcolor3=generateRandomNumber(0, 255);
rgb="rgb("+numcolor1+","+numcolor2+","+numcolor3+")";
},50)


                   
// On mouse events on the canvas
$canvas.mousedown(function (e) {
    lastEvent = e;
    mouseDown = true;
}).mousemove(function (e) {
    // Draw lines
    if (mouseDown) {
        context4.beginPath();
        context4.moveTo(lastEvent.offsetX, lastEvent.offsetY);
        context4.lineTo(e.offsetX, e.offsetY);
		
		if(paintcode==1)
        {
		context4.strokeStyle = colour;
		context4.lineWidth = document.getElementById('brushsize').value;
		canvas4.style.opacity = document.getElementById('copacity').value;                   
        context.globalAlpha = document.getElementById('copacity').value;     
        context4.lineCap = brushtype;
        context4.stroke();
		}
	    else if(paintcode==2)
        {
		context4.strokeStyle = rgb;
		context4.lineWidth = document.getElementById('brushsize').value;
		canvas4.style.opacity = document.getElementById('copacity').value;                   
        context.globalAlpha = document.getElementById('copacity').value;     
        context4.lineCap = brushtype;
        context4.stroke();
		}
	    else if(paintcode==3)
        {
		context4.font = "bold "+document.getElementById('emojisize').value+"px Arial";
		canvas4.style.opacity = 1;                   
        context.globalAlpha = 1; 
        context4.fillText(emojiselect,e.offsetX, e.offsetY);
		}
	    else if(paintcode==4)
		{
		context4.strokeStyle = 'transparent';
		erasersize=document.getElementById('erasersize').value;
        context.clearRect(e.offsetX-erasersize, e.offsetY-erasersize, 2*erasersize, 2*erasersize);
		context4.lineWidth = document.getElementById('brushsize').value;
		canvas4.style.opacity = document.getElementById('copacity').value;                   
        context.globalAlpha = document.getElementById('copacity').value;     
        context4.lineCap = brushtype;
        context4.stroke();
		} 
        lastEvent = e;
    }
}).mouseup(function () {
    mouseDown = false;
}).mouseleave(function () {
    $canvas.mouseup();
});

window.onmouseup = function(){
  mouseDown = false;                                  
  context.drawImage(canvas4, 0, 0);                     
  context4.clearRect(0, 0, canvas4.width, canvas4.height);   
};

// Clear the canvas when button is clicked
function clear_canvas_width() {
   context.clearRect(0,0,$canvas[0].width,$canvas[0].height);
   document.getElementById('colorSelect').style.display="none";
}

selectedformat='png';
function formatchange() 
{
selectformat=document.getElementById('selectformat');
optionformat=selectformat.options[selectformat.selectedIndex];
selectedformat=optionformat.value;
}

function saveImage() {
    imagename2=document.getElementById('imagename').value;
	if(imagename2=='')
	imagename2='paint';

    let linkElement = document.getElementById('link');
    linkElement.setAttribute(
      'download', imagename2+"."+selectedformat
    );
  
    // Convert the canvas data to a image data URL
    let canvasData = canvas3.toDataURL("image/"+selectedformat);
  
    // Replace it with a stream so that
    // it starts downloading
    canvasData.replace(
      "image/"+selectedformat, "image/octet-stream"
    )
  
    // Set the location href to the canvas data
    linkElement.setAttribute('href', canvasData);
  
    // Click on the link to start the download 
    linkElement.click();
	document.getElementById('savebox').style.display="none";
	context3.clearRect(0,0,canvas3.width,canvas3.height);
}

function dispsaveImage()
{
document.getElementById('bgbox').style.display="none";
document.getElementById('emojibox').style.display="none";
document.getElementById('colorSelect').style.display="none";
document.getElementById('resizebox').style.display="none";
document.getElementById('bsettingbox').style.display="none";
document.getElementById('savebox').style.display="block";
document.getElementById('imagedimension').innerHTML="width: "+$canvas[0].width+"px   height: "+$canvas[0].height+"px";
}

function saveback()
{
document.getElementById('savebox').style.display="none";
}

let image = document.getElementById('sourceImage');
function uploadImage(event) {
    image.src = URL.createObjectURL(event.target.files[0]);
  
    image.onload = function () {
		context2.clearRect(0,0,canvas2.width,canvas2.height);
        context2.drawImage(image,0,0,canvas2.width,canvas2.height);
    }
	document.getElementById('bgbox').style.display="none";
	bgcode=3;
}

function dispbackground()
{
document.getElementById('bgbox').style.display="block";
document.getElementById('emojibox').style.display="none";
document.getElementById('colorSelect').style.display="none";
document.getElementById('savebox').style.display="none";
document.getElementById('bsettingbox').style.display="none";
document.getElementById('resizebox').style.display="none";
}
function bgback()
{
document.getElementById('bgbox').style.display="none";
}

function changecolor()
{
context2.clearRect(0,0,canvas2.width,canvas2.height);
context2.fillStyle=document.getElementById('bgcolor').value;
context2.fillRect(0,0,canvas2.width,canvas2.height);
document.getElementById('bgbox').style.display="none";
bgcode=2;
}

function bgtransparent()
{
context2.clearRect(0,0,canvas2.width,canvas2.height);
context2.fillStyle='#f5f5f5';
context2.fillRect(0,0,canvas2.width,canvas2.height);
document.getElementById('bgbox').style.display="none";
bgcode=0;
}

function bgset()
{
canvas3.width=$canvas[0].width;
canvas3.height=$canvas[0].height;
context3.drawImage($canvas[0],0,0,canvas3.width,canvas3.height);
context3.globalCompositeOperation="destination-over";
if(bgcode==0)
{
context3.fillStyle='transparent';
context3.fillRect(0,0,canvas3.width,canvas3.height);
}
else if(bgcode==1)
{
context3.fillStyle='white';
context3.fillRect(0,0,canvas3.width,canvas3.height);
}
else if(bgcode==2)
{
context3.fillStyle=document.getElementById('bgcolor').value;
context3.fillRect(0,0,canvas3.width,canvas3.height);
}
else if(bgcode==3)
{
context3.drawImage(image,0,0,canvas3.width,canvas3.height);
}
}

function closecolorbox()
{
document.getElementById('colorSelect').style.display="none";
}

function resizeimage()
{
document.getElementById('bgbox').style.display="none";
document.getElementById('emojibox').style.display="none";
document.getElementById('colorSelect').style.display="none";
document.getElementById('savebox').style.display="none";
document.getElementById('bsettingbox').style.display="none";
document.getElementById('resizebox').style.display="block";
document.getElementById('resizeinfo').innerHTML="Original width: "+'1000'+"px<br>Original height: "+'500'+"px<br><br>"+"Current width: "+$canvas[0].width+"px<br> Current height: "+$canvas[0].height+"px";
}

function resizeback()
{
document.getElementById('rvh').value="";
document.getElementById('rvw').value="";
document.getElementById('resizebox').style.display="none";
}

function resizeimage2()
{
rvh= Number(document.getElementById('rvh').value);
rvw= Number(document.getElementById('rvw').value);
if(rvh<10 || rvw<10)
alert('height and width both should be greater or equal to 10px!');
else if(rvh>4096 || rvw>4096)
alert('height and width both should be less or equal to 4096px!');
else
{
document.getElementById('imagedimension').innerHTML="width: "+rvw+"px   height: "+rvh+"px";
document.getElementById('resizebox').style.display="none";

$canvas[0].height=rvh;
$canvas[0].width=rvw;
canvas2.height=rvh;
canvas2.width=rvw;
canvas4.height=rvh;
canvas4.width=rvw;

if(bgcode==0)
{
context2.clearRect(0,0,canvas2.width,canvas2.height);
context2.fillStyle='#f5f5f5';
context2.fillRect(0,0,canvas2.width,canvas2.height);
}
else if(bgcode==1)
{
context2.clearRect(0,0,canvas2.width,canvas2.height);
context2.fillStyle='white';
context2.fillRect(0,0,canvas2.width,canvas2.height);
}
else if(bgcode==2)
{
context2.clearRect(0,0,canvas2.width,canvas2.height);
context2.fillStyle=document.getElementById('bgcolor').value;
context2.fillRect(0,0,canvas2.width,canvas2.height);
}
else if(bgcode==3)
{
context2.clearRect(0,0,canvas2.width,canvas2.height);
context2.drawImage(image,0,0,canvas2.width,canvas2.height);
}
}
}

document.getElementById('paintb').onclick=function()
{
document.getElementById('paintb').style.border="1px lime solid";
document.getElementById('ebrush').style.border="1px solid #37a2cb";
document.getElementById('mbrush').style.border="1px solid #37a2cb";
document.getElementById('eraser').style.border="1px solid #37a2cb";
paintcode=1;
canvas4.style.cursor="url(brushcursor.png) 5 80,crosshair";
document.getElementById('erasersetting').style.display="none";
document.getElementById('emojisetting').style.display="none";
document.getElementById('brushsetting').style.display="block";
}
document.getElementById('mbrush').onclick=function()
{
document.getElementById('paintb').style.border="1px solid #37a2cb";
document.getElementById('ebrush').style.border="1px solid #37a2cb";
document.getElementById('mbrush').style.border="1px lime solid";
document.getElementById('eraser').style.border="1px solid #37a2cb";
paintcode=2;
canvas4.style.cursor="url(brushcursor.png) 5 80,crosshair";
document.getElementById('erasersetting').style.display="none";
document.getElementById('emojisetting').style.display="none";
document.getElementById('brushsetting').style.display="block";
}
document.getElementById('ebrush').onclick=function()
{
document.getElementById('paintb').style.border="1px solid #37a2cb";
document.getElementById('ebrush').style.border="1px lime solid";
document.getElementById('mbrush').style.border="1px solid #37a2cb";
document.getElementById('eraser').style.border="1px solid #37a2cb";
paintcode=3;
canvas4.style.cursor="url(brushcursor.png) 0 120,crosshair";
document.getElementById('erasersetting').style.display="none";
document.getElementById('emojisetting').style.display="block";
document.getElementById('brushsetting').style.display="none";
}
document.getElementById('eraser').onclick=function()
{
document.getElementById('paintb').style.border="1px solid #37a2cb";
document.getElementById('ebrush').style.border="1px solid #37a2cb";
document.getElementById('mbrush').style.border="1px solid #37a2cb";
document.getElementById('eraser').style.border="1px lime solid";
paintcode=4;
canvas4.style.cursor="url(erasercursor.png) 10 20,crosshair";
document.getElementById('erasersetting').style.display="block";
document.getElementById('brushsetting').style.display="none";
document.getElementById('emojisetting').style.display="none";
}

document.getElementById('brushsetting').onclick=function()
{
document.getElementById('bsettingbox').style.display="block";
document.getElementById('emojibox').style.display="none";
document.getElementById('bgbox').style.display="none";
document.getElementById('colorSelect').style.display="none";
document.getElementById('savebox').style.display="none";
document.getElementById('resizebox').style.display="none";
}
document.getElementById('brushsettingback').onclick=function()
{
document.getElementById('bsettingbox').style.display="none";
}

document.getElementById('roundb').onclick=function()
{
document.getElementById('roundb').style.border="2px solid white";
document.getElementById('squareb').style.border="none";
document.getElementById('buttb').style.border="none";
brushtype="round";
}
document.getElementById('squareb').onclick=function()
{
document.getElementById('roundb').style.border="none";
document.getElementById('squareb').style.border="2px solid white";
document.getElementById('buttb').style.border="none";
brushtype="square";
}
document.getElementById('buttb').onclick=function()
{
document.getElementById('roundb').style.border="none";
document.getElementById('squareb').style.border="none";
document.getElementById('buttb').style.border="2px solid white";
brushtype="butt";
}

document.getElementById('emojisetting').onclick=function()
{
document.getElementById('emojibox').style.display="block";
document.getElementById('bsettingbox').style.display="none";
document.getElementById('bgbox').style.display="none";
document.getElementById('colorSelect').style.display="none";
document.getElementById('savebox').style.display="none";
document.getElementById('resizebox').style.display="none";
}
document.getElementById('emojisettingback').onclick=function()
{
document.getElementById('emojibox').style.display="none";
}

document.getElementById('usecustomemoji').onclick=function()
{
customemoji=document.getElementById('customemoji').value;
if(customemoji=='')
	alert('Please enter emoji character first!');
else
{
document.querySelector('.selected2').classList.remove('selected2');
emojiselect=customemoji;
document.getElementById('emojiselecticon').innerHTML=emojiselect;
}
}