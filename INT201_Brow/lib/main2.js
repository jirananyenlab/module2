const rootNode = document
const class1 = document.getElementsByClassName('course')
const p1 = document.getElementById('int101')
console.log(rootNode);
console.log(rootNode.nodeName);
console.log(rootNode.nodeType);
console.log(rootNode.nodeValue);

console.log(document.documentElement);
console.log(document.documentElement.nodeType);

console.log(p1);
console.log(p1.nodeName);
console.log(p1.nodeType);
console.log(p1.nodeValue);

console.log(document.body.nodeValue); 
console.log(document.head);
console.log(document.title);
console.log(document.title.nodeName);
console.log(document.title.nodeType);
console.log(document.title.nodeValue);

console.log(document.head.lastElementChild);