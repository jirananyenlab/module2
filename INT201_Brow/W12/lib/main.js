const body = document.body
const bodyChildNodes = body.childNodes //NodeList:array-like (implement for-each, cannot array methods), return children with all node types
const bodyChildren = body.children //HTMLCollection:array-like (not implement for-each, cannot array methods), return children with only element type
console.log(body)
console.log(bodyChildNodes)
console.log(bodyChildren)
bodyChildNodes.forEach((bcn) => {
  console.log(bcn)
})
Array.from(bodyChildren).forEach((bc) => {
  console.log(bc)
})

// เปรียบเทียบ referrance Type ของ array
console.log(body.lastElementChild === body.lastChild);
console.log(body.lastElementChild);
console.log(body.lastChild);

console.log(document.documentElement === document.firstElementChild);
console.log(document.documentElement === document);
console.log(document.documentElement); //html
console.log(document); //rootnode

//query select element 

//return first node or null
const course201Ele = document.getElementById('int201') //case sensitive 
console.log('getElementById');
console.log(course201Ele);


const course101Ele1 = document.querySelector('#int201') //case sensitive 
console.log(course101Ele1);

const course101 = document.querySelector('#int201 ,#bscit-courses') //case sensitive 
console.log(course101); //ใส่ได้หลาย อัน แต่ รีเทิร์นอันแรกที่เจอใน tree : #bscit-course  /ลำดับการใส่ไม่สำคัญ


const p101 = document.querySelector('#int201 ,#bscit-courses,.courses') //case sensitive 
console.log(p101); // rturn <p class="courses">ggreg</p>

//return node แรก
const prog = document.querySelector('.programming') //css selector
console.log(prog);

const allProgElement = document.querySelectorAll('.programming')
console.log(allProgElement);//NodeList

const liEle1 = document.querySelectorAll('li')
console.log(liEle1);//NodeList




const liEle2 = document.getElementsByTagName('li')
console.log(liEle2); //HTML collection

const courseEle = document.getElementsByClassName('courses')
console.log(courseEle); //HTML collection

const ulElement = document.querySelector('.lecturers')
console.log(ulElement); 




const divfind = document.body.children[2]
console.log(divfind); // same ulElement  // <div class="lecturers"><ul>...</ul></div>

const divLectElement = document.querySelector('.lecturers')
//get <li> under div.lecturers
const liDivLect = divLectElement.querySelectorAll('li')
console.log(liDivLect)
//get <li> under document node
const allLi = document.querySelectorAll('li')
console.log(allLi)

console.log("#" + 2);