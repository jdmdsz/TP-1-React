export default function App() {
    
    function filtrarAcimaPreco (produtos, precoMin) {
        return produtos.filter(produto => produto.preco > precoMin);
    }

    const produtosLoja = [
    {nome: "Computador", preco: 500 },
    {nome: "Caixa de som", preco: 1000 },
    {nome: "Mouse", preco: 1500},
    {nome: "Teclado", preco: 2000}
    ];

    console.log(filtrarAcimaPreco(produtosLoja,1000).map(produto => produto.nome));
}