export function validateCEP(cepNumber) {
  let inCep = String(cepNumber.value).replace(/\D/g, '')

  return !(inCep === '' || inCep.length < 8)
}
