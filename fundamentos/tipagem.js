/**
 * Tutorial de Javascript
 * Estudo da tipagem dinamica
 * @author Hellen Rodrigues
 * 
 */

console.log("Strings >>>>>>>>>>>>")
let nome = "Hellen"
console.log(typeof (nome))
console.log(nome)

console.log(nome.replace("Hellen", "Hel"))
// concatenaçao (União)

console.log("Aluno: " + nome)//não usar desta forma

console.log(`Hellen: ${nome}`)//forma mais segura

console.log("Números >>>>>>>>>>>>>>>>>>")
let peso = 60
let altura = 1.57
console.log(typeof (peso))
console.log(typeof (altura))
console.log(Number.isInteger(peso))
console.log(Number.isInteger(altura))
let imc
imc = peso / (altura * altura)
console.log(`IMC: ${imc.toFixed(2)}`)
//ATENÇÂO
console.log(10 / 0)
console.log("3" + 2)
console.log("3" - 2)
console.log("3x" - 2)
console.log("3" * 2)
console.log("10" / 2)
console.log(0.5 + 0.5)
console.log(0.1 + 0.2)
console.log(0.1 + 0.7)
console.log("Booleanos >>>>>>>>>>>>")
let led = false
typeof (led)
console.log("Comparadores especiais")
let x = 2
let y = "2"
console.log(typeof (x))
console.log(typeof (y))
console.log(x == y)
console.log(x === y)
console.log("Problemas no uso do var >>>>>>>>>>>>>>>>>>")
var media = 8
console.log(typeof (media))
console.log(media)

// Uso de chaves na linguaguem JS
let mediaFinal = 3
console.log(`Media: ${mediaFinal}`)
if (mediaFinal < 5)
    console.log("REPROVADO")
else
    console.log("APROVADO")
console.log("Emitir certificado")

for (let i = 1; i <= 10; i++)
    console.log("não processado na estrutura for")
