const pElement = document.querySelector('p')
const inputUsername = document.querySelector('input')
// inputUsername.addEventListener('keydown', (event) => {
//   pElement.textContent = event.target.value
// })


inputUsername.addEventListener('input', (event) => {
  console.log('input');
  }) //นับทุกอย่างที่ทำให้  input เปลี่ยน เช้น SH + A ค้าง 4 วิ = AAAA   =>  count + 4
    // ไม่นับ sh / ctrl ถ้ากดแล้วไม่ได้ทำให้ input เปลี่ยน 

inputUsername.addEventListener('keyup', (event) => {
  console.log('keyup');
})  // ไม่นับที่กดค้าง  เช้น SH + A ค้าง 4 วิ = AAAA   =>  count +1 
    //นับ backslat ไม่นับที่กดค้าง เหมือนกัน

inputUsername.addEventListener('keydown', (event) => {
 console.log('keydown');
 })  // นับ backslat ไม่ว่าจะกดค้าง หรือกดทีละอัน  , นับ Sh อย่างเดียว

inputUsername.addEventListener('keypress', (event) => {
   console.log('keypress');  
 })  //นับ SH+A = A 1 ตัว  => count +1 
     //ไม่นับ backslat ไม่ว่าจะกดค้าง หรือกดทีละอัน  , ไม่นับ Sh อย่างเดียว
      