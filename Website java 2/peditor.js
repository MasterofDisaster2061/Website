// Get the source image to be edited
let image = document.getElementById('sourceImage');
  
// Get the canvas for the edited image
let canvas = document.getElementById('canvas');
  
// Get the 2D context of the image
let context = canvas.getContext('2d');

canvas2=document.getElementById('canvas2');
context2=canvas2.getContext('2d');
canvas3=document.getElementById('canvas3');
context3=canvas3.getContext('2d');
canvas4=document.getElementById('canvas4');
context4=canvas4.getContext('2d');
  
// Get all the sliders of the image
let brightnessSlider = document.getElementById("brightnessSlider");
let contrastSlider = document.getElementById("contrastSlider");
let grayscaleSlider = document.getElementById("grayscaleSlider");
let hueRotateSlider = document.getElementById("hueRotateSlider");
let saturateSlider = document.getElementById("saturationSlider");
let sepiaSlider = document.getElementById("sepiaSlider");
let blurSlider = document.getElementById("blurSlider");
let invertSlider = document.getElementById("invertSlider");
let opacitySlider = document.getElementById("opacitySlider");
let shadowSlider = document.getElementById("shadowSlider");
var cvi1;var cvi2;var cvf1;var cvf2;
cropcode=0;
tintcode=0;

function uploadImage(event) {
  
    // Set the source of the image from the uploaded file
    image.src = URL.createObjectURL(event.target.files[0]);
  
    image.onload = function () {
        // Set the canvas the same width and height of the image
        canvas.width = this.width;
        canvas.height = this.height;
		
		cw=this.width;
		ch=this.height;
        canvas.crossOrigin = "anonymous";
		cropcode=0;
		pos=1;
		tintcode=0;
        resetImage();
    };
  
    // Show the image editor controls and hide the help text
    document.querySelector('.help-text').style.display = "none";
    document.querySelector('.image-save').style.display = "block";
    document.querySelector('.image-controls').style.display = "block";
    document.querySelector('.preset-filters').style.display = "block";
	
	document.getElementById('imageeditor').style.display="block";
	document.getElementById('image-preview2').style.display="block";
	document.getElementById('zoomrange').style.display="block";
	document.getElementById('heightwidth2').style.display="block";
	document.getElementById('photoname').style.width="295px";
	document.getElementById('photochange').style.marginLeft="-200px";
	document.getElementById('photochange').style.marginTop="20px";
	document.getElementById('changetext').innerHTML="Change";
};

