/**
 * Calculadora FLEX
 * @author Hellen Rodrigues
 * @version 1.0
 */

function calcular() {
    // a linha abaixo captura o valor da caixa de entrada
    let etanol = formFlex.inputEtanol.value
    console.log(etanol) //teste
    let gasolina = formFlex.inputGasolina.value
    console.log(gasolina)
// Logica principal: se o valor do litro custar ate 70% do valor da gasolina vale mais a pena abastecer com Etanol

if(etanol < 0.7 * gasolina) {
    console.log("abasteça com Etanol")
    // a linha abaixo identifica a tag e muda a propriedade src
    document.getElementById('status').src = "./img/etanol.png"
} else {
    console.log("abasteça com Gasolina")
    document.getElementById('status').src = "./img/gasolina.png"
}

}

function limpar() {
    document.getElementById('status').src = "./img/neutro.png"
}

