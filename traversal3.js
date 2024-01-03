// previousSibling & nextSibling...
// nextElementSibling & previousElementSibling...
var a=document.getElementById("child-c").nextElementSibling;
console.log(a);

var a=document.getElementById("child-c").previousElementSibling;
console.log(a);

// style...
document.getElementById("child-c").previousElementSibling.style.background="red";
var a=document.getElementById("child-c").previousElementSibling;
console.log(a);

document.getElementById("child-c").nextElementSibling.style.background="green";
var a=document.getElementById("child-c").nextElementSibling;
console.log(a);


var a=document.getElementById("child-e").nextElementSibling;
console.log(a);

var a=document.getElementById("child-head").previousElementSibling;
console.log(a);

var a=document.getElementById("child-head").nextElementSibling;
console.log(a);

// previousSibling & nextSibling...

var a=document.getElementById("child-c").previousSibling;
console.log(a);

var a=document.getElementById("child-c").nextSibling;
console.log(a);


