let ehLigado = false
 if(ehLigado){ //if so funciona se a condição for verdadeira
    console.log("executou comando")
 }


 let ehLigado2 = true
 if(ehLigado2){ //if so funciona se a condição for verdadeira
    console.log("executou comando")
 }


let possuiOvos = false
let itensComprados = ""
if(possuiOvos){
    itensComprados = "Leite"
}
console.log(`item comprado: ${itensComprados}`)


let possuiOvos2 = true
let itensComprados2 = ""
if(possuiOvos2){
    itensComprados2 = "Leite"
}
console.log(`item comprado: ${itensComprados2}`)


let possuiOvos3 = true
let itensComprados3 = ""
if(possuiOvos3){
    itensComprados3 = "Leite"
}  else{
    console.log("passou na sessão de congelados")
    itensComprados3 = "Lasanha congelada"
}
console.log(`item comprado: ${itensComprados3}`)


let possuiOvos4 = false
let itensComprados4 = ""
if(possuiOvos4){
    itensComprados4 = "Leite"
} else{
    console.log("passou na sessão de congelados")
    itensComprados4 = "Lasanha congelada"
}
console.log(`item comprado: ${itensComprados4}`)


let nivelDeFome = 0
if(nivelDeFome === 1){
    console.log("voce esta com pouca fome")
} else if(nivelDeFome===2){
    console.log("voce esta com muita fome")
} else{
    console.log("com essa fome voce comeria tudo")
}



