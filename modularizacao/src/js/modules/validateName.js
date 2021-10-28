export function validateName(name) {
  const inName = String(name.value)

  return !(inName === '' || !/\s\D/.test(inName) || /\d/g.test(inName))
}
