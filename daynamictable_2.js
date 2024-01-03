function createtable(){
    let row=document.getElementById("rows").value;
    let col=document.getElementById("cols").value;

    console.log(row);
    console.log(col);

var html ="<table border='1'>";
for (let r=0;r<row;r++)
{
   html+="<tr>";

      for(let c=0;c<col;c++){
        // html+="<td>hi</td>";
        html+="<td>r="+r+",c="+c+"</td>"
      } 
   
   html+="<tr>";
}
html+="</table>";
document.getElementById("tablearea").innerHTML=html;
}