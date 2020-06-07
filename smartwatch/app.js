function time()
{
var d=new Date();
var time=d.toLocaleTimeString();
document.getElementById("time").innerText=time;
}
function message()
{
  document.getElementById("home").style.display="block"
  document.getElementById("time").innerText="Hola"
}
// var x = document.getElementById("myAudio"); 

function playAudio() {
//   var x = document.getElementById("myAudio"); 
//   x.play(); 
document.getElementById("time").innerHTML+='<iframe class="audio"src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" frameborder-radius="15" allowtransparency="true" allow="encrypted-media"></iframe>';

} 
//var myTimer = setInterval(myClock, 1000);
function myClock() {
  var myTimer = setInterval(myClock, 1000);
  document.getElementById("time").innerHTML = new Date().toLocaleTimeString();
  var myTimer=clearInterval(myClock);
}

