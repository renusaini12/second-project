let ta = document.getElementById("table")
let obj=[{firstName:"Amit",last:"saini",age:"30",eyeColor:"brown"},{firstName:"Rahul",last:"sharma",age:"40",eyeColor:"red"},
{firstName:"Ankita",last:"verma",age:"20",eyeColor:"blue"},
{firstName:"Gargi",last:"saini",age:"40",eyeColor:"red"},]

obj.map((item)=>{
  let tr=document.createElement("tr")
  let td=document.createElement("td")
  let td1=document.createElement("td")
  let td2=document.createElement("td")
  let td3=document.createElement("td")

  let text=document.createTextNode(`${item.firstName}`)
  let text1=document.createTextNode(`${item.last}`)
  let text2=document.createTextNode(`${item.age}`)
  let text3=document.createTextNode(`${item.eyeColor}`)

  td.appendChild(text)
  tr.appendChild(td)
  ta.appendChild(tr)

  td1.appendChild(text1)
  tr.appendChild(td1)
  ta.appendChild(tr)

  td2.appendChild(text2)
  tr.appendChild(td2)
  ta.appendChild(tr)

  td3.appendChild(text3)
  tr.appendChild(td3)
  ta.appendChild(tr)

})
