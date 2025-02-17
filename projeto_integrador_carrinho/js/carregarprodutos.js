let produtos = [
    { "nome": "ambroxol pediátrico", "preco": 11.50, "URL": "imagens/Produtos/Remedios/remedio_ambroxol.jpg", "descrição": "Remédio Antibiótico"},
    { "nome": "bancoprozol", "preco": 16.00, "URL": "imagens/Produtos/Remedios/bancoprozol.jpg", "descrição": "Remédio Antibiótico" },
    { "nome": "ciprofloxacino", "preco": 18.89, "URL": "imagens/Produtos/Remedios/ciprofloxacino.jpg", "descrição": "Remédio Antibiótico" },
    { "nome": "dipirona", "preco": 5.25, "URL": "imagens/Produtos/Remedios/dipirona.jpg", "descrição": "Remédio Antibiótico" },
    { "nome": "ibuprofeno", "preco": 7.59, "URL": "imagens/Produtos/Remedios/ibuprofeno.jpeg", "descrição": "Remédio Antibiótico" },
    { "nome": "propanolol", "preco": 15.50, "URL": "imagens/Produtos/Remedios/propanolol.png", "descrição": "Remédio Antibiótico" },
    { "nome": "timopronolol", "preco": 14.29, "URL": "imagens/Produtos/Remedios/timopronolol.jpg", "descrição": "Remédio Antibiótico" },
    { "nome": "vonal", "preco": 73.90, "URL": "imagens/Produtos/Remedios/vonal.jpeg", "descrição": "Remédio Antibiótico" }
]
// todos os campos dos cards
for(i = 0; i < 27; i++){
    produto = document.getElementById("produto" + i)
    produto.innerHTML = `
    <img src="${produtos[i].URL}" class="card-img-top" alt="${produtos[i].descrição}">
    <div class='card-body'>
        <p class='card-text'>${produtos[i].nome} R$${produtos[i].preco.toFixed(2)}</p>
        <button type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModal' onclick='carrinho(${i})'>
            Comprar
        </button>
    </div>
`;
}
