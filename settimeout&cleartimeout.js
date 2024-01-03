// setTimeout(finctionName,millisecond)
// js one time animation
let id = setTimeout(Anim,3000);
function Anim(){
    console.log("Hello");
}

// clearTimeout...
let dd = setTimeout(Anim,5000);
function Anim(){
    let target=document.getElementById("test");
    target.style.width="500px";
}

function stopAnimation(){
    clearTimeout(dd);
}

// 2nd method...
let x=setTimeout(function(){
    let tar=document.getElementById("test");
    tar.style.width="500px";
},5000);

function stopAnimation(){
    clearTimeout(id);
}