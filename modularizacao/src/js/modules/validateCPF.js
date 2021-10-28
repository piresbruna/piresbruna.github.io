export function validateCPF(cpfOriginal) {
  if (cpfOriginal.value === '' || cpfOriginal.value.length < 11) {
    return false
  } else {
    const cpf = cpfOriginal.value.replace(/\D/g, '')
    let cpfMainDigits = cpf.substring(0, 9)

    let cpfDigits = cpfMainDigits.split('')

    let soma = 0
    let index = 0

    cpfDigits.forEach(digit => {
      soma = soma + Number(digit) * (10 - index)
      index++
    })

    let firstVerificationDigit = 0
    if (Number(soma) % 11 === 0) {
      firstVerificationDigit = 0
    } else if (Number(soma) % 11 === 1) {
      firstVerificationDigit = 1
    } else {
      firstVerificationDigit = 11 - (Number(soma) % 11)
    }

    cpfDigits.push(String(firstVerificationDigit))

    soma = 0
    index = 0

    cpfDigits.forEach(digit => {
      soma = soma + Number(digit) * (11 - index)
      index++
    })

    let secondVerificationDigit = 0
    if (Number(soma) % 11 === 0) {
      secondVerificationDigit = 0
    } else if (Number(soma) % 11 === 1) {
      secondVerificationDigit = 1
    } else {
      secondVerificationDigit = 11 - (Number(soma) % 11)
    }

    cpfDigits.push(String(secondVerificationDigit))

    return (
      cpfDigits[9] === cpf.substring(9, 10) &&
      cpfDigits[10] === cpf.substring(10, 11)
    )
  }
}
