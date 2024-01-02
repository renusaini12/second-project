// focusFunction...
function focusFunction(element){
    // document.getElementById("fname").style.background="lime"
    element.style.background="lime";
}

// blurFunction...
function blurFunction(element){
    element.style.background="";
}

// inputFunction...
function inputFunction(element){
   var x= element.value;
   document.getElementById("test").innerHTML=x;
}
// onchangeFunction...
function changeFunction(element){
    var x= element.value;
    document.getElementById("test").innerHTML=x;
 }
//  selectFunction...
 function selectFunction(){
console.log("you selected some text");
 }
//  submit Function
//  function submitFunction(){
//     alert("you submited a form")
//  }

 function submitFunction(){
    var x= document.getElementById("fname").value;
    alert("Hello"+x);
 }