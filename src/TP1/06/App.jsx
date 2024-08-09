export default function App() {
    function filtrarPorCategoria(produtos, categoriaDesejada){
        return produtos.filter(produto => produto.categoria === categoriaDesejada);
    }
    
    const produtosLoja = [
        {nome: "Computador", preco: 500, categoria: "eletronico" },
        {nome: "Fogao", preco: 1000, categoria: "eletrodomestico" },
        {nome: "Sofa", preco: 1500, categoria: "movel"},
        {nome: "Notebook", preco: 2000, categoria: "eletronico"}
    ]

    const categoriaUsuario = prompt("Informa a categoria desejada: ");
    console.log(filtrarPorCategoria(produtosLoja,categoriaUsuario));
}