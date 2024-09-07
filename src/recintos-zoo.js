import { recintos } from './Recinto.js'
import { animais } from './Animal.js'
import { recintosViaveis } from './recintos-viaveis.js'

class RecintosZoo {
  analisaRecintos(animal, quantidade) {
    if (quantidade <= 0) {
      return {
        erro: 'Quantidade inválida'
      }
    }

    for (let i = 0; i < animais.length; i++) {
      if (animal === animais[i].especie) {
        const recintosTotal = recintosViaveis(
          animal,
          quantidade,
          animais,
          recintos
        )

        if (recintosTotal.length === 0) {
          return { erro: 'Não há recinto viável' }
        }
        return {
          recintosViaveis: recintosTotal
        }
      }
    }

    return { erro: 'Animal inválido' }
  }
}

export { RecintosZoo as RecintosZoo }
