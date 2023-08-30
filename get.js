var heading=document.getElementById("head");
var decbtn=document.getElementById("btn-decrease");
var inbtn=document.getElementById("btn-increase");
var initialfnt=window.getComputedStyle(heading).fontSize;
initialfnt=parseInt(initialfnt.substring(0,(initialfnt.length-2)));
console.log(initialfnt);
inbtn.onclick = function () {
    initialfnt += 10;
    heading.style.fontSize=initialfnt+"px";
}
decbtn.onclick = function () {
    initialfnt -= 10;
    heading.style.fontSize=initialfnt+"px";
}