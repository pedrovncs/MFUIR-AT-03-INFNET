import './DadosProduto.css';
import Avaliacao from '/src/components/avaliacao/Avaliacao';

export default function DadosProduto({ imagem, nome, valor, vendas, nota, desconto }) {
  const calculaDesconto = (valor, desconto) => {
    return valor - (valor * desconto / 100);
  };

  return (
    <div className='dados-produto'>
      <img src={imagem} alt={nome} />
      <h1>{nome}</h1>
      <div className="produto-info">
        <Avaliacao nota={nota} vendas={vendas}/> 
              <h4> | </h4>
      <div className='vendas'>
        <p><b>{vendas}</b> Vendidos</p>
      </div>
      </div>
      <div>
        <div className='produto-valor'>
          <h1>{calculaDesconto(valor, desconto).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h1>
          <h3>{valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
        </div>
        <p>Em <b>12x</b> sem juros</p>
      </div>
      <div className='botoes'>
        <button className='botao-comprar botao'>
          Comprar
        </button>
        <button className='botao-carrinho botao'>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
