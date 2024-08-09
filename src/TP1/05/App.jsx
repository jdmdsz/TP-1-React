export default function App() {
    function encontrarProdutoPorNome(produtos, nomeProduto){
        return produtos.find(produto => produto.nome === nomeProduto);
    }

    const produtosLoja = [
        {nome: "Computador", preco: 500 },
        {nome: "Caixa de som", preco: 1000 },
        {nome: "Mouse", preco: 1500},
        {nome: "Teclado", preco: 2000}
    ]

    const produtoDesejado = prompt("Informe o nome do produto desejado: ");
    console.log(encontrarProdutoPorNome(produtosLoja,produtoDesejado));

    }
