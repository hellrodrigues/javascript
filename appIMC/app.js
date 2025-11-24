/**
 * Calculo do
 * @author Hellen Rodrigues
 */

let peso, altura, imc

function calcular (){
    peso = formIMC.input.value
    altura = formIMC.inputAltura.value
    console.log(peso)
    console.log(altura)
    // processamento
    imc= peso / (altura * altura)
    //saída
    formIMC.textIMC.value = `IMC: ${imc.toFixed(2)}`
    //alterar a imagem em função do resultado
    if (imc < 18.5) {
        document.getElementById('status').src="./img/imc2.png"
    } else if ( imc < 25) {
        document.getElementById('status').scr="./img/imc3.png"
    } else if ( imc < 30) {
        document.getElementById('status').scr="./img/imc4.png"
    } else if ( imc < 35) {
        document.getElementById('status').scr="./img/imc5.png"
    } else if ( imc < 25) {
        document.getElementById('status').scr="./img/imc6.png"
    } else ( imc < 25) 
        document.getElementById('status').scr="./img/imc7.png"
    }


function limpar() {
    document.getElementById('status').src = "./img/imc.png"
}