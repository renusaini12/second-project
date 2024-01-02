// onclick...
let ele;
document.getElementById("header").onclick=abc;
function abc(){
    document.getElementById("header").style.background="green";
    
}
// onmouseenter...
let ele1;
document.getElementById("header").onmouseenter=abc;
function abc(){
    document.getElementById("header").style.background="green";
    
}
// Dom addElementListener()Method...
// document.getElementBy(id).addEventListener("click",functionName);
// document.getElementBy(id).addEventListener("click",function(){});

let a;
document.getElementById("header").addEventListener("click",abc);
 function abc(){
    document.getElementById("header").style.background="green";
 }
// mouseenter & click...
 let a1;
 document.getElementById("header").addEventListener("mouseenter",abc);
 document.getElementById("header").addEventListener("click",function(){
    this.style.border="10px solid red";
  
 });
 function abc(){
    document.getElementById("header").style.background="green";
 }
//  addEventsListener(events,function,useCapture);
document.querySelector("#inner").addEventListener('click',function(){
    alert('Inner Div');
},false);
document.querySelector("#outer").addEventListener('click',function(){
    alert('outer Div');
},false);
// removeEventListener()Method...
let x;
document.getElementById("header").addEventListener("mouseleave",abc);
function abc(){
    document.getElementById("header").style.background="green";
}
// mouseleave & click...
let x1;
document.getElementById("header").addEventListener("mouseleave",abc);
document.getElementById("header").addEventListener('click',xyz)
function abc(){
    document.getElementById("header").style.background="green";
}
function xyz(){
    document.getElementById("header").removeEventListener('mouseleave',abc);
}