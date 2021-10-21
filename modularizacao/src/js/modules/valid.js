export const validateFields = {
  validateName(nome) {
    let inNome = String(nome.value)

    if (inNome === '' || !/\s/.test(inNome) || /\d/g.test(inNome)) {
      return false
    } else {
      return true
    }
  },
  validateEmail(email) {
    let inEmail = String(email.value)

    if (
      inEmail === '' ||
      /\s/.test(inEmail) ||
      !inEmail.includes('@') ||
      !inEmail.includes('.com')
    ) {
      return false
    } else {
      return true
    }
  },
  validateFone(fone) {
    let inFone = String(fone.value).replace(/\D/g, '')

    if (inFone === '' || inFone.length < 11) {
      return false
    } else {
      return true
    }
  },
  validateCEP(cep) {
    let inCep = String(cep.value).replace(/\D/g, '')

    if (inCep === '' || inCep.length < 8) {
      return false
    } else {
      return true
    }
  },
  validateBirthDate(date) {
    let inDate = String(date.value).replace(/\D/g, '')

    let inDateParts = date.value.split('/')

    if (inDate === '' || inDate.length < 8) {
      return false
    } else if (
      inDateParts[0] < 1 ||
      inDateParts[0] > 31 ||
      inDateParts[1] < 1 ||
      inDateParts[1] > 12 ||
      inDateParts[2] < 1900 ||
      inDateParts[2] > 2021
    ) {
      return false
    } else {
      return true
    }
  },
  validateFields(name, date, email, fone, cep) {
    if (!this.validateName(name)) {
      name.classList.add('errorInput')
      name.focus()
      return false
    }
    if (!this.validateBirthDate(date)) {
      date.classList.add('errorInput')
      return false
    }
    if (!this.validateEmail(email)) {
      email.classList.add('errorInput')
      return false
    }
    if (!this.validateFone(fone)) {
      fone.classList.add('errorInput')
      return false
    }
    if (!this.validateCEP(cep)) {
      cep.classList.add('errorInput')
      return false
    }
    return true
  }
}

export function validateCPF(cpf) {
  let soma = 0
  let firstCertificateDigit = 0
  let secondCertificateDigit = 0

  cpf = cpf.replace(/\D/g, '')
  console.log(`Cpf: ${cpf}`)

  for (let i = 0; i < cpf.lenght - 2; i++) {
    soma += Number(cpf.substring(i, i + 1)) * (10 - i)
  }
  console.log(`Soma: ${soma}`)
  if (soma % 11 === 0) {
    firstCertificateDigit = 0
  } else if (soma % 11 === 1) {
    firstCertificateDigit = 1
  } else {
    firstCertificateDigit = 11 - (soma % 11)
  }
  console.log(`Primeiro Digito Verificador: ${firstCertificateDigit}`)
  for (let i = 0; i < cpf.lenght - 1; i++) {
    soma += Number(cpf.substring(i, i + 1)) * (11 - i)
  }

  if (soma % 11 === 0) {
    secondCertificateDigit = 0
  } else if (soma % 11 === 1) {
    secondCertificateDigit = 1
  } else {
    secondCertificateDigit = 11 - (soma % 11)
  }
  console.log(`Primeiro Digito Verificador: ${secondCertificateDigit}`)
  if (
    cpf.substring(10, 11) === firstCertificateDigit &&
    cpf.substring(11, 12) === secondCertificateDigit
  ) {
    return true
  } else {
    return false
  }
}
