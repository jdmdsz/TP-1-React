export default function App() {
    function calcularTotalItens(carrinhoCompras){
        return carrinhoCompras.reduce((total, item) => {
            return total + (item.quantidade * item.precoUnitario);
        }, 0)
    }
    
    const carrinhodeCompras = [
        {nome: "Computador", quantidade: 2, precoUnitario: 1000 },
        {nome: "Fogao", quantidade: 1, precoUnitario: 2000 },
        {nome: "Sofa", quantidade: 1, precoUnitario: 1500},
        {nome: "Notebook", quantidade: 1, precoUnitario: 750}
    ]

    console.log(calcularTotalItens(carrinhodeCompras));
}