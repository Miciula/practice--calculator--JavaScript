const numbers = document.querySelectorAll('.number')
const mainResult = document.querySelector('.result')
const operators = document.querySelectorAll('.operator')
const equal = document.querySelectorAll('.equal')
const deleteEqual = document.querySelectorAll('.deleteEqual')
const dot = document.querySelectorAll('.dot')
const deleteLast = document.querySelectorAll('.deleteLast')
const SPR = document.querySelectorAll('.SPR')

let result = ''
let number1 = ''
let number2 = ''
let operator = undefined

count = () => {
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
add = (a, b) => {
  return a + b
}
subtract = (a, b) => {
  return a - b
}
divide = (a, b) => {
  return a / b
}
multiply = (a, b) => {
  return a * b
}
concat = (number) => {
  result = result.toString() + number.toString()
  render()
}
render = () => {
  mainResult.innerText = result
}

check = () => {
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

changeOperator = (e) => {
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
      // CONSOLE LOG !!
      console.log(deleteLastFromButtonClick.innerText)
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
      // CONSOLE LOG !!
      console.log(dotFromButtonClick.innerText)
    }
  )
})

SPR.forEach((SPR) => {
  SPR.addEventListener(
    'click',
    () => {
      console.log(
        'result: ', result,
        'number1: ', number1,
        'number2: ', number2,
        'operator: ', operator
      )
    }
  )
})

