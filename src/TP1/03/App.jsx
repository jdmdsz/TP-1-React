export default function App() {
    function calcularMediaAvaliacoes(avaliacoes){
        const somaAvaliacoes = avaliacoes.reduce((total,avaliacao) => total + avaliacao);
        const tamanho = avaliacaoAlunos.length; 
        return somaAvaliacoes/tamanho;
    }
    const avaliacaoAlunos = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    console.log(calcularMediaAvaliacoes(avaliacaoAlunos));
}