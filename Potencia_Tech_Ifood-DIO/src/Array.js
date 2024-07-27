// Variavel pode mudar valores
//let nome = prompt("Digite seu nickname")

// Concatenar variavel
//console.log(`Bem vindo ${nome}`)




// Constante não muda os valores, pode ser utilizada em programas onde vc utiliza a mesma frase muitas vezes
const notificacao = "Pokemo Go diz: "

console.log(`${notificacao} tem um novo Pokemon na região`)

console.log(`${notificacao} você venceu um líder`)




//exemplo
let poteCafe = "Café Pilão"
let poteAcucar = "Açucar Cristal"
let poteBiscoito = "Biscoito Maizena"

const msgVovo = "Na cozinha da vovó hoje tem:"

console.log(`${msgVovo} ${poteCafe}, ${poteBiscoito} e ${poteAcucar}`)

poteCafe = "Café 3 corações"

console.log(`${msgVovo} ${poteCafe}, ${poteBiscoito} e ${poteAcucar}`)




//exemplo
let nomePokemon = "pikachu"
let nivelPokemon = 20
let pontosDeVidaPokemon = 45
let pokemonSexo = "M"
let selecionavel = true




//exercicio de fixação
let nomePessoa = "Javinha"
let idade = 34
let numeroTelefone = "79 97435-1253" 
let cpf = "234.536.987-27"
let endereco = "Conj. Mariota Chamado, 56"
let recebePensao = true




//guardando coisas em armarios (vetores ou arrays)
let pokemon = ["pikachu", "chamander", "bulbasaur"]

console.log(pokemon[0])

console.log(pokemon)
console.log(pokemon.pop)
console.log(pokemon.shift)




//arrays com 2 linhas
let timePokemon = [
    ["pikachu", "M", 1],
    ["Chamander", "F", 3]
]

console.log(`O pokemon ${timePokemon[1][0]} é do sexo ${timePokemon[1][1]} e esta no nivel ${timePokemon[1][2]}`)