window.alert('Do you want to exits ?') //แจ้งข้อความอย่างเดียว

// promt รับค่า แล้วเก็บใช้ต่อ
const username = window.prompt('Please enter your name', 'Ex., Somchai Rakdee') //cancel returns null, if ok return name value
console.log(username)
const userAction = window.confirm(`Good Bye, ${username}`)  //OK : true ,Camcle : false
console.log(userAction)