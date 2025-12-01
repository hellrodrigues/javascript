/**vetor (array)
 * 
 * @author Hellen Rodrigues
 */

//                  [0]       [1]     [2]        [3]      [4]      [5]
let alunosEM1 = ["Snoopy", "Spike", "Jaime", "Gabriela","Hellen","lola"]
console.log(typeof(alunosEM1))

//lendo a valor de um array 
console.log(alunosEM1)
console.table(alunosEM1)
console.log(alunosEM1.lenght) //exibe o tamanho do vetor
console.log(alunosEM1[3])

// Adicionando dados no array
//o push adiciona sempre no fim da lista
alunosEM1.push("Neguinha")
console.table(alunosEM1)

//Modificando os dados de um vetor

alunosEM1[1] = "Jáime"
console.table(alunosEM1)

//Excluindo dados de um vetor
//o comendo delete excluis os dados sem alterar o indices
delete alunosEM1 [3]
console.table(alunosEM1)


//percorendo um vetor
//usamos um laço for para percorrer o indice e extrair os dados
let notas = [2,5,8,7,9,4]
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}

//simplificando do laço para percorrer um array
//for each
notas.forEach((notas) => {
    console.log(notas)
})  
//in
for (let i in notas) {
    console.log(notas[i])
}
