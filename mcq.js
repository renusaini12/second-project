function result(){
var marks =0;
if(document.getElementById("correct1").checked){
    marks++;
}
if(document.getElementById("correct2").checked){
    marks++;
}
if(document.getElementById("correct3").checked){
    marks++;
}
if(document.getElementById("correct4").checked){
    marks++;
}
   alert("your marks:"+marks);
}
