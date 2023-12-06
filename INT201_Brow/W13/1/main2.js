let outdiv = document.getElementById('outer-div')
let indiv = document.getElementById('inner-div')

let button = document.getElementById('inner-div').children[0]
let button2 = document.querySelector('button')
let button3 = document.getElementById('inner-div').firstElementChild

function dosomething() {
    console.log('dosomething');
}

//multiple function handle on same element
//ทำตามลำดับ
button.addEventListener('click' ,dosomething )
button.addEventListener('click' ,()=>console.log('dosomething 2') )

//ลบไม่ได้ ต้องเขียน button.addEventListener('click' ,dosomething )
button.removeEventListener('click' ,()=>console.log('dosomething 2') )