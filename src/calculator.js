

const calculate = require('./calculate.js')

//const numsBtn = document.querySelectorAll('.btn-blue');
const allButtons = document.querySelectorAll('.btn')

const input = document.querySelector('.screen')

const equalBtn = document.querySelector('.btn-equal')

const clearBtn = document.querySelector('.btn-clear')

// const operationBtn = document.querySelectorAll('.operation--js')

let haveDot = false;

let lastValue = '';


allButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    console.log(btn)
    let currentValue = e.target.dataset.num;
    console.log('Target value:', currentValue)
    
    if (currentValue === '.' && haveDot === false) {
      haveDot = true;
    } else if (currentValue === '.' && haveDot === true) {
      return
    }

    if ((currentValue === ' - ') && (([" + ", " - ", " *" , " / "].indexOf(lastValue) > -1))) {
      currentValue = '-'
    } else if (currentValue === " - " && lastValue === '') {
      currentValue = '-'
    } else if ((currentValue === " + " || currentValue === " * " || currentValue === " / ") && (lastValue === " - " || lastValue === " + " || lastValue === " * " || lastValue === " / ")) {
      return
    } 
    
    input.value += currentValue
    console.log(input.value)
    console.log(input.value.split(" ").length);

    if (([" + ", " - ", " *" , " / "].indexOf(currentValue) > -1) && (input.value.split(" ").length >3)) {
        let result = calculate(input.value);
        console.log(result)
        input.value = result + currentValue;

      } 
      lastValue = currentValue;
  })
})


equalBtn.addEventListener('click', (e) => {
  console.log(input.value)
  if (input.value === '') {
    input.value = 'Enter a value'
  } else {

    let result = calculate(input.value);
    console.log(result)
    input.value = result;
  }

});


clearBtn.addEventListener('click', (e) => {
  input.value = ''
  haveDot = false;
  lastValue = '';
})





// Calculator z użyciem funkcji eval
// equalBtn.addEventListener('click', (e) => {
//   if (input.value === '') {
//     input.value = 'Enter a value'
//     } else {
//     let answer = eval(input.value)
//     input.value = answer
//   }
// })

