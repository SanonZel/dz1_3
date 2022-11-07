let phoneInput = document.querySelector('.phoneInput')
let phoneButton = document.querySelector('.button')
let result = document.querySelector('#result')
let innInput = document.querySelector('.innInput')
let innButton = document.querySelector('.buttonInn')
let never = document.querySelector('#return')



let Exp = /^\+996\d{3} \d{2}\d{2}\d{2}$/

phoneButton.addEventListener('click',() => {
    if (Exp.test(phoneInput.value)) {
        alert('Success')
    }else {
        alert('Failed')
    }
})

let Inn = /^1\d{13}$/g

innButton.addEventListener('click',() => {
if (Inn.test(innInput.value)){
    alert('Success')
}else {
    alert('Failed')
}
})
