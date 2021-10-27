import { validateCEP } from './CEP-valid.js'

export async function getUFByCEP(number) {
  if (validateCEP(number)) {
    return fetch(`https://viacep.com.br/ws/${number}/json/`)
      .then(response => response.json())
      .then(data => data.uf)
  } else {
    throw new Error('CEP inválido!')
  }
}

export async function getCovidInfoByUF(callback) {
  const cepNumber = cep.value.replace(/\D/g, '')

  const resultMessage = document.createElement('h4')
  document.getElementById('results').appendChild(resultMessage)

  try {
    const cepUF = await callback(cepNumber)
    if (cepUF === undefined) {
      throw new Error('CEP inválido!')
    } else {
      const covidInfo = await (
        await fetch(
          `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${cepUF}`
        )
      ).json()

      const dateFormated = covidInfo.datetime
        .replace(/\D/g, '')
        .replace(/(\d{4})(\d{2})(\d{2})\d+?$/, '$3/$2/$1')

      const resultInfo = `
      <li>UF: ${covidInfo.uf}</li>
      <li>Estado: ${covidInfo.state}</li>
      <li>Casos: ${covidInfo.cases}</li>
      <li>Mortes: ${covidInfo.deaths}</li>
      <li>Suspeitos: ${covidInfo.suspects}</li>
      <li>Recusas: ${covidInfo.refuses}</li>
      <li>Data: ${dateFormated}</li>`

      resultMessage.textContent = 'Resultados obtidos:'

      const ul = document.createElement('ul')
      results.appendChild(ul)
      ul.innerHTML = resultInfo
    }
  } catch (err) {
    resultMessage.textContent = err.message
  }
}
