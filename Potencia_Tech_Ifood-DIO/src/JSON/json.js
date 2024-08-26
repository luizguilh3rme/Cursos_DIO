let name = "Guilherme"
let age = 19
let products = ["mouse 2xwm", "teclado mecanico", "monitor"]
let productsValue = [23.40, 234.32, 987.21]

generateInvoice(name,products, productsValue,age)
function generateInvoice(name, products, productsValue, age){
    console.log(`O comprador é ${name}`)
    console.log(`A idade é ${age}`)
    console.log(`---------------------`)
    console.log(`O produto é ${products[0]}`)
    console.log(`O valor é ${productsValue[0]}`)
}