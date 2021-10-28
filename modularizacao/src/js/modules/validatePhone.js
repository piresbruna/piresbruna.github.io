export function validatePhone(phone) {
  const inPhone = String(phone.value).replace(/\D/g, '')

  return !(inPhone === '' || inPhone.length < 10)
}
