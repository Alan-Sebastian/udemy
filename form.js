var user=document.getElementById("username")
var error=document.getElementById('err')
user.addEventListener('input',function(e){
    // console.log(e.target.value)
    var regex=/^[\w]{6,8}$/;
    var currentvalue=e.target.value
   var valid=regex.test(currentvalue)
   if(valid){
    error.style.display='none'

   }
   else{
    error.style.display='block'
   }
})