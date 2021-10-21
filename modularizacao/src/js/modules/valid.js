export const validateFields = {
  validateName(nome) {
    let inNome = String(nome.value)

    if (inNome === '' || !/\s/.test(inNome) || /\d/g.test(inNome)) {
      return false
    } else {
      return true
    }
  },
  validateCPF(cpf) {
    let inCpf = String(cpf.value)
    if (inCpf === '') {
      return false
    } else {
      inCpf = inCpf.replace(/\D/g, '')
      console.log(inCpf)
      let inCpfDigits = inCpf.split('')
      let soma = 0
      let firstCertificateDigit = 0
      let secondCertificateDigit = 0

      for (let i = 0; i < inCpfDigits.lenght - 2; i++) {
        soma += Number(inCpfDigits[i]) * (10 - i)
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
      soma = 0
      for (let i = 0; i < inCpfDigits.lenght - 1; i++) {
        soma += Number(inCpfDigits[i]) * (11 - i)
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
        inCpfDigits[9] == firstCertificateDigit &&
        inCpfDigits[10] == secondCertificateDigit
      ) {
        return true
      } else {
        return false
      }
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
    if (!validateCPF(cpf)) {
      cpf.classList.add('errorInput')
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
