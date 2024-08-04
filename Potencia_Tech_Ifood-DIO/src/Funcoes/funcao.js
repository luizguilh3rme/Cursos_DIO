torrar()
injetarPao()

function torrar(){ //função dentro de outra função
    console.log("Torrando o pão")
    injetarPao()
}

function injetarPao(){
    console.log("Preparando para injetar o pão")
    console.log("Finalizado")
}

/*Funções não começam com numeros, evitar nomes com espaços, funções são ações, definir o nome da função
especificando o que o codigo vai fazer, organizar codigo por identação, funções tambem ser chamados de métodos */

main()

function main(){
    getData()
    checkValues()
    sendToDatabase()
    enviarDados()
}

function getData(){
    console.log("Pegando dados do usuário")
}

function checkValues(){
    console.log("Validando os dados")
}

function sendToDatabase(){
    console.log("Cadastrando dados")
}


function enviarDados(){
    let nomeBanco = "Banco de dados"
    console.log(`O nome do banco é: ${nomeBanco}`)

    if( 7===7){
        console.log("Senha correta")
    } else{
        console.log("Senha incorreta")
    }
}