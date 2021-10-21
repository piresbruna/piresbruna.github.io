import { masks } from './modules/mask.js'
import { Person } from './modules/Person.class.js'
import { validateFields } from './modules/valid.js'
const name = document.getElementById('nome')
const cpf = document.getElementById('cpf')
const date = document.getElementById('dt_nasc')
const email = document.getElementById('email')
const fone = document.getElementById('fone')
const cep = document.getElementById('cep')

document.querySelectorAll('input').forEach($input => {
  const field = $input.dataset.js

  $input.addEventListener(
    'input',
    e => {
      e.target.value = masks[field](e.target.value)
    },
    false
  )
})

var buttonSubmit = document.getElementById('button')
buttonSubmit.addEventListener('click', () => {
  if (validateFields.validateFields(name, date, email, fone, cep)) {
    const person = new Person(
      name.value,
      date.value,
      cpf.value,
      email.value,
      fone.value,
      cep.value
    )
    person.printName()
  }
})
