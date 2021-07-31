// const allButtons = document.querySelectorAll('.btn')

// const input = document.querySelector('.screen')

// const equalBtn = document.querySelector('.btn-equal')

// const clearBtn = document.querySelector('.btn-clear')

// allButtons.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     console.log(btn)
//     const value = e.target.dataset.num
//     console.log('Target value:', value)
//     input.value += value
//     console.log(input)
//   })
// })

// equalBtn.addEventListener('click', (e) => {
//   if (input.value === '') {
//     input.value = 'Enter a value'
//   } else {
//     let answer = eval(input.value)
//     input.value = answer
//   }
// })

// clearBtn.addEventListener('click', (e) => {
//   input.value = ''
// })

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}
function multiply(a, b) {
  return a * b
}
function divide(a, b) {
  return a / b
}
function modulo(a, b) {
  return a % b
}
module.exports.add = add
module.exports.subtract = subtract
module.exports.multiply = multiply
module.exports.divide = divide
module.exports.modulo = modulo

module.exports.add = add
