// appendChild or insertBefore...
var newElement= document.createElement("h2");
var newText= document.createTextNode("THIS IS JUST TEXT");

newElement.appendChild(newText);

console.log(newElement);
console.log(newText);


var newElement= document.createElement("h2");
var newText= document.createTextNode("THIS IS JUST TEXT");

newElement.appendChild(newText);

document.getElementById("di").appendChild(newElement);
console.log(newElement);

// insertBefore...
var newElement= document.createElement("h2");
var newText= document.createTextNode("THIS IS JUST TEXT");

newElement.appendChild(newText);
s
var target=document.getElementById("di");
target.insertBefore(newElement,target.childNodes[0])