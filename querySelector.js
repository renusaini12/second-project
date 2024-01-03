// querySelector- document.querySelector(CSS Selector)
// class target...
var element;
document.querySelector("#header").innerHTML="<h1>Wow</h1>";

element = document.querySelector("#header").getAttribute("class");

console.log(element);
// list target...
var element;
document.querySelector("#header").innerHTML="<h1>Wow</h1>";

element = document.querySelector(".list");

console.log(element);

// querySelectorAll- document.querySelectorAll(CSS Selector)
// list target...
var element;
document.querySelector("#header").innerHTML="<h1>Wow</h1>";

element = document.querySelectorAll(".list");

console.log(element);

var element;
document.querySelector("#header").innerHTML="<h1>Wow</h1>";

element = document.querySelectorAll(".list")[1].innerHTML;

console.log(element);
// ul target...
var element;
document.querySelector("#header").innerHTML="<h1>Wow</h1>";

element = document.querySelectorAll("ul")[0].innerHTML;

console.log(element);

var element;
// h1 target...
element = document.querySelectorAll("#header h1");

console.log(element);

var element;

element = document.querySelectorAll("#header h1")[1].innerHTML;

console.log(element);











