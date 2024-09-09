class Animal {
  constructor(especie, tamanho, bioma) {
    this.especie = especie
    this.tamanho = tamanho
    this.bioma = bioma
  }
}

export function animalTamanho(animal, animais) {
  for (let i = 0; i < animais.length; i++) {
    if (animal === animais[i].especie) {
      return animais[i].tamanho
    }
  }
}

export function animalBioma(animal, animais) {
  for (let i = 0; i < animais.length; i++) {
    if (animal === animais[i].especie) {
      return animais[i].bioma
    }
  }
}

export const carnivoros = ['LEAO', 'LEOPARDO', 'CROCODILO']

const animal1 = new Animal('LEAO', 3, ['savana'])
const animal2 = new Animal('LEOPARDO', 2, ['savana'])
const animal3 = new Animal('CROCODILO', 3, ['rio'])
const animal4 = new Animal('MACACO', 1, ['savana', 'floresta'])
const animal5 = new Animal('GAZELA', 2, ['savana'])
const animal6 = new Animal('HIPOPOTAMO', 4, ['savana', 'rio'])

export const animais = [
  { ...animal1 },
  { ...animal2 },
  { ...animal3 },
  { ...animal4 },
  { ...animal5 },
  { ...animal6 }
]
