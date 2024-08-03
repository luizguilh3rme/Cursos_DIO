//for
for (let contador = 0; contador < 4; contador++){
    console.log(contador)
    console.log("aumentar o contador")
}

//for
let pontosDeVida = 0
for(let i = 0; i < 11; i++){
    pontosDeVida += 1
    console.log(`Tomou porção mágica ${i}`)
}
console.log(`${pontosDeVida} Totais`)


//while primeiro verificar a condição e depois executa
let contador2 = 0
while(contador2 < 5){
    console.log("Olá")
    contador2++
}


//do while primeiro executa e depois verifica a condição
let contador3 = 0
do{
    console.log("hello")
    contador3++
}while (contador3 < 3)