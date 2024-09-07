import { recinto1, recinto2, recinto3, recinto4, recinto5 } from './Recinto.js'
import {
  animal1,
  animal2,
  animal3,
  animal4,
  animal5,
  animal6
} from './Animal.js'
import { recintosViaveis } from './recintosViaveis.js'

class RecintosZoo {
  recintos = [
    { ...recinto1 },
    { ...recinto2 },
    { ...recinto3 },
    { ...recinto4 },
    { ...recinto5 }
  ]

  animais = [
    { ...animal1 },
    { ...animal2 },
    { ...animal3 },
    { ...animal4 },
    { ...animal5 },
    { ...animal6 }
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

/*
for (let j = 0; j < this.recintos.length; j++) {
          let espacoVazio =
            this.recintos[j].tamanhoTotal -
            this.recintos[j].animaisExistentes[1] * tamanho

          if (!espacoVazio) {
            espacoVazio = this.recintos[j].tamanhoTotal
          }

          if (
            espacoVazio >= tamanho * quantidade &&
            this.recintos[j].bioma.toString() === bioma
          ) {
            if (
              carnivoros.includes(animal, this.animais) &&
              espacoVazio === this.recintos[j].tamanhoTotal
            ) {
              recintos.push(
                `Recinto ${this.recintos[j].numero} (espaço livre: ${
                  espacoVazio - tamanho
                } total: ${this.recintos[j].tamanhoTotal})`
              )
            }
          }
        }
*/
