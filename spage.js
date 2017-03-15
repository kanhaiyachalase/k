document.getElementById("spage").style.height = screen.height*(0.5) + "px";

document.getElementById("edutitle").style.paddingTop=screen.height*(0.8)*(0.1)+"px";
document.getElementById("edutitle").style.paddingLeft=screen.width*(0.49)*(0.1)+"px";
document.getElementById("edutitle").style.paddingRight=screen.width*(0.49)*(0.1)+"px";

document.getElementById("tafs").style.paddingTop=screen.height*(0.8)*(0.01)+"px";
document.getElementById("tafs").style.paddingLeft=screen.width*(0.49)*(0.11)+"px";
document.getElementById("tafs").style.paddingRight=screen.width*(0.49)*(0.11)+"px";
document.getElementById("tafs").style.height = screen.height*(0.8)*(0.18) + "px";

document.getElementById("highschool").style.lineHeight = screen.height*(0.8)*(0.18) + "px";

document.getElementById("s1").style.paddingLeft=screen.width*(0.49)*(0.01)+"px";
document.getElementById("s2").style.paddingLeft=screen.width*(0.49)*(0.01)+"px";

document.getElementById("school").style.width = screen.width*(0.49)*(0.67) + "px";





document.getElementById("nsit").style.paddingTop=screen.height*(0.8)*(0.01)+"px";
document.getElementById("nsit").style.paddingLeft=screen.width*(0.49)*(0.11)+"px";
document.getElementById("nsit").style.paddingRight=screen.width*(0.49)*(0.11)+"px";
document.getElementById("nsit").style.height = screen.height*(0.8)*(0.18) + "px";

document.getElementById("grad").style.lineHeight = screen.height*(0.8)*(0.18) + "px";

document.getElementById("c1").style.paddingLeft=screen.width*(0.49)*(0.01)+"px";
document.getElementById("c2").style.paddingLeft=screen.width*(0.49)*(0.01)+"px";

document.getElementById("college").style.width = screen.width*(0.49)*(0.67) + "px";



var cc = document.getElementById("cc");
var sc = document.getElementById("sc");

cc.style.height = "150px";
cc.style.width  = "310px";

sc.style.height = "150px";
sc.style.width  = "310px";



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
hp.style.paddingLeft=screen.width*(0.61)+"px";

var fp = document.getElementById("fp");

fp.style.paddingTop = screen.height*(0.239) + "px";
fp.style.paddingLeft=screen.width*(0.86)+"px";