let carrinho1 = document.getElementById("carrinho")

let total = 0

let texto_total = document.getElementById("Total")
console.log("teste")

function carrinho(produto) {
    let preco = 0
    let codigo_html = ""
    if (produto == 1) {
        codigo_html = "<tr><td>Coca</td><td>R$2,00</td><td>1</td></tr>"
        preco = 2
        carrinho1.innerHTML += codigo_html
    }
    else if (produto == 2) {
        codigo_html = "<p>teste2</p>"
        carrinho1.innerHTML += codigo_html
    }
    total += preco
    texto_total.innerHTML = "Total da compra: R$" + total + ",00"
    
}