import './CartaoPerfil.css';

export default function CartaoPerfil() {
  return (
    <div className="cartao-perfil">
      <img
        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Foto de Perfil"
        className="perfil-imagem"
      />
      <h2 className="perfil-nome">Rogerio Souza</h2>
      <p className="perfil-biografia">
        Desenvolvedor Back-end apaixonado por tecnologia.
      </p>
    </div>
  );
};

