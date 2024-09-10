import { animalBioma, animalTamanho, carnivoros } from './Animal.js'

export function recintosViaveis(animal, quantidade, animais, recintos) {
  const tamanho = animalTamanho(animal, animais)
  const bioma = animalBioma(animal, animais)
  let recintostTotal = []

  //Verifica o espaço livre nos recintos
  for (let i = 0; i < recintos.length; i++) {
    let espacoLivreNoRecinto =
      recintos[i].tamanhoTotal - recintos[i].animaisExistentes[0]

    if (!espacoLivreNoRecinto) {
      espacoLivreNoRecinto = recintos[i].tamanhoTotal
    }

    //filtra todos os recintos que possuem tamanho que cabe o animal e que seja do mesmo bioma
    if (espacoLivreNoRecinto >= tamanho * quantidade) {
      for (let j = 0; j < bioma.length; j++) {
        if (recintos[i].bioma.includes(bioma[j])) {
          //
          // Verifica se o recinto é vazio
          if (espacoLivreNoRecinto === recintos[i].tamanhoTotal) {
            if (animal !== 'MACACO') {
              recintostTotal.push(
                `Recinto ${recintos[i].numero} (espaço livre: ${
                  espacoLivreNoRecinto - tamanho * quantidade
                } total: ${recintos[i].tamanhoTotal})`
              )
            }

            if (animal === 'MACACO') {
              if (quantidade !== 1) {
                recintostTotal.push(
                  `Recinto ${recintos[i].numero} (espaço livre: ${
                    espacoLivreNoRecinto - tamanho * quantidade
                  } total: ${recintos[i].tamanhoTotal})`
                )
              }
            }
          }
          //Caso não seja,
          //Verifica se o animal é carnivoro
          if (carnivoros.includes(animal)) {
            // Verifica se possui a mesma especie no recinto
            if (recintos[i].animaisExistentes[1] === animal) {
              recintostTotal.push(
                `Recinto ${recintos[i].numero} (espaço livre: ${
                  espacoLivreNoRecinto - tamanho * quantidade
                } total: ${recintos[i].tamanhoTotal})`
              )
            }
          }
          //
          //Como ele não é carnivoro,
          if (!carnivoros.includes(animal)) {
            //Verifica-se se os outros animais do recinto são carnivoros
            const possui = carnivoros.includes(recintos[i].animaisExistentes[1])
            if (!possui) {
              if (animal !== 'HIPOPOTAMO') {
                if (recintos[i].animaisExistentes[1] === animal) {
                  recintostTotal.push(
                    `Recinto ${recintos[i].numero} (espaço livre: ${
                      espacoLivreNoRecinto - tamanho * quantidade
                    } total: ${recintos[i].tamanhoTotal})`
                  )
                }
                if (
                  recintos[i].animaisExistentes[1] !== animal &&
                  recintos[i].animaisExistentes.length !== 0
                ) {
                  recintostTotal.push(
                    `Recinto ${recintos[i].numero} (espaço livre: ${
                      espacoLivreNoRecinto - tamanho * quantidade - 1
                    } total: ${recintos[i].tamanhoTotal})`
                  )
                }
              }
              //Se o animal é um hipopotamo
              //Verifica-se se é um recinto com savana e rio
              if (animal === 'HIPOPOTAMO') {
                if (
                  recintos[i].bioma.includes('SAVANA') &&
                  recintos[i].bioma.includes('RIO')
                ) {
                  recintostTotal.push(
                    `Recinto ${recintos[i].numero} (espaço livre: ${
                      espacoLivreNoRecinto - tamanho * quantidade - 1
                    } total: ${recintos[i].tamanhoTotal})`
                  )
                }
              }
            }
          }
        }
      }
    }
  }
  var total = recintostTotal.filter(function (este, i) {
    return recintostTotal.indexOf(este) === i
  })

  return total
}
