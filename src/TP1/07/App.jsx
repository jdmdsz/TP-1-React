export default function App() {
    function verificarEstoque(produtos){
        return produtos.filter(produto => produto.quantidadeEmEstoque > 0);
    }
    
    const estoque = [
        {nome:"telha ceramica americana", quantidadeEmEstoque: 250},
        {nome:"ceramica bordeux", quantidadeEmEstoque: 580},
        {nome:"telha pvc", quantidadeEmEstoque: 158},
        {nome:"telha galvanizada", quantidadeEmEstoque: 358},
        {nome:"telha de amianto", quantidadeEmEstoque: 0}
    ]

    console.log(verificarEstoque(estoque));
}