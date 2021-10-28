export class Person {
  constructor(nome, cpf, dt_nasc, email, fone, cep) {
    this.nome = nome
    this.cpf = cpf
    this.dt_nasc = dt_nasc
    this.email = email
    this.fone = fone
    this.cep = cep
  }

  registerSuccess() {
    alert(`${this.nome} foi cadastrado com sucesso!`)
  }
}
