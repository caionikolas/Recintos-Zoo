import { animalBioma, animalTamanho, carnivoros } from './Animal'
import { verificaCarnivoros, verificaOutros } from './Recinto'

export function recintosViaveis(animal, quantidade, animais, recintos) {
  const tamanho = animalTamanho(animal, animais)
  const bioma = animalBioma(animal, animais)
  let recintostTotal = []
  for (let i = 0; i < recintos.length; i++) {
    let espacoLivreNoRecinto =
      recintos[i].tamanhoTotal - recintos[i].animaisExistentes[0] * tamanho

    if (!espacoLivreNoRecinto) {
      espacoLivreNoRecinto = recintos[i].tamanhoTotal
    }

    const espacoLivre = `espaço livre: ${
      espacoLivreNoRecinto - tamanho * quantidade
    }`
    const espacoTotal = `total: ${recintos[i].tamanhoTotal}`

    for (let j = 0; j < bioma.length; j++) {
      if (
        espacoLivreNoRecinto >= tamanho * quantidade &&
        recintos[i].bioma.includes(bioma[j])
      ) {
        if (carnivoros.includes(animal)) {
          if (
            espacoLivreNoRecinto === recintos[i].tamanhoTotal ||
            recintos[i].animaisExistentes[0] === animal
          ) {
            recintostTotal.push(
              `Recinto ${recintos[i].numero} (${espacoLivre} ${espacoTotal})`
            )
          }
        }

        if (animal === 'MACACO') {
          if (espacoLivreNoRecinto < recintos[i].tamanhoTotal) {
            const possuiCarnivoros = verificaCarnivoros(
              recintos[i].animaisExistentes,
              carnivoros
            )

            if (!possuiCarnivoros) {
              const possuiOutrosAnimais = verificaOutros(recintos[i], animal)

              if (!possuiOutrosAnimais) {
                recintostTotal.push(
                  `Recinto ${recintos[i].numero} (${espacoLivre} ${espacoTotal})`
                )
              }

              if (possuiOutrosAnimais) {
                recintostTotal.push(
                  `Recinto ${recintos[i].numero} (espaço livre: ${
                    espacoLivreNoRecinto -
                    tamanho * quantidade -
                    recintos[i].animaisExistentes.length +
                    1
                  } ${espacoTotal})`
                )
              }
            }
          }

          if (espacoLivreNoRecinto === recintos[i].tamanhoTotal) {
            recintostTotal.push(
              `Recinto ${recintos[i].numero} (${espacoLivre} ${espacoTotal})`
            )
          }
        }
      }
    }
  }
  return recintostTotal
}

/* 

          if (animal === 'HIPOPOTAMO') {
            return 'okay'
            if (recintos.animaisExistentes.includes(animal)) {
              recintostTotal.push(
                `Recinto ${recintos[i].numero} (espaço livre: ${
                  espacoLivreNoRecinto - tamanho
                } total: ${recintos[i].tamanhoTotal})`
              )
            }
          }
*/
