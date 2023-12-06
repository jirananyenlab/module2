let outdiv = document.getElementById('outer-div')
let indiv = document.getElementById('inner-div')

let button = document.getElementById('inner-div').children[0]
let button2 = document.querySelector('button')
let button3 = document.getElementById('inner-div').firstElementChild

// console.log(outdiv);
// console.log(indiv);
// console.log(button);
// console.log(button2);
// console.log(button3);

function dosomething() {
    console.log('dosomething');
}
outdiv.addEventListener('click' , (e)=> { 
        console.log('outer div')
        console.log(`event type : ${e.type}`)
        console.log(e.target) // object ที่เรากด
        console.log(e.currentTarget) // object อันที่เราใส่ event
        console.log(`event eventPhase : ${e.eventPhase}`)

    },true) 
    indiv.addEventListener('click' , (e)=> { 
        console.log('inner div')
        console.log(`event type : ${e.type}`)
        console.log(e.target) // object ที่เรากด
        console.log(e.currentTarget) // object อันที่เราใส่ event
        console.log(`event eventPhase : ${e.eventPhase}`)

    } ) // defalut: false bubling ล่างขึ้นบน

    button.addEventListener('click' , (e)=> { 
        console.log('button')
        console.log(`event type : ${e.type}`)
        console.log(e.target) // object ที่เรากด
        console.log(e.currentTarget) // object อันที่เราใส่ event
        console.log(`event eventPhase : ${e.eventPhase}`)

    } ,true)// true capturing  บนลงล่าง