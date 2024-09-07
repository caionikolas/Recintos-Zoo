import { animalBioma, animalTamanho, carnivoros } from './Animal'

export function recintosViaveis(animal, quantidade, animais, recintos) {
  const tamanho = animalTamanho(animal, animais)
  const bioma = animalBioma(animal, animais)
  let recintostTotal = []
  for (let j = 0; j < recintos.length; j++) {
    let espacoVazio =
      recintos[j].tamanhoTotal - recintos[j].animaisExistentes[1] * tamanho

    if (!espacoVazio) {
      espacoVazio = recintos[j].tamanhoTotal
    }

    if (
      espacoVazio >= tamanho * quantidade &&
      recintos[j].bioma.toString() === bioma
    ) {
      if (
        carnivoros.includes(animal, animais) &&
        espacoVazio === recintos[j].tamanhoTotal
      ) {
        recintostTotal.push(
          `Recinto ${recintos[j].numero} (espaço livre: ${
            espacoVazio - tamanho
          } total: ${recintos[j].tamanhoTotal})`
        )
      }
    }
  }
  return recintostTotal
}
