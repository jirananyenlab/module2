const buttonSubmit = document.getElementById('button')
const user = document.querySelector('input').nextElementSibling
const input = document.getElementsByTagName('input')
const input2 = document.querySelectorAll('input')
const p = document.querySelector('p')

buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('submit click');
    console.log(user); // br
    console.log(user.nextElementSibling.value.length === 0); // ค่าที่ใส่ใน password === 0 ไหม
    console.log(input2[1].value);
    console.log(input[1]);
    if (input[0].value.length === 0 || input[1].value.length === 0) {
        p.textContent = 'user or password is null'
         document.body.appendChild(p)
    } else {
        document.body.removeChild(p)
    }
})

