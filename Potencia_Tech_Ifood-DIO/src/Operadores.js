let idade = 30
console.log(idade)


idade = 30+6
console.log("Operação de adição " + idade)


let codigoDoProduto = 1023
let codigoExato = codigoDoProduto - 1000
console.log(codigoExato)


let primeiroNumero = 5000
let segundoNumero = 1234
console.log(primeiroNumero - segundoNumero)


let precoProduto = 75.99
let valorComTaxa = precoProduto * 2
console.log(valorComTaxa)


let multiplicador = 4
let multiplicando = 12
let produto = multiplicador * multiplicando
console.log(`O resultando da multiplicação é ${produto}`)


let notaDoMercado = 50
let pessoasParaDividir = 2
console.log(`Operação de divisão: ${notaDoMercado/pessoasParaDividir}`)


let calculo = 10/3
console.log(`Operação de divisão ${calculo}`)
calculo = 10%3
console.log(`Operação de módulo ${calculo}`)


// ++ incremento
let contador = 1
contador ++
contador ++
console.log(contador)

contador --
contador --
console.log(contador)


let preco = 10
preco += 5
preco -= 5
console.log(preco)


let resultado = 3*((5+5)- 10)
console.log(resultado)


// = é atribuição
// == é para comparar o valor
// === é para comparar o valor e o formato do conteúdo
// !== é diferente?
let numero = "1"
console.log(numero == "1")

let marca = "apple"
console.log(marca == "samsung")

let idade2 = "19"
console.log(idade === 19)

let cor = "amarelo"
console.log(idade !== "azul")

//guardar o valor em uma variavel de resultado TRUE?FALSE
let fruta = "maçã"
let resultado2 = fruta === "abacaxi"
console.log(resultado2) 

let cpfBloqueado = "123.123.534-54"
let cpfUsuario = "645.623.776-23"
let ehCpfBloqueado = cpfUsuario === cpfBloqueado
console.log("O usuario esta barrado ? " + ehCpfBloqueado)

let codPermitido = "423.222.333-11"
cpfUsuario = "423.222.333-11"
let ehBloqueado = cpfUsuario !== codPermitido
console.log("é um usuario invalido? " + ehBloqueado)


//operadores de maior e menor
let idadeMinima = 18
let idadeUsuario = 18
let idadePermitidaValida = idadeUsuario >= idadeMinima
console.log(idadePermitidaValida)

let idadeDeCorte = 50
let idadeUser = 50
let resultadoTerceiraIdade = idadeDeCorte <= idadeUser
console.log(resultadoTerceiraIdade)

let texto = "Gui"
console.log(texto === "gui")


//AND (&&)
let idadeAnd = 18
let vistoVerificado = true
let resultadoAnd = (idade >= 18) && (vistoVerificado === true)
console.log(resultadoAnd)

//AND (&&), coletar 100 moedas e 1 item estrela
let moedasColetadas = 99
let item = "estrela"
let resultadoAnd2 = (moedasColetadas >= 100) && (item === "estrela")
console.log(resultadoAnd2)


//OR (|| - PIPE), nosso boneca só pode sair se estiver sem chuva OU com guarda chuva
let tempo = "sol"
let itemOR = "guarda chuva"
let podeSair = (tempo !== "chuva") || (itemOR === "guarda chuva")
console.log(`nosso personagem pode sair? ${podeSair}`)

let tempo2 = "chuva"
let itemOR2 = "guarda chuva"
let podeSair2 = (tempo2 !== "chuva") || (itemOR2 === "guarda chuva")
console.log(`nosso personagem pode sair? ${podeSair2}`)

let tempo3 = "chuva"
let itemOR3 = "pá"
let podeSair3 = (tempo3 !== "chuva") || (itemOR3 === "guarda chuva")
console.log(`nosso personagem pode sair? ${podeSair3}`)


//NOT ( !), nega uma afirmação
let tempoNot = "chuva"
let resultadoNot = tempoNot === "chuva"
console.log(resultadoNot)

let tempoNot2 = "chuva"
let resultadoNot2 = tempoNot2 !== "chuva"
console.log(resultadoNot2)

let tempoNot3 = "chuva"
let resultadoNot3 = tempoNot3 === "chuva"
console.log(!resultadoNot3) // fica false por conta da interrogação que inverte o resultado

let tempoNot4 = "chuva"
let resultadoNot4 = tempoNot4 === "chuva"
console.log(!!resultadoNot4)

let tempoNot5 = "chuva"
let horario = 6
let resultadoNot5 = !(tempoNot5 === "chuva") && (horario > 5)// a interrogação pode ser muito útil no desenvolvimento de botões para mudar de cor
console.log(resultadoNot5)