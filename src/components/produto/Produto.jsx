import './Produto.css'
import DadosProduto from './dadosproduto/DadosProduto';

export default function Produto({ infoProd }) {
  return (
    <div className='produto'>
      <DadosProduto imagem={infoProd.imagem} nota={infoProd.nota} vendas={infoProd.vendas} nome={infoProd.nome} valor={infoProd.valor} desconto={infoProd.desconto} />
    </div>
  )
}