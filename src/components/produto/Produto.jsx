import './Produto.css'
import DadosProduto from './dadosproduto/DadosProduto';

export default function Produto({ infoProd }) {
  return (
    <div className='produto'>
      <img className='imagem-prod'src={infoProd.imagem} alt={infoProd.nome} />
      <DadosProduto imagem={infoProd.imagem} nota={infoProd.nota} vendas={infoProd.vendas} nome={infoProd.nome} valor={infoProd.valor} desconto={infoProd.desconto} />
    </div>
  )
}