// This function is used to update the image
// along with all the filter values
function applyFilter() {
    let filterString =
        "brightness(" + brightnessSlider.value + "%" +
        ") contrast(" + contrastSlider.value + "%" +
        ") grayscale(" + grayscaleSlider.value + "%" +
        ") saturate(" + saturateSlider.value + "%" +
        ") sepia(" + sepiaSlider.value + "%" +
        ") hue-rotate(" + hueRotateSlider.value + "deg" + 
		") blur(" + blurSlider.value/5 + "px" + 
		") invert(" + invertSlider.value + "%" + 
		") opacity(" + eval(100-opacitySlider.value) + "%" +
		") drop-shadow(" +shadowSlider.value +'px '+ shadowSlider.value +'px '+ 'gray'+")";
	
context.filter = filterString;	
context.clearRect(0,0,canvas.width,canvas.height);
context.clearRect(0,0,canvas.height,canvas.width);

if(cropcode==0)
context.drawImage(image,0,0);
else if(cropcode==1)
context.drawImage(image, cvi111, cvi222, cvf1-cvi1, cvf2-cvi2, 0, 0, cvf1-cvi1, cvf2-cvi2);

if(tintcode==1 && (pos==1||pos==3))
{
    brightnessSlider.value = 100;
    contrastSlider.value = 100;
    grayscaleSlider.value = 0;
    hueRotateSlider.value = 0;
    saturateSlider.value = 100;
    sepiaSlider.value = 0;
	blurSlider.value = 0;
	invertSlider.value = 0;
	opacitySlider.value= 0;
	shadowSlider.value= 0;
let filterString =
        "brightness(" + brightnessSlider.value + "%" +
        ") contrast(" + contrastSlider.value + "%" +
        ") grayscale(" + grayscaleSlider.value + "%" +
        ") saturate(" + saturateSlider.value + "%" +
        ") sepia(" + sepiaSlider.value + "%" +
        ") hue-rotate(" + hueRotateSlider.value + "deg" + 
		") blur(" + blurSlider.value/5 + "px" + 
		") invert(" + invertSlider.value + "%" + 
		") opacity(" + eval(100-opacitySlider.value) + "%" +
		") drop-shadow(" +shadowSlider.value +'px '+ shadowSlider.value +'px '+ 'gray'+")";
	
context.filter = filterString;	

inputcolor = document.getElementById('tintcolor').value;
context.fillStyle= inputcolor;
context.globalCompositeOperation = 'multiply';
context.fillRect(0, 0, canvas.width, canvas.height);   

context.globalAlpha = 1;
context.globalCompositeOperation = 'destination-in';

if(cropcode==0)
context.drawImage(image,0,0);
else if(cropcode==1)
context.drawImage(image, cvi111, cvi222, cvf1-cvi1, cvf2-cvi2, 0, 0, cvf1-cvi1, cvf2-cvi2);
}
else if(tintcode==1 && (pos==2||pos==4))
{
    brightnessSlider.value = 100;
    contrastSlider.value = 100;
    grayscaleSlider.value = 0;
    hueRotateSlider.value = 0;
    saturateSlider.value = 100;
    sepiaSlider.value = 0;
	blurSlider.value = 0;
	invertSlider.value = 0;
	opacitySlider.value= 0;
	shadowSlider.value= 0;
let filterString =
        "brightness(" + brightnessSlider.value + "%" +
        ") contrast(" + contrastSlider.value + "%" +
        ") grayscale(" + grayscaleSlider.value + "%" +
        ") saturate(" + saturateSlider.value + "%" +
        ") sepia(" + sepiaSlider.value + "%" +
        ") hue-rotate(" + hueRotateSlider.value + "deg" + 
		") blur(" + blurSlider.value/5 + "px" + 
		") invert(" + invertSlider.value + "%" + 
		") opacity(" + eval(100-opacitySlider.value) + "%" +
		") drop-shadow(" +shadowSlider.value +'px '+ shadowSlider.value +'px '+ 'gray'+")";
	
context.filter = filterString;	

inputcolor = document.getElementById('tintcolor').value;
context.fillStyle= inputcolor;
context.globalCompositeOperation = 'multiply';
context.fillRect(0, 0, canvas.height, canvas.width);   

context.globalAlpha = 1;
context.globalCompositeOperation = 'destination-in';

if(cropcode==0)
context.drawImage(image,0,0);
else if(cropcode==1)
context.drawImage(image, cvi111, cvi222, cvf1-cvi1, cvf2-cvi2, 0, 0, cvf1-cvi1, cvf2-cvi2);
}
}

function applyFilter2() {
    let filterString =
        "brightness(" + brightnessSlider.value + "%" +
        ") contrast(" + contrastSlider.value + "%" +
        ") grayscale(" + grayscaleSlider.value + "%" +
        ") saturate(" + saturateSlider.value + "%" +
        ") sepia(" + sepiaSlider.value + "%" +
        ") hue-rotate(" + hueRotateSlider.value + "deg" + 
		") blur(" + blurSlider.value/5 + "px" + 
		") invert(" + invertSlider.value + "%" + 
		") opacity(" + eval(100-opacitySlider.value) + "%" +
		") drop-shadow(" +shadowSlider.value +'px '+ shadowSlider.value +'px '+ 'gray'+")";
	
context.filter = filterString;	
canvas.width=cw;
canvas.height=ch;
context.clearRect(0,0,canvas.width,canvas.height);
context.clearRect(0,0,canvas.height,canvas.width);
context.drawImage(image,0,0);

cropcode=0;
cvi111=0;
cvi222=0;
tintcode=0;
document.getElementById('tintcolor').value='#ffffff';
}

function brightenFilter() {
    brightnessSlider.value = 130;
    contrastSlider.value = 120;
    saturateSlider.value = 120;
	blurSlider.value = 0;
	invertSlider.value = 0;	
    grayscaleSlider.value = 0;
    hueRotateSlider.value = 0; 
    sepiaSlider.value = 0;
	opacitySlider.value= 0;
	shadowSlider.value= 0;
	tintcode=0;
	
    applyFilter();
}
  
