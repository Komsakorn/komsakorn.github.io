function askMyName(){
    const name = prompt("enter you name") // เรียกใช้คำสั่ง prompt เพื่อถามชื่อ https://www.w3schools.com/jsref/met_win_prompt.asp
    if (name != null) {
       document.getElementById("q-name").innerHTML = "My name is " + name;
    }
 }
 
 function helloWorld() {
 const h1message = document.getElementById("q-name").innerHTML// ใช้คำสั่ง document.getElementById เหมือนใน askMyName เพื่อเอาข้อความใน h1 มาใส่
    alert(h1message + 'ถึงจะไม่หล่อแต่ก็น่าห่อกลับบ้าน')
 }