class Recinto {
  constructor(numero, bioma, tamanhoTotal, animaisExistentes) {
    this.numero = numero
    this.bioma = bioma
    this.tamanhoTotal = tamanhoTotal
    this.animaisExistentes = animaisExistentes
  }
}

export function verificaCarnivoros(animaisRecinto, carnivoros) {
  for (let i = 0; i < carnivoros.length; i++) {
    if (animaisRecinto.includes(carnivoros[i])) {
      return true
    }
  }
  return false
}

export function verificaOutros(animaisRecinto, animal) {
  for (let i = 0; i < animaisRecinto.length; i++) {
    if (animaisRecinto[i] != animal) {
      return true
    }
  }
  return false
}

export const recinto1 = new Recinto(1, ['savana'], 10, ['MACACO', 3])

export const recinto2 = new Recinto(2, ['floresta'], 5, [])

export const recinto3 = new Recinto(3, ['savana', 'rio'], 7, ['GAZELA', 1])

export const recinto4 = new Recinto(4, ['rio'], 8, [])

export const recinto5 = new Recinto(5, ['savana'], 9, ['LEAO', 1])

console.log(recinto5.animaisExistentes.includes('LEAO'))