function bwFilter() {
    grayscaleSlider.value = 100;
    brightnessSlider.value = 120;
    contrastSlider.value = 120;
	blurSlider.value = 0;
	invertSlider.value = 0;
    hueRotateSlider.value = 0;
    saturateSlider.value = 100;
    sepiaSlider.value = 0;
	opacitySlider.value= 0;
	shadowSlider.value= 0;
	tintcode=0;
	
    applyFilter();
}
  
function funkyFilter() {
    hueRotateSlider.value =
    Math.floor(Math.random() * 360) + 1;
    contrastSlider.value = 120;
	blurSlider.value = 0;
	invertSlider.value = 0;
	brightnessSlider.value = 100;
    grayscaleSlider.value = 0;
    saturateSlider.value = 100;
    sepiaSlider.value = 0;
	opacitySlider.value= 0;
	shadowSlider.value= 0;
	tintcode=0;
	
    applyFilter();
}
  
function vintageFilter() {
    brightnessSlider.value = 120;
    saturateSlider.value = 120;
    sepiaSlider.value = 150;
	blurSlider.value = 0;
	invertSlider.value = 0;
	contrastSlider.value = 100;
	grayscaleSlider.value = 0;
    hueRotateSlider.value = 0;
	opacitySlider.value= 0;
	shadowSlider.value= 0;
	tintcode=0;
	
    applyFilter();
}

// Reset all the slider values to there default values
function resetImage() {
    brightnessSlider.value = 100;
    contrastSlider.value = 100;
    grayscaleSlider.value = 0;
    hueRotateSlider.value = 0;
    saturateSlider.value = 100;
    sepiaSlider.value = 0;
	blurSlider.value = 0;
	invertSlider.value = 0;
	opacitySlider.value= 0;
	shadowSlider.value= 0;
   
if(pos==1)
{
canvas.width=canvas.width;
canvas.height=canvas.height;

centerX = canvas.width;
centerY = canvas.height;
context.translate(0, 0);

applyFilter2();
pos=1;
}
else if(pos==2)
{var cwidth=canvas.width;
canvas.width=canvas.height;
canvas.height=cwidth;

centerX = canvas.width;
centerY = canvas.height;
context.translate(0, 0);
context.rotate(-360 * Math.PI / 180);

applyFilter2();
pos=1;
}
else if(pos==3)
{
canvas.width=canvas.width;
canvas.height=canvas.height;

centerX = canvas.width;
centerY = canvas.height;
context.translate(0, 0);
context.rotate(360 * Math.PI / 180);

applyFilter2();
pos=1;
}
else if(pos==4)
{var cwidth=canvas.width;
canvas.width=canvas.height;
canvas.height=cwidth;

centerX = canvas.width;
centerY = canvas.height;
context.translate(0, 0);
context.rotate(360 * Math.PI / 180);

applyFilter2();
pos=1;
}
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
	imagename2='edited_image';

    let linkElement = document.getElementById('link');
    linkElement.setAttribute(
      'download', imagename2+"."+selectedformat
    );
  
    // Convert the canvas data to a image data URL
    let canvasData = canvas4.toDataURL("image/"+selectedformat);
  
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
}

pos=1;
function flipright()
{
if(pos==1)
{var cwidth=canvas.width;
canvas.width=canvas.height;
canvas.height=cwidth;

centerX = canvas.width;
centerY = canvas.height;

context.translate(centerX, 0);
context.rotate(90 * Math.PI / 180);

context.drawImage(image, 0, 0, canvas.width, canvas.height);
pos=2;
applyFilter();
}
else if(pos==2)
{var cwidth=canvas.width;
canvas.width=canvas.height;
canvas.height=cwidth;

centerX = canvas.width;
centerY = canvas.height;
context.translate(centerX, centerY);
context.rotate(180 * Math.PI / 180);

context.drawImage(image, 0, 0, canvas.width, canvas.height);
pos=3;
applyFilter();
}
else if(pos==3)
{var cwidth=canvas.width;
canvas.width=canvas.height;
canvas.height=cwidth;

centerX = canvas.width;
centerY = canvas.height;
context.translate(0, centerY);
context.rotate(270 * Math.PI / 180);

context.drawImage(image, 0, 0, canvas.width, canvas.height);
pos=4;
applyFilter();
}
else if(pos==4)
{var cwidth=canvas.width;
canvas.width=canvas.height;
canvas.height=cwidth;

centerX = canvas.width;
centerY = canvas.height;
context.translate(0, 0);
context.rotate(360 * Math.PI / 180);

context.drawImage(image, 0, 0, canvas.width, canvas.height);
pos=1;
applyFilter();
}
}

