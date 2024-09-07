class Recinto {
  constructor(numero, bioma, tamanhoTotal, animaisExistentes) {
    this.numero = numero
    this.bioma = bioma
    this.tamanhoTotal = tamanhoTotal
    this.animaisExistentes = animaisExistentes
  }
}

export const recinto1 = new Recinto(1, ['savana'], 10, ['MACACO', 3])

export const recinto2 = new Recinto(2, ['floresta'], 5, [])

export const recinto3 = new Recinto(3, ['savana', 'rio'], 7, ['GAZELA', 1])

export const recinto4 = new Recinto(4, ['rio'], 8, [])

export const recinto5 = new Recinto(5, ['savana'], 9, ['LEAO', 1])
