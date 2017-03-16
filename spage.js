






var cc = document.getElementById("cc");
var sc = document.getElementById("sc");




var ctx = cc.getContext("2d");
ctx.beginPath();
ctx.lineWidth=2;
ctx.strokeStyle="rgba(255,255,255,0.7)";
ctx.arc(150, 75, 50, -Math.PI/2, Math.PI/2);
ctx.stroke();


var ctx = sc.getContext("2d");
ctx.beginPath();
ctx.lineWidth=2;
ctx.strokeStyle="rgba(255,255,255,0.7)";
ctx.arc(150, 75, 50, 0, 2*Math.PI);
ctx.stroke();


var ccd = document.getElementById("ccd");
var scd = document.getElementById("scd");
ccd.style.paddingTop = screen.height*(0.15) + "px";
scd.style.paddingTop = screen.height*(0.15) + "px";



var hp = document.getElementById("hp");

hp.style.paddingTop = screen.height*(0.239) + "px";

var fp = document.getElementById("fp");

fp.style.paddingTop = screen.height*(0.239) + "px";






