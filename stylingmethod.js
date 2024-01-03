// style...
let a1;
a=document.querySelector("#header").style.color;
console.log(a);


let a2;
document.querySelector("#header").style.backgroundColor="tan"
a2=document.querySelector("#header").style.color;
console.log(a);


let a3;
document.querySelector("#header").style.backgroundColor="tan";
document.querySelector("#header").style.Color="blue";

a=document.querySelector("#header").style.color;
console.log(a);

// // className....
let a4;
document.querySelector("#header").className="abc xyz"

a=document.querySelector("#header").className;
console.log(a);

// classList....
let a5;
document.querySelector("#header").classList.add("xyz","efg");
a=document.querySelector("#header").classList;
console.log(a);

// classRemove...
let a6;
document.querySelector("#header").classList.remove("xyz");
a=document.querySelector("#header").classList;
console.log(a);




