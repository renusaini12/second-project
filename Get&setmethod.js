// HTML, TEXT, ATTRIBUTE...
// innerText,innerHTML,getAttribute,getAttributeNode,Attributes..
// innerText....
// let ele;
// ele=document.getElementById("header").innerText;
// console.log(ele)

// innerHTML....
// let ele;
// ele=document.getElementById("header").innerHTML;
// console.log(ele)


// getAttribute...
let ele;
ele=document.getElementById("header").getAttribute("class");
console.log(ele)

let ele1;
ele=document.getElementById("header").getAttribute("id");
console.log(ele)

let ele2;
ele=document.getElementById("header").getAttribute("style");
console.log(ele)


// getAttributeNode...
let ele3;
ele=document.getElementById("header").getAttributeNode("style");
console.log(ele)

// attributes...
let ele4;
ele=document.getElementById("header").attributes[2];
console.log(ele)

let ele5;
ele=document.getElementById("header").attributes[2].name;
console.log(ele)

// set method..
// innerText...
let ele6;
document.getElementById("header").innerText = "Wow";

ele=document.getElementById("header").innerHTML;
 console.log(ele)
// innerHTML...
 let ele7;
 document.getElementById("header").innerHTML = "<h1>Wow</h1>";
 
 ele=document.getElementById("header").innerHTML;
  console.log(ele)

// setAttributes..
  let ele8;
document.getElementById("header").innerHTML = "<h1>Wow</h1>";

ele=document.getElementById("header").setAttribute("style","border:5px dotted green");

ele=document.getElementById("header").getAttribute("class");
 console.log(ele);

// attributes...
 let ele9;
 document.getElementById("header").innerHTML = "<h1>Wow</h1>";
 
 ele=document.getElementById("header").attributes[1].value="xyz";
 
 ele=document.getElementById("header").getAttribute("class");
  console.log(ele);

//   removeAttributes...
let ele10;
document.getElementById("header").innerHTML = "<h1>Wow</h1>";

document.getElementById("header").removeAttribute("style");

ele=document.getElementById("header").getAttribute("class");
 console.log(ele);


 

