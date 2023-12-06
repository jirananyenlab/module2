const firstDiv = document.body.firstElementChild
console.log(firstDiv)
const firstDivAttributes = firstDiv.attributes //get all attribute ใดๆ
console.log(firstDivAttributes) //length=2, id and class attributes
Array.from(firstDivAttributes).forEach((attr) => {
  console.log(attr.name) // ex : id ขึ้นก่อน class เพราะ เขียน ก่อร
  console.log(attr.value) // bscit-courses
})
console.log(firstDiv.getAttribute('id')) //return value of specified attribute 'id'
console.log(firstDiv.getAttribute('class'))
//return value of specified attribute 'name'
const firstAttribute = firstDivAttributes[0]
console.log(firstAttribute.ownerDocument)
console.log(firstAttribute.ownerElement)

//create a new attribute name 'owner' with value 'Lodchong'
firstDiv.setAttribute('onwer' , 'Lodchong')




//create new <p>
const newPEle = document.createElement('p')

//textContent มองทุกอย่างเป็นตัวอักษร ไม่รู้จัก  HTML นับ white space
newPEle.textContent = 'textContent <span style = "color :red">LodchongZa007</span>' //<p>LodchongZa</p>
newPEle.setAttribute('id' , 'int203')
newPEle.setAttribute('class' , 'course')

//innerText รู้ความหมายของ tag แต่ดูเฉพาะ text
const newinnerText = document.createElement('p')
newinnerText.innerText = 'innerText <span style = "display : none">LodchongZa007</span>'

//inner html รู้จัก tag html
const newinnerHTML = document.createElement('p')
newinnerHTML.innerHTML = '<span style = "color :red">innerHTML</span>'

const divCousesParent = document.getElementById('bscit-courses')
divCousesParent.appendChild(newPEle) //เอาไปต่อท้าย
   //or firstDiv.appendChild(newPEle)
divCousesParent.appendChild(newinnerText)
divCousesParent.appendChild(newinnerHTML)

//CRUD node
const newPEle2 = document.createElement('p')
newPEle2.textContent = 'new textContent <span style = "color :red">LodchongZa007</span>' //<p>LodchongZa</p>


const refNode = divCousesParent.lastElementChild
console.log(refNode);
divCousesParent.insertBefore(newPEle,refNode)
//divCousesParent.replaceChild(newPEle,refNode)
//divCousesParent.removeChild(newPEle)

