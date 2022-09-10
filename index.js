console.log('Hello World!')

// var valor1 = 1
let valor2 = 2
const valor3 = 3

const soma = valor2 + valor3

console.log('soma:', soma)

const boolean = true
const numero = 1
const texto = 'texto teste'
const vazio = null
const indefinido = undefined

const listaCompras = ['pasta de dentes', 'arroz', 'feijao']

const pessoa = {
  peso: 50,
  altura: 1.80
}

console.log('-----------')

console.log('boolean', boolean)
console.log('numero', numero)
console.log('texto', texto)
console.log('vazio', vazio)
console.log('indefinido', indefinido)
console.log('listaCompras', listaCompras)
console.log('pessoa', pessoa)

for(const item of listaCompras){
  console.log('item da lista: ', item)
}

console.log('peso da pessoa', pessoa.peso)

const peso = 'peso da pessoa ' + pessoa.peso + 'kg'
console.log(peso)

const peso2 = `peso da pessoa ${ pessoa.peso }kg`
console.log(peso2)

console.log('----------- funcao')

function somar(valor1, valor2) {
  const resultado = valor1 + valor2

  console.log('resultado da soma: ', resultado)
}

somar(7, 5)

const multiplicar = (valor1, valor2) => {
  const resultado = valor1 * valor2

  console.log('resultado da multiplicacao: ', resultado)
}

multiplicar(4,3)

console.log('alterou 5')
