const elInput = document.querySelector('.form-input')
const elResult = document.querySelector('.result')
const elForm = document.querySelector('.form')

function fizzBazz(num) {
    let text = ''

    if(num >= 0) {
        if(num % 3 === 0 && num % 5 === 0) {
            text = 'FizzBazz'
        }
        else if(num % 5 === 0)  {
            text = 'Bazz'
        }
        else if(num % 3 === 0)  {
            text = 'Fizz'
        }
        else {
            text = num
        }
    } else {
        alert('Please enter positive number')
    }

    return text
}

elForm.addEventListener('submit', (event) => {
    event.preventDefault()
    elResult.textContent = null
    let result = document.createElement('h2')
    result.textContent = fizzBazz(elInput.value)
    elResult.appendChild(result)
    elInput.value = ''
})