function flipleft()
{
if(pos==1)
{var cwidth=canvas.width;
canvas.width=canvas.height;
canvas.height=cwidth;

centerX = canvas.width;
centerY = canvas.height;
context.translate(0, centerY);
context.rotate(-90 * Math.PI / 180);

context.drawImage(image, 0, 0, canvas.width, canvas.height);
pos=4;
applyFilter();
}
else if(pos==4)
{var cwidth=canvas.width;
canvas.width=canvas.height;
canvas.height=cwidth;

centerX = canvas.width;
centerY = canvas.height;
context.translate(centerX, centerY);
context.rotate(-180 * Math.PI / 180);

context.drawImage(image, 0, 0, canvas.width, canvas.height);
pos=3;
applyFilter();
}
else if(pos==3)
{var cwidth=canvas.width;
canvas.width=canvas.height;
canvas.height=cwidth;

centerX = canvas.width;
centerY = canvas.height;
context.translate(centerX, 0);
context.rotate(-270 * Math.PI / 180);

context.drawImage(image, 0, 0, canvas.width, canvas.height);
pos=2;
applyFilter();
}
else if(pos==2)
{var cwidth=canvas.width;
canvas.width=canvas.height;
canvas.height=cwidth;

centerX = canvas.width;
centerY = canvas.height;
context.translate(0, 0);
context.rotate(-360 * Math.PI / 180);

context.drawImage(image, 0, 0, canvas.width, canvas.height);
pos=1;
applyFilter();
}
}

function flip180()
{
if(pos==1)
{
canvas.width=canvas.width;
canvas.height=canvas.height;

centerX = canvas.width;
centerY = canvas.height;
context.translate(centerX, centerY);
context.rotate(180 * Math.PI / 180);

context.drawImage(image, 0, 0, canvas.width, canvas.height);
pos=3;
applyFilter();
}
else if(pos==3)
{
canvas.width=canvas.width;
canvas.height=canvas.height;

centerX = canvas.width;
centerY = canvas.height;
context.translate(0, 0);
context.rotate(360 * Math.PI / 180);

context.drawImage(image, 0, 0, canvas.width, canvas.height);
pos=1;
applyFilter();
}
else if(pos==2)
{
canvas.width=canvas.width;
canvas.height=canvas.height;

centerX = canvas.width;
centerY = canvas.height;
context.translate(0, centerY);
context.rotate(270 * Math.PI / 180);

context.drawImage(image, 0, 0, canvas.width, canvas.height);
pos=4;
applyFilter();
}
else if(pos==4)
{
canvas.width=canvas.width;
canvas.height=canvas.height;

centerX = canvas.width;
centerY = canvas.height;
context.translate(centerX, 0);
context.rotate(90 * Math.PI / 180);

context.drawImage(image, 0, 0, canvas.width, canvas.height);
pos=2;
applyFilter();
}
}

function zoominout()
{
document.getElementById('image-preview2').style.paddingTop=document.getElementById('zoominout').value*100+"px";
document.getElementById('canvas').style.transform="scale("+document.getElementById('zoominout').value+")";
}
function zoominout2()
{
document.getElementById('image-preview3').style.paddingTop=document.getElementById('zoominout2').value*100+"px";
document.getElementById('image-preview3').style.paddingLeft=document.getElementById('zoominout2').value*100+"px";
document.getElementById('canvas2').style.transform="scale("+document.getElementById('zoominout2').value+")";
document.getElementById('canvas3').style.transform="scale("+document.getElementById('zoominout2').value+")";
}

setInterval(function()
{
document.getElementById('heightwidth').innerHTML="width: "+canvas.width+"px   "+"height: "+canvas.height+"px";
document.getElementById('resizeinfo2').innerHTML="Current width: "+canvas2.width+"px<br> Current height: "+canvas2.height+"px";
},100);

