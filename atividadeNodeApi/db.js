const produtos = [
    {
        id: 1,
        nome: "Camiseta",
        preco: 29.90,
        categoria: "Roupas",
        quantidade: 100
    },
    {
        id: 2,
        nome: "Calça Jeans",
        preco: 89.90,
        categoria: "Roupas",
        quantidade: 50
    },
    {
        id: 3,
        nome: "Tênis Esportivo",
        preco: 199.90,
        categoria: "Calçados",
        quantidade: 30
    },
    {
        id: 4,
        nome: "Relógio",
        preco: 150.00,
        categoria: "Acessórios",
        quantidade: 20
    }
];

function listaProduto(id) { // 2 - Consultar um produto pelo id;
    return produtos.find(c => c.id == id);
}
function listaTodosProdutos() { // 1 - Consultar produtos;
    return produtos;
}
function inseriProduto(produto) { //3 - Inserir um novo produto;
    produtos.push(produto);
}

function alterarProduto(id, produto) { // 4 - Alterar os dados do produto;
    const produtoNovo = produto.find(c => c.id == id);
    if (produtoNovo) {
        produtoNovo.nome = produto.nome;
        produtoNovo.preco = produto.preco;
        produtoNovo.categoria = produto.categoria;
        produtoNovo.quantidade = produto.quantidade;
    } else {
        return ("erro!");
    }
}

function deletarProduto(id) { // 5 - Deletar o produto.

    const indice = produtos.findIndex(c => c.id == id);
    produtos.splice(indice, 1)
}

module.exports = { //comando para que a função seja acessivel de fora do arquivo db.js
    listaProduto,
    listaTodosProdutos,
    inseriProduto,
    alterarProduto,
    deletarProduto
}