// parentNode and parentElement...
// inner's parent...
var a=document.getElementById("inner").parentElement;
console.log(a);
// outer's parent...
var a=document.getElementById("outer").parentElement;
console.log(a);
// body's parennt...
var a=document.body.parentElement;
console.log(a);
// style...
document.getElementById("inner").parentElement.style.background="green";
var a=document.getElementById("inner").parentElement;
console.log(a);

document.getElementById("child-c").parentElement.style.background="red";
var a=document.getElementById("child-c").parentElement;
console.log(a);

// parentNode...
document.getElementById("child-c").parentNode.style.background="red";
var a=document.getElementById("main").parentNode;
console.log(a);


document.getElementById("child-c").parentNode.style.background="red";
var a=document.getElementById("main").parentElement;
console.log(a);

// children & childNodes...
// outer's children...
var a=document.getElementById("outer").children;
console.log(a);
// inner's children...
var a=document.getElementById("inner").children;
console.log(a);

var a=document.getElementById("inner").children[1];
console.log(a);
// style...
document.getElementById("inner").children[1].style.background="yellow";
var a=document.getElementById("inner").children[1].innerHTML;
console.log(a);

// childNodes...
document.getElementById("inner").children[0].style.background="red";
var a=document.getElementById("inner").childNodes;
console.log(a);

document.getElementById("inner").children[0].style.background="red";
var a=document.getElementById("inner").childNodes[1].innerHTML;
console.log(a);

// document.getElementById("inner").childNodes[3].style.background="red";
var a=document.getElementById("inner").childNodes[3];
console.log(a);


