let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let volume_slider = document.querySelector(".volume_slider");

let track_index = 0;
let isPlaying = false;

let playrate=1;

// Create new audio element
audiop = document.getElementById("audiop");

track_list = [
  {
    name: "Counting Stars",
    artist: "One Republic",
    image: "headphone.png",
    path: "Music/countingstars.mp3"
  },
  {
    name: "I Took a Pill in Ibiza",
    artist: "Mike Posner",
    image: "musicicon2.jpg",
    path: "Music/ibiza.mp3"
  },
  {
    name: "Dancing",
    artist: "Aaron Smith",
    image: "disc3.gif",
    path: "Music/dancing.m4a",
  },
   {
    name: "Skyfall",
    artist: "Adele",
    image: "headphone.png",
    path: "Music/Skyfall.mp3"
  },
  {
    name: "Faded",
    artist: "Alan Walker",
    image: "musicicon2.jpg",
    path: "Music/Alan Walker - Faded_256k.mp3"
  },
  {
    name: "All of Me",
    artist: "John Legend",
    image: "disc3.gif",
    path: "Music/All of Me - John Legend (Lyrics)_256k.mp3",
  },
  {
    name: "Do I Wanna Know",
    artist: "Arctic Monkeys",
    image: "headphone.png",
    path: "Music/Arctic Monkeys - Do I Wanna Know_ (Official Video)_256k.mp3"
  },
  {
    name: "As long As You Love Me",
    artist: "Justin Bieber",
    image: "musicicon2.jpg",
    path: "Music/As Long As You Love Me - Justin Bieber ft. Big Sean - Official Lyrics.m4a"
  },
  {
    name: "Lying from You",
    artist: "Linkin Park",
    image: "disc3.gif",
    path: "Music/Avengers Infinity War x Linkin Park - Lying From You_256k.mp3",
  },
  {
    name: "Summer",
    artist: "Calvin Harris",
    image: "headphone.png",
    path: "Music/Calvin Harris - Summer (Official Video)_256k.mp3"
  },
  {
    name: "Safe and Sound",
    artist: "Capital Cities",
    image: "musicicon2.jpg",
    path: "Music/Capital Cities - Safe And Sound (Official Music Video)_256k.mp3"
  },
  {
    name: "The King of The Highlands",
    artist: "Celtic",
    image: "disc3.gif",
    path: "Music/Celtic battle music - The King of The Highlands_256k.mp3",
  },
  {
    name: "Rap God",
    artist: "Eminem",
    image: "headphone.png",
    path: "Music/Eminem - Rap God (Explicit).m4a"
  },
  {
    name: "Adventure of a Lifetime",
    artist: "Coldplay",
    image: "musicicon2.jpg",
    path: "Music/Coldplay - Adventure Of A Lifetime (Official Video)_256k.mp3"
  },
  {
    name: "E.T",
    artist: "Katy Perry",
    image: "disc3.gif",
    path: "Music/E.T- Katy Perry Lyrics (without Kayne West)_256k.mp3",
  },
  {
    name: "Shape of You",
    artist: "Ed Sheeran",
    image: "headphone.png",
    path: "Music/Ed Sheeran - Shape of You (Official Music Video)_256k.mp3"
  },
  {
    name: "Sandstrom",
    artist: "Darube",
    image: "musicicon2.jpg",
    path: "Music/Darude - Sandstorm.m4a"
  },
  {
    name: "Paris",
    artist: "Else",
    image: "disc3.gif",
    path: "Music/Else - Paris.m4a",
  },
  {
    name: "Till I Collapse",
    artist: "Eminem",
    image: "headphone.png",
    path: "Music/Eminem Till I Collapse Remix (Karate Kid Music Video) - OFFICIAL_256k.mp3"
  },
  {
    name: "Centuries",
    artist: "Fall Out Boy",
    image: "musicicon2.jpg",
    path: "Music/Fall Out Boy - Centuries (Official Music Video)_256k.mp3"
  },
  {
    name: "Unforgettable",
    artist: "French Montana",
    image: "disc3.gif",
    path: "Music/French Montana - Unforgettable ft. Swae Lee_256k.mp3",
  },
  {
    name: "Animals",
    artist: "Martin Garrix",
    image: "headphone.png",
    path: "Music/Martin Garrix - Animals (Official Video)_256k.mp3"
  },
  {
    name: "Radioactive",
    artist: "Imagine Dragons",
    image: "musicicon2.jpg",
    path: "Music/Imagine Dragons - Radioactive_256k.mp3"
  },
  {
    name: "Take Me To Church",
    artist: "Hozier",
    image: "disc3.gif",
    path: "Music/Hozier - Take Me To Church (Official Video)_256k.mp3",
  },
  {
    name: "Love Me Again",
    artist: "John Newman",
    image: "headphone.png",
    path: "Music/John Newman - Love Me Again_256k.mp3"
  },
  {
    name: "Uptown Funk",
    artist: "Bruno Mars",
    image: "musicicon2.jpg",
    path: "Music/Mark Ronson - Uptown Funk (Official Video) ft. Bruno Mars_256k.mp3"
  },
  {
    name: "Firestone",
    artist: "Kygo",
    image: "disc3.gif",
    path: "Music/Kygo - Firestone ft. Conrad Sewell (Official Video)_256k.mp3",
  },
  {
    name: "Summertime Sadness",
    artist: "Lana Del Rey",
    image: "headphone.png",
    path: "Music/Lana Del Rey - Summertime Sadness (Official Music Video)_256k.mp3"
  },
  {
    name: "In The End (Remix)",
    artist: "Linkin Park",
    image: "musicicon2.jpg",
    path: "Music/Linkin Park - In The End (Mellen Gi & Tommee Profitt Remix)_256k.mp3"
  },
  {
    name: "Despacito",
    artist: "Luis Fonsi",
    image: "disc3.gif",
    path: "Music/Luis Fonsi - Despacito ft. Daddy Yankee_256k.mp3",
  },
];

