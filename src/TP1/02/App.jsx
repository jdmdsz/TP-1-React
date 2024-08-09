export default function App() {
    
    function filtrarDisponiveis(produtos) {
        return produtos.filter(produto => produto.disponivel);
    }

    const produtosLoja = [
        {nome: "Computador", disponivel: true},
        {nome: "Caixa de som", disponivel: true},
        {nome: "Mouse", disponivel: false}
    ];

    const produtosDisponiveis = filtrarDisponiveis(produtosLoja).map(produto => produto.nome);
    console.log(produtosDisponiveis);
}