
function showtime(){
    var d= new Date();
    var h= d.getHours();
    var m= d.getMinutes();
    var s= d.getSeconds();
    var session = "AM";
    
    if(h>12){
        h = h-12;      //h = 13-12 = 1
    }
    if(h>=12){
        session = "PM";
    }
    
    h = h<10 ? "0"+h : h;
    m = h<10 ? "0"+m : m;
    s = h<10 ? "0"+s : s;

    var time = h +":"+ m + ":" + s + " "+ session;
    document.getElementsByTagName('h1')[0].innerText=time;
    setTimeout(showtime,1000);
}