function resizeimage()
{
document.getElementById('cropbox').style.display="none";
document.getElementById('resizebox').style.display="block";
document.getElementById('resizeinfo').innerHTML="Original width: "+cw+"px<br>Original height: "+ch+"px<br><br>"+"Current width: "+canvas4.width+"px<br> Current height: "+canvas4.height+"px";
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

context4.clearRect(0,0,canvas4.width,canvas4.height);
context4.clearRect(0,0,canvas4.height,canvas4.width);
canvas4.height=rvh;
canvas4.width=rvw;
context4.drawImage(canvas,0,0,rvw,rvh);
}
}

function cropimage()
{
document.getElementById('cvi').innerHTML='? , ?';
document.getElementById('cvf').innerHTML='? , ?';
document.getElementById('heightwidth3').innerHTML='New width: ?   New height: ?';

canvas2.width = canvas.width;
canvas2.height = canvas.height;
canvas3.width = canvas.width;
canvas3.height = canvas.height;

document.getElementById('savebox').style.display="none";
document.getElementById('cropbox').style.display="block";

if(pos==2)
{
canvas2.width=canvas.height;
canvas2.height=canvas.width;
canvas3.width=canvas.height;
canvas3.height=canvas.width;

centerX = canvas2.width;
centerY = canvas2.height;
context2.translate(0, centerY);
context2.rotate(-90 * Math.PI / 180);
}
else if(pos==3)
{
canvas2.width = canvas.width;
canvas2.height = canvas.height;
canvas3.width = canvas.width;
canvas3.height = canvas.height;

centerX = canvas2.width;
centerY = canvas2.height;
context2.translate(centerX, centerY);
context2.rotate(-180 * Math.PI / 180);
}
else if(pos==4)
{
canvas2.width=canvas.height;
canvas2.height=canvas.width;
canvas3.width=canvas.height;
canvas3.height=canvas.width;

centerX = canvas2.width;
centerY = canvas2.height;
context2.translate(centerX, 0);
context2.rotate(-270 * Math.PI / 180);
}

context2.drawImage(canvas,0,0);
context3.setLineDash([8, 8]);
var origin = null;
canvas3.onmousedown = e => { origin = {x: e.offsetX, y: e.offsetY}; };
window.onmouseup = e => { origin = null; };
canvas3.onmousemove = e => { 
    if (!!origin) { 
        context3.strokeStyle = "lime";
        context3.clearRect(0, 0, canvas3.width, canvas3.height);
        context3.beginPath();
        context3.rect(origin.x, origin.y, e.offsetX - origin.x, e.offsetY - origin.y); 
        context3.stroke(); 
		context3.lineWidth = 1/document.getElementById('zoominout2').value*3;
	
cvi1=Number(origin.x);
cvi2=Number(origin.y);
cvf1=Number(e.offsetX);
cvf2=Number(e.offsetY);

document.getElementById('heightwidth3').innerHTML='New width: '+Math.abs(eval(cvf1-cvi1))+'px   '+'New height: '+Math.abs(eval(cvf2-cvi2))+'px';

document.getElementById('cvi').innerHTML=origin.x+' , '+origin.y;
document.getElementById('cvf').innerHTML=e.offsetX+' , '+e.offsetY;
} 
};
}

function cropback()
{
document.getElementById('cropbox').style.display="none";
}

function cropimage2()
{
if(document.getElementById('cvi').innerHTML=='? , ?')
	alert('Please Drag & Drop crosshair in canvas in order to select crop area!');
else
{
if(cvf2<cvi2)
{var cvi22=cvf2;
cvf2=cvi2;
cvi2=cvi22;}
if(cvf1<cvi1)
{var cvi11=cvf1;
cvf1=cvi1;
cvi1=cvi11;}

canvas.height=cvf2-cvi2;
canvas.width=cvf1-cvi1;

cvi111=cvi111+cvi1;
cvi222=cvi222+cvi2;

document.getElementById('cropbox').style.display="none";

cropcode=1;
pos=1;
applyFilter();
}
}

function tintcolor()
{
tintcode=1;
applyFilter();
flipleft();
flipright();
}

function dispsaveImage()
{
document.getElementById('cropbox').style.display="none";
document.getElementById('savebox').style.display="block";
canvas4.height=canvas.height;
canvas4.width=canvas.width;
document.getElementById('imagedimension').innerHTML="width: "+canvas4.width+"px   height: "+canvas4.height+"px";

context4.drawImage(canvas,0,0);
}

function saveback()
{
document.getElementById('savebox').style.display="none";
}

function tintremove()
{
tintcode=0;
flipleft();
flipright();
}