var items = [];
var btn = document.querySelector('input[type=submit]');

btn.addEventListener('click', ()=>{
    var nome_produto = document.querySelector('input[name=nome_produto]');
    var valor_produto = document.querySelector('input[name=valor_produto');

    items.push({
        nome: nome_produto.value,
        valor: valor_produto.value
    });

    let lista_produtos = document.querySelector('.lista-produtos');
    lista_produtos.innerHTML = "";

    let soma = 0;

    items.map(function(val) {
        soma += parseFloat(val.valor);
        lista_produtos.innerHTML += `
        <div class="lista-produto-single">
            <h3><i class="bi bi-cart-check"></i> ${val.nome}</h3>
            <h3 class="price-produto"><span><i class="bi bi-wallet"></i> R$ ${val.valor}</span></h3>
        </div>
        `;
    })

    let soma_produtos = document.querySelector('.soma-produto h1');
    soma_produtos.innerHTML = `<i class="bi bi-handbag"></i> Total: R$${soma.toFixed(2)}`;

    limparCampos(nome_produto, valor_produto);
});

function limparCampos(nome_produto, valor_produto) {
    nome_produto.value = "";
    valor_produto.value = "";
}