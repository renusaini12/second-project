// beforebegin or afterbegin...
// inserAdjacentElement...
var newElement=document.createElement("h2");

var newText=document.createTextNode("this is just text");

newElement.appendChild(newText);

var target=document.getElementById("test");

target.insertAdjacentElement("afterbegin",newElement);

// beforeend or afterend...
// inserAdjacentHTML...
var target=document.getElementById("test");

var newElement="<h2>this is heading</h2>";

target.insertAdjacentHTML("beforeend",newElement);

// insertAdjacentText...
var target=document.getElementById("test");

var newText= "this is heading";

target.insertAdjacentText("afterbegin",newText);



