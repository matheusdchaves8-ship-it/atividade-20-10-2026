//let nomes = ["Paula Ribeiro", "Ana Júlia", "Israel de Oliveira"];

//Enquanto é um laço de repetição que sempre irá "rodar" enquanto
// a condição passada for verdadeira

//let contador = 0 
//while (contador <= 20) {
    //console.log (contador)
    //contador = contador + 2 
//}
//let nome = ["admin"];
//let recebe = prompt ("Digite o nome")

//while( recebe.toLowerCase().trim() != nome.tolowercase().trim()){
//    recebe = prompt("Nome incorreto, digite novamente")
//}

let nomes = ["Paula Ribeiro", "Ana Júlia", "Israel de Oliveira", "Bruno Fernandes", "Zacarias"];

nomes.sort();

nomes.forEach(nome=>{
    console.log(nome)
})
let indice = nomes.indexOf("Israel de Oliveira")
nomes.splice(indice, 1);

console.log(nomes)