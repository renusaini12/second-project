let id=document.getElementById("div")

let table = document.createElement("table")

let tr = document.createElement("tr")


let th_01 = document.createElement("th")
let ctn1 = document.createTextNode("s.no")


let th_02 = document.createElement("th")
let ctn2 = document.createTextNode("name")

let th_03 = document.createElement("th")
let ctn3 = document.createTextNode("age")

let th_04 = document.createElement("th")
let ctn4 = document.createTextNode("city")

//appending all elements
th_01.appendChild(ctn1)
th_02.appendChild(ctn2)
th_03.appendChild(ctn3)
th_04.appendChild(ctn4)

tr.appendChild(th_01)
tr.appendChild(th_02)
tr.appendChild(th_03)
tr.appendChild(th_04)

table.appendChild(tr)

id.appendChild(table)

let br1=document.createElement("br")
let td2_01=document.createElement("td")
let sr1=document.createTextNode("1")

let td2_02=document.createElement("td")
let su=document.createTextNode("sunny")

let td2_03=document.createElement("td")
let de=document.createTextNode("20")

let td2_04=document.createElement("td")
let no=document.createTextNode("delhi")

td2_01.appendChild(sr1)
td2_02.appendChild(su)
td2_03.appendChild(de)
td2_04.appendChild(no)

tr.appendChild(td2_01)
tr.appendChild(td2_02)
tr.appendChild(td2_03)
tr.appendChild(td2_04)

