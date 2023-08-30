console.log("HELLO");
var countdown=document.getElementById("count");
var initial=countdown.innerHTML;
var interval=setInterval(function(){ 
    if(initial>0)
    initial-=1;
    countdown.innerHTML=initial; 
    countdown.style.fontSize=initial*100+"px";  
    bg.style.width=initial*100+"px";
    console.log(initial*100+"px");
    if(initial<=0)
    {
        clearInterval(interval)
    }
},1000);