export function validateBirthDate(birthDate) {
  const inDate = String(birthDate.value).replace(/\D/g, '')

  const inDateParts = birthDate.value.split('/')

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
}
