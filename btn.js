var btn=document.getElementById("Clk");
var headercolor=document.querySelector("body")
function clicks(){
    var rand=Math.floor(Math.random()*255);
    
     headercolor.style.backgroundColor="rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")"
 }
// btn.onclick= clicks;
// btn.addEventListener("clicked",function(){
//     alert("success")
// })
btn.addEventListener("click",clicks);
var mainhead=document.getElementById("head");
console.log(mainhead.classList);
//add class big
mainhead.classList.add("big");
//remove class
var btn2=document.getElementById("clicked");
function double(){
    mainhead.classList.remove("big");
}
btn2.addEventListener("click",double);