let resultado = soma(5,8)

console.log(`O resultado da soma é ${resultado}`)

function soma(numA, numB) {
    let somatorio = numA + numB
    return somatorio
}


let userName = getFirstName("Luiz-Guilherme-Muniz-barreto", "-")
console.log(`Seja bem vindo ${userName}`)

userName = getFirstName("Gabriel Rodrigo Sanssa Gride", "")
console.log(`Seja bem vindo ${userName}`)

function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0] //traz somente o primeiro nome, pega um nome inteiro e divide
    return firstName 
}
