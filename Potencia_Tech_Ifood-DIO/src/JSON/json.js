let name = "Guilherme"
let age = 19
let products = ["mouse 2xwm", "teclado mecanico", "monitor"]
let productsValue = [23.40, 234.32, 987.21]

generateInvoice(name,products, productsValue,age)
function generateInvoice(name, products, productsValue, age){
    console.log(`O comprador é ${name}`)
    console.log(`A idade é ${age}`)
    console.log(`O produto é ${products[0]}`)
    console.log(`O valor é ${productsValue[0]}`)
    console.log(`---------------------`)
}

let invoice ={
    name:"felipe",
    age: 28,
    products: {
        0: ["mouse 2xmw", 29.34],
        1: ["mouse teclado", 245.34],
        2: ["monitor", 346.87]
    },
    taxes: "56.76"
}

generateInvoice2(invoice)

function generateInvoice2(invoice){
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    
    //for in é o ideal para percorrer objetos json
    for (let index in invoice.products){
        let [productsName, productPrice] = invoice.products[index]
        console.log(`- ${productsName}: R$ ${productPrice}`)
    }
}