var newElement=document.createElement("li");
var newText=document.createTextNode("WOW new text");
newElement.appendChild(newText);

var target=document.getElementById("list");
var oldElement=target.children[1];

// console.log(oldElement);

// replaceChild...
target.replaceChild(newElement,oldElement);


// removeChild....
var target=document.getElementById("list");
var oldElement=target.children[2];

target.removeChild(oldElement);
