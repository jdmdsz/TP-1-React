export default function App() {
    function calcularPrecoTotal(precoProduto,quantidadeComprada){
        let precoTotal = precoProduto * quantidadeComprada;
        return precoTotal;    
    }
    
    let precoInformado = prompt("Informe o preco: ");
    let quantidadeInformada = prompt("Informe a quantidade: ");
    alert(`O preco total é: ${calcularPrecoTotal(precoInformado, quantidadeInformada)}`);   
}

