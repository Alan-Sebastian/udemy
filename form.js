document.body.addEventListener('keydown',function(e){
    var keycode=e.keyCode;
    if(keycode ==13){
        console.log(keycode +"key down");
    }
})

document.body.addEventListener('keyup',function(e){
    var keycode=e.keyCode;
    if(keycode ==13){
        console.log(keycode +"key up");
    }
})

document.body.addEventListener('keypress',function(e){
    var keycode=e.keyCode;
    if(keycode ==13){
        console.log(keycode +"key press");
    }
})
//mouse events
var mouse=document.getElementById("btn");
mouse.addEventListener('mousedown',function(){
    console.log("mouse down");
})
mouse.addEventListener('mouseup',function(){
    console.log("mouse up");
})
mouse.addEventListener('click',function(){
    console.log("click");
})
mouse.addEventListener('dblclick',function(){
    console.log("double click");
})
//mouse over
var over=document.getElementById("username");
var overcount=0;
over.addEventListener('mouseover',function(){
    overcount+=1;
    console.log(overcount)
})
//mouse enter
var enter=document.getElementById("username");
var entercount=0;
enter.addEventListener('mouseenter',function(){
    entercount+=1;
    console.log(entercount+"mouse enter");
})
//mouse move
var enter=document.getElementById("username");
var entercount=0;
enter.addEventListener('mousemove',function(){
    entercount+=1;
    console.log(entercount+"mouse move");
})
var user=document.getElementById("username");
var submited=document.getElementById("btn-submit");
username.addEventListener("change",function(){
console.log("changed");
});
username.addEventListener('input',function(evn){
    var current=evn.target.value;
       current=current.toUpperCase();
    //    username.value=current;
       console.log(current);

})
password.addEventListener("focus",function(){
    console.log("atleast 8 characters")
})
username.addEventListener("blur",function(){
    console.log("focus lost")
})
submited.addEventListener("submit",function(e){
    alert('submitted successfully');
 e.PreventDefault();
});