const myCookie = document.cookie

 const color = document.getElementById('color')

window.addEventListener('load' , ()=>{
    document.body.style.backgroundColor =  `${localStorage.getItem('color')}`
})

 color.addEventListener('input' , (e) => {
document.body.style.backgroundColor = `${e.target.value}`
console.log(`${e.target.value}`);
localStorage.setItem('color' , e.target.value)
})