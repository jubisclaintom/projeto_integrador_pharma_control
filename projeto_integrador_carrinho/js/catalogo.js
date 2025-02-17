let carrinho1 = document.getElementById("carrinho");
let total = 0;
let item = 0;
let texto_total = document.getElementById("Total");
let qtdd = []; // Array para armazenar as quantidades dos produtos

function carrinho(produto) {
    let preco = produtos[produto].preco;
    let itemId = `item${item}`;
    qtdd[item] = 1; // Inicializa a quantidade do produto como 1

    // Cria o HTML do item do carrinho
    let codigo_html = `
        <tr id="${itemId}">
            <td>${produtos[produto].nome}</td>
            <td>R$ ${preco.toFixed(2)}</td>
            <td>
                <div class="d-flex justify-content-between">
                    <button type="button" class="btn btn-secondary btn-sm" onclick="alterar_quantidade('${itemId}', -1)">-</button>
                    <p id="quantidade_${itemId}">${qtdd[item]}</p>
                    <button type="button" class="btn btn-secondary btn-sm" onclick="alterar_quantidade('${itemId}', 1)">+</button>
                </div>
            </td>
            <td><span id="subtotal_${itemId}">R$ ${(qtdd[item] * preco).toFixed(2)}</span></td>
            <td>
                <button type="button" class="btn btn-danger" onclick="apagar_item('${itemId}', ${preco}, ${item})"><i class="bi bi-trash"></i></button>
            </td>
        </tr>
    `;

    // Adiciona o item ao carrinho
    carrinho1.innerHTML += codigo_html;

    // Atualiza o total
    total += preco * qtdd[item];
    texto_total.innerHTML = "Total da compra: R$ " + total.toFixed(2);

    item++; // Incrementa o contador de itens
}

function alterar_quantidade(id, valor) {
    // Extrai o índice do item do ID (ex: "item0" -> 0)
    let index = parseInt(id.replace("item", ""));

    // Atualiza a quantidade na array qtdd
    qtdd[index] += valor;

    // Impede que a quantidade fique menor que 1
    if (qtdd[index] < 1) {
        qtdd[index] = 1;
    }

    // Atualiza a quantidade exibida no HTML
    let quantidadeElement = document.getElementById(`quantidade_${id}`);
    quantidadeElement.innerText = qtdd[index];

    // Recalcula o subtotal do item
    let preco = parseFloat(document.querySelector(`#${id} td:nth-child(2)`).textContent.replace("R$ ", ""));
    let subtotalElement = document.getElementById(`subtotal_${id}`);
    subtotalElement.innerText = "R$ " + (qtdd[index] * preco).toFixed(2);

    // Recalcula o total geral
    recalcular_total();
}

function recalcular_total() {
    total = 0;
    let rows = carrinho1.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        let preco = parseFloat(rows[i].querySelector("td:nth-child(2)").textContent.replace("R$ ", ""));
        total += preco * qtdd[i];
    }

    texto_total.innerHTML = "Total da compra: R$ " + total.toFixed(2);
}

function apagar_item(id, preco_produto, index) {
    // Remove o item do carrinho
    let itemRemovido = document.getElementById(id);
    if (itemRemovido) {
        itemRemovido.remove();

        // Remove a quantidade do item da array qtdd
        qtdd.splice(index, 1);

        // Recalcula o total
        recalcular_total();
    } else {
        console.error("Erro: Elemento com ID", id, "não encontrado.");
    }
}