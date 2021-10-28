export function validateEmail(emailAddress) {
  const inEmail = String(emailAddress.value)

  return !(
    inEmail === '' ||
    /\s/.test(inEmail) ||
    !inEmail.includes('@') ||
    !inEmail.includes('.com')
  )
}
