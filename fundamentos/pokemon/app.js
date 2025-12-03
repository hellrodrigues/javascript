/**
 * Sorteio de uma carta
 * Exemplo de uso de array para otimizar o código
 * @author Hellen Rodrigues
 */

function sortear() {
    //alert ("teste")
    let cartas = [0, 1, 2, 3, 4, 5]
    let sorteio = Math.floor(Math.random()* 6)
    //console.log (sorteio)
    document.getElementById('pokemon').src = `./img/${cartas[sorteio]}.jpg`
}