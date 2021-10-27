export function validateCEP(number) {
  return !(number === '' || number.length < 8)
}
