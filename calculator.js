const numbers = document.querySelectorAll('.number')
const mainResult = document.querySelector('.result')
const operators = document.querySelectorAll('.operator')
const equal = document.querySelectorAll('.equal')
const deleteEqual = document.querySelectorAll('.deleteEqual')
const dot = document.querySelectorAll('.dot')
const deleteLast = document.querySelectorAll('.deleteLast')

let result = ''
let number1 = 0
let number2 = 0
let operator = undefined


concat = (number) => {
  result = result.toString() + number.toString()
  render()
}

render = () => {
  mainResult.innerText = result
}

numbers.forEach((e) => {
  e.addEventListener(
    'click',
    () => {
      concat(e.innerText)
    }
  )
})

operators.forEach((e) => {
  e.addEventListener(
    'click',
    () => {
      console.log(e.innerText)
    }
  )
})

deleteEqual.forEach((e) => {
  e.addEventListener(
    'click',
    () => {
      console.log(e.innerText)
    }
  )
})

deleteLast.forEach((e) => {
  e.addEventListener(
    'click',
    () => {
      console.log(e.innerText)
    }
  )
})

equal.forEach((e) => {
  e.addEventListener(
    'click',
    () => {
      console.log(e.innerText)
    }
  )
})

dot.forEach((e) => {
  e.addEventListener(
    'click',
    () => {
      console.log(e.innerText)
    }
  )
})

