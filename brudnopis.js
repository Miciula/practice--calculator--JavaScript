

changeOperator = (e) => {
  // console.log('aaaa')
  // switch (e) {
  //   case '-': if (result === '' || result === '-') {
  //     console.log('bbbb')
  //     result = '-'
  //     render()
  //     check()
  //     operator = e
  //     break
  //   }
  //   default:
  //     console.log('cccc')
  //     result === ''
  //     render()
  //     check()
  //     operator = e

  //     return
  // }
  if (e === '-') {
    if (result === '' || result === '-') {
      console.log('aaaa')
      result = '-'
      render()
      return
    }
    operator = e
    result === ''
    check()
  } else {
    console.log('bbbb')
    result === ''
    render()
    operator = e
    check()
  }
}