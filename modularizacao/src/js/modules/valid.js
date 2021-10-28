import { validateName } from './validateName.js'
import { validateCPF } from './validateCPF.js'
import { validateBirthDate } from './validateBirthDate.js'
import { validateEmail } from './validateEmail.js'
import { validatePhone } from './validatePhone.js'
import { validateCEP } from './validateCEP.js'

export function validateFields(
  name,
  cpfNumber,
  birthDate,
  emailAddress,
  phone,
  cepNumber
) {
  if (!validateName(name)) {
    name.classList.add('errorInput')
    name.focus()
    return false
  } else if (!validateCPF(cpfNumber)) {
    cpfNumber.classList.add('errorInput')
    cpfNumber.focus()
    return false
  } else if (!validateBirthDate(birthDate)) {
    birthDate.classList.add('errorInput')
    birthDate.focus()
    return false
  } else if (!validateEmail(emailAddress)) {
    emailAddress.classList.add('errorInput')
    emailAddress.focus()
    return false
  } else if (!validatePhone(phone)) {
    phone.classList.add('errorInput')
    phone.focus()
    return false
  } else if (!validateCEP(cepNumber)) {
    cepNumber.classList.add('errorInput')
    cepNumber.focus()
    return false
  } else {
    return true
  }
}
