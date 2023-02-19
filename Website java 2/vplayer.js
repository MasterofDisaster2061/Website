video=document.getElementById('video');
disptimeout=null;

  function uploadvideo(event) 
  {
  video.src = URL.createObjectURL(event.target.files[0]);
  video.play();
 
  document.getElementById('initialtext').style.display="none";
  document.getElementById('vidnav').style.display="block";
  document.getElementById('forwardvid').style.display="block";
  document.getElementById('rewindvid').style.display="block";
  
  vidname=(document.getElementById('vidinput').value).toString();
  document.getElementById('vidname').value=vidname.substr(12,vidname.length-16);
  }
  
// rewind the current time
function rewind() 
{
    video.currentTime = video.currentTime - 15;
	
if(document.fullscreenElement) 
{
if(disptimeout!=null)
clearTimeout(disptimeout);
disptimeout=setTimeout(dispnavback,2600);
}

}
// forward the current time
function forward() 
{
    video.currentTime = video.currentTime + 15;
	
if(document.fullscreenElement) 
{
if(disptimeout!=null)
clearTimeout(disptimeout);
disptimeout=setTimeout(dispnavback,2600);
}

}

document.getElementById('imageset').onclick=function()
{
if(document.getElementById('imagesetbox').style.display!="block")
document.getElementById('imagesetbox').style.display="block";
else
imagesetback();
}

function imagesetback()
{
document.getElementById('imagesetbox').style.display="none";	
}

let brightnessSlider = document.getElementById("brightnessSlider");
let contrastSlider = document.getElementById("contrastSlider");
let grayscaleSlider = document.getElementById("grayscaleSlider");
let hueRotateSlider = document.getElementById("hueRotateSlider");
let saturateSlider = document.getElementById("saturationSlider");
let sepiaSlider = document.getElementById("sepiaSlider");
let blurSlider = document.getElementById("blurSlider");
let invertSlider = document.getElementById("invertSlider");

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
		")";
	
video.style.filter = filterString;	
document.getElementById('imagesetbox').style.background="rgb(255,255,255,0.5)";
}

window.addEventListener('mouseup',function()
{
document.getElementById('imagesetbox').style.background="rgb(255,255,255,1)";
}
)

function resetImage()
{
    brightnessSlider.value = 100;
    contrastSlider.value = 100;
    grayscaleSlider.value = 0;
    hueRotateSlider.value = 0;
    saturateSlider.value = 100;
    sepiaSlider.value = 0;
	blurSlider.value = 0;
	invertSlider.value = 0;
applyFilter();
document.getElementById('imagesetbox').style.background="rgb(255,255,255,1)";
}

isPlaying=false;
function playpause()
{
if (isPlaying) {
    video.pause();
	document.getElementById('p1').style.display="none";
	document.getElementById('p2').style.display="block";
  } else {
    video.play();
	document.getElementById('p1').style.display="block";
	document.getElementById('p2').style.display="none";
  }
  isPlaying = !isPlaying;
}

const playbackAnimation = document.getElementById('playback-animation');
function animatePlayback() {
  playbackAnimation.animate([
    {
      opacity: 1,
      transform: "scale(1)",
    },
    {
      opacity: 0,
      transform: "scale(1.3)",
    }], {
    duration: 500,
  });
}
video.addEventListener('click', animatePlayback);

setInterval(function()
{
if(video.paused)
	isPlaying=false;
else
	isPlaying=true;
},100);

document.getElementById('display').onclick=function()
{
if(document.fullscreenElement) 
{
document.exitFullscreen();
document.getElementById('display').setAttribute('src','fullscreen.jpg');
document.getElementById('display').setAttribute('title','Full-screen');
if(disptimeout!=null)
clearTimeout(disptimeout);
}
else
{
document.getElementById('videocontainer').requestFullscreen();
document.getElementById('display').setAttribute('src','fullscreenback.jpg');
document.getElementById('display').setAttribute('title','Minimize-screen');
disptimeout=setTimeout(dispnavback,2600);
}
}

function fullmin()
{
if(document.getElementById('initialtext').style.display=='none')
{
if(document.fullscreenElement) 
{
document.exitFullscreen();
document.getElementById('display').setAttribute('src','fullscreen.jpg');
document.getElementById('display').setAttribute('title','Full-screen');
if(disptimeout!=null)
clearTimeout(disptimeout);
}
else
{
document.getElementById('videocontainer').requestFullscreen();
document.getElementById('display').setAttribute('src','fullscreenback.jpg');
document.getElementById('display').setAttribute('title','Minimize-screen');
disptimeout=setTimeout(dispnavback,2600);
}
}
else return false;
}

document.addEventListener('mousemove',function()
{
if(document.fullscreenElement && document.getElementById('vidnav').style.display=="block") 
{
if(disptimeout!=null)
clearTimeout(disptimeout);
disptimeout=setTimeout(dispnavback,2600);
}

else if(document.fullscreenElement && document.getElementById('vidnav').style.display=="none")
{
document.getElementById('vidnav').style.display="block";
document.getElementById('forwardvid').style.display="block";
document.getElementById('rewindvid').style.display="block";
}
});

function dispnavback()
{
document.getElementById('vidnav').style.display="none";
document.getElementById('forwardvid').style.display="none";
document.getElementById('rewindvid').style.display="none";
}
