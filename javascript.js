document.getElementById("open-sidebar").addEventListener('click',()=>{
    document.getElementById("sidebar").style.left ="0px";
    document.getElementById("background").style.display ="block";
    
});
document.getElementById("close-sidebar").addEventListener('click',()=>{
    document.getElementById("sidebar").style.left ="-400px";
    document.getElementById("background").style.display ="none";
});
document.getElementById("background").addEventListener('click',()=>{
    document.getElementById("sidebar").style.left ="-400px";
    document.getElementById("background").style.display ="none";
})

document.getElementById("openpopup").addEventListener('click', ()=>{
   document.getElementById("login-popup").style.display="block";
   document.getElementById("background-popup").style.display="block";
});
document.getElementById("close-popup").addEventListener('click', ()=>{
    document.getElementById("login-popup").style.display="none";
    document.getElementById("background-popup").style.display="none";
});
document.getElementById("background-popup").addEventListener('click', ()=>{
    document.getElementById("login-popup").style.display="none";
    document.getElementById("background-popup").style.display="none";
});
function appendToDisplay(value){
    document.getElementById("display").value += value;
}
function clearDisplay(){
    document.getElementById("display").value='';
}
function calculate(value){
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
}

document.getElementById("email").addEventListener('click',()=>{
    document.getElementById("letteremail").style.display="none";
});
document.getElementById("password").addEventListener('click',()=>{
    document.getElementById("letterpassword").style.display="none";
});

