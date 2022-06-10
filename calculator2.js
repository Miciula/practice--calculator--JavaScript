initCalculator = (() => {

  const numbers = document.querySelectorAll('.calc__button--number')
  const mainResult = document.querySelector('.calc__result')
  const operators = document.querySelectorAll('.calc__button--operator ')
  const equal = document.querySelectorAll('.calc__button--equal')
  const deleteEqual = document.querySelectorAll('.calc__button--deleteEqual')
  const dot = document.querySelectorAll('.calc__button--dot')
  const deleteLast = document.querySelectorAll('.calc__button--deleteLast')
  // const testingButton = document.querySelectorAll('.test')

  let result = 0
  let number = 0
  let operator = null

  const count = () => {
    switch (operator) {
      case '+': result = add(Number(number), Number(result))
        break;
      case '-': result = subtract(Number(number), Number(result))
        break;
      case '/': result = divide(Number(number), Number(result))
        break;
      case '*': result = multiply(Number(number), Number(result))
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

  const concat = (character) => {
    result = result.toString() + character.toString()
    render()
  }

  const render = () => {
    mainResult.innerText = result
  }

  numbers.forEach((numberFromButton) => {
    numberFromButton.addEventListener(
      'click',
      () => {
        if (operator === '=') {
          result = 0
          number = 0
          operator = null
        }
        if (numberFromButton.innerText === '0' && result === 0) {
          result = 0
          render()
          return
        }
        if (numberFromButton.innerText !== '0' && result === 0) {
          result = numberFromButton.innerText
          render()
          return
        }
        concat(numberFromButton.innerText)
      }
    )
  })

  operators.forEach((operatorFromButton) => {
    operatorFromButton.addEventListener(
      'click',
      () => {
        if (result === 0 && number !== 0 && (operator !== null)) {
          if (operatorFromButton.innerText === '-') {
            result = '-'
            render()
            return
          }
          return
        }

        if (operatorFromButton.innerText === '-' && result === 0 && number === 0 && operator === null) {
          result = '-'
          render()
          return
        }
        if (result === 0 && number === 0 && (operator === null || operator === '=')) {
          return
        }

        if (operatorFromButton.innerText === '-' && result === '-') {
          result = '-'
          return
        }
        if (operatorFromButton.innerText === '-' && operator === '-' && result === 0) {
          result = operatorFromButton.innerText
          render()
          return
        }
        if (result === '-') {
          result = '-'
          return
        }
        count()
        render()
        number = result
        result = 0
        operator = null
        changeOperator(operatorFromButton.innerText)
      }
    )
  })

  const changeOperator = (operatorFromButton) => {
    operator = operatorFromButton
  }

  deleteEqual.forEach((deleteEqualFromButtonClick) => {
    deleteEqualFromButtonClick.addEventListener(
      'click',
      () => {
        result = 0
        number = 0
        operator = null
        render()
      }
    )
  })

  deleteLast.forEach((deleteLastFromButtonClick) => {
    deleteLastFromButtonClick.addEventListener(
      'click',
      () => {
        if (result === 0) {
          return
        }
        result = String(result).slice(0, -1)
        render()
      }
    )
  })

  equal.forEach((equalFromButtonClick) => {
    equalFromButtonClick.addEventListener(
      'click',
      () => {
        count()
        render()
        number = 0
        operator = '='
      }
    )
  })

  dot.forEach((dotFromButtonClick) => {
    dotFromButtonClick.addEventListener(
      'click',
      () => {
        if (result === 0) {
          result = 0
          concat(dotFromButtonClick.innerText)
          return
        }
        if (result === '-') {
          return
        }
        if (result.includes('.')) {
          return
        }
        concat(dotFromButtonClick.innerText)
      }
    )
  })

  // // testing button
  // testingButton.forEach((testingButton) => {
  //   testingButton.addEventListener(
  //     'click',
  //     () => {
  //       console.log(
  //         'result:', result,
  //         'number:', number,
  //         'operator:', operator,
  //       )
  //     }
  //   )
  // })

})()