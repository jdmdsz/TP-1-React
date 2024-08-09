export default function App() {
    function agruparPorCategoria(produtos){
        return produtos.reduce((acumulador, produto) => {
            const {categoria,nome} = produto

            if(!acumulador[categoria]){
                acumulador[categoria] = [];
            }

            acumulador[categoria].push(nome);
            return acumulador;
        }, {})
    }

    const produtosLoja = [
        {nome: "Computador", categoria: "eletronico" },
        {nome: "Fogao", categoria: "eletrodomestico" },
        {nome: "Geladeira", categoria: "eletrodomestico"},
        {nome: "Notebook", categoria: "eletronico"}
    ];

    console.log(agruparPorCategoria(produtosLoja));
}