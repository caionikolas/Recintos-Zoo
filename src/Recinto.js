import { carnivoros } from './Animal.js'

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
  for (let i = 0; i < animaisRecinto.animaisExistentes.length; i++) {
    if (animaisRecinto.animaisExistentes[i] === animal) {
      return false
    }
  }
  return true
}

const recinto1 = new Recinto(1, ['savana'], 10, [3, 'MACACO'])
const recinto2 = new Recinto(2, ['floresta'], 5, [])
const recinto3 = new Recinto(3, ['savana', 'rio'], 7, [2, 'GAZELA'])
const recinto4 = new Recinto(4, ['rio'], 8, [])
const recinto5 = new Recinto(5, ['savana'], 9, [3, 'LEAO'])

export const recintos = [
  { ...recinto1 },
  { ...recinto2 },
  { ...recinto3 },
  { ...recinto4 },
  { ...recinto5 }
]
