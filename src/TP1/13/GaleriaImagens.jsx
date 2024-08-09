import './GaleriaImagens.css';

export default function GaleriaImagens(){
    

    const imagens = [
        { url: 'https://via.placeholder.com/150', legenda: 'Imagem 1' },
        { url: 'https://via.placeholder.com/150', legenda: 'Imagem 2' },
        { url: 'https://via.placeholder.com/150', legenda: 'Imagem 3' }
      ];

    return(
    <div className="galeria">
    {imagens.map((imagem, index) => (
        <div key={index} className="item-galeria">
            <img src={imagem.url} alt={`Imagem ${index + 1}`} />
            <p>{imagem.legenda}</p>
        </div>
    ))}
    </div>
    )
}