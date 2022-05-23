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


add  = () => {
  return a + b
}
subtract = () => {
  return a + b
}
divide = () => {
  return a + b
}
multiply = () => {
  return a + b
}

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
      result = ''
      number1 = 0
      number2 = 0
      operator = operatorFromButtonClick.innerText
      console.log(operator)
      render()

    }
  )
})

deleteEqual.forEach((deleteEqualFromButtonClick) => {
  deleteEqualFromButtonClick.addEventListener(
    'click',
    () => {
      result = ''
      number1 = 0
      number2 = 0
      operator = undefined
      render()
    }
  )
})

deleteLast.forEach((deleteLastFromButtonClick) => {
  deleteLastFromButtonClick.addEventListener(
    'click',
    () => {
      // CONSOLE LOG !!
      console.log(deleteLastFromButtonClick.innerText)
    }
  )
})

equal.forEach((equalFromButtonClick) => {
  equalFromButtonClick.addEventListener(
    'click',
    () => {
      // CONSOLE LOG !!
      console.log(equalFromButtonClick.innerText)
    }
  )
})

dot.forEach((dotFromButtonClick) => {
  dotFromButtonClick.addEventListener(
    'click',
    () => {
      // CONSOLE LOG !!
      console.log(dotFromButtonClick.innerText)
    }
  )
})

