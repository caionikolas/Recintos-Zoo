import {
  recinto1,
  recinto2,
  recinto3,
  recinto4,
  recinto5,
  recintos
} from './Recinto.js'
import {
  animais,
  animal1,
  animal2,
  animal3,
  animal4,
  animal5,
  animal6
} from './Animal.js'
import { recintosViaveis } from './recintos-viaveis.js'

class RecintosZoo {
  animais = [
    { ...animal1 },
    { ...animal2 },
    { ...animal3 },
    { ...animal4 },
    { ...animal5 },
    { ...animal6 }
  ]

  recintos = [
    { ...recinto1 },
    { ...recinto2 },
    { ...recinto3 },
    { ...recinto4 },
    { ...recinto5 }
  ]

  analisaRecintos(animal, quantidade) {
    if (quantidade <= 0) {
      return {
        erro: 'Quantidade inválida'
      }
    }

    for (let i = 0; i < this.animais.length; i++) {
      if (animal === this.animais[i].especie) {
        const recintosTotal = recintosViaveis(
          animal,
          quantidade,
          this.animais,
          this.recintos
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
