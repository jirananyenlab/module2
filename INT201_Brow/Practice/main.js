const divNodeList = document.querySelectorAll('div')

console.log(divNodeList);


const divHTML = document.getElementsByTagName('div')[0]

console.log(divHTML);


const firstP = divHTML.children[1]

firstP.textContent = "server"



const newPEle = document.createElement('p')
newPEle.textContent = 'Lodchong EIei' //<p>LodchongZa</p>

divHTML.insertBefore(newPEle , null) //ต่อท้ายสุดเลย

//divHTML.replaceChild(newPEle , null) //error

// function chbgcolor() {
//      document.body.style.backgroundColor = 'green'
// }
// firstP.addEventListener('mouseover' ,chbgcolor )

// firstP.removeEventListener('click' ,chbgcolor )

// firstP.addEventListener('click' , ()=>{
//     document.body.style.backgroundColor = 'yellow'
// })