function random_bg_color() {

  // Get a number between 64 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;

  // Construct a color withe the given values
  bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Set the background to that color
  document.body.style.background = bgColor;
}

function loadTrack(track_index) {
  audiop.src = track_list[track_index].path;
  audiop.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  random_bg_color();
}

// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) 
  {playTrack();
  }
  else 
  {pauseTrack();
  }
}

function playTrack() {
  audiop.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  audiop.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function setVolume() {
  audiop.volume = volume_slider.value / 100;
}

window.onload = function() {
  
  var file = document.getElementById("inputTag");
  var audio = document.getElementById("audio");

    file.onchange = function() {
    var files = this.files;
    audio.src = URL.createObjectURL(files[0]);
    audio.load();
    audio.play();
    var context = new AudioContext();
    var src = context.createMediaElementSource(audio);
    var analyser = context.createAnalyser();

    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;

    var bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);

    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    var barWidth = (WIDTH / bufferLength) * 2.52;
    var barHeight;
    var x = 0;

    function renderFrame() {
      requestAnimationFrame(renderFrame);

      x = 0;

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      for (var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        
        var r = barHeight + (25 * (i/bufferLength));
        var g = 250 * (i/bufferLength);
        var b = 50;

        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    }

    audio.play();
    renderFrame();
  };
}

function custommusic()
{
pauseTrack();
document.getElementById('defaultmusic').style.display="none";
document.getElementById('custommusic').style.display="block";
}

function playpause()
{
var audio = document.getElementById('audio');
if(audio.paused)
audio.play();
else
audio.pause();
}

function playpause2()
{
if(isPlaying==true)
pauseTrack();
else
playTrack();
}

function trackname()
{
var music = document.getElementById('inputTag').value;
var music2 = music.toString();
music3 = music2.substr(12,music2.length-16);
document.getElementById('trackname').innerHTML= music3;
if(music=='')
{document.getElementById('trackname').innerHTML= music4;
document.getElementById('audio').play();
}
}

setInterval(function()
{
document.getElementById('adownload').setAttribute('download',track_list[track_index].name);
document.getElementById('adownload').setAttribute('href',track_list[track_index].path);

audiop.playbackRate=playrate;
},10);

function nextmusic()
{
if(repeatcode2==2 && track_index!=0)
{
prevTrack();
nextTrack();
}
 
else if(repeatcode2==2 && track_index==0)
{
nextTrack();
prevTrack();
}

else if(repeatcode2==1)
{nextTrack();
}
}

function sb1()
{
playrate=0.25;
document.getElementById('sb1').innerHTML="0.25"+'<b style="color:blue;"> ✓<b>';
document.getElementById('sb2').innerHTML="0.5";
document.getElementById('sb3').innerHTML="0.75";
document.getElementById('sb4').innerHTML="1";
document.getElementById('sb5').innerHTML="1.25";
document.getElementById('sb6').innerHTML="1.5";
document.getElementById('sb7').innerHTML="1.75";
document.getElementById('sb8').innerHTML="2";
document.getElementById('speedlist').style.display="none";
}
function sb2()
{
playrate=0.5;
document.getElementById('sb1').innerHTML="0.25";
document.getElementById('sb2').innerHTML="0.5"+'<b style="color:blue;"> ✓<b>';
document.getElementById('sb3').innerHTML="0.75";
document.getElementById('sb4').innerHTML="1";
document.getElementById('sb5').innerHTML="1.25";
document.getElementById('sb6').innerHTML="1.5";
document.getElementById('sb7').innerHTML="1.75";
document.getElementById('sb8').innerHTML="2";
document.getElementById('speedlist').style.display="none";
}
function sb3()
{
playrate=0.75;
document.getElementById('sb1').innerHTML="0.25";
document.getElementById('sb2').innerHTML="0.5";
document.getElementById('sb3').innerHTML="0.75"+'<b style="color:blue;"> ✓<b>';
document.getElementById('sb4').innerHTML="1";
document.getElementById('sb5').innerHTML="1.25";
document.getElementById('sb6').innerHTML="1.5";
document.getElementById('sb7').innerHTML="1.75";
document.getElementById('sb8').innerHTML="2";
document.getElementById('speedlist').style.display="none";
}
function sb4()
{
playrate=1;
document.getElementById('sb1').innerHTML="0.25";
document.getElementById('sb2').innerHTML="0.5";
document.getElementById('sb3').innerHTML="0.75";
document.getElementById('sb4').innerHTML="1"+'<b style="color:blue;"> ✓<b>';
document.getElementById('sb5').innerHTML="1.25";
document.getElementById('sb6').innerHTML="1.5";
document.getElementById('sb7').innerHTML="1.75";
document.getElementById('sb8').innerHTML="2";
document.getElementById('speedlist').style.display="none";
}
function sb5()
{
playrate=1.25;
document.getElementById('sb1').innerHTML="0.25";
document.getElementById('sb2').innerHTML="0.5";
document.getElementById('sb3').innerHTML="0.75";
document.getElementById('sb4').innerHTML="1";
document.getElementById('sb5').innerHTML="1.25"+'<b style="color:blue;"> ✓<b>';
document.getElementById('sb6').innerHTML="1.5";
document.getElementById('sb7').innerHTML="1.75";
document.getElementById('sb8').innerHTML="2";
document.getElementById('speedlist').style.display="none";
}
function sb6()
{
playrate=1.5;
document.getElementById('sb1').innerHTML="0.25";
document.getElementById('sb2').innerHTML="0.5";
document.getElementById('sb3').innerHTML="0.75";
document.getElementById('sb4').innerHTML="1";
document.getElementById('sb5').innerHTML="1.25";
document.getElementById('sb6').innerHTML="1.5"+'<b style="color:blue;"> ✓<b>';
document.getElementById('sb7').innerHTML="1.75";
document.getElementById('sb8').innerHTML="2";
document.getElementById('speedlist').style.display="none";
}
function sb7()
{
playrate=1.75;
document.getElementById('sb1').innerHTML="0.25";
document.getElementById('sb2').innerHTML="0.5";
document.getElementById('sb3').innerHTML="0.75";
document.getElementById('sb4').innerHTML="1";
document.getElementById('sb5').innerHTML="1.25";
document.getElementById('sb6').innerHTML="1.5";
document.getElementById('sb7').innerHTML="1.75"+'<b style="color:blue;"> ✓<b>';
document.getElementById('sb8').innerHTML="2";
document.getElementById('speedlist').style.display="none";
}
function sb8()
{
playrate=2;
document.getElementById('sb1').innerHTML="0.25";
document.getElementById('sb2').innerHTML="0.5";
document.getElementById('sb3').innerHTML="0.75";
document.getElementById('sb4').innerHTML="1";
document.getElementById('sb5').innerHTML="1.25";
document.getElementById('sb6').innerHTML="1.5";
document.getElementById('sb7').innerHTML="1.75";
document.getElementById('sb8').innerHTML="2"+'<b style="color:blue;"> ✓<b>';
document.getElementById('speedlist').style.display="none";
}

function dispspeed()
{
document.getElementById('musiclist').style.display="none";
document.getElementById('speedlist').style.display="block";
}
function dispspeedback()
{
document.getElementById('speedlist').style.display="none";
}

var repeatcode=1;
var repeatcode2=1;
function repeatfunc()
{
if(repeatcode==2)
{
repeatcode=1;
repeatcode2=1;
document.getElementById('repeat').innerHTML="Repeat:no";
}
else if(repeatcode==1)
{
repeatcode=2;
repeatcode2=2;
document.getElementById('repeat').innerHTML="Repeat:yes";
}
}

function listfunc()
{
document.getElementById('speedlist').style.display="none";
document.getElementById('musiclist').style.display="block";

if(track_index==0)
document.getElementById('vc1').style.display="block";
else
document.getElementById('vc1').style.display="none";

if(track_index==1)
document.getElementById('vc2').style.display="block";
else
document.getElementById('vc2').style.display="none";

if(track_index==2)
document.getElementById('vc3').style.display="block";
else
document.getElementById('vc3').style.display="none";

if(track_index==3)
document.getElementById('vc4').style.display="block";
else
document.getElementById('vc4').style.display="none";

if(track_index==4)
document.getElementById('vc5').style.display="block";
else
document.getElementById('vc5').style.display="none";

if(track_index==5)
document.getElementById('vc6').style.display="block";
else
document.getElementById('vc6').style.display="none";

if(track_index==6)
document.getElementById('vc7').style.display="block";
else
document.getElementById('vc7').style.display="none";

if(track_index==7)
document.getElementById('vc8').style.display="block";
else
document.getElementById('vc8').style.display="none";

if(track_index==8)
document.getElementById('vc9').style.display="block";
else
document.getElementById('vc9').style.display="none";

if(track_index==9)
document.getElementById('vc10').style.display="block";
else
document.getElementById('vc10').style.display="none";

if(track_index==10)
document.getElementById('vc11').style.display="block";
else
document.getElementById('vc11').style.display="none";

if(track_index==11)
document.getElementById('vc12').style.display="block";
else
document.getElementById('vc12').style.display="none";

if(track_index==12)
document.getElementById('vc13').style.display="block";
else
document.getElementById('vc13').style.display="none";

if(track_index==13)
document.getElementById('vc14').style.display="block";
else
document.getElementById('vc14').style.display="none";

if(track_index==14)
document.getElementById('vc15').style.display="block";
else
document.getElementById('vc15').style.display="none";

if(track_index==15)
document.getElementById('vc16').style.display="block";
else
document.getElementById('vc16').style.display="none";

if(track_index==16)
document.getElementById('vc17').style.display="block";
else
document.getElementById('vc17').style.display="none";

if(track_index==17)
document.getElementById('vc18').style.display="block";
else
document.getElementById('vc18').style.display="none";

if(track_index==18)
document.getElementById('vc19').style.display="block";
else
document.getElementById('vc19').style.display="none";

if(track_index==19)
document.getElementById('vc20').style.display="block";
else
document.getElementById('vc20').style.display="none";

if(track_index==20)
document.getElementById('vc21').style.display="block";
else
document.getElementById('vc21').style.display="none";

if(track_index==21)
document.getElementById('vc22').style.display="block";
else
document.getElementById('vc22').style.display="none";

if(track_index==22)
document.getElementById('vc23').style.display="block";
else
document.getElementById('vc23').style.display="none";

if(track_index==23)
document.getElementById('vc24').style.display="block";
else
document.getElementById('vc24').style.display="none";

if(track_index==24)
document.getElementById('vc25').style.display="block";
else
document.getElementById('vc25').style.display="none";

if(track_index==25)
document.getElementById('vc26').style.display="block";
else
document.getElementById('vc26').style.display="none";

if(track_index==26)
document.getElementById('vc27').style.display="block";
else
document.getElementById('vc27').style.display="none";

if(track_index==27)
document.getElementById('vc28').style.display="block";
else
document.getElementById('vc28').style.display="none";

if(track_index==28)
document.getElementById('vc29').style.display="block";
else
document.getElementById('vc29').style.display="none";

if(track_index==29)
document.getElementById('vc30').style.display="block";
else
document.getElementById('vc30').style.display="none";

}
function dispmusiclistback()
{
document.getElementById('musiclist').style.display="none";
}

function smb1()
{
track_index=0;
document.getElementById('musiclist').style.display="none";

  audiop.src = track_list[track_index].path;
  audiop.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  random_bg_color();
  playTrack();
}

function smb2()
{
track_index=1;
document.getElementById('musiclist').style.display="none";

  audiop.src = track_list[track_index].path;
  audiop.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  random_bg_color();
  playTrack();
}

function smb3()
{
track_index=2;
document.getElementById('musiclist').style.display="none";

  audiop.src = track_list[track_index].path;
  audiop.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  random_bg_color();
  playTrack();
}

function smb4()
{
track_index=3;
document.getElementById('musiclist').style.display="none";

  audiop.src = track_list[track_index].path;
  audiop.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  random_bg_color();
  playTrack();
}

function smb5()
{
track_index=4;
document.getElementById('musiclist').style.display="none";

  audiop.src = track_list[track_index].path;
  audiop.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  random_bg_color();
  playTrack();
}

function smb6()
{
track_index=5;
document.getElementById('musiclist').style.display="none";

  audiop.src = track_list[track_index].path;
  audiop.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  random_bg_color();
  playTrack();
}

function smb7()
{
track_index=6;
document.getElementById('musiclist').style.display="none";

  audiop.src = track_list[track_index].path;
  audiop.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  random_bg_color();
  playTrack();
}

function smb8()
{
track_index=7;
document.getElementById('musiclist').style.display="none";

  audiop.src = track_list[track_index].path;
  audiop.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  random_bg_color();
  playTrack();
}

function smb9()
{
track_index=8;
document.getElementById('musiclist').style.display="none";

  audiop.src = track_list[track_index].path;
  audiop.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  random_bg_color();
  playTrack();
}

function smb10()
{
track_index=9;
document.getElementById('musiclist').style.display="none";

  audiop.src = track_list[track_index].path;
  audiop.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  random_bg_color();
  playTrack();
}

function smb11()
{
track_index=10;
document.getElementById('musiclist').style.display="none";

  audiop.src = track_list[track_index].path;
  audiop.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  random_bg_color();
  playTrack();
}

function smb12()
{
track_index=11;
document.getElementById('musiclist').style.display="none";

  audiop.src = track_list[track_index].path;
  audiop.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  random_bg_color();
  playTrack();
}

function smb13()
{
track_index=12;
document.getElementById('musiclist').style.display="none";

  audiop.src = track_list[track_index].path;
  audiop.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  random_bg_color();
  playTrack();
}

function smb14()
{
track_index=13;
document.getElementById('musiclist').style.display="none";

  audiop.src = track_list[track_index].path;
  audiop.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  random_bg_color();
  playTrack();
}

function smb15()
{
track_index=14;
document.getElementById('musiclist').style.display="none";

  audiop.src = track_list[track_index].path;
  audiop.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  random_bg_color();
  playTrack();
}

function smb16()
{
track_index=15;
document.getElementById('musiclist').style.display="none";

  audiop.src = track_list[track_index].path;
  audiop.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  random_bg_color();
  playTrack();
}

function smb17()
{
track_index=16;
document.getElementById('musiclist').style.display="none";

  audiop.src = track_list[track_index].path;
  audiop.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  random_bg_color();
  playTrack();
}

function smb18()
{
track_index=17;
document.getElementById('musiclist').style.display="none";

  audiop.src = track_list[track_index].path;
  audiop.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  random_bg_color();
  playTrack();
}

function smb19()
{
track_index=18;
document.getElementById('musiclist').style.display="none";

  audiop.src = track_list[track_index].path;
  audiop.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  random_bg_color();
  playTrack();
}

function smb20()
{
track_index=19;
document.getElementById('musiclist').style.display="none";

  audiop.src = track_list[track_index].path;
  audiop.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  random_bg_color();
  playTrack();
}

function smb21()
{
track_index=20;
document.getElementById('musiclist').style.display="none";

  audiop.src = track_list[track_index].path;
  audiop.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  random_bg_color();
  playTrack();
}

function smb22()
{
track_index=21;
document.getElementById('musiclist').style.display="none";

  audiop.src = track_list[track_index].path;
  audiop.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  random_bg_color();
  playTrack();
}

function smb23()
{
track_index=22;
document.getElementById('musiclist').style.display="none";

  audiop.src = track_list[track_index].path;
  audiop.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  random_bg_color();
  playTrack();
}

function smb24()
{
track_index=23;
document.getElementById('musiclist').style.display="none";

  audiop.src = track_list[track_index].path;
  audiop.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  random_bg_color();
  playTrack();
}

function smb25()
{
track_index=24;
document.getElementById('musiclist').style.display="none";

  audiop.src = track_list[track_index].path;
  audiop.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  random_bg_color();
  playTrack();
}

function smb26()
{
track_index=25;
document.getElementById('musiclist').style.display="none";

  audiop.src = track_list[track_index].path;
  audiop.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  random_bg_color();
  playTrack();
}

function smb27()
{
track_index=26;
document.getElementById('musiclist').style.display="none";

  audiop.src = track_list[track_index].path;
  audiop.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  random_bg_color();
  playTrack();
}

function smb28()
{
track_index=27;
document.getElementById('musiclist').style.display="none";

  audiop.src = track_list[track_index].path;
  audiop.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  random_bg_color();
  playTrack();
}

function smb29()
{
track_index=28;
document.getElementById('musiclist').style.display="none";

  audiop.src = track_list[track_index].path;
  audiop.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  random_bg_color();
  playTrack();
}

function smb30()
{
track_index=29;
document.getElementById('musiclist').style.display="none";

  audiop.src = track_list[track_index].path;
  audiop.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;
 
  random_bg_color();
  playTrack();
}

function customback()
{
document.getElementById('audio').pause();
document.getElementById('defaultmusic').style.display="block";
document.getElementById('custommusic').style.display="none";
}

function musicfunc()
{
music4 = music3;
}
