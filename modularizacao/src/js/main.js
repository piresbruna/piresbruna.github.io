import { masks } from './modules/mask.js'
import { Person } from './modules/Person.class.js'
import { validateFields } from './modules/valid.js'
/*const name = document.getElementById('nome')
const cpf = document.getElementById('cpf')
const date = document.getElementById('dt_nasc')
const email = document.getElementById('email')
const fone = document.getElementById('fone')
const cep = document.getElementById('cep')*/

document.querySelectorAll('input').forEach($input => {
  const field = $input.dataset.js

  $input.addEventListener(
    'input',
    e => {
      e.target.classList.remove('errorInput')
      e.target.value = masks[field](e.target.value)
    },
    false
  )
})

function clearFields() {
  document.querySelectorAll('input').forEach(e => {
    e.value = ''
  })
}

function submit() {
  if (validateFields(nome, cpf, dt_nasc, email, fone, cep)) {
    const person = new Person(
      nome.value,
      dt_nasc.value,
      cpf.value,
      email.value,
      fone.value,
      cep.value
    )
    clearFields()
    person.registerSuccess()
  }
}

const form = document.querySelector('.form')

form.addEventListener('submit', e => {
  e.preventDefault()
  submit()
})
