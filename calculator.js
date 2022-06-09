const numbers = document.querySelectorAll('.calc__button--number')
const mainResult = document.querySelector('.calc__result')
const operators = document.querySelectorAll('.calc__button--operator ')
const equal = document.querySelectorAll('.calc__button--equal')
const deleteEqual = document.querySelectorAll('.calc__button--deleteEqual')
const dot = document.querySelectorAll('.calc__button--dot')
const deleteLast = document.querySelectorAll('.calc__button--deleteLast')

let result = ''
let number1 = ''
let number2 = ''
let operator = undefined

const count = () => {
  switch (String(operator)) {
    case '+': result = add(Number(number1), Number(number2))
      break;
    case '-': result = subtract(Number(number1), Number(number2))
      break;
    case '/': result = divide(Number(number1), Number(number2))
      break;
    case '*': result = multiply(Number(number1), Number(number2))
      break;
    default:
      return
  }
}
const add = (a, b) => {
  return a + b
}
const subtract = (a, b) => {
  return a - b
}
const divide = (a, b) => {
  return a / b
}
const multiply = (a, b) => {
  return a * b
}
const concat = (e) => {
  result = result.toString() + e.toString()
  render()
}
const render = () => {
  mainResult.innerText = result
}

const check = () => {
  if (result !== '' && result !== '-' && number1 === '' && number2 === '') {
    number1 = result
    result = 0
    render()
    result = ''
    return
  }
  if (result !== '' && number1 !== '' && number2 === '') {
    number2 = result
    count()
    render()
    number1 = result
    number2 = ''
    result = ''
    operator = undefined
    return
  }
}

const changeOperator = (e) => {
  if (number1 === '' && result === '' && operator === undefined) {
    result = '-'
    render()
    return
  }
  if (number1 !== '' && result === '' && operator === undefined) {
    operator = e
    result = 0
    render()
    result = ''
    return
  }
  if (number1 !== '' && result === '' && operator === '-') {
    operator = e
    result = '-'
    render()
    return
  }
  if (number1 !== '' && result === '' && operator !== undefined && operator !== '-') {
    result = '-'
    render()
    return
  }
  operator = e
  check()
}

numbers.forEach((numberFromButtonClick) => {
  numberFromButtonClick.addEventListener(
    'click',
    () => {
      if (numberFromButtonClick.innerText === 0) {
        if (result === 0) {
          return
        }
      }
      concat(numberFromButtonClick.innerText)
    }
  )
})

operators.forEach((e) => {
  e.addEventListener(
    'click',
    () => {
      changeOperator(e.innerText)
    }
  )
})

deleteEqual.forEach((deleteEqualFromButtonClick) => {
  deleteEqualFromButtonClick.addEventListener(
    'click',
    () => {
      result = 0
      number1 = ''
      number2 = ''
      operator = undefined
      render()
      result = ''
    }
  )
})

deleteLast.forEach((deleteLastFromButtonClick) => {
  deleteLastFromButtonClick.addEventListener(
    'click',
    () => {
      result = String(result).slice(0, -1)
      render()
    }
  )
})

equal.forEach((equalFromButtonClick) => {
  equalFromButtonClick.addEventListener(
    'click',
    () => {

      if (result === '' && number1 !== '' && number2 === '') {
        result = number1
        operator = undefined
        render()
        result = ''
        return
      }
      if (result !== '' && number1 === '' && number2 === '') {
        render()
        number1 = result
        result = ''
        return
      }
      check()
    }
  )
})

dot.forEach((dotFromButtonClick) => {
  dotFromButtonClick.addEventListener(
    'click',
    () => {
      if (result.includes('.')) {
        return
      }
      if (result === '') {
        result = 0.
      }

      concat(dotFromButtonClick.innerText)
    }
  )
})
