const headElement = document.head
//เรียก ดูแค่ลูก ไม่เอา หลาน
//Array Like do not array methods
console.log(headElement.childNodes); //return list ของ child ทุก node // รวม white space //NodeList (implement foreach)
console.log(headElement.children); // return chlid เฉพราะ element //HTML collection

console.log("------------");
//Node List is an Array like
//return chliden with all node type
const headChildNodes = headElement.childNodes
headChildNodes.forEach((hc)=>{
    console.log(hc.nodeName);
    console.log(hc.nodeType);
    console.log(hc.nodeValue);
})

console.log("------------");
// Childen is HTML collection
//HTML collection is array-like (not real arry) need convert to arr
//return children element type
const headChilden = headElement.children
Array.from(headChildNodes).forEach((hc)=>{
    console.log(hc.nodeName);
    console.log(hc.nodeType);
    console.log(hc.nodeValue);
})

console.log(headElement.firstElementChild); // tag Meta <meta charset="UTF-8">
console.log(headElement.firstChild); // white Space

console.log(headElement.lastElementChild); // tag title
console.log(headElement.lastChild); // white Space :#text

console.log(headElement.parentElement); // html
console.log(headElement.parentNode); //html

console.log('lodchong');
console.log(headElement.previousElementSibling); //null
console.log(headElement.previousSibling); // <!--before head-->

console.log(headElement.nextElementSibling); //tag body
console.log(headElement.nextSibling); // white Space :#text

console.log('Attribute');
const headFirstElementChilde = headElement.firstElementChild
const headFirstChildeAttr = headFirstElementChilde.attributes
console.log(headFirstChildeAttr);

Array.from(headFirstChildeAttr).forEach((arrts)=> console.log(arrts))