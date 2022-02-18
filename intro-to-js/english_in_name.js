function askMyName(){
    const name = prompt("enter your name") // เรียกใช้คำสั่ง prompt เพื่อถามชื่อ https://www.w3schools.com/jsref/met_win_prompt.asp
    if (name != null) {
       document.getElementById("q-name").innerHTML = "My name is " + name;
    }
 }
 
 function helloWorld() {
 const h1message = document.getElementById("q-name").innerHTML// ใช้คำสั่ง document.getElementById เหมือนใน askMyName เพื่อเอาข้อความใน h1 มาใส่
    alert(h1message + '_เพราะรักมันทำร้าย เลยต้องย้ายมาทำรถ')
 }
 function calAge() { 
    const year = prompt("enter your birth year (A.C)")
 if (year != null) {
   const age = new Date().getFullYear() -year
   alert('“ยินดีด้วย นายอยู่ในประเทศนี้มา'+ age +'ปีแล้ว"')
 }
}

function loadProfile() {
   let myname = 'Komsakorn' 
   let myprovince = 'Hokkaido'
      document.getElementById("my-name").innerHTML = myname;
      document.getElementById("my-province").innerHTML = myprovince;
}