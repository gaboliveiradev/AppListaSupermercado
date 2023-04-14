var items = [];
var btn = document.querySelector('input[type=submit]');

btn.addEventListener('click', ()=>{
    var nome_produto = document.querySelector('input[name=nome_produto]').value;
    var valor_produto = document.querySelector('input[name=valor_produto').value;

    items.push({
        nome: nome_produto,
        valor: valor_produto
    });

    
});