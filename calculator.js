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

numbers.forEach((numberFromButtonClick) => {
  numberFromButtonClick.addEventListener(
    'click',
    () => {
      concat(numberFromButtonClick.innerText)
    }
  )
})

operators.forEach((operatorFromButtonClick) => {
  operatorFromButtonClick.addEventListener(
    'click',
    () => {
      console.log(operatorFromButtonClick.innerText)
    }
  )
})

deleteEqual.forEach((deleteEqualFromButtonClick) => {
  deleteEqualFromButtonClick.addEventListener(
    'click',
    () => {
      console.log(deleteEqualFromButtonClick.innerText)
    }
  )
})

deleteLast.forEach((deleteLastFromButtonClick) => {
  deleteLastFromButtonClick.addEventListener(
    'click',
    () => {
      console.log(deleteLastFromButtonClick.innerText)
    }
  )
})

equal.forEach((equalFromButtonClick) => {
  equalFromButtonClick.addEventListener(
    'click',
    () => {
      console.log(equalFromButtonClick.innerText)
    }
  )
})

dot.forEach((dotFromButtonClick) => {
  dotFromButtonClick.addEventListener(
    'click',
    () => {
      console.log(dotFromButtonClick.innerText)
    }
  )
})

